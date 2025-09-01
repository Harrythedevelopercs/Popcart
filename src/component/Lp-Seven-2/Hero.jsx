// Next
import Image from "next/image";
// Media
import CheckIcon from "media/lp-seven/icons/check.png";
import Banner from "media/lp-seven-2/bannerImage.webp";
import bannerImage from "media/lp-seven-2/banner_Image.webp";
// Components
import { CTA } from "./index";
import { MRCTAGroup } from "@/component";
import { Col, Row } from "react-bootstrap";
const Hero = () => {
  return (
    <section className="bannerImage" style={{ backgroundImage: `url(${Banner.src})` }}>
      <div className="mr-container">
        <div className="bannerCotainer">
          <div className="BanenrContent">
            <h1 className="mr-lg:text-[34px] mr-md:text-[30px] text-[22px] leading-tight font-bold mb-[20px]">
              Bring Your Book To Life With Our Professional Book Publishing
            </h1>
            <ul>
              {[
                "Book Editing, Proofreading, Formatting & Typesetting.",
                "Free Exclusive Consultation with Writing Coach.",
                "Free Book Cover Design with up to 10 Revisions.",
                "Free ISBN",
                "Publishing in e-book and paperback formats.",
                "10 Printed paperbacks shipped down to your doorstep",
              ].map((e, i) => (
                <li key={i} className="flex items-start gap-x-2">
                  <span className="arrowIcon block text-black mr-lg:text-[19px] mr-md:text-[16px] text-[14px] leading-tight mb-2">
                    {e}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mr-md:flex hidden items-center gap-x-5 mt-10">
              <CTA handle="parent.LC_API.open_chat_window();return false;" />
              <CTA
                text="Call Now"
                link="tel:8556666675"
                variant="secondary"
                svgClasses="border border-black rounded-full"
              />
            </div>
          </div>
          <div className="imageBanner">
            <Image src={bannerImage.src} alt="bannerImage" width={1103} height={1155} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
