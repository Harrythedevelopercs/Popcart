// React
import { useEffect } from "react"
// Next
import Image from "next/image"
// Fancyapp UI
import "@fancyapps/ui/dist/fancybox/fancybox.css"
import { Fancybox } from "@fancyapps/ui"
// Css
import styles from "./styles/portfolio.module.css"
// Media
import Banner from "media/book-promotion-marketing/portfolio-bnr.jpg"
import Portfolio1 from "media/book-promotion-marketing/portfolios/1.png"
import Portfolio2 from "media/book-promotion-marketing/portfolios/2.png"
import Portfolio3 from "media/book-promotion-marketing/portfolios/3.png"
import Portfolio4 from "media/book-promotion-marketing/portfolios/4.png"
import Portfolio5 from "media/book-promotion-marketing/portfolios/5.png"
import Portfolio6 from "media/book-promotion-marketing/portfolios/6.png"
import Portfolio7 from "media/book-promotion-marketing/portfolios/7.png"
import Portfolio8 from "media/book-promotion-marketing/portfolios/8.png"
const Portfolio = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: true,
      Thumbs: { autoStart: true },
      loop: true,
      keyboard: true,
    })
    Fancybox.bind("[data-fancybox]", {
      on: {
        ready: (fancybox) => {
          console.log("Fancybox is ready!", fancybox)
        },
        done: (fancybox) => {
          console.log("Image loaded!")
        },
        close: () => {
          console.log("Gallery closed")
        },
      },
    })
    return () => {
      Fancybox.destroy()
    }
  }, [])
  return (
    <section>
      <div className={styles.root}>
        <Image src={Banner} alt="banner" className={styles.bannerImage} />
        <div className="mr-container">
          <div className="grid grid-cols-1">
            <div>
              <div className={styles.content}>
                <h2>Few of the Many Books We've Published So Far</h2>
              </div>
            </div>
          </div>
          <div className={styles.portfolios}>
            <div className="grid grid-cols-12">
              {[
                Portfolio1,
                Portfolio2,
                Portfolio3,
                Portfolio4,
                Portfolio5,
                Portfolio6,
                Portfolio7,
                Portfolio8,
              ].map((e, i) => (
                <div key={i} className="mr-lg:col-span-3 col-span-6 mb-4">
                  <div className={styles.card}>
                    <span className={styles.background}></span>
                    <a href={e.src} data-fancybox="gallery">
                      <Image
                        src={e}
                        width={180}
                        height={255}
                        alt="books"
                        className="d-block mx-auto img-fluid"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
