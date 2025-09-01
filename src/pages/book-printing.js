import PWMODE from "@/component/PublishingWorkMode";
import PUBLISHING from "@/component/printing/publishing";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import SwiperComponents from "@/component/SwiperComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import { MRHero, MRContact, MRCards } from "@/component";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import Head from "next/head";
import Logos from "media/images/banner/img2.webp";
const BookPrinting = () => {
  const MRCardData = [
    {
      classes:
        "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: false,
      indexing: false,
      content: [
        {
          title: "Low Upfront Costs",
          textColor: "text-[#3EA99F]",
          desc: "Looking for an affordable way to publish? We're so glad you found us! <span class='h-3 block'></span> At Broadway Publishers, we're all about making <a href='https://www.bestsellingpublisher.com/book-publishing'> book publishing </a> accessible to everyone. That's why our services come with low upfront costs, perfect for aspiring authors and established writers. With transparent pricing and no hidden fees, you can start your publishing journey confidently, assured that you're getting outstanding value for every penny invested.",
          minHeight: "overflow-y-scroll h-[130px]",
        },
        {
          title: "Complete Publishing Solution",
          textColor: "text-[#3EA99F]",
          desc: "Do you want a publishing partner who's got your back every step of the way? <span class='h-3 block'></span> Broadway Publishers is here with solutions crafted to meet all your needs. Our journey covers everything from <a href='https://www.bestsellingpublisher.com/book-editing'>book editing</a> and design to distribution and marketing, ensuring your book realizes its full potential. With a team of experts dedicated to your project, we walk you through the entire publishing process, offering personalized advice and support tailored just for you.",
          minHeight: "overflow-y-scroll h-[130px]",
        },
        {
          title: "Print On Demand",
          textColor: "text-[#3EA99F]",
          desc: "Want to share your book with the world without the headache of inventory or storage costs? <span class='h-3 block'></span>  Broadway Publishers's print-on-demand services make it a breeze. Thanks to our cutting-edge printing technology, we're set up to print and fulfill orders the moment they're placed, guaranteeing your book is ready to meet its readers anytime, anywhere.",
          minHeight: "overflow-y-scroll h-[130px]",
        },
        {
          title: "Reach Millions Of Readers",
          textColor: "text-[#3EA99F]",
          desc: "Want your book to be everywhere readers are looking, both online and in stores? <span class='h-3 block'></span>  Through our partnerships with major retailers, online platforms, and libraries, we ensure your book shines in both digital and print formats wherever books are sold. With Broadway Publishers, you can share your story with the world and reach millions of readers eager to discover new books and authors.",
          minHeight: "overflow-y-scroll h-[130px]",
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
          title: "Submit Your Manuscript",
          desc: "Share your manuscript, and we will get started.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Edit & Design",
          desc: "We retain the context but add that artistic flavor.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review and approve our creative contributions.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Your book has been published and distributed.",
        },
      ],
    },
  ];

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Book Printing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/book-printing",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Book Printing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/book-printing",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Affordable Book Printing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.bestsellingpublisher.com/book-printing",
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
    name: "Book Printing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Get crystal clear and vivid colors of your book pages with our book printing services",
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
        <title>
          Affordable Book Printing Services | Broadway Publishers
        </title>
        <meta
          name="description"
          content="From editing to distribution, Broadway Publishers offers personalized support and industry-leading book printing services to make your book a standout success."
        />
        <meta name="DC.title" content="Book Printing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/book-printing"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/book-printing"
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
        title="Take Your Book From Manuscript To Masterpiece with Our Book Printing Services"
        desc="Don't you want your book to leap off the page? <span class='h-3 block'></span> At Broadway Publishers, our printing services are unmatched in quality and precision, making sure every single page bursts to life with vivid colors and crystal-clear detail."
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/bookstore-with-bookshelf.png')]"
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Our Printing Services Offer"
        title={`Words that Are Easy to Read and Easy <br class="mr-xl:block hidden"/> to Comprehend`}
        desc={`We have been in the business for a very long time as print book publishers, which has helped us understand that words on a printed page, if not executed properly, are nothing but mere squiggles. Here's what our professional book printing services offer:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData}
      />
      <PUBLISHING />
      <PublishingNewComponent
        title="Your Book Deserves Only The"
        desc="Broadway Publisherss."
        bgImage="bg-[url('../../public/ahsan/WhiteBG.png')]"
        classes="!bg-cover !bg-no-repeat"
        textBG="bg-black"
        txtBlK="!text-black"
      />
      <BTM />
      <CTA
        subtitle="The Wait is Over — It's Go Time!"
        title="Start Your Project With Broadway Publishers Today!"
        desc="Need help or have questions? As a top-grade book printing company, we are here to assist you during our business hours. We warmly invite you to reach out; your questions and needs always take center stage with us. Feel free to get in touch anytime."
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We, as a leading book printing company, emphasize prompt deliveries because we don’t like to keep you waiting. Maintaining our reputation as the premier provider of the best book printing services is of utmost importance to us. Here are the four easy steps outlining our top book printing services, ensuring a streamlined process from the beginning:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponents />
      <MRContact
        subTitle="Discuss Your Ideas"
        title="Do You Have A Story Plot <br/> In Mind? Tell Us About It!"
        desc="We value your time and energy, which is why we're here to help you transform your
       narrative into a beautifully written book. Get top-quality book printing services for hire by simply filling out our form, and our dedicated team will be in touch to discuss your needs."
      />
    </main>
  );
};

export default BookPrinting;
