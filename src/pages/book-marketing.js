import PWMODE from "@/component/ProcessWorkMode";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import SwiperComponents from "@/component/SwiperComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import { MRHero, MRContact, MRContent1, MRCards } from "@/component";
import TabNavigation from "@/component/marketing/TabNavigation";
import Head from "next/head";
import Logos from "media/images/banner/img2.webp";
const BookMarketing = () => {
  const MRCardData = [
    {
      classes:
        "bg-[#F2F2F2] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: "Step",
      indexing: "true",
      content: [
        {
          title: "Sign Up",
          desc: "You first sign up for our marketing services, be it book promotion, author marketing, or eBook marketing services. You answer these questions in a questionnaire. Once this is done, you will get aligned with one of our sales people who assigns your project to a particular department suited to your needs.",
        },
        {
          title: "Marketing Review",
          desc: "Our marketing experts then review a marketing strategy to utilize for your goals. This is based on the nature and scope of your project. Everything that follows will vary accordingly. A large project requires more investment and a larger team to cater to your needs..",
        },
        {
          title: "Research",
          desc: "We then begin research on the subjects and topics that people are interested in. What are common traits within these topics, such as the covers, titles, and book descriptions? What are the things they try to avoid? These are the questions that we answer during our research phase.",
        },
        {
          title: "Target audience selection",
          desc: "Here, we decide who the target audience or demographic will be for your book, the type of product they might like, and how to meet or exceed their expectations.",
        },
        {
          title: "Making it look good",
          desc: "Now is the time to work on the book cover. Your cover is the most important piece of marketing of your book, and our cover designers understand this better than anyone else.",
        },
        {
          title: "Submitting it for review",
          desc: "Now this is the final stage of the process when we submit it for review and ensure that all the tasks are completed and that your design is perfected. Our team will ensure your success.",
        },
      ],
    },
  ];

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Book Marketing Services | Broadway Publishers",
    url: "https://www.broadwaypublishers.com/book-marketing",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Book Marketing Services | Broadway Publishers",
    url: "https://www.broadwaypublishers.com/book-marketing",
    logo: "https://www.broadwaypublishers.com/_next/static/media/logo.1f749c62.png",
  };
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Best Book Marketing Services",
    image:
      "https://www.broadwaypublishers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.broadwaypublishers.com/book-marketing",
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
    name: "Book Marketing Services | Broadway Publishers",
    image:
      "https://www.broadwaypublishers.com/_next/static/media/logo.1f749c62.png",
    description:
      "Market your book on Amazon and other platforms with our high quality book marketing services",
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
        <title>Book Marketing | Best Book Publishing Company</title>
        <meta
          name="description"
          content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!"
        />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:url"
          content="https://www.broadwaypublishers.com/book-marketing"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.broadwaypublishers.com/book-marketing"
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
        title="Providing Professional Online Book Marketing Services"
        desc="We will strategically promote your books online to optimize sales and secure the well-deserved exposure your work deserves."
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/young-beautiful-woman.png')]"
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="Optimizing Sales"
        title="Optimal Marketing Strategies That Will Let Your Work Thrive!"
        desc="An exceptional book can be let down with no or less marketing. After availing book writing services, marketing becomes a must in today’s hyper-competitive world. Effectively promoting yourself can be impossible without the necessary experience and expertise, qualities integral in the writers at Broadway Publishers Writing. Proficient book marketers are crucial in guiding you at every step of your journey. We provide comprehensive marketing services, including Amazon marketing for the Kindle Vella distribution platform, eBook marketing for various online digital stores, author marketing to enhance your personal brand, and book marketing for non-digital formats. Our approach to marketing involves analyzing market trends first and then incorporating innovative methods to maximize impact."
        img1="/ahsan/optimizingSales.png"
      />
      <div className="relative  text-white xs:mb-0 bg-black">
        <div className="mr-container m-auto py-0 mr-xs:px-0 mr-xs:py-5">
          <TabNavigation />
        </div>
      </div>
      <MRCards
        title={`The Process of Us Marketing Your Product`}
        desc="We will discuss below how we get you recognition and fame with the help of our marketing services. Our marketing team is adept at changing situations within the market and capable of utilizing the best practices that lead to the most attention and attraction towards your product, whatever it might be."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={true}
        variant="steps"
        data={MRCardData}
      />
      <BTM />
      <CTA />
      <SwiperComponents />
      <MRContact />
    </main>
  );
};

export default BookMarketing;
