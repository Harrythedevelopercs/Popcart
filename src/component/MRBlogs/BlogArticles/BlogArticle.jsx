import Image from "next/image"
import styles from "./InnerBanner.module.css"
// Images
import Arrow from "media/blog-new/arrowBlack.png"
import verifies from "media/blog-new/blog-verify.png"
import BlogImage1 from "media/blog-new/1.png"
import BlogImage2 from "media/blog-new/2.png"
import BlogImage3 from "media/blog-new/3.png"
import profile from "media/blog-new/blog-client.png"
const BlogArticle = () => {
    return (
        <>
            <section className={styles.readSec}>
                <div className="mr-container">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                            <h2 className="fontsfregular mb-5 text-center">Read Next</h2>
                        </div>
                        <div className="mr-xl:col-span-4 mr-md:col-span-6 col-span-12 p-2">
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage1} alt="bestsellingpublisher" className="img-fluid w-full" />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className="fontsfregular">Blockchain</p>
                                    <h5 className="fontsfregular">Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className="fontsfregular">Bitswits" Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="#href" className="text-black flex items-center gap-2">
                                            <span className="block">Read More</span>
                                            <Image src={Arrow} alt="bestsellingpublisher" className="block" />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt="bestsellingpublisher" className="img-fluid" />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className="flex items-center gap-2 pb-1">
                                            <h3 className="fontsfregular">Nick Willford</h3>
                                            <Image src={verifies} alt="bestsellingpublisher" width={13} height={13} />
                                        </div>
                                        <p className="fontsfregular">Bitswits" Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mr-xl:col-span-4 mr-md:col-span-6 col-span-12 p-2">
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage2} alt="bestsellingpublisher" className="img-fluid w-full" />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className="fontsfregular">Mobile Application</p>
                                    <h5 className="fontsfregular">Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className="fontsfregular">Bitswits" Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="#href" className="text-black flex items-center gap-2">
                                            <span className="block">Read More</span>
                                            <Image src={Arrow} alt="bestsellingpublisher" className="block" />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt="bestsellingpublisher" className="img-fluid" />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className="flex items-center gap-2 pb-1">
                                            <h3 className="fontsfregular">Nick Willford</h3>
                                            <Image src={verifies} alt="bestsellingpublisher" width={13} height={13} />
                                        </div>
                                        <p className="fontsfregular">Bitswits" Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mr-xl:col-span-4 mr-md:col-span-6 col-span-12 p-2">
                            <div className={styles.card}>
                                <div className={styles.cardImg}>
                                    <Image src={BlogImage3} alt="bestsellingpublisher" className="img-fluid w-full" />
                                </div>
                                <div className={styles.cardContent}>
                                    <p className="fontsfregular">General</p>
                                    <h5 className="fontsfregular">Conquer Tech With Bitswits: <br />
                                        Your Path To Unstoppable Progress!</h5>
                                    <p className="fontsfregular">Bitswits" Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional. Their Comprehensive Work, From Requirement Analysis</p>
                                    <div className={styles.btn}>
                                        <a href="#href" className="text-black flex items-center gap-2">
                                            <span className="block">Read More</span>
                                            <Image src={Arrow} alt="bestsellingpublisher" className="block" />
                                        </a>
                                    </div>
                                </div>
                                <div className={styles.cardBottom}>
                                    <div className={styles.cardBottomImg}>
                                        <Image src={profile} width={50} height={50} alt="bestsellingpublisher" className="img-fluid" />
                                    </div>
                                    <div className={styles.cardbottomContent}>
                                        <div className="flex items-center gap-2 pb-1">
                                            <h3 className="fontsfregular">Nick Willford</h3>
                                            <Image src={verifies} alt="bestsellingpublisher" width={13} height={13} />
                                        </div>
                                        <p className="fontsfregular">Bitswits" Development Of The Proeye Project, A Wallet Analytics And Search Engine Platform On Blockchain, Was Exceptional.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BlogArticle;