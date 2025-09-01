import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import tel from "media/newBrandv2/call.png"
import WritingImage from "media/newBrandv2/writing-image.png"

const WritingExpert = () => {
    return (
        <section className='pt-10 pb-12 mr-xl:py-20'>
            <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                <div className="grid grid-cols-12 items-center gap-y-10">
                    <div className="col-span-12 mr-lg:col-span-6">
                        <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-2 text-center mr-md:text-left'>Why Choose Book Writing Expert?</h2>
                        <p className='text-[14px] mr-md:text-[15px] poppins font-[500] text-center mr-md:text-left'>We are well aware of unique content creation requirements for each client. With a team equipped with a wide array of expertise, experiences and knowledge, we are always an author’s top preference. Book Writing Expert will simplify the Writing, Editing, Publication and Marketing needs for you. Our collaboration would be transparent and hassle-free, reducing all the intricacies from your end. We only deliver content that is remarkable, genuine and original.</p>
                        <div className="flex flex-wrap gap-y-5 gap-x-3 mr-xl:gap-x-5 items-center justify-center mr-md:justify-start mt-5">
                            <div className='bg-[#E7E7E74D] border border-[#E7E7E74D] px-5 mr-xl:px-6 py-1 rounded-[8px] group hover:bg-white hover:shadow-[0_10px_20px_0px_#0000001A] hover:border-[#cccccc6e] hover:duration-700 ease-in-out duration-700'>
                                <p className='text-[15px] mr-xl:text-[17px] mr-2xl:text-[20px] text-[#B9B9B9] group-hover:text-black group-hover:duration-700 ease-in-out duration-700 font-[400] text-center ppmori'>Research</p>
                            </div>
                            <div className='bg-[#E7E7E74D] border border-[#E7E7E74D] px-5 mr-xl:px-6 py-1 rounded-[8px] group hover:bg-white hover:shadow-[0_10px_20px_0px_#0000001A] hover:border-[#cccccc6e] hover:duration-700 ease-in-out duration-700'>
                                <p className='text-[15px] mr-xl:text-[17px] mr-2xl:text-[20px] text-[#B9B9B9] group-hover:text-black group-hover:duration-700 ease-in-out duration-700 font-[400] text-center ppmori'>Customer Service</p>
                            </div>
                            <div className='bg-[#E7E7E74D] border border-[#E7E7E74D] px-5 mr-xl:px-6 py-1 rounded-[8px] group hover:bg-white hover:shadow-[0_10px_20px_0px_#0000001A] hover:border-[#cccccc6e] hover:duration-700 ease-in-out duration-700'>
                                <p className='text-[15px] mr-xl:text-[17px] mr-2xl:text-[20px] text-[#B9B9B9] group-hover:text-black group-hover:duration-700 ease-in-out duration-700 font-[400] text-center ppmori'>Native Speaker</p>
                            </div>
                            <div className='bg-[#E7E7E74D] border border-[#E7E7E74D] px-5 mr-xl:px-6 py-1 rounded-[8px] group hover:bg-white hover:shadow-[0_10px_20px_0px_#0000001A] hover:border-[#cccccc6e] hover:duration-700 ease-in-out duration-700'>
                                <p className='text-[15px] mr-xl:text-[17px] mr-2xl:text-[20px] text-[#B9B9B9] group-hover:text-black group-hover:duration-700 ease-in-out duration-700 font-[400] text-center ppmori'>Privacy Guaranted</p>
                            </div>
                            <div className='bg-[#E7E7E74D] border border-[#E7E7E74D] px-5 mr-xl:px-6 py-1 rounded-[8px] group hover:bg-white hover:shadow-[0_10px_20px_0px_#0000001A] hover:border-[#cccccc6e] hover:duration-700 ease-in-out duration-700'>
                                <p className='text-[15px] mr-xl:text-[17px] mr-2xl:text-[20px] text-[#B9B9B9] group-hover:text-black group-hover:duration-700 ease-in-out duration-700 font-[400] text-center ppmori'>Experienced Writers</p>
                            </div>
                        </div>
                        <div className="flex flex-col mr-md:flex-row items-center gap-4 mt-9">
                            <Link href="mailto:info@broadwaypublishers.com" className='bg-[#65c7e4] hover:bg-black hover:duration-700 ease-in-out duration-700 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center text-white poppins uppercase text-[15px] font-[400]'>
                                Explore All Services
                            </Link>
                            <Link href="tel:(800) 781-9093" className='bg-[#131313] hover:bg-[#65c7e4] hover:duration-700 ease-in-out duration-70 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center gap-2 text-white poppins uppercase text-[15px] font-[400]'>
                                <Image src={tel} alt='Tel Icon' className='w-[18px] h-[18px]' />
                                855-666-6675
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 mr-lg:col-span-6">
                        <Image src={WritingImage} alt='Writing Expert' className='object-cover mr-md:w-7/12 mr-lg:w-10/12 mr-auto mr-lg:mr-0 ml-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WritingExpert
