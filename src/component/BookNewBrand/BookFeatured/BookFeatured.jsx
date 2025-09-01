import React from 'react'
import Image from "next/image";
// Media
import Client1 from "media/children-book-lp/clients/work-1.svg";
import Client2 from "media/children-book-lp/clients/work-2.svg";
import Client3 from "media/children-book-lp/clients/work-3.svg";
import Client4 from "media/children-book-lp/clients/work-4.svg";
import Client5 from "media/children-book-lp/clients/work-5.svg";
import Client6 from "media/children-book-lp/clients/work-6.svg";
import Client7 from "media/children-book-lp/clients/work-7.svg";
import Client8 from "media/children-book-lp/clients/work-8.svg";
import Client9 from "media/children-book-lp/clients/work-9.svg";
import Client10 from "media/children-book-lp/clients/work-10.svg";
import Client11 from "media/children-book-lp/clients/work-11.svg";
import Client12 from "media/children-book-lp/clients/work-12.svg";
import AutoScrollSlider from '@/component/ChildrenBooklp/AutoScrollSlider';
const BookFeatured = () => {
    return (
        <section className='bg-[#f7f8f9] pt-10 pb-12 mr-xl:pt-20 mr-xl:pb-16'>
            <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-2 text-center mr-lg:w-10/12 mx-auto'>Get Your Book Featured On Leading Publications!</h2>
                        <p className='text-[14px] mr-md:text-[15px] poppins font-[500] mr-lg:w-10/12 mr-xl:w-8/12 mr-2xl:px-7 mx-auto text-center pb-7'>We can put your book in the spotlight across top publications! Specializing in strategic placement and targeted publicity, we drive author success with proven results.</p>
                    </div>
                </div>
            </div>
            <AutoScrollSlider options={{ align: "center" }} direction="forward">
                {[Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11, Client12].map((imgPortfolio, i) => (
                    <div key={i} className="group shrink-0 mr-xl:basis-[14%] mr-sm:basis-[16%] basis-[47%] min-w-0 pl-5  items-center flex justify-center ">
                        <div className="flex items-center justify-center w-full">
                            <div className={`w-full`}>
                                <Image src={imgPortfolio} alt="Book Featured" className="w-9/12" />
                            </div>
                        </div>
                    </div>
                ))}
            </AutoScrollSlider>
        </section>
    )
}

export default BookFeatured
