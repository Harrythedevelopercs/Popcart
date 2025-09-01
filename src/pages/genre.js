import WEARE from "@/component/genre/LetUsWEARE";
import MANUSCRIPT from "@/component/genre/manuscript";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import SwiperComponents from "@/component/SwiperComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import { MRHero, MRContact } from "@/component";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import Head from "next/head";
import Logos from "media/images/banner/img2.webp";
const Genre = () => {
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Genre | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/genre",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Genre | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/genre",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Genre | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.bestsellingpublisher.com/genre",
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
    name: "Genre | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Discover the wide range of book genres that we publish and market",
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
        <title>Genre | Broadway Publishers</title>
        <meta
          name="description"
          content="Have you written an amazing fiction book? Or want to publish an autobiography. Explore our wide range of book genres and get your book published today."
        />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="Book Genre" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />

        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/genre"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/genre"
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
        title="Create Your Literary Legacy, Because Your Story Deserves the Best!"
        desc="Our mission as a company is to bring you literary success. We offer great content for every book genre, whether you need fiction book publishing services, autobiography, top-ranked memoirs publishing, or best children book publishing, we’ve covered it all!"
        logos={Logos}
        counter={true}
        classes="bg-[#fefefe] !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/books-library.png')]"
      />

      <Enlistedlogo />
      <WEARE />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Broadway Publisherss."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MANUSCRIPT />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact
        titleB="It's Time to Write Your Book!"
        descB={`Craft tales that transport, captivate, and <br class="hidden mr-sm:block" /> linger in minds with Broadway Publishers!`}
      />
    </main>
  );
};

export default Genre;
