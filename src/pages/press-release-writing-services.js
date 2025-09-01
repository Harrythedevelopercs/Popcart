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
const PressReleaseWritingServices = () => {
  const MRContent2Data = [
    {
      title: "Media Savvy Writers",
      desc: "As a top-grade press release writing company, we have solid experience and understanding of what appeals to journalists, influencers, and target readers alike. Our team of media-savvy content writers is well-versed in writing press releases that stand amidst the noise.",
    },
    {
      title: "Fast Turnaround",
      desc: "Urgency is our specialty. Need your press release ASAP? No problem. Hire press release writer now and guarantee yourself a quick turnaround time, sometimes in just a matter of hours. ",
    },
    {
      title: "Powerful Messaging for Maximum Impact",
      desc: "Writing a compelling narrative is our forte. We'll be working closely with you to fully comprehend your unique story and successfully express it to your target audience, increasing engagement and brand presence.",
    },
    {
      title: "Subject-Matter Expertise",
      desc: "Our team provides extensive topical experience to each project, ensuring that your press releases are well-written and informative. From technology and finance to healthcare and beyond, we create content that has an enduring effect.",
    },
    {
      title: "Integration with Your PR Strategy",
      desc: "We create press releases by becoming an integral part of your PR strategy. From brainstorming discussions to post-release data, our professional press release writers cover every step of the way to ensure a unified and impactful press release strategy.",
    },
    {
      title: "Impeccable Formatting, Every Time",
      desc: "Don't worry about style guidelines. Whether you prefer AP Style, MLA Style, or The Chicago Manual of Style, our writers adhere to your specifications, delivering editor-approved content free from errors.",
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
          title: "Refine & Optimize",
          desc: "We write and optimize your content for maximum impact.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review the final draft and provide your approval.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Amplify",
          desc: "Your press release is strategically amplified for maximum impact.",
        },
      ],
    },
  ];

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Press Release Writing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/press-release-writing-services",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Press Release Writing Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/press-release-writing-services",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  };

  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Press Release Writing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.bestsellingpublisher.com/press-release-writing-services",
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
    name: "Press Release Writing Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Hire our press release writing services to get creative press releases that grabs reader attention",
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
        <title>Press Release Writing Services | Broadway Publishers</title>
        <meta
          name="description"
          content="Looking for the best press release writing company? Our press release writers for hire can bring your press releases to life. Visit our website now."
        />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="Press Release Writing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/press-release-writing-services"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/press-release-writing-services"
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
        title="Press Release Writing Services That Spark Conversation"
        desc="Put your brand in the spotlight with our press releases. Our team creates compelling press releases that capture attention, and engage journalists, online publishers, and search engines."
        logos={Logos}
        classes="bg-[#fefefe] !py-[80px]"
        counter={true}
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/newspaper-concept.png')]"
      />
      <Enlistedlogo />
      <MRContent1
        title="Press Releases Covered By The Right Sites"
        desc="Press Release gives you maximum acquaintance, achieved through the careful selection of your target audience through media and targeted niche."
        img1="/imageAR/bold.png"
        list={[
          "EIN Presswire",
          "Ereleases",
          "Issuewire",
          "Linking News",
          "Newswire",
          "PR Distribution",
        ]}
        direction="flex-row-reverse"
      />
      <MRContent1
        subTitle="Get Noticed"
        title="With Our Top-Rated Press Release Writers "
        desc="Don’t settle for less—partner with top press release writing company like Broadway Publishers to impress your customers and build trust. Our experienced press release writers for hire are aware of the best practices and excel at capturing your brand’s voice, giving your brand a polished and professional look. When you read the final draft, it will feel like it was created by your very own in-house team."
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our process is simple and aims to deliver flawless results for every project."
        textTheme="text-white"
        list={[
          "Writing Engaging Press Releases Aligned to Your Goals",
          "Ensuring Proper Tone and Formatting for Maximum Impact",
          "Comprehensive Review, Editing, and Proofreading",
          "Customizable Press Releases for Product Launches, Events, and More",
          "Capturing Your Brand’s Voice with Precision",
          "Professional Quality to Impress Media and Audience",
          "Easy Order Process with Detailed Customization Options",
          "Timely Delivery of Press Releases Ready for Distribution",
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Innovative Storytellers,"
        title="Translating Your Message Into Compelling Press Releases"
        desc={`Our team of innovative writers delivers the best press release writing services across the world. With a diverse repertoire of writing styles, we write each <br class="hidden mr-xl:block"/> press release to your exact specifications, ensuring your message shines brightly in the media spotlight.`}
        data={MRContent2Data}
      />
      <BTM />
      <CTA
        subtitle="Cut Through The Noise"
        title="In The World of Press Release, Every Word Holds Sway"
        desc="We are aware of the significance of every word and the difference it could have for both audiences and stakeholders. We guarantee the genuine delivery of your message through appealing headlines and engaging material. Trust us to wield the power of words."
      />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`In our pursuit of excellence, we have streamlined our process into four easy steps, efficiency without compromising quality. With us, You will achieve your goals with precision and professionalism.`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponents />
      <MRContact
        subTitle="Press Release Excellence "
        title="Got a Headline in Your Mind? Connect With Our Press Release Experts"
        desc="Whether it's a snappy tagline, a gripping headline, or an interesting premise, we have the experience and understanding to bring it to life as a polished press release"
        titleB="Write Your Success Story with Us! "
        descB="Contact us today for a free consultation and learn more about how our best press release content writing services can transform your message into a powerful narrative."
      />
    </main>
  );
};

export default PressReleaseWritingServices;
