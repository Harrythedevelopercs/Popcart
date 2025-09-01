import BookTabs from "@/component/booktabs/booktab";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Broadway Publishers</title>
        <meta name="description" content="" />
        <meta name="DC.title" content="Portfolio | Broadway Publishers" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/portfolio"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/portfolio"
        />
      </Head>
      <BookTabs />
    </>
  );
};

export default Portfolio;
