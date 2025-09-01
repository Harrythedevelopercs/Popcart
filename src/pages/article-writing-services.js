import LHArticle from "@/component/ArticleWritingServices/LetUsHelpArticle";
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
import Logos from "media/images/banner/img2.webp";
const ArticleWritingServices = () => {
  const MRContent2Data = [
    {
      title: "Blog Articles",
      desc: "Ensure your blog stays fresh and engaging with our dedicated blog articles. Collaborate with a skilled writer who understands your brand's voice, industry trends, and SEO strategies, driving continuous reader interest and loyalty.",
    },
    {
      title: "LinkedIn Articles",
      desc: "Extend your brand's influence with LinkedIn articles. Our expert writers develop engaging content, showcasing your expertise and positioning your brand as a thought leader among industry professionals.",
    },
    {
      title: "Guest Posts",
      desc: "Enrich your blog with diverse perspectives and expert insights through engaging guest posts. Work with skilled writers to expand your content, captivating your audience with varied viewpoints. Seize the opportunity to widen your reach and enhance your platform with valuable guest contributions.",
    },
    {
      title: "Press Releases",
      desc: "Press releases play a key role in brand communication during significant organizational changes like product launches or leadership transitions. Our team produces high-quality releases, strategically distributed through platforms like PRNewswire, enhancing your brand's presence and authority in the market, ensuring maximum visibility and impact.",
    },
    {
      title: "Website Content",
      desc: "Beyond blog articles, your website’s content should stand out. Our expert writers craft compelling language for product landing pages, evoke emotion for about and mission/values pages, and provide professional content for leadership pages - all optimized for UX and SEO, enhancing your online presence.",
    },
    {
      title: "Micro Content",
      desc: "Article writing isn’t limited to long-form pieces. As a diverse article writing company, our skilled editorial team is proficient at creating micro-content like ad copy or product descriptions. Additionally, our social media management offers concise yet impactful posts for platforms like Twitter and Facebook, ensuring your message resonates across various channels.",
    },
  ];
  const MRCardData = [
    {
      classes:
        "bg-[#fff] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-center",
      content: [
        {
          icon: "",
          title: "Personalized Content</br> Strategies",
        },
        {
          icon: "",
          title: "High-Quality</br>Writing",
        },
        {
          icon: "",
          title: "Expertise </br>In SEO",
        },
        {
          icon: "",
          title: "Timely </br> Delivery",
        },
        {
          icon: "",
          title: "Responsive </br> Customer Support",
        },
        {
          icon: "",
          title: "Competitive </br>Pricing",
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
          title: "Order Placement",
          desc: "Reach out to us via form submission or phone call.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Writer Assignment",
          desc: "Our team assigns qualified writers to create your custom content.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Content Creation",
          desc: "Writers develop engaging articles that meet your specifications and audience needs.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Delivery",
          desc: "Receive polished articles promptly according to agreed-upon timelines.",
        },
      ],
    },
  ];

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Article Writing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/article-writing-services",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Article Writing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/article-writing-services",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Broadway Publishers | Exceptional Article Writing Services",
    image:
      "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.bestsellingpublisher.com/article-writing-services",
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
    name: "Article Writing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Discover our professional article writing services by hiring us today",
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
          Broadway Publishers | Exceptional Article Writing Services
        </title>
        <meta
          name="description"
          content="At Broadway Publishers, we take pride in our exceptional article writing services. Connect with us to start your publishing journey today!"
        />
        <meta name="DC.title" content="Article Writing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />

        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/article-writing-services"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/article-writing-services"
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
        title="Maximize Impact with Our Top-Rated Article Writing Services!"
        desc="Why settle for ordinary content? Stand out with engaging, SEO-friendly articles designed to captivate your audience, drive traffic, and convert visitors into loyal clients. Hire our #1 ranked article writers for resonant messaging and exceptional brand results!"
        logos={Logos}
        counter={true}
        classes="!py-[80px] bg-[#FEFEFE]"
        beforeImg="before:mr-md:bg-[url('../../public/imageAR/business-woman-working.png')]"
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Our Services Have Been Constantly Hailed as Remarkable"
        title={`Why Choose Us for Professional Article Writing Services?`}
        desc="Our dedicated approach guarantees high-quality content designed for your brand, fueling engagement and results. With a keen understanding of SEO principles, we optimize each article to enhance visibility and attract your target audience. We’re a top-grade article writing services company that can deliver impactful content, positioning your brand as an industry leader."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData}
      />
      <MRContent1
        subTitle="Our Exceptional"
        title="Article Writing Services"
        desc="We pride ourselves on our skilled writers who consistently produce compelling and informative content. With a commitment to clear communication, punctual delivery, and unrivaled quality, we ensure your satisfaction with every article we create. Partner with Broadway Publishers to hire best article writers, delivering engaging and high-quality content."
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple yet effective."
        textTheme="text-white"
        list={[
          "Genuine Content",
          "Extensive Formatting",
          "Critical Reviews and Assessments",
          "Copy Editing",
          "Editing and Proofreading",
          "Publishing, Marketing, and Promotions",
          "Creative Consultancy",
          "Line and Developmental Editing",
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Article Writing Options,"
        title="Ideal for Varied Businesses"
        desc="Broadway Publishers adds flair and creativity to your concept, enhancing its appeal and impact to make it stand out!"
        data={MRContent2Data}
      />
      <BTM />
      <CTA
        subtitle="It's Time to Kick Off Your Dream Project"
        title="Are You Ready to Start Publishing?"
        desc="Our team is here for you if you want to start <a href='https://www.bestsellingpublisher.com/book-publishing'> book publishing</a>! Do you have questions or need assistance? Just reach out during our operational hours. We're always happy to help. Don't be shy – we'd love to hear from you!"
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`We emphasize prompt deliveries because we don’t like to keep you waiting. Following are the  <br class="mr-xl:block hidden" />4 easy steps that keep us streamlined from the beginning:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponents />
      <MRContact desc="We value your time and energy, which is why we're here to assist you in transforming your narrative into impeccably crafted articles. Simply fill out our form to connect with our expert article writers for hire." />
    </main>
  );
};

export default ArticleWritingServices;
