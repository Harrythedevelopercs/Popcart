import React from 'react'
import Image from 'next/image'
import { MRCTA } from '@/component'
// Images
import PublishBg from "media/children-book-lp/publish-bg.png"
import sun from "media/children-book-lp/sun.svg"
import BlueParticle from "media/children-book-lp/heading-particle.png"
import WhiteParticle from "media/children-book-lp/heading-particle2.png"
import PublishParticle from "media/children-book-lp/publishParticle.svg"

const PublishingServices = () => {
    const cardData = [
        {
            title: "Print-On-Demand Publishing",
            desc: "Print-on-demand (POD) publishing means your book is only printed when a reader orders a copy. You provide us with your completed manuscript, and we’ll set it up so that whenever someone orders your book, it gets printed and shipped directly to them. You’ll have full control over the design and layout of your book. ",
            image: BlueParticle
        },
        {
            title: "Vanity Book Publishing Service",
            desc: "Our Vanity Publishing service offers professional assistance at every step, from editing and cover design to printing and distribution. You’ll also have full creative control, allowing you to make the final decisions on how your book looks and reads. Once published, your book will be available for purchase.",
            image: WhiteParticle
        },
        {
            title: "Self-Publishing",
            desc: "When you choose our self-publishing services, we help you with professional editing, cover design, formatting, and even marketing support, and you’ll have the freedom to decide how your book looks, where it’s sold, and at what price. Plus, with self-publishing, you keep more of your royalties, as you aren’t sharing them with a traditional publisher.",
            image: BlueParticle
        },
        {
            title: "Hybrid Publishing",
            desc: "Hybrid publishing service is ideal for those who want to share the publishing costs but still need professional support to bring their book to life. We’ll work with you to edit and refine your manuscript, create a stunning cover, and distribute your book to both online and physical retailers.",
            image: BlueParticle
        },
        {
            title: "E-Book Publishing",
            desc: "Our e-book publishing service helps you format your manuscript into a digital book that’s compatible with all major platforms, including Amazon Kindle, Apple Books, and Google Play. We’ll assist you through the process of creating a well-structured, visually appealing e-book that offers a smooth reading experience.",
            image: WhiteParticle
        },
    ]
    return (
        <section className='relative pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]'>
            <Image src={PublishBg} alt='Casestudy' fill={true} className='object-center object-cover -z-10' />
            <div className="absolute left-0 top-[60px] mr-lg:block hidden">
                <Image src={PublishParticle} alt='BSP' />
            </div>
            <div className="mr-container relative">
                <div className="absolute mr-sm:block hidden right-0 mr-lg:right-[30px] mr-xl:right-[70px] top-[-60px] mr-lg:top-[-20px] ">
                    <Image src={sun} alt='Sun' className='mr-lg:w-10/12 animate-pulse' />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-center text-white'>
                        Comprehensive <span className='text-[#3EA99F] font-normal'>Children's Book </span> Publishing Services
                        </h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-white text-center mr-lg:w-9/12 mr-xl:w-7/12 mx-auto pb-8 mr-xl:pb-14'>Our services cover everything from professional editing and custom illustrations to full-scale book publishing and global distribution. Publish a kid book with us and, we will ensure your book reaches its full potential and captivates young readers worldwide. </p>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center mr-sm:gap-x-7 gap-y-12 ">
                    {cardData.map((data, index) => (
                        <div className="col-span-12 mr-md:col-span-6 mr-lg:col-span-4 mr-md:w-[45%] mr-xl:w-[30%]" key={index}>
                            <div className="card">
                                <div className="relative mb-4 py-7 mr-sm:py-9 mr-md:py-4 mr-xl:py-3 mr-2xl:py-2">
                                    <Image src={data.image} alt='Casestudy' fill={true} className='object-center object-contain mr-xs:object-cover -z-10' />
                                    <h2 className='text-center text-[18px] font-semibold leading-[0px] mr-sm:leading-[30px] mr-xl:leading-[50px] mr-2xl:leading-[70px]'>{data.title}</h2>
                                </div>
                                <div className="bg-[#282828] rounded-[15px] py-5 px-[15px] min-h-[200px] flex items-center justify-center">
                                    <p className='text-center mr-xl:text-[14px] text-sm font-normal leading-[25px] px-[6px] text-white'>{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-7 mr-lg:mt-10">
                    <MRCTA text="Connect With Us!" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
                    <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-white !text-black hover:border-black" />
                </div>
            </div>
        </section>
    )
}

export default PublishingServices
