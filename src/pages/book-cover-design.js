import WEARE from "@/component/CoverDesign/LetUsWEARE";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import BOOKCOVERS from "@/component/CoverDesign/BookCovers";
import TAbNAVIGATION from "@/component/CoverDesign/TabNavigateCovers";
import WORKON from "@/component/CoverDesign/ProcessWorkMode";
import SwiperComponents from "@/component/SwiperComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import { MRHero, MRContact, MRContent1, MRCards } from "@/component";
import OurComprehensive from "@/component/OurComprehensive";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import Head from "next/head";
import Logos from "media/images/banner/img2.webp";
const BookCoverDesign = () => {
  const MRCardData = [
    {
      classes:
        "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: false,
      indexing: false,
      content: [
        {
          title: "Concept Development",
          textColor: "text-[#3EA99F]",
          desc: "Creating the ideal book cover begins with an idea, a spark that encapsulates the heart of your novel. Our design process begins with concept creation, which we handle with meticulous attention to detail. We get it — your book's cover is much more than just a visual; it’s the first impression of the story within. and that’s exactly what we prioritize.",
        },
        {
          title: "Custom Illustration and Artwork",
          textColor: "text-[#3EA99F]",
          desc: "Our team of artists and gifted illustrators is committed to realizing each author's idea through customized artwork that captures the spirit of their narrative. Your story is unique, and so should be its visual companion. Let’s create something unforgettable together",
        },
        {
          title: "Typography and Layout",
          textColor: "text-[#3EA99F]",
          desc: "Whether your story whispers of age-old mysteries through elegant serif fonts or pulses with the heart-stopping pace of modern thrillers through bold, contemporary typefaces, we carefully craft the typography to resonate with your book's genre, mood, and intended audience.",
        },
        {
          title: "Print and Digital Optimization:",
          textColor: "text-[#3EA99F]",
          desc: "Your book needs to make a splash, both in hand and on screen. That’s why we're careful about every pixel and print detail in your book cover design. As a top-grade book cover design company, our commitment to mastering print and digital mediums means your story gets the spotlight it deserves everywhere your readers are.",
        },
      ],
    },
  ];
  const MRCardData2 = [
    {
      classes:
        "bg-[#fff] shadow-lg mr-2xl:px-4 px-2 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      stepText: "Step",
      indexing: true,
      content: [
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Submit Your Details",
          desc: "Share your information by filling out the form or calling us and we will get started.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Content Creation",
          desc: "We'll utilize your insights to create a book cover.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "You'll have ample opportunity to provide feedback and request revisions.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "The book cover is ready to integrate into your publishing platform.",
        },
      ],
    },
  ];

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Book Cover Design Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/book-cover-design",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Book Cover Design Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/book-cover-design",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };

  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Book Cover Design Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.bestsellingpublisher.com/book-cover-design",
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
    name: "Book Cover Design Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Design professional and top quality book covers with our book cover design services",
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
        <title>Book Cover Design Services | Broadway Publishers</title>
        <meta
          name="description"
          content="Looking to design custom book covers for your literary masterpieces? Look no further, contact our book cover design company right now. "
        />
        <meta name="DC.title" content="Book Cover Design Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/book-cover-design"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/book-cover-design"
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
        title="Covers that Let You Judge a Book"
        desc="First impressions matter BIG TIME! Do you want to make a great first impression of your book?
        At Broadway Publishers, we believe the success of your book starts with its cover. Our goal is to create the most attractive cover designs, turning your manuscript into a visual standout that commands attention. Let's start this creative process together."
        logos={Logos}
        classes="!py-[80px] bg-[#fefefe]"
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/world-book-day.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="Creating Captivating Designs For Your Book"
        title="Hire Professional Book Cover Designers"
        desc="Whether it's through striking imagery, elegant typography, or innovative concepts, a book’s cover is its initial introduction to potential readers, offering a glimpse into the adventure that awaits inside. <span class='h-3 block'></span>
        At Broadway Publishers, we recognize the significance of this first interaction. Our team of creative designers is committed to producing designs that reflect the essence of your story while enticing readers to explore further.
        "
        img1="/imageAR/cover-design2.png"
        list={[
          "We retain your concept and offer immaculate embellishment.",
          "Customer satisfaction is our top priority.",
          "Complete ownership over the final book cover.",
          "24/7 assistance for all your queries and concerns.",
        ]}
        direction="flex-row-reverse"
      />
      <MRCards
        subTitle="Our Book Covers Offer"
        title={`An Exceptional First Impression of Your Book`}
        desc="We treat every book cover like a canvas. As full-service book cover designers, we ensure that every stroke on the canvas projects vibrancy and vividness."
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8"
        classes="bg-[url('../../public/imageAR/our-comprehensive.png')] bg-no-repeat bg-cover bg-center"
        cta={true}
        variant="steps"
        data={MRCardData}
        theme="dark"
      />
      <BOOKCOVERS />
      <TAbNAVIGATION />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Broadway Publisherss."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <WORKON />
      <BTM />
      <CTA
        subtitle="We Can't Wait to "
        title="Get Started on Your Project!"
        desc="Our dedicated team is here to assist you during our working hours, always eager to answer your questions and cater to your needs. We warmly invite you to reach out and start a conversation with us. Your vision and requirements are our top priority. Don't hesitate to get in touch and let us help you get your book to the right audience!"
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the
        4 easy steps that keep us streamlined from the beginning:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponents />
      <MRContact
        subTitle="Discuss Your Story"
        title="And We Will Craft a Stunning Cover to Match Its Magic"
        desc="We value your time and energy, which is why we're here to help you transform your narrative with our professional book cover designers for hire!"
        titleB="Time to Turn Ideas into Reality"
        descB={`With our expert design team, your book's <br class="hidden mr-sm:block" /> cover is just the beginning of its journey.`}
      />
    </main>
  );
};

export default BookCoverDesign;
