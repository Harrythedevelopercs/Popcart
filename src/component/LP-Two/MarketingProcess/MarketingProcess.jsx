import Image from 'next/image';
import { useState, useId } from 'react';
import Arrows from "media/book-marketing-company/arrows.svg"
import { MRCTA } from '@/component';
const MarketingProcess = ({ items, title, desc, booksImage }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <section id='process'>
            <div className='mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans'>
                <div className='mr-container'>
                    <div className='mr-sm:text-center text-justify mr-xl:w-[85%] mr-md:w-[90%] w-full mx-auto'>
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-[600] mb-3' dangerouslySetInnerHTML={{ __html: title }} />
                        <p className='mr-md:text-base text-sm font-normal leading-normal' dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className='grid mr-lg:grid-cols-2 grid-cols-1 items-center mr-lg:gap-x-5 gap-y-5 mr-md:mt-[60px] mt-[40px]'>
                        <div>
                            <Image src={booksImage} alt='StreamlinedBooks' className='mr-md:block mx-auto hidden' />
                        </div>
                        <div>
                            {items.map(([title, desc], index) => (
                                <div key={useId()} className={`${openIndex === index ? "bg-white shadow-[0_3px_15px_rgba(0,_0,_0,_0.07)]" : "bg-[#F3F3F3]"} rounded-xl mb-3 py-4 px-5`}>
                                    <div className={`flex gap-x-5 ${openIndex === index ? "my-2 items-start" : "my-0 items-center"} `}>
                                        <span className={`${openIndex === index ? "bg-black text-white" : "bg-white text-black"} py-2 px-2 rounded-lg font-bold  mr-xl:text-[25px] text-xl`}>0{index + 1}</span>
                                        <button
                                            className="w-full text-left focus:outline-none"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <div>
                                                <div className={`flex justify-between items-center ${openIndex === index ? "mb-4" : "mb-0"}`}>
                                                    <h4 className="mr-md:text-xl mr-sm:text-lg text-sm font-medium">{title}</h4>
                                                    <span className='block'>{openIndex === index ?
                                                        <Image src={Arrows} alt="Collapse" /> :
                                                        <Image src={Arrows} alt="Expand" className='rotate-180' />
                                                    }</span>
                                                </div>
                                                {openIndex === index && (
                                                    <p className='mr-md:text-base text-sm font-normal leading-normal'>
                                                        {desc}
                                                    </p>
                                                )}
                                            </div>
                                        </button>
                                    </div>
                                    {openIndex === index && (
                                        <MRCTA text="Connect With Us!" classes='__animatedPing mt-5 hover:bg-black mr-md:ms-16' link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MarketingProcess;