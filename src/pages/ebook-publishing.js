import Head from "next/head";
import Tradition from "@/fa-component/Tradition";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import SwiperComponent from "@/component/SwiperComponent";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import { MRHero, MRContact, MRQuestioners, MRContent1 } from "@/component";
import Logos from "media/images/banner/img2.webp";
const MRQuestionersData = [
  {
    title: "Ebooks Are Cheaper To Produce Than Print Books.",
    desc: "You don't have to pay for printing, paper, or shipping costs.",
  },
  {
    title: "Ebooks Can Be Published And Distributed Very Quickly.",
    desc: "E-books can be written and delivered extremely quickly. Your e-book can be on the market in a few days.",
  },
  {
    title: "Ebooks Are Very Easy To Update.",
    desc: "You can update right in your ebook and hand your reading community the updated copy without all the hassles and costs of conventional printing and distribution.",
  },
  {
    title: "Ebooks Are Very Easy To Distribute.",
    desc: "Ebooks are very easy to distribute. With the aid of social media and web resources, you can sell an eBook.",
  },
  {
    title: "Ebooks Are Very Sustainable.",
    desc: "This is because making them does not require trees to be cut down and the electronic gadgets that are required to read them only consume a little electricity.",
  },
  {
    title: "Ebooks Can Be An Excellent Marketing Tool.",
    desc: "Publish your eBook and use it to promote your other products or services.",
  },
  {
    title: "Ebooks Can Help You Build A Community Around Your Brand.",
    desc: "Offering your eBooks free will reach a new market.",
  },
  {
    title: "Ebooks Can Be A Great Revenue Stream.",
    desc: "You might just make your fortune from eBook publishing. It is enough to say if your book is in the pipeline, consider publishing it as an ebook. It's cheap and easy for you to spread your content. Who knows, your eBook may be the next one for the best sellers! If you plan to publish an eBook on Amazon or any other platform, the best option lies in hiring a full-service eBook publishing company.",
  },
];

const EbookPublishing = () => {
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Ebook Publishing | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/ebook-publishing",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Ebook Publishing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/ebook-publishing",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ebook Publishing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.bestsellingpublisher.com/ebook-publishing",
    telephone: "855-666-6675",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2211 PRICE DR",
      addressLocality: "Killeen",
      addressRegion: "TX",
      postalCode: "76542",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.058447,
      longitude: -97.73246,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
  const schemaProduct = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Ebook Publishing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Hire the ebook publishing services and publish your masterpiece on your favourite platform",
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
        <title>Ebook Publishing Services | Broadway Publishers</title>
        <meta
          name="description"
          content="Love to publish ebooks that sell and earn well? Hire our ebook publishing company and publish your ebook right away."
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />

        <meta name="DC.title" content="Ebook Publishing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/ebook-publishing"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/ebook-publishing"
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
        title="Create The Best-Selling eBooks With Our Ebook Publishing Services!"
        desc="Hire the best eBook publisher to create your next best-seller! Broadway Publishers guarantees professional formatting, eye-catching design, and wide distribution to maximize your book's visibility and sales potential. "
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/woman-reading-book-side-view.png')]"
      />
      <Enlistedlogo />
      <Tradition
        title="EBook Publishers That Deliver Results"
        desc="Let Our EBook Publishers Help You Be The Best Selling Authors Of All Times!"
      />
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Why Does E-Book Publishing Gain A Lot Of Momentum?"
        desc="Ebook publishing has been increasingly popular in recent years. It's because eBooks are a really effective way to distribute and publish content. eBooks have numerous advantages over printed books. Here are some of the most significant benefits:"
        data={MRQuestionersData}
      />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Broadway Publisherss."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MRContent1
        subTitle="Here’s A Good Piece Of Advice"
        title="We Are The Ebook Publishers You Would Love To Hire!"
        desc="We at Broadway Publishers believe that reading should be a fun experience for all. We offer a variety of eBooks to suit your needs. We have something to offer everyone, whether you are looking for the newest bestseller or classic literature. Our eBooks are priced at a fraction of the price of printed books because we believe books should be accessible to everyone. We take pride in being one of the top eBook publishers. Why not browse the catalog to see our complete eBook publishing services? We’re sure you’ll find something that interests you."
        img1="/ahsan/ebook-broder.png"
      />
      <BTM />
      <CTA />
      <SwiperComponent />
      <MRContact
        desc="We value your time and energy, which is why we’re here to help you transform your narrative into a beautifully written book with our eBook publishing service!"
        titleB="It's Time to Write Your Book!"
        descB={`Now that you have an expert book editing, <br class="hidden mr-sm:block" /> and eBook publishing company. What are <br class="hidden mr-sm:block" /> you waiting for?`}
      />
    </>
  );
};

export default EbookPublishing;
