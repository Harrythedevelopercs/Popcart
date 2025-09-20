import Head from "next/head";
import Tradition from "@/fa-component/Tradition";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import SwiperComponent from "@/component/SwiperComponent";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import { MRHero, MRContact, MRQuestioners, MRContent1 } from "@/component";
import Logos from "media/images/banner/img2.webp";
const MRQuestionersData = [
  {
    title: "What Is Self Publishing?",
    desc: "Self-publishing is the process of publishing your own book without the need for a traditional publisher. This means that you will be responsible for all aspects of the publishing process, from editing and design to printing and distribution. While self publishing services can be a lot of work, it also gives you a lot of control over your book and the publishing process.",
  },
  {
    title: "Why Would I Want To Self Publish My Book?",
    desc: "There exists multiple reasons why someone might want to self publish their book. Maybe you have a story that you feel is important and needs to be told, but you can’t find a traditional publisher who is interested. Or maybe you want to be in control of the publishing process and your book’s destiny. Either way, self publishing services can be a great way to get your book into the world.",
  },
  {
    title: "How Do I Self Publish My Book?",
    desc: "There are a few different ways to go about self publishing your book. You can hire a professional books publisher to print your book for you or use an online print-on-demand service offered by Broadway Publishers. You will also need to create a book design and cover and format your book for printing. Once your book is ready, you can start promoting and selling it to readers.  ",
  },
  {
    title: "What Are The Benefits Of Self Publishing?",
    desc: "A: Best self publishing services give you a lot of control over your book and the publishing process. You can determine the price of your book, the format in which it will be printed, and how it will be distributed. You can also reach a wider audience with the help of the best self publishing companies since your book will be available for sale online and in bookstores. And, of course, you get to keep all the profits from your book sales! ",
  },
];

const ChildrenIllustrationFa = () => {
  return (
    <>
      <Head>
        <title>Children Book Illustration in Texas</title>
        <meta
          name="description"
          content="With an experience of over 20+ years we are Texas' top children book illustration company. We design book illustrations that keeps children engaged."
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        />
        <link
          rel="canonical"
          href="https://www.broadwaypublishers.com/children-Illustration-tx"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Children Book Illustration in Texas",
              image:
                "https://www.broadwaypublishers.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.1f749c62.png&w=384&q=95",
              "@id": "",
              url: "https://www.broadwaypublishers.com/children-Illustration-tx",
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
        title="Pinnacle Publishing For Children's Illustration Books"
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/rendering-cartoon-fantasy-scene-illustration.png')]"
      />
      <Enlistedlogo />
      <Tradition
        title="Top-Notch Children's Illustration Services "
        desc="Our Skilled Publishing Experts Can Guide You Through The Publishing Process"
      />
      <MRQuestioners
        subTitle="Be a Part of the Best Sellers’ Fraternity"
        title="How Best Self Publishing Services Companies Can <br class='hidden mr-lg:block'/> Help You Succeed As A Published Author? "
        desc="As an author, you have a lot of control over the success of your book. But did you know that there are companies out there whose sole purpose is to help you self-publish your book and make it a success? These are called self publishing book services companies, and they can provide everything from writing and editing to marketing and distribution."
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
        title="Publishing Your Dreams With The Best Seller Publishing Services!"
        desc="“Whatever you may have heard, self-publishing is not a shortcut to anything. Except maybe insanity. Self-publishing, like every other kind of publishing, is hard work. You don’t wake up one morning good at it. You have to work for that.” — Zoe Winters <span class='h-3 block'></span> When you're ready to publish your book, you want to ensure you're working with a reputable and reliable self-publishing company. Broadway Publishers is one of the best in the business, and we're proud to offer our services to authors looking to self-publish. Call us today to become a published author!."
        img1="/ahsan/self-publishing-broder.png"
      />
      <BTM />
      <CTA />
      <SwiperComponent />
      <MRContact />
    </>
  );
};

export default ChildrenIllustrationFa;
