import Head from "next/head";
// components
import Banner from "@/fa-component/Banner";
import Tradition from "@/fa-component/Tradition";
// import Climax from '@/fa-component/Climax'
import Audience from "@/fa-component/Audience";
import BroaderNew from "@/fa-component/BroaderNew";
import Plans from "@/fa-component/Plans";
import Bookshelf from "@/fa-component/Bookshelf";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import Exceptional from "@/fa-component/Exceptional";
import SwiperTestimonial from "@/component/SwiperComponent";
import Logos from "media/images/banner/img2.webp";
// import { Helmet } from 'react-helmet'
// images
import bannerImg from "media/ahsan/bookpublishingbanner.png";
import img2 from "media/images/banner/img2.png";
import broader from "media/ahsan/bookpublishingbroder.png";
import { MRHero, MRQuestioners } from "@/component";

const amazonpublishing = () => {
  const newSpan = (
    <h1 className="font-50 fw-700 font-primary txt-secondary mt-3 leading-tight">
      Amazon Publishing <br /> Services Company To Make <br /> Your Book
      Available To <br /> Millions Of Readers!
    </h1>
  );

  const bannertext = [
    {
      title: newSpan,
      discuss: `LET'S DISCUSS`,
      homebannernum: "855-666-6675",
      bannercounter: "counter",
      imageban: bannerImg,
      img2: img2,
    },
  ];
  const MRQuestionersData = [
    {
      title: "What Is Amazon KDP?",
      desc: "KDP is a self-publishing service that permits authors to publish and distribute their eBooks and paperbacks on Amazon's Kindle Store. Amazon KDP publishing allow authors to maintain their own work, to set their own prices, and earn royalties on sales.",
    },
    {
      title: "Benefits Of Using Amazon KDP?",
      desc: "With Amazon Kindle direct publishing, authors can globally publish and distribute books. You can also hire Amazon KDP services from Broadway Publishers if you don’t prefer handling it yourself.",
    },
    {
      title: "Who Needs To Hire  An Amazon Book Publisher?",
      desc: "Book publishing services are useful to anyone who wishes to publish their books independently without using a conventional publishing service. In particular, it is helpful if you lack the time or money to do it yourself or don't properly understand the publishing procedure.",
    },
    {
      title:
        "Why Hire The Best Amazon Publishing Company To Publish With Amazon KDP?",
      desc: "Working with a reputable Amazon book publishing company guarantees that your book will reach your intended readership and be of good quality.",
    },
    {
      title: "How Do I Choose An Amazon Book Publishing Service Provider?",
      desc: "There are a few of the many things to think about such as cost, services provided, turnaround time, and reputation when selecting a book publishing company. It's critical to investigate options and select one that works for your book and you. ",
    },
  ];
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Amazon Publishing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/amazon-book-publishing",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Amazon Publishing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/amazon-book-publishing",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };

  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Amazon Publishing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    url: "https://www.bestsellingpublisher.com/amazon-book-publishing",
    telephone: "(800) 781-9093",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1001 Wilshire Boulevard #1176",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90017",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0518073,
      longitude: -118.2613875,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
  const schemaProduct = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Amazon Publishing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Get your book published on Amazon with our professional Amazon publishing services",
    brand: {
      "@type": "Brand",
      name: "Broadway Publishers",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1174",
    },
  };
  return (
    <>
      <Head>
        <title>Amazon Book Publishing Services | Broadway Publishers</title>
        <meta
          name="description"
          content="Looking to publish a book on Amazon KDP and earn royalties? Get in touch with our Amazon publishing services and start publishing your best sellers."
        />
        <meta name="DC.title" content="Amazon Book Publishing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />

        <link rel="icon" href="/images/favicon.svg" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/amazon-book-publishing"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/amazon-book-publishing"
        />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaCorporation),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaProffesionalService),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
        />
      </Head>

      {/*========= Banner =========*/}
      {/* {bannertext.map((item, i) =>
        <Banner key={i}
          title={item.title}
          discuss={item.discuss}
          homebannernum={item.homebannernum}
          bannercounter={item.bannercounter}
          imageban={item.imageban}
          img2={item.img2}
        />
      )} */}
      <MRHero
        title="Hire Top-Rated Amazon Book Publishing Services!"
        desc="We can optimize your book's value and ROI through our specialized Amazon book publishing services. Drawing on our expertise, we boost visibility, drive sales, and effectively expand your author platform, ensuring your book reaches its full potential."
        logos={Logos}
        counter={true}
      />

      {/*========= Clients fold =========*/}
      {/* <Clients /> */}

      <Enlistedlogo />

      {/*========= Tradition fold =========*/}
      <Tradition
        title="Professional Amazon Book Publishers for Hire"
        desc="We Publish Books That Sell!"
      />

      {/*========= Enlisted fold =========*/}
      <MRQuestioners
        title="Get To Know About Amazon Publishing Services"
        data={MRQuestionersData}
      />
      {/*========= Broader fold =========*/}
      <BroaderNew
        title="Where Your Words Could Change The World"
        desc="At Broadway Publishers, we understand that book publishing can be tough for authors. As a top-tier Amazon publishing company, we are committed to delivering comprehensive service that meets your needs at all stages. Our considerable industry knowledge and dedicated team of specialists are committed to helping you achieve your publishing goals. We offer a wide range of services, including eBook publishing, digital publishing, and Amazon publishing services.  <br/><br/>
       We are the leading book publishers in the industry with the creative flair and dedication that you need. Whether you are looking for children's book publishers or science fiction publishers, we have you covered! We publish your dreams so call us today!"
        image={broader}
      />
      {/*========= Audience fold =========*/}
      <Audience />

      {/*========= Exceptional fold =========*/}
      <Exceptional
        title="Explore the Best Publishing Services We Offer"
        subtitle="We take pride in providing a remarkable range of services. That said, it’s your moment to make your publishing dreams come to life."
      />

      {/*========= swiperComponent fold =========*/}
      <SwiperTestimonial />

      {/*========= Plans fold =========*/}
      <Plans />

      {/*========= Bookshelf fold =========*/}
      <Bookshelf />
    </>
  );
};

export default amazonpublishing;
