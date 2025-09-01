import {
  Benifits,
  ContactUs,
  Header,
  Hero,
  IllustrationsProcess,
  Portfolios,
  StandOut,
  StandOut2,
  Testimonials,
  TypesOfIllustrations,
  WhyChoose,
} from "@/component/LP-Three"
import Head from "next/head"
import Book1 from "media/book-illustrations/portfolio/7.png"
import Book2 from "media/book-illustrations/portfolio/8.png"
import Book3 from "media/book-illustrations/portfolio/9.png"
import Book4 from "media/book-illustrations/portfolio/10.png"
import Book5 from "media/book-illustrations/portfolio/11.png"
// Testimonial Icons
import Icon1 from "media/book-illustrations/google.png"
import Icon2 from "media/book-illustrations/trustPilot.png"
import { FAQS, Footer } from "@/component/LP-Two"
import { Popup } from "@/component/LP-Eight"
const BookIllustrationServices = () => {
  const tabContent = [
    {
      name: "Full-Page Illustrations",
      img: Book1,
      title: "Full-Page Illustrations",
      desc: "Our children's book illustration services provide detailed full-page illustrations that breathe life into the reading experience. Full-page illustrations as the name indicates occupy the entire page and reflect detailed scenes. The text is thoughtfully placed within these detailed backgrounds and finely designed characters to show the pivotal moments in your narrative. They transport children right into the heart of a story, make lasting impressions, and evoke memorable scenes that last a long time even after they close the book.",
    },
    {
      name: "Spot Illustrations",
      img: Book2,
      title: "Spot Illustrations",
      desc: "Spot Illustrations are small, charming pieces of art—a quarter of a page or less in size. They frequently contain no or minimal background and are just the right piece to adorn chapter headings or reside in corners fabulously nestled within the text. Imagine a delicate little drawing of a butterfly beside a poem or a small, playful character greeting readers at the start of each chapter. Our children's book illustrators add magic to every page with expertly crafted spot illustrations. ",
    },
    {
      name: "Half-Page Illustrations",
      img: Book3,
      title: "Half-Page Illustrations",
      desc: "These illustrations take up half a page with eye-catching art while leaving ample room for your text. They contain more details and backgrounds than spot illustrations, but they do not overwhelm a story as full-page illustrations do. Think of depicting a lively scene in a bustling marketplace or a tranquil moment in a magical forest, our expert half-page illustrators enrich your story so that each scene becomes memorable and draws young readers into the world you’ve created.",
    },
    {
      name: "Spread Illustrations",
      img: Book4,
      title: "Spread Illustrations",
      desc: "Spread illustrations are perfect for a picture book, providing stunning visual feasts spanning two full pages to create a grand, uninterrupted storytelling experience. We offer book illustrators for hire who can open up your whole book with spectacular spreads. These expansive canvases fully envelop young readers with your story through sweeping landscapes, dramatic action scenes, and detailed panoramas that fire the imagination. A mix of spreads and other illustration types can also make your book truly engaging and unforgettable.",
    },
    {
      name: "Book Cover Design",
      img: Book5,
      title: "Book Cover Design",
      desc: "The cover is the first thing readers see, and it really needs to convey the magic and adventure within. A beautiful and well-designed cover by our children's book illustration team feels like a promise to an adventure-filled journey that sparks the imagination of children and parents alike. Set the tone of your book with a vibrant and engaging design. Let our illustrators help you make that powerful first impression with a children's book cover that really says it all about your story.",
    },
  ]
  {
    /* Testimonials Section Content*/
  }
  const testimonialData = [
    [
      "Hannah Daniel",
      "Author at Storytime Adventures",
      Icon1,
      "Their creativity and dedication brought my story to life. Alexis and her team turned a complex topic into something fun and engaging.",
    ],
    [
      "Mark Smith",
      "Children’s Book Author at Imagination Press",
      Icon1,
      "The team transformed my ideas into beautiful visuals. Working with them was a highlight of my book-writing journey.",
    ],
    [
      "Ava Taylor",
      "Writer at Fairy Tale Creations",
      Icon1,
      "I am thrilled with the illustrations. Sophia efficiently managed my book illustration project and her team made the process fun and stress-free.",
    ],
    [
      "William Harris",
      "Director at Little Dreamers Publishing",
      Icon1,
      "They took my ideas and turned them into beautiful, engaging illustrations. The result is a book I’m proud of.",
    ],
    [
      "Olivia Clark",
      "Children’s Book Author at Happy Reads",
      Icon2,
      "The team at Best Selling made my book come alive with their exceptional artwork. They were a pleasure to work with!",
    ],
  ]
  {
    /* Testimonials Section Content*/
  }
  {
    /* FAQS Section Content */
  }
  const faqsContent = [
    [
      "Are illustrators and publishers the same thing in a book?",
      "Illustrators and publishers have distinct roles in book creation. Writers and illustrators share copyright 50/50, owning their respective works. Publishers handle production and distribution. Royalties are paid separately to writers and illustrators, ensuring fair compensation and recognition for their contributions. This division maintains balance and fairness in the creative process.",
    ],
    [
      "What are the top trends in children's book illustration?",
      "Top trends in children's book illustration emphasize diversity, inclusivity, multiculturalism, sustainability, and technology. These trends reflect the evolving landscape of children's literature, prioritizing representation and educational value.",
    ],
    [
      "Why are quality illustrations important in children's literature?",
      "Picture books are vital for developing children's literacy skills—the blend of illustrations and text aids in building comprehension, fluency, and vocabulary. Visuals bring the story to life, guiding young readers through the narrative and making reading engaging and accessible, fostering a love for learning.",
    ],
    [
      "What are the four categories of illustration?",
      "There are four approaches to illustration: Narrative, Decorative, Informative, and Conceptual. Understanding these methods allows students to broaden their horizons, expand possibilities, and increase their chances for success.",
    ],
  ]
  {
    /* FAQS Section Content */
  }
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Professional Children's Book Illustration Services</title>
        <meta
          name="description"
          content="Enhance your story with our breathtaking children's book illustrations, featuring captivating art that delights young minds and sparks imagination!"
        />
      </Head>
        <Header />
        <Hero />
        <Benifits
          title="Book Illustration Services For All!"
          desc="Your heart-filled story deserves the perfect illustrations, but finding the right illustrator can feel like a struggle. Not anymore! Our children's book illustrators love kids' books as you do. Let's bring your story to life with stunning visuals, inspiring a love of reading and leaving tiny hearts wanting more."
        />
        <StandOut />
        <TypesOfIllustrations tabs={tabContent} />
        <Portfolios />
        <StandOut2 />
        <IllustrationsProcess />
        <WhyChoose />
        {/* Testimonials Section */}
        <Testimonials
          title="We Love Bringing Success to Children's Book Authors"
          desc="Your success is our success, and we are committed to making your journey as an author both rewarding and memorable."
          data={testimonialData}
        />
        {/* Testimonials Section */}
        {/* ContactUs Section */}
        <ContactUs />
        {/* ContactUs Section */}
        {/* FAQS Section */}
        <FAQS title={`FAQs`} items={faqsContent} />
        {/* FAQS Section */}
        {/* Footer Section */}
        <Footer />
        {/* Footer Section */}
        <Popup popupDesc="HIRE <strong>TOP illustration services AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK" />
    </>
  )
}
export default BookIllustrationServices
