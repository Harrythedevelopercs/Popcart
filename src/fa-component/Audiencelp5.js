import React from "react";
import Image from "next/image";
import styles from "@/styles/Audience.module.css";
// images
import audience from "media/images/flods/ImageSec.webp";
import { MRCTA } from "@/component";

const Audiencelp = () => {
  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call("maximize");
    }
  };

  return (
    <>
      <section className={`${styles.audienceFlod} bg-prime`}>
        <div className="mr-container px-md-4">
          <div className={`${styles.audienceRow}`}>
            <div className={styles.audienceCol}>
              <div className={styles.audienceTxt}>
                <h2 className="font-45 fw-300 font-primary txt-white mb-3">
                  <span className="bg-black txt-white mt-2 p-1 font-45 fw-500 d-inline-block">
                    Need a Book Publisher?
                  </span>{" "}
                  <br /> Publishing Your Own Book
                  <br />
                  Is Just One Click Away.
                </h2>
                <p className="font-15 font-secondary txt-white mb-2">
                  Launch your book to a global audience with our expert Amazon
                  book publishing services.
                </p>
                <p className="font-15 font-secondary txt-white mb-2">
                  <strong>
                    <em>Your Story Deserves to Shine!</em>
                  </strong>
                </p>
                <div className="grid grid-cols-1 mr-sm:flex gap-3">
                  <MRCTA
                    text="Connect with Us!"
                    classes="hover:!bg-white hover:!text-black rounded-sm bg-black"
                    link="javascript:;"
                    handle="parent.LC_API.open_chat_window();return false;"
                  />
                  <MRCTA
                    text="Call us NOW!"
                    link="tel:8556666675"
                    bg="bg-transparent"
                    color="!text-black"
                    border="border-black hover:!bg-black hover:border-transparent rounded-sm hover:!text-white"
                  />
                </div>
              </div>
            </div>
            <div className={styles.audienceCol}>
              <div className={styles.audienceImg}>
                <Image
                  quality={100}
                  className="img-fluid"
                  src={audience}
                  alt="Best_Publisher"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Audiencelp;
