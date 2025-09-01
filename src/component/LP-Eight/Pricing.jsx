// React
import { useState, useEffect } from "react"
// Next
import Image from "next/image"
// Css
import styles from "./styles/pricing.module.css"
// Media
import Banner from "media/book-promotion-marketing/pricing-bg.jpg"
// Pricing
import data from "media/book-promotion-marketing/pricing/data.json"
// Components
import CTA from "./CTA"

const Pricing = () => {
  const middleIndex = Math.floor(data.packages.length / 2)
  const [activeIndex, setActiveIndex] = useState(middleIndex)
  const [isMobileView, setIsMobileView] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 992)
      }

      handleResize()

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [])

  useEffect(() => {
    if (data?.packages?.length && !isMobileView) {
      setActiveIndex(Math.floor(data.packages.length / 2))
    }
  }, [data, isMobileView])

  const handleHover = (index) => {
    if (!isMobileView) {
      setActiveIndex(index)
    }
  }

  const handleMouseLeave = () => {
    if (!isMobileView) {
      setActiveIndex(Math.floor(data.packages.length / 2))
    }
  }
  return (
    <section>
      <div className={styles.root}>
        <Image src={Banner} alt="banner" className={styles.bannerImage} />
        <div className="mr-container">
          <div className="grid grid-cols-1">
            <div>
              <div className={styles.content}>
                <h2>Our Affordable Pricing</h2>
                <p>
                  Each service is designed to provide a comprehensive game plan
                  in the key areas where you’ll benefit the most from marketing
                  your book. All three options can be applied to your book
                  promotion at any time—even if your book isn’t published yet.
                </p>
              </div>
            </div>
          </div>
          <div className="grid mr-lg:grid-cols-3 mr-md:grid-cols-2 grid-cols-1 gap-8">
            {data?.packages.map((packageItem, i) => (
              <div key={i} onMouseLeave={handleMouseLeave}>
                <div
                  className={`${styles.card} ${
                    !isMobileView && i === activeIndex ? styles.active : ""
                  }`}
                  onMouseEnter={() => handleHover(i)}
                >
                  <h4>
                    {packageItem.name}
                    {packageItem.bestSeller && <span>(Best Seller)</span>}
                  </h4>
                  <ul className={styles.features}>
                    {packageItem.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <CTA
                      link="tel:+18556666675"
                      text="Order Now"
                      css={styles.pricingCTA1}
                    />
                    <CTA
                      link="javascript:;"
                      handle="parent.LC_API.open_chat_window();return false"
                      text="Live Chat"
                      css={styles.pricingCTA2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
