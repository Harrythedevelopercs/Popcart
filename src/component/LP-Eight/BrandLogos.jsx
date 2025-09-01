// Next
import Image from "next/image"
// Bootstrap
import { Col, Container, Row } from "react-bootstrap"
// Media
import Logos from "media/book-promotion-marketing/ftr-logo-img.png"
// Css
import styles from "./styles/brand-logos.module.css"
const BrandLogos = () => {
  return (
    <section>
      <div className={styles.root}>
        <div className="mr-container">
          <div className="grid grid-cols-1">
              <Image
                src={Logos}
                alt="logos"
                className="block mx-auto"
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandLogos
