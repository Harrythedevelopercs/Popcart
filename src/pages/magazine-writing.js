import LHMagazine from "@/component/MagazineWriting/LetUsMagazine";
import GhostWriting from "@/component/ghostWritingServices/ghostWriting";
import WMODE from "@/component/workMode1";
import CTA from "@/component/cta3";
import BTM from "@/component/bottomLogos";
import SwiperComponents from "@/component/SwiperComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import {
  MRHero,
  MRContact,
  MRContent2,
  MRContent1,
  MRCards,
} from "@/component";
import Head from "next/head";
// Import Images
import Essay from "media/imageAR/Essay.png";
import Historical from "media/imageAR/Historical.png";
import Profile from "media/imageAR/Profile.png";
import Service from "media/imageAR/Service.png";
import Articles from "media/imageAR/Articles.png";
import Informative from "media/imageAR/Informative.png";
import Logos from "media/images/banner/img2.webp";

const MagazineWriting = () => {
  const MRContent2Data = [
    {
      title: "Magazine Articles",
      desc: "We bring your concepts to life with polished writing, visually appealing layouts, and fascinating storytelling that matches your target audience and makes a lasting impact.",
    },
    {
      title: "News Articles",
      desc: "Stay ahead of the competition with our timely and newsworthy stories. From breaking news to industry updates, we provide trustworthy information to keep your newspaper on top of current events.",
    },
    {
      title: "Guest Articles",
      desc: "Our guest pieces, including contributions from industry experts and thought leaders, will help to broaden the reach and credibility of your content. Our guest articles boost your content and attract new readers by providing high-quality writing and relevant insights.",
    },
    {
      title: "Micro Articles",
      desc: "With our micro articles, you can make an enormous impact in a short amount of time by presenting vital information and insights. Our micro articles are ideal for rapid reads and social media sharing. They capture attention and promote interaction.",
    },
    {
      title: "Industry Articles",
      desc: "Our skillfully created industry articles will help you become a go-to destination for industry insights and analysis. We provide content that informs, educates, and inspires your readers, including trends and innovations, best practices, and case studies.",
    },
    {
      title: "Listicles",
      desc: "Make an impression with our well-crafted listicles, which mix critical information with engaging storytelling. Whether it's top ten lists, recommendations, methods, or product roundups, our listicles will entertain, inform, and provide valuable insights to your audience.",
    },
  ];
  const MRCardData = [
    {
      classes:
        "bg-[#fff] shadow-lg px-3 rounded-2xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#3EA99F] hover:!text-white text-center",
      content: [
        {
          icon: Essay,
          title: "Essay </br> Articles",
        },
        {
          icon: Historical,
          title: "Historical </br> Articles",
        },
        {
          icon: Profile,
          title: "Profile </br> Articles",
        },
        {
          icon: Service,
          title: "Service </br> Articles",
        },
        {
          icon: Articles,
          title: "Research </br> Articles",
        },
        {
          icon: Informative,
          title: "Informative </br> Articles",
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
          title: "Provide Your Brief",
          desc: "Share your requirements and instructions to kickstart the process.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Refine & Design",
          desc: "Our team refines your ideas into engaging articles and designs captivating visuals.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review the drafted article, ensuring it is aligned with your vision and objectives.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Amplify",
          desc: "Once approved, your articles are ready for publication, reaching your audience on schedule.",
        },
      ],
    },
  ];

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Magazine Writing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/magazine-writing",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Magazine Writing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/magazine-writing",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Magazine Writing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.bestsellingpublisher.com/magazine-writing",
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
    name: "Magazine Writing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Hire our professional magazine writing services and make your magazine a masterpiece",
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
        <title>Magazine Writing Services | Broadway Publishers</title>
        <meta
          name="description"
          content="Hire Broadway Publishers as we are a top-rated magazine writing company that can write attention grabbing magazines for your readers."
        />
        <meta name="DC.title" content="Magazine Writing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/magazine-writing"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/magazine-writing"
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
        title="Our Professional Magazine Writers Bring It All Altogether"
        desc="Attracting the reader at the first step can be tricky, but our expert writers effortlessly bring all the content together, instantly hooking your readers from the very first sentence."
        logos={Logos}
        classes="bg-[#fefefe] !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/magazine.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Well-Researched Content"
        title={`Written With Pure Perfection`}
        desc="We deliver natural, engaging pieces that effortlessly blend with your publication's voice and captivate your audience."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData}
      />
      <MRContent1
        subTitle="Captivate Your Audience With"
        title="Our Magazine Writing Services"
        desc="Our talented team specializes in serving diverse clients across industries and niches. With the know-how and expertise, they're primed to deliver top-notch results. Understanding the flood of daily magazine articles. Our magazine writing company focuses on creativity and audience comprehension. They explore deep into your niche, ensuring standout content that resonates. Plus, every piece is deeply researched. "
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple, aiming for flawless results in every project."
        textTheme="text-white"
        list={[
          "Creating Engaging Articles Based on Your Ideas",
          "Thorough Review, Editing, and Proofreading for Magazine Standards",
          "Comprehensive Formatting, Typesetting, & Design for Print and Online Publications",
          "Publication, Branding, Marketing, and Promotion",
          "In-depth Analysis and Evaluation of Content",
          "Guidance and Support in Article Development for Magazines",
          "Refinement of Magazine Content to Meet Editorial Requirements",
          "Substantial Revision for Magazine Quality",
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Creative Magazine Article Writers,"
        title="Delivering Impactful Content in Magazines"
        desc={`Browse our popular magazine article styles or reach out to discuss customized solutions according to your specific requirements. <br class="hidden mr-xl:block" /> Our magazine writers offer a diverse range of options to suit your needs.`}
        data={MRContent2Data}
      />
      <CTA
        subtitle="We Deliver Value to Your Readers!"
        title="Start Your Journey to Magazine Success with Our Best Magazine Writing Services"
        desc="Our authors cover a wide range of themes with a focus on originality and relevance, so your article will stay fresh and intriguing month after month. Bid farewell to bland content and welcome to articles that make an impact."
      />
      <BTM />
      <MRCards
        subTitle="We Deliver"
        title={`Top Magazine Writing Process in <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We understand the value of your time, we deliver our services promptly and timely. Here's our 4-step <br class="mr-xl:block hidden" /> streamlined process.`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponents />
      <MRContact
        subTitle="Discuss Your Ideas!"
        title="Embrace Authenticity Credibility with Expert Magazine Writers!"
        desc="Our writers are the soul of our operation. Each undergoes a rigorous vetting and training process, with over 9 tests to assess their abilities, style, and experience. We scour every corner of the internet to find the best talent, ensuring only the finest join our ranks. Hire professional magazine writing services and experience the difference firsthand with us."
        titleB="Write Your Success Story with Us!"
        descB="Contact us today for a free consultation and learn more about how our magazine article-writing services can transform your online presence."
      />
    </main>
  );
};

export default MagazineWriting;
