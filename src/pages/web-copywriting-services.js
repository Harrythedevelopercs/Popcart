import LHArticle from "@/component/WebCopywritingServices/LetUsHelpWeb";
import CTA from "@/component/cta3";
import BTM from "@/component/bottomLogos";
import SwiperComponents from "@/component/SwiperComponent";
import WMODE from "@/component/workMode1";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import {
  MRHero,
  MRContact,
  MRContent2,
  MRContent1,
  MRCards,
} from "@/component";
import Head from "next/head";
import Logos from "media/images/banner/img2.webp";
const WebCopywritingServices = () => {
  const MRContent2Data = [
    {
      title: "Creating Captivating Author Brand",
      desc: "Every author who wants to be great needs a strong brand identity. We'll help you write an interesting author description that shows off your style and personality and connects with readers, pulling them into your world.",
    },
    {
      title: "Engaging Website Content",
      desc: "We'll write blog posts about authors and website copy that shows off your brand's values. This will show off your knowledge and build a community of loyal readers.",
    },
    {
      title: "Optimizing Online Presence",
      desc: "Our team will help you come up with targeted keywords and meta descriptions that will make sure that people looking for websites or books in your field can find yours online.",
    },
    {
      title: "Targeted Landing Pages",
      desc: "We'll make specific landing pages that get people interested in your website and help you make sales, whether it's for a pre-order campaign or a new book release.",
    },
    {
      title: "Interesting Author Bios",
      desc: "We'll use the author's past, awards, and writing style to create stories that make readers feel like they know the people who wrote the books.",
    },
    {
      title: "Interesting Book Descriptions",
      desc: "We avoid writing dry synopses. Our copywriters write descriptions that make people want to read more. These descriptions hit on the emotional core of your books, show off their unique selling points, and make people want to read the story inside.",
    },
  ];
  const MRCardData = [
    {
      classes:
        "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-center",
      content: [
        {
          icon: "",
          title: "Original Key-Word </br> Optimized Content",
        },
        {
          icon: "",
          title: "Content Writing </br> And Editing Services",
        },
        {
          icon: "",
          title: "Professional Writers </br> Trained In SEO",
        },
        {
          icon: "",
          title: "Easy-To-Use </br> Platform",
        },
        {
          icon: "",
          title: "Topic </br> Ideation",
        },
        {
          icon: "",
          title: "Creative, Out-Of-The- </br> Box Taglines",
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
          desc: "This includes information about your target audience, website goals, brand voice, and desired tone",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Content Creation",
          desc: "We'll utilize your insights and expertise to create content.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "You'll have ample opportunity to provide feedback and request revisions.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "The copy is ready to integrate into your website.",
        },
      ],
    },
  ];
  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Web Copywriting Services | Broadway Publishers",
    url: "https://www.broadwaypublishers.com/web-copywriting-services",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Web Copywriting Services | Broadway Publishers",
    url: "https://www.broadwaypublishers.com/web-copywriting-services",
    logo: "https://www.broadwaypublishers.com/_next/static/media/logo.1f749c62.png",
  };

  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Web Copywriting Services | Broadway Publishers",
    image:
      "https://www.broadwaypublishers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.broadwaypublishers.com/web-copywriting-services",
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
    name: "Web Copywriting Services | Broadway Publishers",
    image:
      "https://www.broadwaypublishers.com/_next/static/media/logo.1f749c62.png",
    description:
      "Get the best quality of web copies written with our web copywriting services",
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
        <title>Web Copywriting Services | Broadway Publishers</title>
        <meta
          name="description"
          content="At Broadway Publishers, we write the best web copies with our web copywriting services. Hire the best web copywriters by contacting us today!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="Web Copywriting Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.broadwaypublishers.com/web-copywriting-services"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.broadwaypublishers.com/web-copywriting-services"
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
        title="Develop Your Brand With The Skills And Expertise of Our Web Copywriters"
        desc="Broadway Publishers offers the professional web copywriting services, aimed at enhancing your website to drive sales and maximize ROI"
        logos={Logos}
        classes="bg-[#FEFEFE] !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/front-laptop-keyboard.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRContent1
        subTitle="Communicate"
        title="Your Brand’s Message Efficiently"
        desc="Hire top-rated web copywriters who produce SEO-optimized content to help you beat the competition, bringing in the high ranking needed to elevate your website for better outreach, branding, and visibility."
        img1="/assets/images/newimg/communicate.png"
        direction="flex-row-reverse"
      />
      <MRCards
        subTitle="Our Services Have Been Constantly Hailed as Remarkable"
        title={`What Makes Us the Premier Choice in <br class="mr-xl:block hidden" /> Professional Web Copywriting?`}
        desc="As a leading web copywriting company, our team of experts has the unmatched capacity to distill each client's voice and soul into works that speak to the intended audience. What sets us apart is our dedication to understanding the vision and goals of our clients."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData}
      />
      <MRContent1
        subTitle="Our Comprehensive"
        title="Web Copywriting Services"
        desc="Our expert web copywriters at Broadway Publishers work closely with you to understand your brand, target audience, and desired goals. Then, we translate that information into compelling website content that resonates and drives action. Our team possesses the best web copywriting services in the USA, ensuring your website content stands out and achieves results. "
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple and aims to deliver flawless results for every project."
        textTheme="text-white"
        list={[
          "Writing Genuine Copy Based On Your Idea",
          "Critical Review, Editing, Optimizing  And Proofreading",
          "Extensive Formatting, Typesetting, & Designing",
          "Branding, Marketing, And Promotions",
          "Review And Analysis",
          "Copy Editing",
          "Developmental Editing",
          "Line Editing",
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Experts"
        title="Write Web Copy that Converts"
        desc="Your website is your digital showroom, a salesman who never stops trying to draw in and keep clients. Our expert web copywriters are here to help you produce compelling content that speaks directly to your target audience and drives actionable results."
        data={MRContent2Data}
      />
      <BTM />
      <CTA
        subtitle="Get a Free Quote Now!"
        title="Create Compelling Web Copy & Boost Your Online Presence"
        desc="Our dedicated team of professional web copywriters are available to discuss your project and answer your questions. Connect with us today – we're here to help you achieve your online goals."
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the <br class="mr-xl:block hidden" /> 4 easy steps that keep us streamlined from the beginning:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponents />
      <MRContact
        title="Ready to Discover Your Potential? Let Our Expert Copywriters Bring Your Vision to Life!"
        desc="Our collaborative approach begins with an open discussion where you can share your goals, target audience, and any initial ideas you might have. So what are you waiting for? Just fill out the form and let’s get started!"
        titleB="Write Your Success Story with Us! "
        descB={`Contact us today for a free consultation and learn <br class="hidden mr-sm:block" /> more about how our web copywriting services can <br class="hidden mr-sm:block" /> transform your online presence.`}
      />
    </main>
  );
};

export default WebCopywritingServices;
