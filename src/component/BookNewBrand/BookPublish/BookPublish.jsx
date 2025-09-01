import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import tel from "media/newBrandv2/call.png"
import Portfolio1 from "media/newBrandv2/publish1.png"
const BookPublish = () => {
    return (
        <section className='pt-10 pb-12 mr-xl:py-[120px]'>
            <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                <div className="bg-gradient-to-tr from-[#72CDE8] to-[#2E9FC0] rounded-[20px] relative">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 mr-xl:col-span-7">
                            <div className="txt px-[20px] mr-md:px-[50px] py-[40px] mr-md:py-[60px] text-center mr-md:text-left">
                                <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] text-white font-semibold capitalize dm-serif mb-3'>Publish Your Book with Confidence & Expertise!</h2>
                                <p className='text-[14px] mr-md:text-[15px] text-white poppins font-[400] mr-lg:w-11/12'>We’ve helped over 500 authors achieve bestseller status with personalized publishing strategies, data-driven insights, and expert editorial support. Join the ranks of successful authors who trust us to amplify their reach and maximize their book’s impact!</p>
                                <div className="flex flex-col mr-md:flex-row items-center gap-4 mt-8">
                                    <Link href="mailto:info@broadwaypublishers.com" className='bg-white hover:bg-black hover:duration-700 ease-in-out duration-700 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center text-black hover:text-white poppins uppercase text-[15px] font-[500]'>
                                        Explore All Services
                                    </Link>
                                    <Link href="tel:(800) 781-9093" className='bg-[#131313] hover:bg-[#65c7e4] hover:duration-700 ease-in-out duration-70 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center gap-2 text-white poppins uppercase text-[15px] font-[400]'>
                                        <Image src={tel} alt='Tel Icon' className='w-[18px] h-[18px]' />
                                        855-666-6675
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5 mr-xl:block hidden">
                            <div className="publishImage absolute right-[-10px] top-[-35px] mr-2xl:top-[-80px] w-6/12 ml-auto">
                                <Image src={Portfolio1} alt='Publish' className='ml-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookPublish
