import React from "react";
import Image from "next/image";
import styles from "@/styles/Tradition.module.css";
import Bookshelf from "@/styles/Bookshelf.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import mock1 from "media/images/book-mockup/new/1.webp";
import mock2 from "media/images/book-mockup/new/2.webp";
import mock3 from "media/images/book-mockup/new/3.webp";
import mock4 from "media/images/book-mockup/new/4.webp";
// import mock5 from "media/images/book-mockup/5.webp";
// import mock6 from "media/images/book-mockup/6.webp";
// import mock7 from "media/images/book-mockup/7.webp";

import before from "media/images/flods/tradition-before.webp";

// mport { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { MRCTAGroup } from "@/component";

const Tradition = ({
  subtitle,
  title,
  desc,
  background = "",
  txtColor = "",
  classes,
  BGclasses,
  isPopup = "",
}) => {
  let traditionslider = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
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

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call("maximize");
    }
  };

  return (
    <>
      <section
        className={`${styles.traditionFold} ${background} bg-no-repeat bg-cover ${BGclasses}`}
      >
        <div className="mr-container px-md-5">
          <Row className="justify-center">
            <Col lg={12}>
              <div className={`${styles.mockupsHead} text-center mb-5`}>
                <h6 className="text-[30px] text-[#3EA99F] font-semibold mb-3 sm:text-base xs:text-base font-primary">
                  {subtitle}
                </h6>
                <h2
                  className={`mr-lg:text-[45px] text-[30px] font-bold font-primary text-black mb-3 ${classes}`}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p
                  className={`text-[15px] font-secondary text-black ${classes}`}
                >
                  {desc}
                </p>
                <div className="m-auto justify-center">
                  <Image
                    quality={90}
                    className="img-fluid justify-center"
                    src={before}
                    alt="Best_Publisher"
                  />
                </div>
              </div>
            </Col>

            <Col lg={12} className="my-5">
              <div className="trade">
                <Slider {...traditionslider}>
                  <div>
                    <Image
                      quality={80}
                      className="hoverCss img-fluid"
                      src={mock1}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={80}
                      className="hoverCss img-fluid"
                      src={mock2}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={80}
                      className="hoverCss img-fluid"
                      src={mock3}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={80}
                      className="hoverCss img-fluid"
                      src={mock4}
                      alt="Best_Publisher"
                    />
                  </div>
                  {/* <div>
                    <Image
                      quality={80}
                      className="hoverCss img-fluid"
                      src={mock5}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={80}
                      className=" hoverCss img-fluid"
                      src={mock6}
                      alt="Best_Publisher"
                    />
                  </div>
                  <div>
                    <Image
                      quality={80}
                      className=" hoverCss img-fluid"
                      src={mock7}
                      alt="Best_Publisher"
                    />
                  </div> */}
                </Slider>
              </div>
            </Col>
            <MRCTAGroup isPopup={isPopup} classes="mt-5 justify-center" />
          </Row>
        </div>
      </section>
    </>
  );
};

export default Tradition;
