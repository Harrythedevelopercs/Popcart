import Head from "next/head";
// components
import Tradition from "@/fa-component/Tradition";
import Audiencelp from "@/fa-component/Audiencelp5";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import {
  MRHero,
  MRContact,
  MRContent1,
  MRCards,
  MRVideoTestimonialslp,
} from "@/component";
import Logos from "media/images/banner/img2.webp";
import { Popup } from "@/component/LP-Eight"
import {
  Header,
} from "@/component/LP-Nine"
import BannerImg from "media/ahsan/homeBanner.webp";
import {
  Footer,
} from "@/component/LP-Two";

const MRQuestionersData = [
  {
    title: "Experience and Quality",
    desc: "We are a team of experienced publishers who are focused on one thing, providing excellent quality without exception.",
  },
  {
    title: "Industry Experts",
    desc: "As one of the best selling book publishers, our goal is to provide solutions that are optimal and groundbreaking.",
  },
  {
    title: "Range of Services",
    desc: "As one of the Broadway Publisherss, our services vary from book writing that whispers your story to the world, SEO content that puts you on the map, articles, magazines, and web copy that speaks volumes. Not to mention press releases and scripts that make waves — we've got all your writing needs covered! ",
  },
  {
    title: "Goal-Driven",
    desc: "Broadway Publishers is well-organized in its priorities. The satisfaction of our clients is our only and ultimate objective.",
  },
  {
    title: "Affordable Packages",
    desc: "Don’t you deserve a taste of victory too? We want you to realize all that you are capable of writing. Let us use reasonably priced digital publishing to realize your writing ambitions.",
  },
  {
    title: "Passion and Creativity",
    desc: "And guess what? Regarding passion and originality, we don't mind working through the night. Our desire is like an unquenchable candle. So what are you waiting for? ",
  },
];
const MRCardData = [
  {
    indexing: true,
    classes:
      "bg-white shadow-lg px-3 rounded-lg relative pt-[40px] pb-[40px] mt-[40px] transition-all duration-300 ease-in-out hover:!bg-[#3EA99F] hover:!text-white",
    cta: false,
    stepText: "",
    content: [
      {
        title: "Ebook Publishing Services",
        desc: "With our expert guidance, your ebook will be professionally formatted, designed, and distributed to reach a wider audience. We ensure seamless integration with major ebook platforms, maximizing your visibility and potential sales. From manuscript to digital format, we handle every step of the process with precision and care.",
      },
      {
        title: "Amazon Book Publishing",
        desc: `We specialize in <a href="https://www.bestsellingpublisher.com/amazon-book-publishing" rel="dofollow"> Amazon Publishing Services </a> to provide comprehensive support for authors looking to thrive in the competitive online marketplace. From formatting to optimization, we handle every aspect to ensure your book stands out and reaches its full potential on Amazon. With expertise in Kindle Direct Publishing (KDP) setup and keyword optimization, we maximize your book's reach and potential sales.`,
      },
      {
        title: "Book Editing and Publishing",
        desc: "With our dedicated team of editors tirelessly enhancing your manuscript's quality, and our publishing experts managing formatting, cover design, and distribution logistics, your book is in capable hands. Whether refining prose or perfecting layout, we guarantee every aspect reflects the professionalism and excellence your work deserves. Partner with us for comprehensive book editing services and publishing services, and let us bring your literary masterpiece to life.",
      },
      {
        title: "Book Marketing",
        desc: "We're dedicated to making your book shine in the crowsded marketplace! With customized strategies, we ensure your book reaches the right audience through effective promotion across multiple channels. Our experienced team not only specializes in publishing best sellers but also excels in employing strategic techniques to publicize your book. ",
      },
      {
        title: "Book Cover Design",
        desc: "We aim to create covers that not only catch the eye but also tell a story. Using creativity and attention to detail, we ensure your cover stands out on shelves and in online stores. Our team of book cover designers collaborate with you to understand the book’s theme, its characters, and tone to perfectly capture the essence of your book.",
      },
      {
        title: "Book Printing",
        desc: `From paperback to hardcover, we offer many options to suit your needs in our <a href="https://www.bestsellingpublisher.com/book-printing" rel="dofollow">book printing services.</a> Using cutting-edge technology, we take pride in delivering top-grade printing quality to ensure every detail of your book is reproduced with clarity and precision.`,
      },
    ],
  },
];
const MRCardData2 = [
  {
    classes:
      "bg-[#F2F2F2] shadow-lg px-4 rounded-lg relative py-[20px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-center",
    cta: true,
    content: [
      {
        title: "Submit Your Manuscript",
        border: "border-b border-[#707070]",
        padding: "pb-2",
        desc: "Send us your completed manuscript in any genre; whether you want fiction, autobiography or kids book publishing. We'll review it and guide you through the next steps.",
        minHeight: "min-h-[140px]",
      },
      {
        title: "Edit, Design & Format",
        border: "border-b border-[#707070]",
        padding: "pb-2",
        desc: "Our expert team polishes your manuscript with professional editing, custom cover design, and interior formatting tailored to your genre and audience.",
        minHeight: "min-h-[140px]",
      },
      {
        title: "Publish & Distribute Globally",
        border: "border-b border-[#707070]",
        padding: "pb-2",
        desc: "We handle publishing and distribution, getting your book live on Amazon and other major platforms. You keep the rights, profits, and full creative control.",
        minHeight: "min-h-[140px]",
      },
    ],
  },
];
const Home = () => {

  return (
    <main>
      <Head>
        <title>
          Broadway Publishers | Home Of Professional Book Publishing
        </title>
        <meta
          name="description"
          content="Publishing best sellers has never been easier with us. We are the premium book publishers for hire. Visit our website!"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta
          property="og:url"
          content="https://www.bestsellingpublisher.com//lp/lp5"
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/nJwaBs__P2JfMUeYJ4vmjQ/1694b409-a46e-4bc7-7a4c-4be4438e3f00/public"
        />

        {/* canonical: */}
        <link rel="canonical" href="https://www.bestsellingpublisher.com/lp/lp5" />

      </Head>
      <Header colorChange={true} />
      <MRHero
        title={`Start Publishing Your Book Today With Broadway Publishers`}
        desc="From first-time writers to bestselling authors and beloved children's book authors, our global self publishing services support every kind of storyteller. From professional editing and stunning cover design to worldwide distribution across Amazon, Barnes & Noble, and more, we help you get your book published."
        containImg={BannerImg}
        logos={Logos}
        form={false}
        counter={true}
      />
      <Enlistedlogo />
      <Tradition
        title="A Look Inside Our World as a Book Publisher"
        desc="Books that made it big through self publishing on Amazon."
      />
      <Audiencelp />
      {/* <MRQuestioners
        subTitle="Time Again Folks, Do You Want to Be Our Next Happy Author?"
        title="Here’s Why We Are The Best Book Publishers For Hire"
        data={MRQuestionersData}
      /> 
      <PublishingNewComponent
        subtitle="Becoming the Next Best Seller has"
        title="Never Been Easier with "
        desc="Broadway Publisherss."
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />*/}
      <MRCards
        title="Explore the Services We Offer"
        desc="We take pride in providing a remarkable range of services. That said, it’s your moment to make your <br class='mr-lg:block hidden' /> publishing dreams come to life."
        gridsClasses="mr-lg:grid-cols-3 mr-sm:grid-cols-2 grid-cols-1 !gap-x-8"
        cta={true}
        data={MRCardData}
      />
      <MRCards
        title={`Book Publishing Made Easy <br class='mr-lg:block hidden' /> Just 3 Steps to Get Started `}
        desc="Publish children’s books, novels, or autobiographies effortlessly and become an Author!"
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />

      <MRContent1
        subTitle="We are the Trailblazing"
        title="Pioneers of Publishing Best Sellers on Amazon"
        desc="Our Amazon Publishing Services are intended to help authors launch their works and achieve the best possible results on the Amazon platform. These could be cover design, formatting help, marketing advice, and editorial support. Through Amazon's extensive distribution system and marketing capabilities, authors partnered with Amazon Broadway Publisherss can reach a global audience and enhance visibility to potential readers worldwide. "
        listTitle="Our Package Include"
        list={[
          "Idea research and analysis",
          "Manuscript drafting",
          "Proofreading to eliminate errors",
          "Critical reviews",
          "Book Cover design and illustration",
          "Preparing text for publication",
          "Traditional and self-publishing",
          "Publishing on best libraries",
          "Video Book Trailers",
          "Branding and marketing",
        ]}
        img1="/images/flods/broader.webp"
      />
      {/* <MRContent1
        subTitle="Would you like to know a secret?"
        title="Less Is Never More for Us – It Can Be If You Want It to Be!"
        img1="/images/flods/advice.png"
        direction="flex-row-reverse"
      /> 
      <Plans />
      <SwiperComponents />*/}
      {/* Video Testimonials Section */}
      <MRVideoTestimonialslp />
      {/* Video Testimonials Section */}

      <MRContact
        subTitle="No Matter What Choice You Make…"
        title="We Will Always Be Here"
        desc="The right publishing partner can make the difference between a manuscript that sits around gathering dust and a creative masterpiece that wins hearts all over the world. Broadway Publishers is the best printing service out there, and no other service comes close. Broadway Publishers has a team of experienced professionals who work on every part of the publishing process, from careful writing to interesting cover design and smart marketing. They make sure that every book gets the royal treatment it deserves. <br /> <br /> Broadway Publishers uses data-driven insights to ensure that a book is seen and read on as many platforms as possible, including the huge Amazon marketplace. When authors work with Broadway Publishers, they get personalized help every step of the way and access to a huge library of tools and expert knowledge."
        titleB="It's Time to Write Your Book!"
        descB="Now that you have an expert book editing, <br/> and publishing agency. What are you waiting for? "
      />
      <Footer />
      <Popup popupDesc="HIRE <strong>TOP GHOSTWRITERS AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK" />
    </main>
  );
};

export default Home;
