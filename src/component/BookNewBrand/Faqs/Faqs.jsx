import React, { useState, useId } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import Collapse from "media/newBrandv2/faqsminus.png"
import Expand from "media/newBrandv2/faqplus.png"

const Faqs = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <>
            <section className='relative pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]'>
                <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                    <div className="grid grid-cols-12 mr-lg:gap-x-10 mr-xl:gap-x-20 items-center">
                        <div className="col-span-12">
                            <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-5 mr-lg:mb-8 text-center mr-lg:w-10/12 mx-auto'>Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="mr-lg:w-8/12 mx-auto">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12">
                                {items.map(([title, desc], index) => (
                                    <div key={useId()} className={`shadow-[0_0px_20px_rgba(0,_0,_0,_0.13)]  border-b border-white mb-5 pt-2 mr-2xl:pt-4 pb-3 mr-lg:px-5 rounded-[12px] mr-md:rounded-[20px]`}>
                                        <div className={`flex gap-x-5 ${openIndex === index ? "my-2 items-start" : "my-0 items-center"} `}>
                                            <button
                                                className="w-full text-left focus:outline-none"
                                                onClick={() => toggleAccordion(index)}>
                                                <div>
                                                    <div className='flex items-center gap-x-4 px-3 mr-md:px-0'>
                                                        <span className='block'>
                                                            {openIndex === index ?
                                                                <div className='bg-[#F5F9FF] rounded-full w-[30px] mr-sm:w-[40px] h-[30px] mr-sm:h-[40px] flex items-center justify-center'>
                                                                    <Image src={Collapse} alt="Collapse" className='w-[10px] h-[10px] object-contain' />
                                                                </div>
                                                                :
                                                                <div className='bg-[#fff] rounded-full w-[30px] mr-sm:w-[40px] h-[30px] mr-sm:h-[40px] flex items-center justify-center'>
                                                                    <Image src={Expand} alt="Expand" className='w-[10px] h-[10px] object-contain' />
                                                                </div>
                                                            }
                                                        </span>
                                                        <h4 className={`mr-lg:text-[17px] mr-2xl:text-[22px] text-sm leading-[25px] font-semibold text-black dm-serif ${openIndex === index ? "mb-1" : "mb-0"}`}>{title}</h4>
                                                    </div>
                                                    {openIndex === index && (
                                                        <p className='mr-xl:text-[16px] text-sm font-normal poppins leading-[25px] text-[#596275] pt-4 mr-sm:pt-2 pr-[10px] mr-md:pl-[55px] pl-[30px]'>
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
                </div>
            </section>
            {/* CopyRight Start */}
            <section className='bg-[#000] py-3'>
                <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="flex flex-wrap items-center justify-center gap-y-2 mr-md:justify-between">
                                <div>
                                    <p className='text-white text-[15px] font-[400] poppins'>© 2025 - All Rights Reserved </p>
                                </div>
                                <div className='flex items-center gap-x-8'>
                                    <Link href="#" className='text-white text-[15px] font-[400] poppins'>
                                        Terms of Use
                                    </Link>
                                    <Link href="#" className='text-white text-[15px] font-[400] poppins'>
                                        Privacy Policy
                                    </Link>
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
