import Head from "next/head";
import Tradition from "@/fa-component/Tradition";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import SwiperComponent from "@/component/SwiperComponent";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import { MRHero, MRContact, MRQuestioners, MRContent1 } from "@/component";
import Logos from "media/images/banner/img2.webp";
const AmazonPublishingFa = () => {
  const MRQuestionersData = [
    {
      title: "What is Amazon KDP?",
      desc: "Amazon KDP is a self publishing service from Amazon that allows authors to publish  and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy.",
    },
    {
      title: "How Does Amazon KDP Work?",
      desc: "Amazon KDP works by allowing authors to upload their book files to the Amazon Kindle Store, where they can be sold and downloaded by readers. Authors can also choose to have their books printed and shipped to customers via Amazon's CreateSpace service.",
    },
    {
      title: "How Much Does It Cost To Publish With Amazon KDP?",
      desc: "It costs nothing to publish your book with Amazon KDP. You will only be charged when your book is sold, and you will receive a 70% royalty on each sale.",
    },
    {
      title: "What Are The Requirements For My Book?",
      desc: "Your book must be at least 20 pages long and have a professional cover design. Additionally, your book must be formatted correctly to be accepted into the Amazon Kindle Store.",
    },
    {
      title: "What Are The Benefits Of Publishing With Amazon KDP?",
      desc: "It costs nothing to publish your book with Amazon KDP. You will only be charged when your book is sold, and you will receive a 70% royalty on each sale.",
    },
  ];

  return (
    <main>
      <Head>
        <title>Amazon Publishing Services in Texas</title>
        <meta
          name="description"
          content="As the top amazon publishing services in Texas we have been trusted by 5,000+ authors making us the largest amazon publishers in TX. Get your book published today!"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="canonical"
          href="https://www.bestsellingpublisher.com/amazon-publishing-tx"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Amazon Book Publishing in Texas",
              image:
                "https://www.bestsellingpublisher.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
              "@id": "",
              url: "https://www.bestsellingpublisher.com/amazon-publishing-tx",
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
        title="Amazon Publishing Services Company To Make Your Book Available To Millions Of Readers!"
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/amazon-publishing-banner.png')]"
      />
      <Enlistedlogo />
      <Tradition
        title="Top-Notch Amazon Self Publishing Services"
        desc="Let our publishing pros make your books rock on amazon!"
      />
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Some Questions Whirling Around Your Mind About <br class='hidden mr-lg:block' /> Amazon KDP Publishing Have Answers Over Here!"
        data={MRQuestionersData}
      />
      <PublishingNewComponent
        subtitle="Enlist Yourself with the All-Time Best "
        title="Your Book Deserves Only The"
        desc="Broadway Publisherss."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <MRContent1
        title="Amazon Ebook Publishing To Help Your Work Be A Cut Above The Rest!"
        desc="Amazon eBook publishing is a great way to get your work out without spending much money. If you're looking for a company that can help you publish your Amazon eBook, look no further than us! We have the experience and expertise to get your book onto Kindle and into the hands of readers worldwide. We know the ins and outs of the Amazon digital book publishing process and can help you navigate it successfully. We'll work with you to format and convert your book, design a professional cover, and create an engaging description. We'll also help you price your book competitively and promote it effectively. And, of course, we'll take care of all the technical details involved in getting your book published on Amazon. If you're ready to take your eBook publishing dreams to the next level, contact us today! We'll be happy to answer any of your questions and get you started on the path to Amazon success owing to our amazon publishing services!"
        img1="/images/flods/amazonpublishingbroder.png"
      />
      <BTM />
      <CTA />
      <SwiperComponent />
      <MRContact />
    </main>
  );
};

export default AmazonPublishingFa;
