import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import logo from "media/images/logo.png";
import insta from "media/images/icons/instagram.png";
import twiter from "media/images/icons/twitter.png";
import fb from "media/images/icons/facebook.png";
import payment1 from "media/images/payment/payment.png";
import payment2 from "media/images/payment/payment1.png";
import payment3 from "media/images/payment/payment2.png";
import award1 from "media/images/clients/awards.png";
import award2 from "media/images/clients/awards2.png";
import award3 from "media/images/clients/awards3.png";
import award4 from "media/images/clients/awards4.png";
import award5 from "media/images/clients/awards5.png";
import award6 from "media/images/clients/awards6.png";
import award7 from "media/images/clients/awards7.png";
import award8 from "media/images/clients/awards8.png";
import award9 from "media/images/clients/awards9.png";
import award10 from "media/images/clients/awards10.png";

const Footer = () => {
  let footerslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <footer className={`${styles.footer} bg-second`}>
        <Container fluid className="px-md-5">
          <Row className={`${styles.footerRow} justify-content-between`}>
            <Col xl={3} lg={4}>
              <div className={styles.footerLogo}>
                <Image
                  quality={100}
                  className="img-fluid"
                  src={logo}
                  alt="Best_Publisher"
                />
                <p className="font-14 fw-500 font-secondary txt-secondary mt-4">
                  We’re making real-time rigorous efforts to make your book a
                  huge success. If you have a story to tell, be part of our
                  process. Contact us today!
                </p>
                <div className={`${styles.socialLinks} mt-3`}>
                  <Link href="#">
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={insta}
                      alt="Best_Publisher"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={twiter}
                      alt="Best_Publisher"
                    />
                  </Link>
                  <Link href="#">
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={fb}
                      alt="Best_Publisher"
                    />
                  </Link>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={4} className={styles.footercenter}>
              <div className={styles.footerLinks}>
                <h3 className="font-16 fw-700 font-secondary txt-secondary">
                  Quick Links
                </h3>
                <ul className="p-0 m-0 mt-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/portfolio">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xl={3} lg={4}>
              <div className={`${styles.footerLinks} ${styles.contct}`}>
                <h3 className="font-16 fw-700 font-secondary txt-secondary">
                  Contact Us
                </h3>
                <ul className="p-0 m-0 mt-4">
                  <li>
                    <Link href="#" className={styles.callIcon}>
                      (800) 781-9093 (Toll Free)
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.mailIcon}>
                      info@broadwaypublishers.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className={styles.LocIcon}>
                      15-312 79th St, Howard Beach, NY 11414, USA
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={4} className={styles.footercenter1}>
              <div className={`${styles.footerLinks} ${styles.pyment}`}>
                <Image
                  quality={100}
                  className="img-fluid"
                  src={payment1}
                  alt="Best_Publisher"
                />
                <Image
                  quality={100}
                  className="img-fluid"
                  src={payment3}
                  alt="Best_Publisher"
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className={`${styles.awards} mt-5`}>
                <h3 className="font-16 fw-700 font-secondary txt-secondary mb-5">
                  Awards
                </h3>
                <Slider {...footerslider}>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid mt-3"
                      src={award1}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award2}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award3}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award4}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award5}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid mt-3"
                      src={award6}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award7}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award8}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award9}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={100}
                      className="img-fluid"
                      src={award10}
                      alt="Best_Publisher"
                    />
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <section className={`${styles.subFooter} bg-prime py-2`}>
        <Container fluid className="px-md-5">
          <Row>
            <Col lg={12}>
              <p className="font-14 fw-500 font-secondary txt-white text-center">
                © 2025 - All Rights Reserved Mini Investment
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Footer;
