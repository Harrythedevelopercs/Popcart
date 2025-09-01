import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import Writer1 from "media/newBrandv2/writer2.png"
import Writer2 from "media/newBrandv2/writer3.png"
import Writer3 from "media/newBrandv2/writer4.png"
import Writer4 from "media/newBrandv2/writer6.png"
import Writer5 from "media/newBrandv2/writer5.png"
import tel from "media/newBrandv2/call.png"

const CountlessWriters = () => {
    const writers = [
        {
            title: "Dragon's Call",
            desc: 'We are known for our writing skills that help you attract multiple readers...',
            book: Writer1
        },
        {
            title: "Inside The Mind",
            desc: 'We are known for our writing skills that help you attract multiple readers...',
            book: Writer2
        },
        {
            title: "Echoes Of The Nebula",
            desc: 'We are known for our writing skills that help you attract multiple readers...',
            book: Writer3
        },
        {
            title: "The Case Of Vanishing Ruby",
            desc: 'We are known for our writing skills that help you attract multiple readers...',
            book: Writer4
        },
        {
            title: "Beneath The Willow Tree",
            desc: 'We are known for our writing skills that help you attract multiple readers...',
            book: Writer5
        },
    ]
    return (
        <section className='bg-[#f7f8f9] pt-10 pb-12 mr-xl:py-20'>
            <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                <div className="grid grid-cols-12 gap-x-6 mr-xl:gap-x-12">
                    <div className="col-span-12">
                        <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-2 text-center'>We Have Supported Countless Writers Get Best Selling Books Published Under Their Name .</h2>
                        <p className='text-[14px] mr-md:text-[15px] poppins font-[500] mr-lg:w-10/12 mr-2xl:px-10 mx-auto text-center'>Our experienced publishing service providers remove the hurdles of publishing books. From printing and publishing to distribution and marketing books on a global level, we take the writers through all.</p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1400px] mx-auto px-4 mr-md:px-8 mr-2xl:px-0 mt-8 mr-md:mt-12">
                <div className="grid grid-cols-1 mr-md:grid-cols-2 mr-lg:grid-cols-5 gap-y-10 gap-x-7 mr-lg:gap-5 mr-xl:gap-8">
                    {writers.map((content, index) => (
                        <div key={index} className='group'>
                            <div className="writerImage shadow-[2px_0px_22px_4px_rgba(0,0,0,0.523)]">
                                <Image src={content.book} alt='Writer' className='object-cover w-full group-hover:scale-105 group-hover:duration-700 duration-700 ease-in-out' style={{ transformOrigin: 'bottom' }} />
                            </div>
                            <div className="content text-center mr-md:text-left pt-5">
                                <h3 className='text-[17px] mr-xl:text-[20px] leading-[27px] mr-xl:leading-[30px] font-semibold dm-serif mb-2 text-center'>{content.title}</h3>
                                {/* <p className='text-[14px] mr-xl:text-[16px] leading-[22px] mr-xl:leading-[24px] font-medium inter mr-2xl:pr-10'>{content.desc}</p> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-col-12 mt-5 mr-md:mt-12">
                    <div className="col-span-12">
                        <div className="flex flex-col mr-md:flex-row items-center justify-center gap-4">
                            <Link href="mailto:info@broadwaypublishers.com" className='bg-[#65c7e4] hover:bg-black hover:duration-700 ease-in-out duration-700 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center text-white poppins uppercase text-[15px] font-[400]'>
                                Explore All Services
                            </Link>
                            <Link href="tel:(800) 781-9093" className='bg-[#131313] hover:bg-[#65c7e4] hover:duration-700 ease-in-out duration-70 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center gap-2 text-white poppins uppercase text-[15px] font-[400]'>
                                <Image src={tel} alt='Tel Icon' className='w-[18px] h-[18px]' />
                                855-666-6675
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountlessWriters
