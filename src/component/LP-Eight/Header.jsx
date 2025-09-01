"use client"
// React
import { useEffect, useState } from "react"
// Next
import Image from "next/image"
// Bootstrap
// Css
import styles from "./styles/header.module.css"
// Image
import Logo from "media/our-reviews/bspWhiteLogo.svg"
import CommentIcon from "media/book-promotion-marketing/comment.png"
import CallIcon from "media/book-promotion-marketing/call.png"
// Components
import { CTA, Popup } from "./index"
const BookPromotionHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbar}>
        <div className="mr-container">
          <div className="flex flex-wrap gap-x-5 items-center mr-md:justify-between justify-center">
            <div>
              <a href="#" className="text-decoration-none block">
                <Image
                  loading="lazy"
                  quality={100}
                  className={styles.logonew}
                  src={Logo}
                  alt="Broadway Publishers"
                ></Image>{" "}
              </a>
            </div>
            <div>
              <nav>
                <ul className={`p-0 m-0 ${styles.unorderdList}`}>
                  <li className="p-0 m-0">
                    <a
                      href="tel:+18556666675"
                      className="text-decoration-none font-secondary inline-flex items-center gap-2 text-white"
                    >
                      <Image src={CallIcon} width={40} alt="icon" />
                      <div className={styles.callCTA}>
                        <span className="block">TALK TO US</span>
                        <span className="block">+1 (855) 666 6675</span>
                      </div>
                    </a>
                  </li>
                  <li className="p-0 m-0">
                    <a
                      href="#"
                      onClick={() => {
                        parent.LC_API.open_chat_window()
                        return false
                      }}
                      className="text-decoration-none font-secondary inline-flex items-center gap-2 text-white"
                    >
                      <Image src={CommentIcon} alt="icon" />
                      <div className={styles.chatCTA}>
                        <span className="block">24/7 AVAILABLE</span>
                        <span className="block">Live Chat</span>
                      </div>
                    </a>
                  </li>
                  <li className="p-0 m-0 mr-lg:block hidden">
                    <CTA text="Get A Free Quote" isPopup={true} />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default BookPromotionHeader
