import Image from "next/image";
import Link from "next/link";
import React from "react";

// Import Slick Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Images
import Logo from "media/assets/images/logo.png";
import Facebook from "media/images/icons/facebook.svg";
import Instagram from "media/images/icons/instagram.svg";
import XIcon from "media/images/icons/x-icon.svg";
import Tel from "media/assets/sikander/telicon.png";
import Email from "media/assets/sikander/email.png";
import Location from "media/assets/sikander/location.png";
import Payment1 from "media/assets/images/payment1.png";
import Payment2 from "media/assets/images/payment2.png";
import Payment3 from "media/assets/images/payment3.webp";
import Slide1 from "media/assets/sikander/slide1.png";
import Slide2 from "media/assets/sikander/slide2.png";
import Slide3 from "media/assets/sikander/slide3.png";
import Slide4 from "media/assets/sikander/slide4.png";
import Slide5 from "media/assets/sikander/slide5.png";
import Slide6 from "media/assets/sikander/slide6.png";
import Slide7 from "media/assets/sikander/slide7.png";
import Slide8 from "media/assets/sikander/slide8.png";
import Slide9 from "media/assets/sikander/slide9.png";
import Slide10 from "media/assets/sikander/slide10.png";

const NewFooter = () => {
  // Slider Setting
  const testiSlider = {
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <footer className="xs:py-[40px] py-[90px] bg-[#F3F3F3]">
        <div className="mr-container sm:px-5">
          <div className="grid grid-cols-12">
            <div className="xs:col-span-12 md:col-span-12 lg:col-span-4 col-span-4 pb-4 lg:pb-14">
              <div className="logo">
                <Link href="/">
                  <Image
                    src={Logo}
                    width={180}
                    height={50}
                    alt="Amazon Book Publishing"
                  />
                </Link>
                <p className="text-[13px] leading-[17px] font-[400] font-secondary pt-4 md:w-full  w-11/12">
                  Broadway Publishers stands as the pinnacle of excellence in
                  the world of publishing services, renowned for its
                  unparalleled commitment to author success. With a dedicated
                  team of industry experts and innovative resources at their
                  disposal, Broadway Publishers goes above and beyond.
                </p>
                <p className="text-[13px] leading-[17px] font-[400] font-secondary pt-4 pb-5 md:w-full  w-11/12">
                  Don't hesitate to reach out and take the first step towards
                  literary success with one of the finest publishers in the
                  industry.
                </p>
                <ul className="flex items-center gap-x-3">
                  <li>
                    <a
                      href="https://www.facebook.com/bestsellingpublisher"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Facebook}
                        alt="Amazon Book Publisher"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/bspublisher"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={XIcon}
                        alt="Amazon Book Publisher"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bspublisher/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={Instagram}
                        alt="Amazon Book Publisher"
                        width={30}
                        height={30}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xs:col-span-12 md:col-span-12 lg:col-span-8 col-span-8 pb-4 lg:pb-14">
              <div className="grid grid-cols-12 gap-y-5">
                <div className="xs:col-span-12 col-span-2 items">
                  <p className="text-[16px] font-medium font-secondary pb-3">
                    Quick Links
                  </p>
                  <ul>
                    <li>
                      <Link
                        href="/"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/blogs"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/portfolio"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact-us"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="xs:col-span-12 col-span-3 items">
                  <p className="text-[16px] font-medium font-secondary pb-3">
                    Our Services
                  </p>
                  <ul>
                    <li>
                      <Link
                        href="/book-publishing"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Book Publishing
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/digital-book-publishing-tx"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Digital Book Publishing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/amazon-publishing-tx"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Amazon Publishing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/self-publishing-tx"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Self Publishing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/children-Illustration-tx"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Children Illustration
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/amazon-book-publishing"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Amazon Book Publishing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ebook-publishing"
                        className="text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        Ebook Publishing
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="xs:col-span-12 col-span-4 items">
                  <p className="text-[16px] font-medium font-secondary pb-3">
                    Contact Us
                  </p>
                  <ul>
                    <li className="xl:pb-5 pb-3">
                      <Link
                        href="mailto:info(@)bestsellingpublisher(.)com"
                        className="flex items-start gap-x-2 text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        <Image
                          src={Email}
                          alt="Amazon Book Publishing "
                          className="object-contain w-[15px] h-[15px]"
                        />
                        info@broadwaypublishers.com
                      </Link>
                    </li>
                    <li className="xl:pb-5 pb-3">
                      <Link
                        href="tel:5127622397"
                        className="flex items-start gap-x-2 text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[15px]"
                      >
                        <Image
                          src={Tel}
                          alt="Amazon Book Publishing "
                          className="min-h-[25px] object-contain "
                        />
                        512 762 2397
                      </Link>
                    </li>

                    <li className="xl:pb-5 pb-3">
                      <Link
                        href="javascript:;"
                        className="flex items-start gap-x-2 text-[13px] font-[400] font-secondary xl:leading-[25px] leading-[20px]"
                      >
                        <Image
                          src={Location}
                          alt="Amazon Book Publishing "
                          className="min-h-[25px]object-contain xl:pt-0 pt-1"
                        />
                        9518 Mykawa Road, Houston, TX 77048
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="xs:col-span-12 col-span-3 payment_method">
                  <Image
                    src={Payment1}
                    alt="Amazon Book Publishing"
                    className="mb-3 sm:ml-auto lg:w-[70%] lg:ml-auto"
                  />
                  <Image
                    src={Payment3}
                    alt="Amazon Book Publishing"
                    className="sm:ml-auto lg:w-[70%] lg:ml-auto"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <div className="xl:flex lg:flex items-center justify-between gap-x-7 pt-4 lg:pt-8 border-t border-[#DBDBDB] relative hidden">
                <p className="text-black text-[16px] font-[400] font-secondary absolute top-[-16px] left-0 bg-[#F3F3F3] px-4">
                  Award
                </p>
                <div className="slide">
                  <Image src={Slide1} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide2} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide3} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide4} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide5} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide6} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide7} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide8} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide9} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide10} alt="Amazon Book Publishing " />
                </div>
              </div>
              <Slider {...testiSlider} className="testiSlider pt-4 block">
                <div className="slide">
                  <Image src={Slide1} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide2} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide3} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide4} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide5} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide6} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide7} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide8} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide9} alt="Amazon Book Publishing " />
                </div>
                <div className="slide">
                  <Image src={Slide10} alt="Amazon Book Publishing " />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright bg-[#3EA99F] py-2">
        <p className="text-[14px] text-white text-center">
          © 2024 - All Rights Reserved{" "}
          <Link
            href={"https://infinitimediainc.com/"}
            className="hover:text-black"
          >
            
          </Link>
        </p>
      </div>
    </>
  );
};

export default NewFooter;
