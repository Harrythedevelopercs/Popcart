import PWMODE from "@/component/ProcessWorkMode";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import SwiperComponents from "@/component/SwiperComponent";
import { MRHero, MRContact, MRContent1, MRCards } from "@/component";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import Head from "next/head";

const Publication = () => {
  const MRCardData = [
    {
      classes:
        "bg-[#F2F2F2] shadow-lg px-3 rounded-lg relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
      cta: false,
      stepText: "Step",
      indexing: "true",
      content: [
        {
          title: "Professionalism",
          desc: "We uphold the highest standards of professionalism, ensuring that your book meets the quality it deserves. Our commitment to excellence is non-negotiable.",
        },
        {
          title: "Experience",
          desc: "With years of experience in the publishing industry, we possess a profound understanding of what it takes to make a book successful, We've worked with authors from diverse genres, and our portfolio speaks for itself.",
        },
        {
          title: "Customization",
          desc: "We understand that every author and book is unique. That's why our services are fully customizable, tailored to your specific needs and goals. Your vision is at the forefront of everything we do from book writing to book design services.",
        },
        {
          title: "Affordability",
          desc: "We believe that publishing should be accessible to all, Our book services pricing is competitive, and we offer flexible payment options to accommodate your budget.",
        },
        {
          title: "Confidentiality",
          desc: "We take your privacy seriously and maintain strict confidentiality throughout the entire process. Your work is safe in our hands.",
        },
        {
          title: "Submitting It For Review",
          desc: "Now this is the final stage of the process when we submit it for review and ensure that all the tasks are completed and that your design is perfected. Our team will ensure your success.",
        },
      ],
    },
  ];
  return (
    <main>
      <Head>
        <title>Book Publishing Services - [Sell 1000s Of Books]</title>
        <meta
          name="description"
          content="We've helped authors publish over 10,000+ books online on all major publication platforms. Start your book publishing journey today!"
        />
        <meta
          property="og:url"
          content="https://www.broadwaypublishers.com/book-publishing-services"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link
          rel="canonical"
          href="https://www.broadwaypublishers.com/book-publishing-services"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Book Publishing Services",
              image:
                "https://www.broadwaypublishers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
              "@id": "",
              url: "https://www.broadwaypublishers.com/book-publishing-services",
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
            }),
          }}
        />
      </Head>
      <MRHero
        subTitle="Awarded #1 Book Publishing Services"
        title="Transform Your Manuscript Into  A Bestseller With Premier Book Publishing Services"
        desc="Welcome to Broadway Publishers, where your publishing dreams turn into reality. As a leading book publishing company, we specialize in bringing authors' visions to life and catapulting their works onto bestseller lists, including Amazon's coveted ranks.With our comprehensive book publishing services, from meticulous editing to bespoke marketing strategies, we're here to guide you every step of the way. Partner with us and see your book shine across the globe."
        logos="/images/banner/img2.webp"
        counter={true}
        groupCTA={false}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/imageAR/bookstore-with-bookshelf.png')]"
      />
      <Enlistedlogo />
      <MRContent1
        title="Our Book Publishing Experts Will Work to Fine-Tune Your Book"
        desc="At Broadway Publishers, we specialize in comprehensive book publishing services designed to bring your manuscript to life and get it into the hands of eager readers we're dedicated to crafting legacies. Here’s why countless authors have trusted us to navigate their publishing journey:"
        img1="/ahsan/book-publishingsection2.png"
        list={[
          "<span class='text-primary-100 font-bold'>Expertise Across Genres:</span> Whether your masterpiece is fiction, non-fiction, or anything in between, our team of seasoned editors, designers, and marketing strategists bring your story to life, ensuring it resonates with your target audience.",
          "<span class='text-primary-100 font-bold'>Customized Publishing Plans:</span> Understanding that each book is unique, we offer personalized publishing services tailored to meet your specific needs. From Amazon book publishing to global distribution, we customize our approach to maximize your book's success.",
          "<span class='text-primary-100 font-bold'>Unparalleled Amazon Presence:</span> Leveraging our deep understanding of Amazon book publishing services, we optimize your book’s visibility and sales potential, helping you climb the ranks and achieve bestseller status.",
          "<span class='text-primary-100 font-bold'>Comprehensive Marketing Support:</span> Our innovative marketing solutions extend your book's reach, engaging readers across multiple platforms and turning visibility into sustained success",
        ]}
        direction="flex-row-reverse"
      />
      <MRContent1
        subTitle="Global Publishing Excellence Awaits Your Book"
        title="Maximize Your Book's Impact with Our Publishing Services"
        desc="Step into the spotlight with Broadway Publishers, your trusted book publishing company dedicated to amplifying authors' voices worldwide. We specialize in navigating the complexities of the publishing landscape to ensure your book achieves the recognition it deserves. From Amazon book publishing services to extensive distribution networks, our tailored approach positions your work in front of the right audience, both digitally and in print."
        theme="dark"
        classes="bg-[url('../../public/imageAR/serviceBG.png')]"
        img1="/assets/images/newimg/graduation-cap-earth-globe.png"
        textTheme="text-white"
        cta={false}
        ctaText="Publish Your Book, Reach the World - Get Started!"
      />
      <MRCards
        title={`Why Publish With Us? `}
        desc="Choosing us for your publishing needs means partnering with a team deeply committed to bringing your literary vision to life. Our dedicated approach ensures your book not only reaches but captivates a global audience. Here's why you should publish with us:"
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

export default Publication;
