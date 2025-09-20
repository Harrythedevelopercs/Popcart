import LHScript from "@/component/ScriptWritingServices/LetUsPress";
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
import Film from "media/imageAR/Film.png";
import Video from "media/imageAR/Video.png";
import Documentary from "media/imageAR/Documentary.png";
import Story from "media/imageAR/Story.png";
import Manuscript from "media/imageAR/Manuscript.png";
import Content from "media/imageAR/Content.png";
import Logos from "media/images/banner/img2.webp";
const ScriptWritingServices = () => {
  const MRContent2Data = [
    {
      title: "Film Scripts",
      desc: "A successful film requires a great script and our experienced script writers have honed the art of storytelling to ensure your script is of the highest caliber. Character development to plot twists, we focus intently on every aspect of your script for its success.",
    },
    {
      title: "Television Scripts",
      desc: "We pay attention to every detail, from characters to plot twists. With the help of Broadway Publishers, your TV script will keep viewers interested and coming back for more. That’s because our talented script writers know the recipe for making a TV show a hit!",
    },
    {
      title: "Commercial Scripts",
      desc: "Whether you’re directing for TV, radio, or online platforms, our talented writers can help you effectively get your message across with perfectly crafted commercial scripts! With our keen understanding of audience psychology and persuasive language, Broadway Publishers ensures that your brand stands out",
    },
    {
      title: "Video Scripts",
      desc: "We can provide game-changing scripts for social media, corporate presentations, or marketing campaigns to ensure that your message is conveyed effectively. Our attention-grabbing introductions and impactful calls-to-action are essential elements in achieving key objectives like increasing brand awareness, driving sales, or educating your audience.",
    },
    {
      title: "Corporate Scripts",
      desc: "Our suite of corporate scripts includes training videos, internal communications, promotional materials, and more. We’re the masters when it comes to educating your employees or engaging your stakeholders. With the help of Broadway Publishers, you can easily achieve your corporate objectives with clear and engaging messaging.",
    },
    {
      title: "Educational Scripts",
      desc: "Our educational scripts are designed to inform and inspire! From clear explanations to interactive elements, we ensure your educational objectives are met effectively. We cover online courses, training modules, educational videos, and more!",
    },
  ];
  const MRCardData = [
    {
      classes:
        "bg-[#fff] shadow-lg px-3 rounded-2xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#3EA99F] hover:!text-white text-center",
      content: [
        {
          icon: Film,
          title: "Film </br> Writing",
        },
        {
          icon: Video,
          title: "Video </br> Scripting",
        },
        {
          icon: Documentary,
          title: "Documentary </br> Scripting",
        },
        {
          icon: Story,
          title: "Story </br> Scripting",
        },
        {
          icon: Manuscript,
          title: "Manuscript </br> Scripting",
        },
        {
          icon: Content,
          title: "Content </br> Scripting",
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
          title: "Submit Your Concept",
          desc: "Once you've decided to collaborate with us, simply share your script idea with us.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Writing & Revision",
          desc: "Our team meticulously crafts your script, incorporating your feedback along the way.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "You review the script and provide any final adjustments or approvals.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Finalization & Delivery",
          desc: "Upon your approval, we finalize the script and deliver it to you on time, ready for production or presentation.",
        },
      ],
    },
  ];

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Script Writing Services | Broadway Publishers",
    url: "https://www.broadwaypublishers.com/script-writing-services",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Script Writing Services | Broadway Publishers",
    url: "https://www.broadwaypublishers.com/script-writing-services",
    logo: "https://www.broadwaypublishers.com/_next/static/media/logo.1f749c62.png",
  };
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Script Writing Services | Broadway Publishers",
    image:
      "https://www.broadwaypublishers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
    "@id": "",
    url: "https://www.broadwaypublishers.com/script-writing-services",
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
    name: "Script Writing Services | Broadway Publishers",
    image:
      "https://www.broadwaypublishers.com/_next/static/media/logo.1f749c62.png",
    description:
      "Take your scripts to the next level with our top rated script writing services",
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
        <title>Script Writing Services | Broadway Publishers</title>
        <meta
          name="description"
          content="Our best script writing services provide affordable and premium quality of screenwriting for all types of media. Hire us now."
        />
        <meta name="robots" content="index, follow" />
        <meta name="DC.title" content="Script Writing Services" />
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="39.78373;-100.445882" />
        <meta name="ICBM" content="39.78373, -100.445882" />
        <meta
          property="og:url"
          content="https://www.broadwaypublishers.com/script-writing-services"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.broadwaypublishers.com/script-writing-services"
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
        title="Capture Your Audience’s Imagination with Professional Script Writing Services"
        desc="Our team of skilled script writers intimately understand the profound impact of storytelling. We recognize that every word, every scene, and every character holds the potential to captivate your audience. Join the ranks of satisfied clients who’ve entrusted us to develop captivating scripts!"
        logos={Logos}
        classes="bg-[#fefefe] !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/notebook.png')]"
        counter={true}
      />
      <Enlistedlogo />
      <MRCards
        subTitle="The Script That Is"
        title={`The Script That Is Written With Pure Perfection`}
        desc="Experience the ease and accessibility of scriptwriting with us. You select your script, and our skilled writers work their magic."
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[80%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData}
      />
      <MRContent1
        subTitle="Our Comprehensive"
        title="Script Writing Services"
        desc="Our experienced team collaborates closely with you to ensure every aspect of your story is captured authentically. From concept development to polished scripts, we ensure every detail aligns with your goals. As a leading script writing company, we deliver exceptional results for all types including for film, television, theater, corporate videos, and more!"
        img2="/assets/images/newimg/ghostwriting_book.png"
        listTitle="Our streamlined process is designed to yield impeccable outcomes."
        textTheme="text-white"
        list={[
          "Creating authentic content inspired by your ideas",
          "Thoroughly reviewing, editing, and carefully proofreading",
          "Extensive formatting, typesetting, and innovative design",
          "Comprehensive support for publishing, branding, marketing, and promotions",
          "In-depth critical analysis and evaluation",
          "Personalized guidance and support through book coaching",
          "Refining copy with precise editing",
          "Enhancing manuscripts through developmental editing",
        ]}
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        theme="dark"
      />
      <MRContent2
        subTitle="Our Creative Writers,"
        title="Turn Your Thoughts into Masterful Scripts"
        desc="Our top-rated script writing services can grab people's attention with captivating stories. They make sure each script is perfect for you, bringing your ideas to life on screen! Here are the types of scripts we specialize in:"
        data={MRContent2Data}
      />
      <CTA
        subtitle="Don't Wait to Get in Touch!"
        title="Start Your Path to Becoming a Bestseller!"
        desc="We are here to offer our personalized assistance and address any inquiries you may have. Your questions are of utmost importance to us and we warmly invite you to connect with us. So reach us through our live chat or phone number without any hesitation."
      />
      <BTM />
      <MRCards
        subTitle="We Pursue"
        title={`A Swift Work Mode that Involves <br class="mr-xl:block hidden" /> 4 Easy Steps`}
        desc={`Our script writing process is streamlined into 4 easy steps, ensuring a swift and efficient delivery. Here’s the process of <br class="mr-xl:block hidden" /> our script writing services:`}
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponents
        subTitle="That's Plenty From Us"
        title="We’ll Let Our Clients Speak Now "
        desc="While we could continue discussing our services, for further assurance of our credibility, take a moment to hear directly from our satisfied clients:"
      />
      <MRContact
        subTitle="Share Your Vision"
        title={`Have a Story Idea Brewing? <br class="mr-xl:block hidden" /> Let's Hear It!`}
        desc={`We’re ready to collaborate your story plot into a compelling script! So what <br class="mr-xl:block hidden" /> are you waiting for? Simply fill out the form and join hands with the best script writer!`}
      />
    </main>
  );
};

export default ScriptWritingServices;
