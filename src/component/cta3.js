import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Mockup1 from "media/images/book-mockup/bg/new/Book-01.webp";
import Mockup2 from "media/images/book-mockup/bg/new/Book-02.webp";
import Mockup4 from "media/images/book-mockup/bg/new/Book-04.webp";
import Mockup5 from "media/images/book-mockup/bg/new/Book-05.webp";
import Mockup6 from "media/images/book-mockup/bg/new/Book-06.webp";
import Mockup7 from "media/images/book-mockup/bg/new/Book-07.webp";
import Mockup8 from "media/images/book-mockup/bg/new/Book-08.webp";
import Mockup9 from "media/images/book-mockup/bg/new/Book-09.webp";
import Mockup10 from "media/images/book-mockup/bg/new/Book-10.webp";
import Mockup11 from "media/images/book-mockup/bg/new/Book-01.webp";
import Mockup12 from "media/images/book-mockup/bg/new/Book-02.webp";

import Logoss from "media/ahsan/logoss.png";
import { MRCTA } from "@/component";
const YourComponent = ({
  subtitle = "Don’t Hesitate To Contact Us!",
  title = `Start Your Bestseller <br class="mr-2xl:block hidden"/> Journey—Publish With Us Today!`,
  desc = " For personalized support or inquiries, our dedicated team is available to assist you during business hours. We warmly invite you to connect with us; your questions and needs are always our priority. Don't hesitate to reach out.",
  isPopup = "",
}) => {
  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call("maximize");
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const additionalY = { val: 0 };
    let additionalYAnim;
    let offset = 0;

    const cols = gsap.utils.toArray(".col");

    cols.forEach((col, i) => {
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach((image) => {
        var clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach((item) => {
        let columnHeight = item.parentElement.clientHeight;
        let direction = i % 2 !== 0 ? "+=" : "-="; // Change direction for odd columns

        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: "none",
          modifiers: {
            y: gsap.utils.unitize((y) => {
              if (direction === "+=") {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }

              return y;
            }),
          },
        });
      });
    });

    const imagesScrollerTrigger = ScrollTrigger.create({
      trigger: ".section",
      start: "top 50%",
      end: "bottom 50%",
      onUpdate: function (self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      },
    });
  }, []);
  return (
    <>
      <section className="section-container11 relative w-full overflow-hidden focus:scroll-auto ">
        <div className="w-full font-secondary bg-[#3EA99F]">
          <div className="mr-container grid mr-xl:grid-cols-2 mr-lg:grid-cols-2 mr-lg:!text-left text-center justify-center text-white md:py-[50px] xs:py-[30px] sm:py-[30px]">
            <div className="items-center relative mr-xl:py-[150px] mr-lg:py-[150px]">
              <span className="mr-2xl:text-[40px] mr-xl:text-[35px] px-2 py-1 bg-black text-white mr-xs:text-center font-primary font-bold mr-md:text-[35px] mr-sm:text-[35px] mr-xs:text-[25px] leading-normal mb-3">
                {subtitle}
              </span>
              <h2
                className="mr-2xl:text-[40px] mr-xl:text-[42px] xs:text-center font-primary font-bold mr-md:text-[35px] mr-sm:text-[30px] mr-xs:text-[25px] leading-tight mb-3"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p
                className="xs:!text-center m-auto md:px-10 mr-xl:px-0"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
              <div className="mx-auto py-4">
                <div className="flex gap-3 mr-xl:!justify-start md:!justify-center sm:!justify-center xs:!justify-center">
                  <div className="grid grid-cols-1 mr-sm:flex gap-3">
                    {isPopup ? (
                      <MRCTA
                        text="Start Your Project Today!"
                        classes="hover:!bg-white hover:!text-black rounded-sm bg-black"
                        isPopup={true}
                      />
                    ) : (
                      <MRCTA
                        text="Start Your Project Today!"
                        classes="hover:!bg-white hover:!text-black rounded-sm bg-black"
                        link="javascript:;"
                        handle="parent.LC_API.open_chat_window();return false;"
                      />
                    )}
                    <MRCTA
                      text="Connect with Us!"
                      link="tel:8556666675"
                      bg="bg-transparent"
                      color="!text-black"
                      border="border-black hover:!bg-black hover:border-transparent rounded-sm hover:!text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative section z-0 w-[50%] mr-xl:!block mr-lg:!block h-[100%] !hidden">
              <div className="gallery z-0 overflow-hidden absolute lg:pr-20 sm:hidden">
                <div className="col">
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup4}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup2}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup4}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup1}
                      priority
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup5}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup6}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup7}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup8}
                      priority
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup9}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup10}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup11}
                      priority
                    />
                  </div>
                  <div className="image">
                    <Image
                      quality={95}
                      width={200}
                      height={250}
                      alt="Call of action"
                      className=""
                      src={Mockup12}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default YourComponent;
