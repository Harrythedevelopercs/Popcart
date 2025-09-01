// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Css
import styles from "./styles/hero.module.css"
// Media
import HeroBanner from "media/book-promotion-marketing/banner.jpg"
import SideImage from "media/book-promotion-marketing/banners/2.png"
import SortRight from "media/book-promotion-marketing/sort.png"
// Components
import { CTA, Popup } from "./index"
const Hero = () => {
  return (
    <section>
      <div className={styles.root}>
        <Image
          src={HeroBanner}
          alt="banner"
          className={styles.bannerImage}
          draggable="false"
          priority
        />
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 gap-y-8 items-center">
            <div>
              <div className={styles.content}>
                <h1>Boost Your Sales With Right Book Promotion</h1>
                <h2>
                  Providing Compelling Promotional Opportunities to Rising
                  Authors
                </h2>
                <p>
                  {/* The best promotion campaigns succeed because they are
                  carefully developed for individual authors and titles. It
                  means diving in and getting to know the work — at Ghost Book
                  Writers, we understand how to promote to both readers and
                  media. */}
                  Effective book promotion is essential for authors aiming to expand their readership and boost sales. Partnering with a professional book marketing agency can significantly enhance your book's visibility and success.
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <CTA isPopup={true} text="Get Started" css={styles.heroCTA1} />
                  <CTA
                    link="javascript:;"
                    handle="parent.LC_API.open_chat_window();return false"
                    text="Live Chat"
                    css={styles.heroCTA2}
                  />
                </div>
              </div>
            </div>
            <div className="mt-lg-0 mt-5">
              <Image
                src={SideImage}
                alt="hero"
                className="block img-fluid mx-auto"
                draggable="false"
                priority
              />
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
              <div className={styles.couter}>
                <ul className="flex flex-wrap items-center mr-md:justify-center justify-evenly text-white list-none mr-md:gap-x-16">
                  {[
                    ["400", "+", "Authors Trust Us"],
                    ["95", "%", "Customer Reoccurrence"],
                    ["2 K", "+", "Editor and Writers"],
                    ["99", "%", " Client Satisfaction"],
                  ].map(([text, subscript, desc], i) => (
                    <li key={i}>
                      {text}
                      <sub>{subscript}</sub>
                      <div className="flex items-center">
                        <Image src={SortRight} width={15} alt="icon" />
                        <span>{desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
