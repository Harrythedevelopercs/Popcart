import { useState, useId } from "react";
import { MRCTA } from "@/component";
import Image from "next/image";
import Ufo from "media/book-illustrations/ufo.png"
import Satellite from "media/book-illustrations/satellite.png"
const TypesOfIllustrations = ({ tabs }) => {
    const [openIndex, setOpenIndex] = useState(1);
    const toggleAccordion = (i) => {
        setOpenIndex(prevIndex => (prevIndex === i ? null : i));
    };
    return (
        <section className="font-sans" id="bookIllustrations">
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] relative z-10">
                <Image src={Ufo} alt="icons" className="absolute mr-lg:block hidden top-10 left-6 bottom-0 -z-10 w-[100px] h-auto object-cover" priority={true} />
                <Image src={Satellite} alt="icons" className="absolute mr-lg:block hidden top-16 right-6 bottom-0 -z-10 w-[100px] h-auto object-cover" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center mr-xl:w-[60%] mr-lg:w-[70%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3">Types of Children’s Book Illustrations</h2>
                        <p className="mr-md:text-base text-sm leading-normal font-normal">Our seasoned marketing professionals expertly employ advanced, effective techniques to boost your literal presence. Our seasoned marketing professionals expertly employ advanced, effective</p>
                    </div>
                    <div className="mr-sm:grid mr-md:grid-cols-5 mr-sm:grid-cols-3 flex overflow-scroll [text-wrap:nowrap] mr-md:gap-0 gap-y-7 mr-md:mt-16 mt-12 mr-lg:w-[90%] mr-sm:w-full mx-auto">
                        {tabs && tabs?.map(({ name }, i) => (
                            <div key={useId()} className="text-center mr-sm:me-0 me-5 mr-sm:pb-0 pb-5">
                                <h4 className={`${openIndex === i ? "border-b-4 border-[#3EA99F] text-[#000000]" : "border-b-2 border-[#D1D1D1] text-[#ACACAC]"} pb-2`}>
                                    <button onClick={() => toggleAccordion(i)}>{name}</button>
                                </h4>
                            </div>
                        ))}
                    </div>
                    {tabs && tabs?.map(({ img, title, desc }, i) => (
                        <div key={useId()} className={`${openIndex === i ? "grid" : "hidden"} mr-md:grid-cols-2 grid-cols-1 mr-md:gap-x-5 gap-5 items-center mr-lg:mt-[100px] mr-md:mt-[80px] mt-[50px]`}>
                            <div>
                                <Image src={img} alt="books" className="block mx-auto" />
                            </div>
                            <div>
                                <h3 className="mr-md:text-[30px] text-[20px] leading-normal font-semibold text-[#000] mb-4">{title}</h3>
                                <p className="mr-lg:text-base text-sm leading-normal font-normal">{desc}</p>
                                <div className="grid grid-cols-1 mr-sm:flex flex-wrap mr-sm:gap-x-5 gap-5 mt-8">
                                    <MRCTA text="Connect With Us!" isPopup={true} classes="__animatedPing !rounded-full hover:bg-transparent hover:border-black hover:text-[#000]" />
                                    <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-full bg-transparent !border-black !text-black hover:bg-black hover:!text-white hover:border-black" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TypesOfIllustrations;