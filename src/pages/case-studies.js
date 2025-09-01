import {
  Header,
  Hero,
  StandOut,
  BrandLogos,
  FAQS,
  Reviews,
} from "@/component/Our-Reviews";
import Head from "next/head";
import { MRContact } from "@/component";
const OurReviews = () => {
  {
    /* FAQS Section Content */
  }
  const faqsContent = [
    [
      "Can I hire someone to market my book?",
      "Yes, you can hire book marketing services to optimize your sales pages, making them irresistible to readers. A professional book marketer can enhance your Amazon description, select effective keywords, and even improve your website with special offers. This ensures your book attracts more attention and drives more sales.",
    ],
    [
      "How much does a professional book marketer cost?",
      "The cost of hiring a professional book marketer can vary greatly. If you're implementing your own promotional plan, expenses might be minimal, starting as low as $50. However, if you hire a publishing company to handle your book marketing from start to finish, costs can range up to $4,000 or more. The investment often reflects in the quality and effectiveness of the marketing results.",
    ],
    [
      "What is the difference between a book publicist and a book marketer?",
      "A book marketer focuses on paid promotions to drive sales, such as ads and optimized sales pages. On the other hand, a book publicist handles earned promotions and events, like media coverage and book signings. Essentially, marketing is about creating direct advertising opportunities, while publicity focuses on generating buzz and organic interest through media and events.",
    ],
    [
      "Can you sell a book without marketing?",
      "Selling a book without any form of marketing is virtually impossible, especially in self-publishing. Marketing is crucial to reach potential readers, generate interest, and drive sales. Without it, your book is unlikely to gain the visibility needed to achieve success",
    ],
    [
      "What does book marketing look like?",
      "Book marketing involves using various online platforms and strategies to promote your book. This includes using social media, maintaining an engaging author website, and optimizing your Amazon profile. Key strategies encompass email marketing, search engine optimization (SEO), and paid advertisements. Together, these efforts help increase your book's visibility and attract a wider audience.",
    ],
  ];
  {
    /* FAQS Section Content */
  }
  return (
    <main>
      {/* Head */}
      <Head>
        <title>Book Marketing & Publishing Case Studies</title>
        <meta
          name="description"
          content="Read our book marketing & publishing case studies to know how we published & marketed thousands of ebooks online with proficient techniques."
        />
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/case-studies"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Book Marketing & Publishing Case Studies",
              image:
                "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
              "@id": "",
              url: "https://www.bestsellingpublisher.com/case-studies",
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
      {/* Head */}
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Hero Section */}
      {/* Reviews Section */}
      <Reviews />
      {/* Reviews */}
      {/* BrandLogos Section */}
      <BrandLogos
        title={`Get Your Book <span class="text-[#3EA99F]">Featured</span> Everywhere!`}
        desc={`We work with top authors and publishers, delivering effective marketing strategies that enhance visibility and drive success across multiple genres and platforms.`}
      />
      {/* BrandLogos Section */}

      {/* StandOut Section */}
      <StandOut
        title={`Boost Your Book Sales With Us`}
        desc={`Our expert marketing team crafts custom strategies to skyrocket your visibility & reader engagement. There are no gimmicks, just proven results to get your book noticed and bought.`}
      />
      {/* StandOut Section */}

      {/* FAQS Section */}
      <FAQS
        title={`Frequently <span class='text-[#3EA99F]'>Asked</span> Questions`}
        items={faqsContent}
      />
      {/* FAQS Section */}
      {/* MRContact Section */}
      <MRContact
        subTitle="No Matter What Choice You Make…"
        title="We Will Always Be Here"
        desc="The right publishing partner can make the difference between a manuscript that sits around gathering dust and a creative masterpiece that wins hearts all over the world. Broadway Publishers is the best printing service out there, and no other service comes close. Broadway Publishers has a team of experienced professionals who work on every part of the publishing process, from careful writing to interesting cover design and smart marketing. They make sure that every book gets the royal treatment it deserves. <br /> <br /> Broadway Publishers uses data-driven insights to ensure that a book is seen and read on as many platforms as possible, including the huge Amazon marketplace. When authors work with Broadway Publishers, they get personalized help every step of the way and access to a huge library of tools and expert knowledge."
        titleB="It's Time to Write Your Book!"
        descB="Now that you have an expert book editing, <br/> and publishing agency. What are you waiting for? "
      />
      {/* MRContact Section */}
    </main>
  );
};
export default OurReviews;
