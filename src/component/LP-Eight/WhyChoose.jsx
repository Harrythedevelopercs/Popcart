// Next
import Image from "next/image"
// Css
import styles from "./styles/why-choose.module.css"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Components
import CTA from "./CTA"
import { Autoplay, Popup } from "./index"
// Media
import Banner from "media/book-promotion-marketing/why-choose-bg.jpg"
import Icon1 from "media/book-promotion-marketing/why-choose/1.png"
import Icon2 from "media/book-promotion-marketing/why-choose/2.png"
import Icon3 from "media/book-promotion-marketing/why-choose/3.png"
import Icon4 from "media/book-promotion-marketing/why-choose/4.png"
import Icon5 from "media/book-promotion-marketing/why-choose/5.png"

const WhyChoose = () => {
  const data = [
    // [
    //   Icon1,
    //   "Personalized Service",
    //   "We design a specific set of services for each unique author and book. Our experienced publicists take the time to research media contacts and reach out to them in a personalized manner, making all the difference.",
    // ],
    // [
    //   Icon2,
    //   "Extended Experience",
    //   "Ghost Book Writers has no junior publicists. Every member of our team is experienced. Most of our publicists have been with us for over five years and many for over ten. This is rare in the book publicity industry.",
    // ],
    // [
    //   Icon3,
    //   "Team Approach",
    //   "We often use two publicists on a campaign, alongside a Team Manager and Director of Publicity who are either involved or supervising every campaign. This is to ensure every campaign receives maximum attention.",
    // ],
    // [
    //   Icon4,
    //   "Campaigns Backup",
    //   "If a publicist appointed on a particular campaign is unavailable for any reason, our team structure allows for a seamless transition to another publicist or manager already closely involved in the campaign.",
    // ],
    // [
    //   Icon5,
    //   "Creative Tactics",
    //   "Ghost Book Writers employ unique book promotion strategies and tactics no other firm does, and our ability to make books and authors stand out from the crowd is well-known with both media and publishers.",
    // ],
    [
      Icon5,
      "Expertise",
      "Our team comprises seasoned professionals with extensive experience in book marketing, ensuring effective strategies tailored to your goals."
    ],
    [
      Icon4,
      "Personalized Approach",
      "We understand that each book is unique; thus, we customize our services to align with your vision and objectives."
    ],
    [
      Icon2,
      "Proven Success",
      "Our track record includes successfully promoting numerous bestsellers, demonstrating our capability to deliver results."
    ],
    [
      Icon3,
      "Comprehensive Support",
      "From initial concept to post-launch, we provide end-to-end support, guiding you through every step of the marketing process."
    ]
  ]
  return (
    <section>
      <div className={styles.root}>
        <Image src={Banner} alt="banner" className={styles.bannerImage} />
        <div className="mr-container">
          <div className="grid grid-cols-12">
            <div className="mr-lg:col-span-6 col-span-12">
              <div className={styles.content}>
                <h2>Why Choose Broadway Publishers?</h2>
                <p>
                  {/* So it's clear why getting media's attention and other book
                  marketing tactics will make you stand out and increase your
                  book sales, but the question remains — why choose us for your
                  book promotion & marketing? */}
                  Investing in professional book marketing services is crucial for authors seeking to maximize their book's potential. Partner with Broadway Publishers, a trusted book marketing company, to navigate the complexities of promotion and achieve your publishing goals.
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <CTA isPopup={true} text="Get Started" css={styles.whyChooseCTA1} />
                  <CTA
                    link="javascript:;"
                    handle="parent.LC_API.open_chat_window();return false"
                    text="Live Chat"
                    css={styles.whyChooseCTA2}
                  />
                </div>
              </div>
            </div>
          </div>
          <Autoplay arrows={false} dots={true} align="start">
            {data?.map(([img, text, desc], i) => (
              <div key={i} className={styles.slides}>
                <div className={styles.card}>
                  <Image src={img} alt="icon" />
                  <h3>{text}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </Autoplay>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
