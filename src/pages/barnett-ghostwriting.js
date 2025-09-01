import WS from "@/component/writingservices";
import BTM from "@/component/bottomLogos";
import WMODE1 from "@/component/workMode1";
import CTA3 from "@/component/cta3";
import SwiperComponents from "@/component/SwiperComponent";
import { MRContact, MRContent1, MRHero } from "@/component";
import Enlistedlogo from "@/fa-component/Enlistedlogo";
import Tradition from "@/fa-component/Tradition";
import PublishingNewComponent from "@/fa-component/PublishingNewComponent";
import Head from "next/head";
import Logos from "media/images/banner/img2.webp";
const BarnettGhostwriting = () => {
  return (
    <main>
      <Head>
        <title>Barnett Ghostwriting | Best Book Publishing Company</title>
        <meta
          name="description"
          content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!"
        />
      </Head>
      <MRHero
        title="Your Source For Superior Book Writing!"
        desc="Which book writing service is your need? You will find everything you are looking for, from professional writers to top marketers"
        logos={Logos}
        counter={true}
        classes="bg-right bg-center !py-[80px]"
        beforeImg="mr-md:before:bg-[url('../../public/ahsan/barnett-ghostwriting.png')]"
      />
      <Enlistedlogo />
      <WS />
      <MRContent1
        subTitle="Give Yourself The Experience Of"
        title="Working With The Most Demanded Specialists"
        desc="Have you got a creative story in mind? Share it with the world because we truly believe every story is worth sharing, and to display your story in the finest form to the world, our ghostwriters are definitely worthy of your hire. To achieve the best, there goes a lot of hard work and dedication, which our company doesn’t lack. Our team works effortlessly to deliver you an exciting project. All the ideas and your story are transformed into a masterpiece by our writers who flaunt the work with beautiful words."
        img1="/ahsan/demand_specialist.png"
        listTitle="Our Services Include"
        list={[
          "E-Book Writing",
          "Audio Book",
          "Proofreading Services",
          "Book Cover Designing",
          "Book Editing",
          "Author's Website",
          "Book Formatting",
          "Book Publishing",
          "Video Trailer",
          "Book Marketing",
        ]}
      />
      <Tradition
        subtitle="Our Impressive Work"
        title="From Rough Draft To Successful <br/> Publishing We Have Made It Possible"
        desc="We make it possible for you to make your book the next big read for the readers. Bring us your rough drafts, and let our team work magnificently on their execution."
        background="bg-[url('../../public/ahsan/bgBlack2.png')]"
        classes="bg-cover !text-[#fff]"
        txtColor="!text-[#fff]"
      />
      <MRContent1
        subTitle="Are You In Pursuit Of"
        title="Getting Your Book Written By The Top Industry Experts?"
        desc="Your million-dollar story is worth bringing alive. And for that, our ghostwriters are dedicated to the execution of your book and work tirelessly to mold the story into the form of a picture-perfect book. We guarantee that the services you take from us are truly unmatchable, and you are sure to meet your desired results."
        list={[
          "Being Published On All Online Platforms, Such As Kindle.",
          "Fast And Affordable Self-Publishing.",
          "Additions, Revisions, And Re-Editions!",
        ]}
        listClasses="grid-cols-1"
        img1="/assets/images/newimg/industry-section.png"
      />
      <BTM />
      <CTA3 />
      <MRContent1
        subTitle="Market your book"
        title="In The Best Possible Way!"
        desc="However, when you choose to work with Barnett Ghostwriting, you must remember that you have chosen to work with a highly professional company that is undoubtedly the one-stop solution for all your marketing needs."
        list={[
          "Video Trailer",
          "Audio Book",
          "Book Cover Designing",
          "Author's Website",
          "Book Publishing",
          "Social Media Marketing",
          "Book Translation",
          "Marketing Consultation",
          "Amazong Marketing",
          "Barnes & Noble Nook Edition",
        ]}
        direction="flex-row-reverse"
        img1="/ahsan/spacious-bookstore-interior.png"
      />
      <PublishingNewComponent
        subtitle="Are You Ready To Be On The"
        title="List Of Best-Selling Authors?"
        desc="Let’s Work Together!"
        bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
        classes="bg-cover bg-no-repeat"
        textBG="bg-primary-100"
      />
      <WMODE1
        subtile="Carrying out"
        title="The Fastest Work Mode, Get Your <br className='mr-lg:block hidden' /> Work in 4 Easy Steps"
        desc="Working with us gives you prompt delivery of work because we have set up everything systematically. Here is our 4 step process, which keeps us streamlined from the beginning."
        GridCols="grid-cols-4"
        StoryPlotData={[
          {
            steps: "Step 01",
            heading: "Submit Your Manuscript",
            desc: "After making up your mind about working with us, you place your order.",
          },
          {
            steps: "Step 02",
            heading: "Edit & Design",
            desc: "We refine your text and design your book's cover.",
          },
          {
            steps: "Step 03",
            heading: "Review & Approve",
            desc: "You review our work and give the green light.",
          },
          {
            steps: "Step 04",
            heading: "Publish & Distribute",
            desc: "Your book is published and distributed on schedule.",
          },
        ]}
      />
      <SwiperComponents />
      <MRContact />
    </main>
  );
};

export default BarnettGhostwriting;
