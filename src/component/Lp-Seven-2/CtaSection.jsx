import styles from "@/styles/catsection.module.css"
import { CTA } from "./index";
import CatSection from "media/lp-seven-2/catSection.webp"
import Image from "next/image";

const CtaSection = () => {
    return (
        <section className={styles.ctaSection}>
            <div className="mr-container">
                <div className={styles.contentSection}>
                    <div className={styles.contentBox}>
                        <h2>
                            <strong>Amazon Publishing Services</strong>
                            That Helped 3000+ Authors
                            Publish Their Books</h2>
                        <p>From Manuscript to Global Distribution, let’s connect your story to every corner of the world in no time!</p>
                        <div className="flex items-center gap-x-5 mt-5">
                            <CTA
                                handle="parent.LC_API.open_chat_window();return false;"
                                css="bg-white !text-black hover:bg-transparent hover:border-white hover:!text-white"
                            />
                            <CTA
                                text="Call Now"
                                link="tel:8556666675"
                                variant="secondary"
                                css="text-white border-white hover:bg-white group"
                                svgClasses="border border-white rounded-full group-hover:border-black"
                            />
                        </div>
                    </div>
                    <div className={styles.contentImage}>
                        <Image src={CatSection.src} alt="Amazon Publishing Services" width={1394} height={1094} className={styles.imageContent} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection