import Image from 'next/image'
import backgroundImage from "media/lp-four/portfolioBg.png"
import Ellipse from "media/lp-four/methods/Ellipse.png"
import Logo1 from "media/lp-four/methods/1.png"
import Logo2 from "media/lp-four/methods/2.png"
import Logo3 from "media/lp-four/methods/3.png"
import Logo4 from "media/lp-four/methods/4.png"
import Logo5 from "media/lp-four/methods/5.png"
import Logo6 from "media/lp-four/methods/6.png"
import Logo7 from "media/lp-four/methods/1.svg"
import Logo8 from "media/lp-four/methods/2.svg"
import Logo9 from "media/lp-four/methods/3.svg"
import Logo10 from "media/lp-four/methods/4.svg"
import Logo11 from "media/lp-four/methods/5.svg"
import Logo12 from "media/lp-four/methods/6.svg"
import { MRCTA } from '..';
import { useId, useState } from 'react';
const Methods = () => {
    const [openIndex, setOpenIndex] = useState(3);
    const toggleAccordion = (i) => {
        setOpenIndex(prevIndex => (prevIndex === i ? null : i));
    };
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] relative z-10">
                <Image src={backgroundImage} alt="consultationBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify text-white mr-lg:w-[80%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-3'>We Publish Your Book On All The Leading Platforms!</h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal'>Learn how to use effective promo methods for multi-platform publishing, maximizing your book's reach and visibility. Here’s what we offer:</p>
                    </div>
                    <div className="grid mr-lg:grid-cols-6 mr-sm:grid-cols-3 grid-cols-2 gap-x-4 gap-y-7 mr-md:mt-16 mt-12 w-full mx-auto">
                        {[
                            ["Amazon KDP"],
                            ["Lulu Book Publishing"],
                            ["Walmart Book Publishing"],
                            ["IngramSpark Publishing"],
                            ["Apple Books Publishing"],
                            ["Google Books Publishing "]
                        ].map(([name], i) => (
                            <div key={useId()} className="text-center">
                                <h4 className={`${openIndex === i ? "border-[#3EA99F] bg-primary-100" : "border-[#707070]"} border-2 text-white py-2 rounded-md mr-2xl:text-base text-sm`}>
                                    <button onClick={() => toggleAccordion(i)}>{name}</button>
                                </h4>
                            </div>
                        ))}
                    </div>
                    {[
                        [Logo12, "Amazon KDP Services", Logo6, "We will publish your book on Amazon KDP, or Kindle Direct Publishing and offer extensive reach and control over your work. With Amazon Publishing, we can directly publish and sell your book on Amazon. Our services optimize your Amazon KDP experience by handling keyword research, category selection, and promotional tactics. As a top-tier Amazon book publisher, we ensure your book is strategically positioned for maximum visibility and sales."],
                        [Logo11, "Lulu Book Publishing Services", Logo5, "We offer provide tools for print-on-demand and global distribution for your book that is published on Lulu Books. As an expert book publisher, we enhance your Lulu experience by managing the technicalities of formatting, cover design, and distribution. Our team ensures your book meets industry standards and reaches a broad audience. Utilize our expertise to focus on your writing while we handle the complexities of publishing."],
                        [Logo10, "Walmart Book Publishing Services", Logo4, "Walmart offers a substantial platform for book distribution, reaching millions of potential readers. We streamline the process of getting your book listed on Walmart, managing everything from inventory setup to pricing strategies. Our services ensure your book is competitively positioned and marketed effectively. With our expertise, you can navigate Walmart's platform seamlessly, optimizing visibility and sales. Trust us to handle the technical aspects, allowing you to focus on your writing while we maximize your book’s reach on Walmart."],
                        [Logo7, "IngramSpark Publishing Services", Logo1, "We provide comprehensive print-on-demand and global distribution services for authors that want their books to be published on IngramSparks. We simplify the process by managing everything from book formatting to distribution logistics. Our expertise ensures your book meets IngramSpark's quality standards and is available to thousands of retailers and libraries worldwide. With our technical support, you can focus on writing while we handle metadata optimization, pricing strategies, and marketing efforts."],
                        [Logo9, "Apple Books Publishing Services", Logo3, "Apple Books provides a prime platform for reaching millions of iOS users. We take care of the technical aspects such as ePub formatting, metadata optimization, and strategic pricing to enhance your book’s visibility. Our services also include targeted marketing campaigns and analytics to track performance. Let us navigate the intricacies of Apple Books publishing, ensuring your work is expertly presented and widely accessible, helping you connect with a broader audience."],
                        [Logo8, "Google Books Publishing Services", Logo2, "Google Books offers a powerful platform for global book discovery. We manage the technical requirements, including book scanning, metadata optimization, and search visibility to ensure your book is easily found. Our services include effective SEO strategies and integration with Google Play for seamless sales. We also provide analytics to monitor your book's performance. Rely on our expertise to navigate Google Books, making your work accessible to a worldwide audience and increasing your book's reach and impact."]
                    ].map(([img, title, textLogos, desc], i) => (
                        <div key={useId()} className={`${openIndex === i ? "grid" : "hidden"} mr-md:grid-cols-2 grid-cols-1 mr-md:gap-x-5 gap-5 items-center mr-lg:mt-[100px] mr-md:mt-[80px] mt-[50px]`}>
                            <div className='text-white'>
                                <div className='flex items-center gap-x-5 mb-4'>
                                    <h3 className="mr-md:text-[30px] text-[20px] leading-normal font-semibold border-s-4 border-primary-100 ps-5">{title}</h3>
                                    <Image src={textLogos} alt='logos' className="block" />
                                </div>
                                <p className="mr-lg:text-base text-sm mr-sm:text-start text-justify leading-normal font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                                <div className="grid grid-cols-1 mr-sm:flex mr-sm:gap-x-5 gap-5 mt-8">
                                    <MRCTA text="Let’s Chat!" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing hover:bg-transparent hover:border-black" />
                                    <MRCTA text="Call Us Now!" link='tel:8556666675' classes="__animatedPing bg-white !border-black !text-black hover:bg-black hover:!text-white hover:border-black" />
                                </div>
                            </div>
                            <div className='relative mr-md:block hidden'>
                                <Image src={Ellipse} alt="books" width={550} height={550} className="block mx-auto" />
                                <Image src={img} alt='logos' className='absolute top-[42%] mr-lg:w-[350px] mr-sm:w-[300px] w-[250px] h-auto bottom-0 left-0 right-0 z-10 block mx-auto' />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Methods;