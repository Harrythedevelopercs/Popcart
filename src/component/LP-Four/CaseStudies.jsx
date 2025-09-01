// Components
import { AutoPlaySlider } from "./"
// Media
import One from "media/lp-four/casestudies/1.png"
import Two from "media/lp-four/casestudies/2.png"
import Three from "media/lp-four/casestudies/3.png"
import Four from "media/lp-four/casestudies/4.png"
import Logo1 from "media/lp-four/casestudies/logo1.svg"
import Logo2 from "media/lp-four/casestudies/logo2.svg"
import Logo3 from "media/lp-four/casestudies/logo3.svg"
import Logo4 from "media/lp-four/casestudies/logo4.svg"
import Logo5 from "media/lp-four/casestudies/logo5.svg"
import Logo6 from "media/lp-four/casestudies/logo6.svg"
import Logo7 from "media/lp-four/casestudies/logo7.svg"
import Logo8 from "media/lp-four/casestudies/logo8.svg"
// Next
import Image from "next/image"

export default function CaseStudies() {
    return (
        <section id="caseStudies">
            <div className="py-[80px]">
                <div className="text-center text-black">
                    <h2 className="text-[30px] mr-md:text-[40px] font-semibold leading-snug mb-[15px]">
                        Our Casestudy's
                    </h2>
                    <p className="text-[16px] leading-relaxed font-normal mr-md:max-w-[80%] mr-lg:max-w-[60%] mr-2xl:max-w-[50%] mx-auto">
                        Check out our case studies to see how we've turned authors into bestsellers with our expert publishing and marketing strategies.
                    </p>
                </div>
                <AutoPlaySlider wrapperClasses="mt-[50px]">
                    {
                        [
                            {
                                img: One,
                                title: "In The Line of Fire",
                                desc: `Samuel Cross's "In The Line Of Fire" became a favorite, earning the #3 spot in the Thriller category on Amazon. Published on Amazon, Barnes & Noble, eBay, Google Books, and Goodreads, we employed diverse marketing strategies to engage readers and boost sales.`,
                                list: ["Designed and deployed a user-friendly website to showcase the book and the author.", "Launched a book trailer on social media channels and communities.", "Launched a targeted Amazon Ad Campaign to maximize reach."],
                                bg: "bg-[#563B29]",
                                color: "text-white"
                            },
                            {
                                img: Two,
                                title: "When He Calls",
                                desc: `Samuel Brooks's "When He Calls" secured the #2 spot in Mystery & Suspense Short Reads on Amazon. Published exclusively on Amazon, our targeted marketing efforts ensured high visibility and reader engagement.`,
                                list: ["Launched a focused Amazon Ad Campaign for optimal visibility.", "Designed a dedicated website to showcase the book.", "Enhanced discoverability with comprehensive SEO and active social media marketing."],
                                bg: "bg-[#C8D5D8]",
                                color: "text-black"
                            },
                            {
                                img: Three,
                                title: "Love's Tapestry",
                                desc: `Luna Starlight's "Love's Tapestry" reached Amazon's #1 Best Seller in the Contemporary Romance category. We ensured its success and visibility across Amazon, Goodreads, and AbeBooks through comprehensive marketing support.`,
                                list: ["Delivered marketing services, including social media management, SEO, and targeted ads.", "Created and monetized a YouTube account, producing a book video trailer.", "Organized PR activities like a live Q&A session and ads in major publications."],
                                bg: "bg-[#344960]",
                                color: "text-white"
                            },
                            {
                                img: Four,
                                title: "Last Summer",
                                desc: `Benson Roland's "Last Summer" earned the #1 Best Seller badge in the Coming-of-Age Fiction category on Amazon. Published on platforms like Amazon, Barnes & Noble, eBay, Northshire Books, and Goodreads, we provided a robust marketing strategy to enhance its reach and impact.`,
                                list: ["Implemented a comprehensive Amazon Ad Campaign to boost visibility.", "Developed a dynamic author website and engaging animated book trailer.", "Conducted thorough SEO efforts, book reviews, and regular newsletters to maintain reader engagement."],
                                bg: "bg-[#8A7D5F]",
                                color: "text-white"
                            },
                        ].map(({ bg, title, desc, list, img, color }, i) => (
                            <div key={i} className={`grow-0 shrink-0 basis-[85%] mr-xl:basis-[75%] mr-2xl:basis-[65%] min-w-0 pl-4`}>
                                <div className={`${bg} ${color} p-[20px] mr-md:p-[40px] rounded-2xl`}>
                                    <div className="grid grid-cols-12 gap-5 items-center">
                                        <div className="col-span-12 mr-lg:col-span-4">
                                            <Image src={img} alt="img" className="mr-md:w-full mr-md:h-auto mx-auto" />
                                        </div>
                                        <div className="col-span-12 mr-lg:col-span-8">
                                            <h3 className="text-[30px] font-semibold leading-snug">
                                                {title}
                                            </h3>
                                            <p className="text-[16px] text-justify mr-md:text-left mr-lg:text-[14px] mr-2xl:text-[16px] font-normal leading-normal mt-[15px]">
                                                {desc}
                                            </p>
                                            <ul className="[&>*:not(:last-child)]:mb-4 mt-[15px] !list-inside !list-disc">
                                                {
                                                    list?.map((e, i) => (
                                                        <li key={i} className="text-[16px] mr-lg:text-[14px] mr-2xl:text-[16px] font-normal leading-normal">
                                                            {e}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            <div className="grid grid-cols-2 mr-md:grid-cols-4 justify-center mr-md:justify-between mt-[30px] gap-y-5 gap-x-2 mr-md:gap-x-5 items-center">
                                                {
                                                    [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8].map((e, i) => (
                                                        <Image src={e} alt="logo" className="mx-auto block" />
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </AutoPlaySlider>
            </div>
        </section>
    )
}