import Head from "next/head";
import Tradition from "@/fa-component/Tradition";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import SwiperComponent from "@/component/SwiperComponent";
import BTM from "@/component/bottomLogos";
import CTA from "@/component/cta3";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import { MRHero, MRContact, MRCards, MRContent1 } from "@/component";
import Sales from "media/ahsan/sales.png";
import Compatibility from "media/ahsan/compatibility.png";
import UniqueIllustrations from "media/ahsan/device-compatibility.png";
import EasyUpload from "media/ahsan/easyuploadCover.png";
import BestFriendMarco from "media/ahsan/bestFriendMarco.png";
import IllustrationPackages from "@/component/IllustrationPackages/IllustrationPackages";
import Logos from "media/images/banner/img2.webp";
const MRCardData = [
  {
    classes:
      "bg-[#fff] shadow-lg px-3 rounded-2xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#3EA99F] hover:!text-white text-center",
    content: [
      {
        icon: Sales,
        title: "Increased <br/> Sales",
      },
      {
        icon: Compatibility,
        title: "All-Device <br/> Compatibility",
      },
      {
        icon: EasyUpload,
        title: "Easy To <br/> Upload",
      },
      {
        icon: UniqueIllustrations,
        title: "Unique <br/> Illustrations",
      },
    ],
  },
];
const MRCardData2 = [
  {
    classes:
      "bg-[#fff] shadow-lg mr-2xl:!px-5 mr-md:!px-4 px-3 rounded-xl relative py-[40px] mr-lg:mt-[30px] mr-md:mt-[20px] mt-[16px]  transition-all duration-300 ease-in-out group hover:!bg-[#000] hover:!text-white text-left",
    stepText: "Step",
    indexing: true,
    content: [
      {
        textColor: "text-[#3EA99F] group-hover:text-white",
        title: "Sign Up",
        desc: "Sign up now and share your exciting ideas about illustrative design. Please consult with our highly trained consultants and explain to them about your needs and requirements. Please fill out our contact us form and get in touch with our consultant right away",
      },
      {
        textColor: "text-[#3EA99F] group-hover:text-white",
        title: "Illustration Commences",
        desc: "After you've finalized your favorite illustration design, our expert illustrators commence the work right away on your custom illustration. Each illustration can take some time to prepare as they try to create something unique and charming",
      },
      {
        textColor: "text-[#3EA99F] group-hover:text-white",
        title: "Final Delivery",
        desc: "After we've finalized the design and got the designed approved by you, we then commence our final phase to provide you with the print-ready professional PDF files and finally, send you the complete formats and high-quality final files.",
      },
    ],
  },
];

const BookCoverIllustration = () => {
  const packagesData = [
    {
      title: "Half Page Illustration",
      amount: "before:content-['$75']",
      desc: "As the name says, this is an illustration that fills half a page. While it can be detailed, due to it's smaller size, the background will be less detailed than a full page illustration.",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Two Characters",
        "Background",
        "Extra Characters - $15 Each",
      ],
    },
    {
      title: "Full Page Illustration",
      amount: "before:content-['$105']",
      desc: "This is a full page illustration where we pull out all the stops and include lots of detail! We can also leave space for your text if needed.",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Three Characters",
        "Detailed Background",
        "Extra Characters - $15 Each",
      ],
    },
    {
      title: "Spread Illustration",
      amount: "before:content-['$190']",
      desc: "Spread across two full pages, normally with text on the illustration. While a mix of different illustration sizes makes a beautiful book, going all out and making your whole book double- page spreads will undoubtedly will make it amazing!",
      note: "Add on: £50 For Expicted Services",
      list: [
        "Up To Six Characters",
        "Detailed Background",
        "Extra Characters - $15 Each",
      ],
    },
  ];
  return (
    <main>
      <Head>
        <title>Book Cover Illustration | Best Book Publishing Company</title>
        <meta
          name="description"
          content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!"
        />
      </Head>
      <MRHero
        title="Book Cover Illustration Services"
        desc="Achieve more with our top-of-the-line book cover illustration services that make your books visually appealing and irresistible."
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/bookCoverillustration1.png')]"
      />
      <Enlistedlogo />
      <MRCards
        subTitle="Let Us Help You"
        title={`Give Your Book Cover a Tremendous Finish`}
        desc="It would be best to have a team of professional book cover illustrators that recognize the value of cover images and drawings in kids' literature, art books, comics, graphic novels, digital book cover, tutorials, and guide books. The right illustrations are necessary to represent the theme of the book and the author's thought process. Our expert illustrators will produce compelling drawings that will excite your viewers, whether you’re searching for graphics for your entire book or just the cover."
        gridsClasses="mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-8 mr-xl:w-[100%] mx-auto"
        cta={true}
        variant="icons"
        data={MRCardData}
      />
      <Tradition
        title="Some Of Our Best Book Cover Illustrations"
        desc="We have worked on a variety of projects for clients that included creating picture book illustrations, illustrated stories, cartoon books, kid’s comics, children's encyclopedia, and more. Have a look at our best sample for children's book illustrations below!"
        background="bg-[url('../../public/ahsan/bgBlack2.png')]"
        classes="!text-[#fff]"
        txtColor="!text-[#fff]"
      />
      <MRContent1
        title="What Are The Types Of Illustrations For Children’s Books?"
        desc="From Acrylic To Charcoal To Watercolor, We Know Exactly What To Incorporate Onto Our Illustrations To Help Your Audience Connect Better With Your Brand."
        list={[
          "<span class='text-[#00c0e4] font-bold'>Qualified Illustrators: </span>Every Work Of Our Client Is Catered By An Experienced Professional To Ensure That The Work Is Perfect.",
          "<span class='text-[#00c0e4] font-bold'>Quickest Turnarounds: </span>Late Delivery Of Services Is Something That Puts Customers Off, And We Never Let That Happen. We Always Deliver On Time!",
          "<span class='text-[#00c0e4] font-bold'>Satisfaction Guaranteed: </span>Our Experts Present You With Numerous Illustrations And Revise The Approved Ones Until You’re Fully Satisfied.",
          "<span class='text-[#00c0e4] font-bold'>Unlimited Revisions: </span>We Offer Unlimited Quick Revisions To Ensure That The Final Draft Lives Up To Our Client's Expectations.",
        ]}
        listClasses="grid grid-cols-2 gap-3"
        img1={BestFriendMarco}
        direction="flex-row-reverse"
      />
      <PublishingNewComponent
        subtitle="Share Your Book Cover Illustration Requirements With"
        title="Our Experts For The Best Results."
        desc="Connect With Us Today!"
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <IllustrationPackages packagesData={packagesData} />
      <BTM />
      <CTA />
      <MRCards
        subTitle="Carrying out"
        title={`Steps To Get Started!`}
        desc={`We are known for our outstanding, extraordinary quality illustrations and our dependable services at extremely affordable prices. Here is our 3-step process for a charming illustrative design!`}
        gridsClasses="mr-xl:grid-cols-3 mr-lg:grid-cols-3 mr-sm:grid-cols-2 !gap-x-5"
        cta={false}
        variant="steps"
        data={MRCardData2}
      />
      <SwiperComponent />
      <MRContact BGimage="before:!bg-[url('../../public/ahsan/bookCoverssBGStory.png')]" />
    </main>
  );
};

export default BookCoverIllustration;
