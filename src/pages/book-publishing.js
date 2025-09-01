import Tradition from "@/fa-component/Tradition";
import SwiperComponent from "@/component/SwiperComponent";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import BroaderNew from "@/fa-component/BroaderNew";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import { MRHero, MRContact, MRQuestioners, MRContent1 } from "@/component";
import Head from "next/head";
import { Popup } from "@/component/LP-Eight";
import Logos from "media/images/banner/img2.webp";
const MRQuestionersData = [
  {
    title: "What Are Book Publishing Services?",
    desc: "Amazon KDP is a self publishing service from Amazon that allows authors to publish and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy.",
  },
  {
    title: "Who Needs Book Publishing Services?",
    desc: "Anyone who wishes to self-publish their book without going through a traditional publishing house may need book publishing services. This is especially true if you are not familiar with the self-publishing process or do not have the time or resources to do it yourself.",
  },
  {
    title: "Benefits Of Using Book Publishing Services?",
    desc: "There are many benefits to using book publishing services offered by book publishers, including professional support, cost savings, and peace of mind. When you work with a reputable book publishing service, you can be confident that your book will be of the highest quality and reach your target audience.",
  },
  {
    title: "How Do I Choose A Book Publishing Service?",
    desc: "There are many factors to consider when choosing a book publishing service, such as cost, services offered, turnaround time, and reputation. It is important to do your research and choose a service that is right for you and your book. Finding the best digital book publishers in the industry is not an easy task. But as the leading book publishers in the industry, Broadway Publishers offers various publishing services just for you! ",
  },
];

const BookPublishing = () => {
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Book Publishing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/book-publishing",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Book Publishing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/book-publishing",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };

  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Book Publishing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    url: "https://www.bestsellingpublisher.com/book-publishing",
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
    name: "Book Publishing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Hire the best book publishers as our book publishing services can make your book the best seller",
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
    <main>
      <Head>
        <title>Book Publishing | Best Book Publishing Company</title>
        <meta
          name="description"
          content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!"
        />

        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/book-publishing"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/book-publishing"
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
      <MRHero
        title="Publishing Your Amazing Book Swiftly And Aiding You In Bringing About Great Success"
        logos={Logos}
        counter={true}
        groupCTA={true}
        isPopup={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/handsome-guy-study-library.webp')]"
      />
      <Enlistedlogo />
      <Tradition
        title="Proficient Books Publishers Services "
        desc="We Publish Books That Sell!"
        isPopup={true}
      />
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Why Are We  The Best Book Publishing Company For You?"
        data={MRQuestionersData}
        isPopup={true}
      />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Broadway Publisherss."
        bgImage="bg-[url('../../public/ahsan/bg_black.webp')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
        isPopup={true}
      />
      <MRContent1
        title="Where Your Words Could Change The World"
        desc="At Broadway Publishers, we understand that book publishing can be a daunting task for authors. We are here to help you every step of the way, from start to finish. We have years of experience in the industry, and our team of experts is dedicated to helping you reach your publishing goals. We offer a variety of services to choose from, such as eBook publishing services, digital publishing services, and Amazon publishing services, so you can find the perfect fit for your needs. We are here to help you succeed! <span class='h-3 block'></span> We are the leading book publishers in the industry with the creative flair and dedication that you need. Whether you are looking for children's book publishers or science fiction publishers, we have you covered! We publish your dreams so call us today!"
        img1="/ahsan/spacious-bookstore.webp"
        isPopup={true}
      />
      <BTM />
      <CTA isPopup={true} />
      <SwiperComponent />
      <MRContact />
      <Popup
        popupDesc={`HIRE <strong>TOP book publishers AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK`}
      />
    </main>
  );
};

export default BookPublishing;
