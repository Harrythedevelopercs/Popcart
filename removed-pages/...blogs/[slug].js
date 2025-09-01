// import {
//     BlogArticle,
//     BlogFaqs,
//     BlogNavigation,
//     BlogShare,
// } from "@/component/MRBlogs";
// import { useRouter } from "next/router";
// import { getSinglePost, getPostList } from "../api/blogs/route";
// import styles from "@/component/MRBlogs/BlogArticles/InnerBanner.module.css";
// import Image from "next/image";
// import Client from "media/blog-new/innerclient.png";
// import verified from "media/blog-new/blog-verify.png";
// import experience from "media/blog-new/experience.png";
// export async function getStaticProps({ params }) {
//     try {
//         const post = await getSinglePost(params.slug);
//         return {
//             props: {
//                 post,
//             },
//         };
//     } catch (error) {
//         console.error("Error fetching post data:", error);
//         return {
//             notFound: true,
//         };
//     }
// }

// export async function getStaticPaths() {
//     try {
//         const posts = await getPostList();
//         const paths = posts.map((post) => ({
//             params: { slug: post.slug },
//         }));
//         return {
//             paths,
//             fallback: false,
//         };
//     } catch (error) {
//         console.error("Error fetching paths:", error);
//         return {
//             paths: [],
//             fallback: false,
//         };
//     }
// }

// export default function Slug({ post }) {
//     console.log(post);

//     const router = useRouter();
//     if (router.isFallback) {
//         return <div>Loading...</div>;
//     }

//     if (!post) {
//         return <div>Post not found</div>;
//     }

//     let featuredImageUrl =
//         "https://inhouse.cryscampus.com/wordpress/bitswits/wp-admin/uploads/2023/08/moz-brand-authority-768x439-1.png";

//     return (
//         <>
//             <section className={styles.innerBannerSec}>
//                 <div className="mr-container">
//                     <div className="grid mr-lg:grid-cols-2 grid-cols-1 gap-10 items-center">
//                         <div className="col-span-1">
//                             <div>
//                                 <h4 className="mr-lg:!text-[20px] !font-semibold !leading-normal">{post.bSPCategories.nodes[0]?.name}</h4>
//                                 <h1 className="mr-2xl:!text-[50px] !leading-tight !my-3">{post.title}</h1>
//                                 {post.excerpt && (
//                                     <div
//                                         dangerouslySetInnerHTML={{
//                                             __html: post.excerpt,
//                                         }}
//                                     ></div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="col-span-1">
//                             <Image
//                                 quality={75}
//                                 src={
//                                     post.featuredImage
//                                         ? `https://inhouse.cryscampus.com/wordpress/bitswits/wp-content/uploads/${post.featuredImage.node.mediaDetails.file}`
//                                         : featuredImageUrl
//                                 }
//                                 alt="bestsellingpublisher"
//                                 width={736}
//                                 height={450}
//                                 className="rounded-3xl"
//                             />
//                         </div>
//                     </div>
//                     <div className="mr-md:p-5 p-4 bg-[#f3f3f3] mt-10 rounded-3xl">
//                         <div className="mr-lg:grid mr-md:grid-cols-12 flex flex-col-reverse flex-wrap items-center gap-5">
//                             <div className="mr-lg:col-span-2">
//                                 <Image src={Client} width={314} height={462} alt="bestsellingpublisher" className="object-fill object-center mr-lg:mx-0 mx-auto" />
//                             </div>
//                             <div className="mr-lg:col-span-9">
//                                 <ul className="list-outside list-disc marker:text-2xl flex mr-md:flex-nowrap flex-wrap pl-5 items-center gap-x-12 mb-3">
//                                     <li className="list-none">
//                                         <p className="text-lg mb-0">
//                                             By <span className="text-primary-100">{post.author.node.name}</span>
//                                         </p>
//                                     </li>
//                                     <li>
//                                         <p className="flex items-center gap-2 text-[#005dff]">
//                                             {" "}
//                                             <span className="block">Verified Expert In Development</span>
//                                             <Image
//                                                 src={verified}
//                                                 alt="bestsellingpublisher"
//                                                 width={16}
//                                                 height={16}
//                                                 className="block"
//                                             />
//                                         </p>
//                                     </li>
//                                     <li>
//                                         <span className="flex items-center gap-2">
//                                             <Image
//                                                 src={experience}
//                                                 alt="bestsellingpublisher"
//                                                 width={16}
//                                                 height={16}
//                                                 className="block"
//                                             />
//                                             <p className="fontsfregular mb-0 block">
//                                                 {" "}
//                                                 3 Years Of Experience
//                                             </p>
//                                         </span>
//                                     </li>
//                                 </ul>
//                                 <p className="fontsfregular">
//                                     {post.author.node.description}
//                                 </p>
//                                 {/* <div className="flex gap-5 items-center mt-5">
//                                     <span className="block text-lg">EXPERTISE</span>
//                                     <span className="block text-lg">|</span>
//                                     <span className="block text-lg px-8 py-2 bg-white rounded-full">Animation</span>
//                                     <span className="block text-lg px-8 py-2 bg-white rounded-full">Development</span>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className={styles.articleSec} id="leftcontent">
//                 <div className="mr-container">
//                     <div className="mr-lg:grid mr-lg:grid-cols-12 flex flex-col-reverse flex-wrap mr-lg:gap-5 gap-10">
//                         <div className="mr-lg:col-span-8">
//                             <BlogShare />
//                             <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
//                             {post?.blogDescription?.faq && (
//                                 <BlogFaqs faqData={post.blogDescription.faq} />
//                             )}
//                         </div>
//                         <div className="mr-lg:col-span-4">
//                             <BlogNavigation postData={post} />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <BlogArticle />
//         </>
//     );
// }
