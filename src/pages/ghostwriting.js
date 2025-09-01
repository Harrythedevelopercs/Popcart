import CTA from "@/component/cta3"
import BTM from "@/component/bottomLogos"
import SwiperComponents from "@/component/SwiperComponent"
import Enlistedlogo from "@/fa-component/Enlistedlogo"
import { MRHero, MRContact, MRContent2, MRContent1, MRCards } from "@/component"
import Head from "next/head"
import { Popup } from "@/component/LP-Eight"
import ImageLogos from "media/images/banner/img2.webp"
const ProfessionalGhostwriting = () => {
  const MRContent2Data = [
    {
      title: "Fiction",
      desc: "Immerse yourself in a world of endless possibilities with fiction, where imagination knows no bounds. From thrilling adventures to heartwarming romances, fiction offers an escape into enchanting narratives crafted by talented storytellers.",
    },
    {
      title: "Informative",
      desc: "In a world brimming with knowledge, informative literature serves as a guiding light, illuminating the path to understanding and enlightenment. From academic textbooks to engaging non-fiction, informative works provide readers with valuable insights and practical wisdom on a myriad of subjects.",
    },
    {
      title: "Memoir",
      desc: "Journey through the world of lived experiences with memoirs, where personal narratives weave tales of triumph, resilience, and self-discovery. Memoirs offer a glimpse into the intimate moments and transformative events that shape a person's life, inviting readers to connect with the raw authenticity of the human experience.",
    },
    {
      title: "Children's Book",
      desc: "Spark the imagination and ignite a love for reading with children's books, where whimsy and wonder abound on every page. From colorful picture books to enchanting fairy tales, children's literature enthralls young minds and fosters a lifelong passion for learning and creativity. ",
    },
    {
      title: "Self Help Book",
      desc: "Empower yourself to steer life's challenges and unlock your full potential with self-help books, where personal growth and transformation take center stage. From practical strategies for success to insights on mindfulness and resilience, self-help literature offers valuable tools and guidance for individuals striving to live happier, healthier, and more fulfilling lives.",
    },
    {
      title: "Biography",
      desc: "Probe into the lives of extraordinary individuals and explore the world of human existence with biographies, where real-life stories unfold with depth and authenticity. From historical figures to modern-day icons, biographies offer a glimpse into the triumphs, tribulations, and defining moments that shape a person's legacy.",
    },
  ]
  const MRCardData = [
    {
      classes:
        "bg-[#F2F2F2] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-center",
      content: [
        {
          icon: "",
          title: "Seal Of Approval",
          desc: "100% Original Content",
        },
        {
          icon: "",
          title: "In-Depth Review System",
          desc: "Error-Free Copies",
        },
        {
          icon: "",
          title: "Unlimited Revisions",
          desc: "Amendments and Omissions",
        },
        {
          icon: "",
          title: "Rights Of Ownership Maintained",
          desc: "Copyrights",
        },
      ],
    },
  ]
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
          desc: "Start your publishing process by sharing your manuscript with us.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Edit & Design",
          desc: "We add our artistic expertise while retaining your unique voice.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Review & Approve",
          desc: "We will NEVER go above your head! Your approval matters, and we want to ensure our creative contributions align with your vision.",
        },
        {
          textColor: "text-[#3EA99F] group-hover:text-white",
          title: "Publish & Distribute",
          desc: "Witness your book being published and reaching readers across the globe.",
        },
      ],
    },
  ]

  const schemaWebsite = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Ghostwriting Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/ghostwriting",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const schemaCorporation = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "Ghostwriting Services | Broadway Publishers",
    url: "https://www.bestsellingpublisher.com/ghostwriting",
    logo: "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
  }
  const schemaProffesionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ghostwriting Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    url: "https://www.bestsellingpublisher.com/ghostwriting",
    telephone: "(800) 781-9093",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1001 Wilshire Boulevard #1176",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      postalCode: "90017",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0518073,
      longitude: -118.2613875,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  }
  const schemaProduct = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Ghostwriting Services | Broadway Publishers",
    image:
      "https://www.bestsellingpublisher.com/_next/static/media/logo.1f749c62.png",
    description:
      "Get your book written with our top-rated ghostwriters as you hire our ghostwriting services",
    brand: {
      "@type": "Brand",
      name: "Broadway Publishers",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1174",
    },
  }
  return (
    <main>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>
          Professional Ghostwriting Services | Broadway Publishers
        </title>
        <meta
          name="description"
          content="Broadway Publishers offers professional ghostwriting services tailored to your needs. Start your publishing journey today and see why we're the premier choice for authors."
        />

        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com/ghostwriting"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/ghostwriting"
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
          title="Affordable and Professional  <br /> Ghostwriting Services"
          desc="Do you know how to make your content incredible? You team up with the experts! </br> Over the years, we have assisted innumerable authors who aspired to become the next best sellers. If you plan to be one of them, we are here for you."
          logos={ImageLogos}
          counter={true}
          classes="!py-[80px] bg-[#fefefe]"
          beforeImg="mr-md:before:bg-[url('../../public/imageAR/serious-man.webp')]"
          isPopup={true}
        />
        <Enlistedlogo />
        <MRCards
          subTitle="Our Services Have Been Constantly Hailed as Remarkable"
          title={`What Makes Us the Premier Choice in <br class="mr-xl:block hidden" /> Professional Ghostwriting?`}
          desc="Broadway Publishers's ghostwriting services truly stand out as a class apart. Their team of expert writers possesses an unparalleled ability to capture the unique voice and essence of each client, flawlessly translating their ideas into fascinating prose. What sets them apart is their dedication to understanding the vision and goals of their clients."
          gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2"
          cta={true}
          variant="icons"
          data={MRCardData}
          isPopup={true}
        />
        <MRContent1
          subTitle="Our Exceptional"
          title="Ghostwriting Services"
          desc="What if we tell you that you no longer have to worry about writing? It’ll ease so many of your problems, right? <span class='h-3 block'></span> Broadway Publishers's exceptional ghostwriting services set them apart in the industry. Their team of skilled writers possesses a rare talent for impeccably embodying the voice and vision of their clients, whether it's for a memoir, a novel, or corporate literature."
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
          classes="bg-[url('../../public/imageAR/serviceBG.webp')]"
          theme="dark"
          isPopup={true}
        />
        <MRContent2
          subTitle="Our Creative Ghostwriters,"
          title="Breathe Life into the Mundane"
          desc={`Our ghostwriters accentuate your ideas on a whole different level. Every project that we work on inevitably becomes a page-turner.`}
          data={MRContent2Data}
          isPopup={true}
        />
        <CTA
          subtitle="Your Book, Our Expertise"
          title=" – Let's Collaborate!"
          desc="Need assistance or have inquiries? <span class='block h-3'></span> Our committed team is at your disposal during our operational hours, ready to assist you. We extend a warm invitation to engage with us; after all, your inquiries and requirements are consistently our foremost concern, aren't they?"
          isPopup={true}
        />
        <BTM />
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
        <MRContact />
        <Popup
          popupDesc={`HIRE <strong>TOP ghostwriters AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK`}
        />
    </main>
  )
}

export default ProfessionalGhostwriting
