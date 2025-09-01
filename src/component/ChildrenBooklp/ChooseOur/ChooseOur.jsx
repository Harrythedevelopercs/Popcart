import React from 'react'
import Image from 'next/image'
import { MRCTA } from '@/component'
// Images
import Choose1 from "media/children-book-lp/choose1.svg"
import Choose2 from "media/children-book-lp/choose2.svg"
import Choose3 from "media/children-book-lp/choose3.svg"
import Choose4 from "media/children-book-lp/choose4.svg"
import Particle1 from "media/children-book-lp/choose-particle-1.svg"
import Particle2 from "media/children-book-lp/choose-particle-2.svg"

const ChooseOur = () => {
    return (
        <section className='pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px] bg-[#F3F3F3]'>
            <div className="mr-container relative">
                <div className="absolute right-[30px] top-[50px] mr-2xl:block hidden">
                    <Image src={Particle1} alt='BSP' />
                </div>
                <div className="absolute left-[-30px] top-0 mr-lg:top-[50px] mr-sm:block hidden">
                    <Image src={Particle2} alt='BSP' />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-center text-black'>Why <span className='text-[#3EA99F] font-normal'>Choose</span> Our Book <span className='text-[#3EA99F] font-normal'>Publishing</span> Company?</h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-8/12 mx-auto pb-8 mr-xl:pb-20'>We pride ourselves on providing top-notch quality publishing services, putting your vision, timelines, and satisfaction first. Our team of professionals does everything with passion and dedication to ensure each book is published at the highest standards that will make your publishing journey smooth and rewarding.</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mr-lg:gap-0">
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card h-full px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 mr-lg:border-r-0 rounded-r-[15px] mr-lg:rounded-r-[0px] rounded-l-[15px] border-[#3EA99F]">
                            <Image src={Choose1} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>Creative Freedom</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>Maintain complete creative control over your manuscript, cover design, and final product.</p>
                        </div>
                    </div>
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card h-full px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 mr-lg:border-r-0 rounded-l-[15px] mr-lg:rounded-l-[0px] rounded-r-[15px] mr-lg:rounded-r-[0px] border-[#3EA99F]">
                            <Image src={Choose2} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>Wide Distribution</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>Get your book on every major platform, from bookstores to online retailers, ensuring it reaches a global audience.</p>
                        </div>
                    </div>
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card h-full px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 mr-lg:border-r-0 rounded-l-[15px] mr-lg:rounded-l-[0px] rounded-r-[15px] mr-lg:rounded-r-[0px] border-[#3EA99F]">
                            <Image src={Choose3} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>Quality Assurance</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>We ensure that your book looks and reads beautifully, from editing to print, ensuring a professional finish.</p>
                        </div>
                    </div>
                    <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-3">
                        <div className="card h-full px-3 mr-2xl:px-5 py-5 mr-2xl:py-10 duration-700 ease-in-out hover:bg-white border-2 border-[#3EA99F] rounded-l-[15px] mr-lg:rounded-l-[0px] rounded-r-[15px]">
                            <Image src={Choose4} alt='Services' className='mx-auto' />
                            <h3 className='text-[20px] leading-[30px] font-medium text-center py-6'>100% Ownership</h3>
                            <p className='mr-md:text-base text-sm font-normal leading-normal text-center pb-8'>When you publish with us, you retain 100% ownership of your book. Every creative decision remains in your hands.</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-8 mr-lg:mt-16">
                    <MRCTA text="Connect With Us!" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px]" />
                    <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-[6px] !bg-[#161616] !border-0 hover:bg-black text-white hover:border-black" />
                </div>
            </div>
        </section>
    )
}

export default ChooseOur
