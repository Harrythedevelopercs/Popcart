import MarketBook from "@/component/AudioBooklp/MarketBook";
import {
  CaseStudies,
  ContactUs,
  Header,
  Hero,
  Methods,
  Portfolio,
  SecondaryForm,
  Services,
  StandOut,
  Testimonials,
  WhyChoose,
  WorkingWithUs,
} from "@/component/LP-Four";
import { FAQS, Footer, MarketingProcess } from "@/component/LP-Two";
// Testimonial Icons
import Icon1 from "media/book-illustrations/google.png";
import Icon2 from "media/book-illustrations/trustPilot.png";
// Marketing Image
import StreamlinedBooks from "media/lp-four/streamlinedBooks.png";
import Head from "next/head";
import Script from "next/script";
export default function LPFour() {
  {
    /* Testimonials Section Content*/
  }
  const testimonialData = [
    [
      "John Thompson",
      "CEO at Creative Writers Inc.",
      Icon1,
      "They transformed my manuscript into a bestseller. Their professional editing and strategic marketing were game-changers for my book's success.",
    ],
    [
      "Emma Larson",
      `Author of "Whispers of the Heart"`,
      Icon1,
      "I couldn't be happier with the results. They handled everything from cover design to distribution, making the whole process seamless and stress-free.",
    ],
    [
      "Michael Brown",
      "Founder of StoryWeaver Press",
      Icon1,
      "Broadway Publishers helped me navigate the complexities of Amazon KDP, resulting in significant sales and visibility for my book.",
    ],
    [
      "Sarah Evans",
      "Freelance Writer",
      Icon1,
      "Their attention to detail and dedication to my book's success were evident in every step of the process.",
    ],
    [
      "David Wilson",
      "Editor at Bright Minds Media",
      Icon2,
      "Their marketing strategies were particularly effective, driving impressive engagement and sales, which exceeded my expectations. ",
    ],
  ];
  {
    /* Testimonials Section Content*/
  }
  {
    /* MarketingProcess Section Content*/
  }
  const accordionContent = [
    [
      "Manuscript Evaluation",
      "We start with a thorough manuscript evaluation, providing constructive feedback and identifying areas for improvement to ensure your book is polished and ready for publication.",
    ],
    [
      "Professional Editing",
      "Our expert editors refine your manuscript, correcting grammar, improving flow, and enhancing the overall readability to make your story shine.",
    ],
    [
      "Custom Design",
      "We create custom cover designs and format the interior layout to match your vision, ensuring your book looks professional and appealing.",
    ],
    [
      "Strategic Marketing",
      "Our marketing team crafts a personalized plan, utilizing SEO, social media, and targeted ads to boost your book's visibility and reach the right audience.",
    ],
    [
      "Distribution & Launch",
      "We handle the distribution across major platforms like Amazon, Apple Books, and more, ensuring a successful launch and ongoing support to keep your book in the spotlight.",
    ],
  ];
  {
    /* MarketingProcess Section Content*/
  }
  {
    /* FAQS Section Content */
  }
  const faqsContent = [
    [
      "How long does it take to publish a book?",
      "The book publication time varies, typically ranging from a few months to a year. Factors like editing, design, and marketing plans impact the timeline. We streamline the process, ensuring efficient progress while maintaining high-quality standards, so your book reaches readers as soon as possible.",
    ],
    [
      "Can I publish both print and e-book versions?",
      "Yes, you can publish both print and e-book versions of your book. We offer comprehensive services to format, design, and distribute your book across multiple platforms, ensuring it reaches a wide audience in both physical and digital formats.",
    ],
    [
      "Do I retain the rights to my book?",
      "Yes, with our self-publishing services, you retain all rights to your book. For traditional publishing, rights depend on the contract terms. We provide clear guidance on rights management, ensuring you make informed decisions that best suit your publishing goals.",
    ],
  ];
  {
    /* FAQS Section Content */
  }
  return (
    <div className="font-sans">
      <Head>
        <title>Top Book Publishing Services - Broadway Publishers</title>
        <meta
          name="description"
          content="Join over 500 successful authors and achieve bestseller status with premium-grade book publishing services at Broadway Publishers!"
        />
        <meta
          name="google-site-verification"
          content="xsimMs7zxe8r99xjQlDHSjHap86u9irM9JTHkI3xNpg"
        />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-11022581138"
      />

      <Script strategy="afterInteractive" id="google-ads-init">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'AW-11022581138');
  `}
      </Script>
      <Header />
      <Hero />
      <MarketBook
        title="How We Publish Your Book?"
        desc="As one of the premium book publishers, we provide expert editorial services, high-quality cover design, and professional formatting to make your book stand out. Our distribution network spans major retailers, ensuring your book is available both online and in physical stores. Additionally, we handle all the logistics of printing, distribution, and sales, so you can focus on what you do best—writing!"
        formTitle="Get Your Free Publishing Quote"
        formDesc="Get an estimate for turning your manuscript into a <br class='mr-lg:block hidden' /> published book."
      />
      <CaseStudies />
      {/* StandOut Section */}
      <StandOut
        title={`Publish Your Book with Confidence and Expertise!`}
        desc={`We’ve helped over 500 authors achieve bestseller status with personalized publishing strategies, data-driven insights, and expert editorial support. Join the ranks of successful authors who trust us to amplify their reach and maximize their book’s impact!`}
      />
      {/* StandOut Section */}
      {/* Portfolio Section */}
      <Portfolio
        title={`Browse Our Genre-Varied Books!`}
        desc={`Find your next read among our genre-varied books! We offer a wide selection, from thrilling mysteries to heartfelt romances, ensuring there's something for every reader's taste.`}
      />
      {/* Portfolio Section */}
      <Services />
      <SecondaryForm />
      <Methods />
      <WorkingWithUs />
      {/* Testimonials Section */}
      <Testimonials
        title="Insights from Our Valued Clients"
        desc="Hear what our valued clients have to say about their successful publishing journeys with us."
        data={testimonialData}
      />
      {/* Testimonials Section */}
      {/* MarketingProcess Section */}
      <MarketingProcess
        title={`Our Streamlined Book Publishing Process`}
        desc={`Learn about our streamlined book publishing process that takes your manuscript from draft to bestseller with ease!`}
        items={accordionContent}
        booksImage={StreamlinedBooks}
      />
      {/* MarketingProcess Section */}
      <WhyChoose />
      {/* ContactUs Section */}
      <ContactUs />
      {/* ContactUs Section */}
      {/* FAQS Section */}
      <FAQS title={`Frequently Asked Questions`} items={faqsContent} />
      {/* FAQS Section */}
      {/* Footer Section */}
      <Footer />
      {/* Footer Section */}
    </div>
  );
}
