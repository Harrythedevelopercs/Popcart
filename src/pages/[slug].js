import Head from "next/head";
import style from "@/styles/singleblog.module.css";
import { BlogData } from "@/blogsdata/data/data";
import Image from "next/image";
import { getBlogContent } from "@/blogsdata/data/blogContent";

export function generateStaticParams() {
  return BlogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function getStaticPaths() {
  const paths = BlogData.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blog = BlogData.find((post) => post.slug === params.slug);
  return {
    props: {
      blog: blog || null,
    },
  };
}

function getDaysAgo(dateString) {
  const postDate = new Date(dateString);
  const today = new Date();
  const diffTime = today - postDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "1 day ago";
  return `${diffDays} days ago`;
}

export default function BlogPost({ blog }) {
  if (!blog) return <h1>Blog Not Found</h1>;

  return (
    <>
      <Head>
        <title>{blog.tit}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.tit} />
        <meta property="og:description" content={blog.description} />
        <meta
          property="og:url"
          content={`https://www.bestsellingpublisher.com/${blog.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={blog.img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.tit} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.img} />
        <link
          rel="canonical"
          href={`https://www.bestsellingpublisher.com/${blog.slug}`}
        />

        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: blog.title,
              description: blog.description,
              image: blog.img,
              datePublished: blog.date,
              author: {
                "@type": "Organization",
                name: "Broadway Publishers",
              },
              publisher: {
                "@type": "Organization",
                name: "Broadway Publishers",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.bestsellingpublisher.com/logo.png",
                },
              },
            }),
          }}
        />
      </Head>

      <div className={style.singleBlogSec}>
        <div className="mr-container">
          <div className={style.singleBlogBox}>
            <h1>{blog.title}</h1>
            <div className={style.blogInfo}>
              {blog.date} · <span>{getDaysAgo(blog.date)}</span>
            </div>
            <div className={style.singleBlogImg}>
              <Image src={blog.img} alt="Banner Blog" fill />
            </div>
            <div className={style.singleBlogContent}>
              {getBlogContent(blog.contentKey)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
