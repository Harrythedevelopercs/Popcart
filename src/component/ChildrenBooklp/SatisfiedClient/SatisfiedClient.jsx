import Image from 'next/image'
import { MRCTA } from '@/component'
import React from 'react'
// Import Slick Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images
import PublishBg from "media/children-book-lp/publish-bg.png"
import sun from "media/children-book-lp/sun.svg"
import PublishParticle from "media/children-book-lp/publishParticle.svg"
import googleReview from "media/children-book-lp/google-review-new.svg"
import trustpilot from "media/children-book-lp/trustpilot-review-new.svg"
import Client1 from "media/children-book-lp/client-1.svg"
import Client2 from "media/children-book-lp/client-2.svg"
import Client3 from "media/children-book-lp/client-3.svg"
import Client4 from "media/children-book-lp/client-4.svg"
import Client5 from "media/children-book-lp/client-5.svg"
import Client6 from "media/children-book-lp/client-6.svg"
import Client7 from "media/children-book-lp/client-7.svg"
import Star from "media/children-book-lp/cl-review1.svg"
import Star1 from "media/children-book-lp/cl-review2.svg"
import Star2 from "media/children-book-lp/cl-review3.svg"
import Star3 from "media/children-book-lp/cl-review4.svg"
import Star4 from "media/children-book-lp/cl-review5.svg"

const SatisfiedClient = () => {
    const sliderData = [
        {
            desc: "I couldn't believe how seamlessly it all went through! From inception to completion, every stage was dealt with professionally. My book turned out just the way I had envisioned.",
            clientName: 'Liora',
            clientLocation: "Children's Book Author",
            clientImage: Client1,
            star: Star,
            reviews: "4.7",
        },
        {
            desc: 'Thank you so much for such a beautiful book! The entire process was easy. Moreover, I got a lot of suggestions that turned out to be really helpful.',
            clientName: 'Evander',
            clientLocation: 'First-Time Author',
            clientImage: Client2,
            star: Star1,
            reviews: "4.9",
        },
        {
            desc: 'The publishing service is fantastic, actually one of the best that I have dealt with. It really has exceeded my expectations. The print quality is really top-notch, and people comment on just how professional my book looks!',
            clientName: 'Zephyr',
            clientLocation: 'Self-Published Author',
            clientImage: Client1,
            star: Star2,
            reviews: "4.8",
        },
        {
            desc: 'From formatting to final print, everything went smoothly. Your support made all the difference, and I am just thrilled with the final product!',
            clientName: 'Talia',
            clientLocation: 'Creator of Picture Book',
            clientImage: Client3,
            star: Star3,
            reviews: "4.7",
        }
    ]
    // Slider Setting
    const clientSlider = {
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        fade: true,
    };
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
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 mr-lg:col-span-6">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-white'>
                            Our <span className='text-[#3EA99F] font-normal'>Happy </span> Clients
                        </h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-white pb-8'>We have helped more than 12,000 children's book authors bring their stories alive. Our kids book publishing company has recognized as one of the most experienced service providers in the industry</p>
                        <div className="btn">
                            <MRCTA text="Connect With Us Now" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
                        </div>

                        <div className="flex items-center justify-between gap-5 mr-lg:w-10/12 mt-12">
                            <Image src={googleReview} alt='Google Review' priority loading='eager' className='w-[35%] mr-sm:w-auto' />
                            <Image src={trustpilot} alt='Trustpilot' priority loading='eager' className='w-[35%] mr-sm:w-auto' />
                        </div>
                    </div>
                    <div className="col-span-12 mr-lg:col-span-6">
                        <Slider {...clientSlider} className='childrenClientSlider'>
                            {sliderData.map((data, index) => (
                                <div key={index}>
                                    <div className="card mr-lg:w-10/12 mr-xl:w-8/12 mr-2xl:w-7/12 mx-auto p-4 mr-sm:p-7 relative before:content-[''] before:absolute before:top-[25px] mr-sm:before:top-[25px] mr-lg:before:top-[18px] before:left-[50%] before:translate-x-[-50%] before:h-[80%] mr-lg:before:h-[395px] before:w-[93%] mr-lg:before:w-[350px] before:mx-auto before:bg-[#454545d8] before:z-[-1] before:rounded-[15px] before:rotate-[-5deg] mr-lg:before:rotate-[-6deg] after:content-[''] after:absolute after:top-[25px] mr-sm:after:top-[25px] mr-lg:after:top-[18px] after:left-[50%] after:translate-x-[-50%] after:h-[80%] mr-lg:after:h-[390px] after:w-[93%] mr-lg:after:w-[350px] after:mx-auto after:bg-[#454545] after:z-[-1] after:rounded-[15px] after:rotate-[5deg] mr-lg:after:rotate-[6deg]">
                                        <div className="bg-white pt-5 pb-10 min-h-[180px] mr-lg:min-h-[270px] px-5 rounded-t-[15px]">
                                            <p className='text-[18px] leading-[35px] font-normal mr-sm:pr-[20px]'>{data.desc}</p>
                                        </div>
                                        <div className="bg-[#3EA99F] py-7 px-7 rounded-b-[15px] flex items-center justify-between">
                                            <div className='flex items-center gap-x-4'>
                                                <div>
                                                    <Image src={data.clientImage} alt='CLient 1' className='w-[43px] h-[43px]' />
                                                </div>
                                                <div>
                                                    <h6 className='text-white text-[18px] leading-[24px] font-normal'>{data.clientName}</h6>
                                                    <p className='text-white text-[16px] leading-[19px] font-normal'>{data.clientLocation}</p>
                                                </div>
                                            </div>
                                            <div className='flex items-end space-x-1'>
                                                <Image src={data.star} alt='BSP' />
                                                <span className='text-white text-[11px] font-bold mt-[10px]'>{data.reviews}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SatisfiedClient
