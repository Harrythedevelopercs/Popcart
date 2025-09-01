// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./styles/promote-book.module.css"
// Components
import { Autoplay } from "./index"
// Media
import Book1 from "media/book-promotion-marketing/promote-book/1.png"
import Book2 from "media/book-promotion-marketing/promote-book/2.png"
import Book3 from "media/book-promotion-marketing/promote-book/3.png"
import Book4 from "media/book-promotion-marketing/promote-book/4.png"
import Book5 from "media/book-promotion-marketing/promote-book/5.png"
import Book6 from "media/book-promotion-marketing/promote-book/6.png"
import Book7 from "media/book-promotion-marketing/promote-book/7.png"
import Book8 from "media/book-promotion-marketing/promote-book/8.png"
const PromoteBook = () => {
  const data = [
    [
      "Media Outreach",
      Book1,
      "We connect with journalists, bloggers, and influencers to secure coverage and reviews, enhancing your book's credibility and exposure.",
    ],
    [
      "Social Media Management",
      Book2,
      "Our team crafts engaging content and manages your social media profiles to build a strong online presence and foster a community around your work.",
    ],
    [
      "Event Planning and Promotion",
      Book3,
      "From virtual book tours to live events, we organize and promote activities that generate buzz and connect you with your audience.",
    ],
    [
      "Author Branding",
      Book4,
      "We assist in developing a compelling author brand that resonates with readers, establishing a lasting connection and encouraging loyalty.",
    ],
    [
      "Video Promotions",
      Book5,
      "Author appearances in short videos posted to a YouTube channel are highly effective in reaching readers who are interested in your topic.",
    ],
    [
      "GoodReads Visibility",
      Book6,
      "High GoodReads visibility and on similar sites help readers to discover your work. Maintaining profiles take time, but it's worth the efforts.",
    ],
    [
      "Trade Shows & Expos",
      Book7,
      "Getting out and meeting people in-person is a great way to build relationships and interest; people like to read more from people they know.",
    ],
    [
      "Review Acquisition",
      Book8,
      "Leveraging our network, we facilitate the collection of authentic reviews from readers and influencers, building trust and encouraging sales.",
    ],
  ]
  return (
    <section>
      <div className={styles.root}>
        <div className="mr-container">
          <div className="grid grid-cols-1">
            <div>
              <div className={styles.content}>
                <h2>The Tactics We Use to Successfully Promote Your Books</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.root2}>
          <span className={styles.before}></span>
          <Autoplay
            arrowsCss={styles.slidesArrows}
            arrowNextCss={styles.slidesNextArrow}
            arrowPrevCss={styles.slidesPrevArrow}
          >
            {data?.map(([title, img, desc], i) => (
              <div key={i} className={styles.slides}>
                <div className={styles.card}>
                  <h3>{title}</h3>
                  <Image
                    src={img}
                    alt="books"
                    className="block mx-auto w-full"
                  />
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </Autoplay>
          <span className={styles.after}></span>
        </div>
      </div>
    </section>
  )
}

export default PromoteBook
