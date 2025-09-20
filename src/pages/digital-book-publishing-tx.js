import Head from "next/head";
import Tradition from "@/fa-component/Tradition";
import SwiperComponent from "@/component/SwiperComponent";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import { MRHero, MRContact, MRQuestioners, MRContent1 } from "@/component";
import Logos from "media/images/banner/img2.webp";
const MRQuestionersData = [
  {
    title: "You'll Save Time:",
    desc: "A professional book publishing service will handle all the technical aspects of creating and formatting your book, so you can focus on writing.",
  },
  {
    title: "You'll Get Expert Help: ",
    desc: "A good digital book publishing service will have a team of experienced editors, designers, and marketers who can help make your book the best it can be.",
  },
  {
    title: "You'll Reach A Wider Audience: ",
    desc: "With the help of a digital book publishing service , your book will be available to readers all over the world. ",
  },
  {
    title: "You'll Make More Money: ",
    desc: "A professional book publishing service will ensure your book is priced correctly and marketed effectively, so you can earn more royalties. ",
  },
];

const DigitalBookPublishingFa = () => {
  return (
    <main>
      <Head>
        <title>Digital Book Publishing Services in Texas</title>
        <meta
          name="description"
          content="Publishing a book digitally in Texas is now made easy as Broadway Publisherss are here to help. We provide top quality of publishing services in TX."
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="canonical"
          href="https://www.broadwaypublishers.com/digital-book-publishing-tx"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Digital Book Publishing in Texas",
              image:
                "https://www.broadwaypublishers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
              "@id": "",
              url: "https://www.broadwaypublishers.com/digital-book-publishing-tx",
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
        title="Digital Book Publishing Services To Help You Get Your Book Into The Hands Of Interested Readers!"
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/front-view-beutiful-woman-working.png')]"
      />
      <Enlistedlogo />
      <Tradition
        title="Our Best Seller Publishing Services"
        desc="Let us help you make an impact through your words!"
      />
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="Why Should You Hire Us, The Digital Book Publishers?"
        desc="Amazon KDP is a self publishing service from Amazon that allows authors to publish and distribute their books worldwide. It's a fast, easy and affordable way to get your book into the hands of readers looking for new titles to enjoy."
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
        title="We Are Better Than Other Digital Book Publishing Companies Out There!"
        desc="We enjoy being a prominent name based on several demanding features. Not to mention, our book publishers provide authors with platforms to publish and sell their books, as well as reach new readers. In addition, our seasoned publishers offer editorial and marketing services to help authors promote their books. Above all else, our digital book publishers also partner with traditional print publishers, giving authors the option to publish their books in both formats. This way, you are able to reach the widest possible audience for your work! <span class='h-3 block'></span> This is how we are different from others. First, our books publisher offer a unique approach to digital book publishing that allows authors to keep more of the rights to their work. This means that authors can control how their books are distributed and marketed, and they can also receive a higher percentage of the royalties. Last but not least, we offer our authors competitive royalties and marketing support, so they can continue to grow their careers and reach new readers."
        img1="/ahsan/digital-book-broder.png"
      />
      <BTM />
      <CTA />
      <SwiperComponent />
      <MRContact />
    </main>
  );
};

export default DigitalBookPublishingFa;
