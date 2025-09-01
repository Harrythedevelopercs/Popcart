import React, { useState, useId } from 'react'
import Image from 'next/image'
// Images
import Faqsbg from "media/children-book-lp/faqs-bg.png"
import FaqsBook from "media/children-book-lp/faqs-books.png"
import Arrows1 from "media/children-book-lp/faqs-arrow-1.svg"
import Arrows2 from "media/children-book-lp/faqs-arrow-2.svg"
import Link from 'next/link'

const Faqs = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <>
            <section className='relative pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]'>
                <Image src={Faqsbg} alt='Casestudy' fill={true} className='object-center object-cover -z-10' />
                <div className="mr-container">
                    <div className="grid grid-cols-12 mr-lg:gap-x-10 mr-xl:gap-x-20 items-center">
                        <div className="col-span-12 mr-lg:col-span-6">
                            <h2 className='mr-xl:text-[40px] mr-lg:text-[30px] text-[25px] font-semibold leading-normal text-white'>FAQs</h2>
                            <p className='mr-md:text-[18px] text-sm font-normal leading-normal text-white pt-6 pb-6 mr-md:pb-12'>Do you have questions about publishing your children’s book? We’ve gathered answers to the most common questions to guide you through the process with ease. Our FAQ section is here to help make your publishing experience stress-free and successful.</p>
                            <div>
                                <Image src={FaqsBook} alt='BSP' className='mr-lg:block hidden' />
                            </div>
                        </div>
                        <div className="col-span-12 mr-lg:col-span-6">
                            {items.map(([title, desc], index) => (
                                <div key={useId()} className={`${openIndex === index ? "shadow-[0_0px_20px_rgba(0,_0,_0,_0.13)] " : "shadow-none"} border-b border-white mb-3 pt-2 mr-2xl:pt-4 pb-5 mr-lg:px-5`}>
                                    <div className={`flex gap-x-5 ${openIndex === index ? "my-2 items-start" : "my-0 items-center"} `}>
                                        <button
                                            className="w-full text-left focus:outline-none"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <div>
                                                <div className='flex justify-between items-center'>
                                                    <h4 className={`mr-lg:text-[17px] mr-2xl:text-[20px] text-sm leading-[25px] font-semibold ${openIndex === index ? "text-[#3EA99F] mb-4" : "text-white mb-0"}`}>{title}</h4>
                                                    <span className='block'>{openIndex === index ?
                                                        <Image src={Arrows2} alt="Collapse" /> :
                                                        <Image src={Arrows1} alt="Expand" />
                                                    }</span>
                                                </div>
                                                {openIndex === index && (
                                                    <p className='mr-xl:text-[16px] text-sm font-normal leading-[26px] mr-xl:leading-[30px] text-white pt-5 mr-2xl:pb-5'>
                                                        {desc}
                                                    </p>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* CopyRight Start */}
            <section className='bg-[#3EA99F] py-3'>
                <div className="mr-container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 mr-lg:col-span-7">
                            <div className="flex flex-wrap items-center justify-center gap-y-2 mr-md:justify-between">
                                <div className='flex items-center gap-x-2'>
                                    <Link href="#" className='text-white text-[15px]'>
                                        Terms of Use
                                    </Link>
                                    <span className='text-white text-[15px]'>|</span>
                                    <Link href="#" className='text-white text-[15px]'>
                                        Privacy Policy
                                    </Link>
                                </div>
                                <div>
                                    <p className='text-white text-[15px]'>© 2025 - All Rights Reserved </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faqs
