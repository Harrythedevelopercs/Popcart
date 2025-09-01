import { useState, useId } from 'react';
import Arrows from "media/book-marketing-company/arrows.svg"
import Image from 'next/image';
const FAQS = ({ title, items }) => {
    const [openIndex, setOpenIndex] = useState(0);
    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <section>
            <div className='mr-lg:py-[80px] mr-md:py-[60px] py-[40px]'>
                <div className='mr-container'>
                    <div className='mr-sm:text-center text-justify mb-[40px]'>
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3' dangerouslySetInnerHTML={{ __html: title }} />
                    </div>
                    <div>
                        {items.map(([title, desc], index) => (
                            <div key={useId()} className={`${openIndex === index ? "shadow-[0_0px_20px_rgba(0,_0,_0,_0.13)] border-none" : "shadow-none border-2 border-[#3EA99F]"} bg-white  rounded-2xl mb-3 py-4 px-5`}>
                                <div className={`flex gap-x-5 ${openIndex === index ? "my-2 items-start" : "my-0 items-center"} `}>
                                    <button
                                        className="w-full text-left focus:outline-none"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <div>
                                            <div className='flex justify-between items-center'>
                                                <h4 className={`mr-md:text-xl mr-sm:text-lg text-sm font-semibold ${openIndex === index ? "mb-4" : "mb-0"}`}>{title}</h4>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FAQS;