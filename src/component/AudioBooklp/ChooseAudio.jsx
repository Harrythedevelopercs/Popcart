import React from 'react'
import { MRCTA } from '..'
import Slider from "react-slick";
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Images
import Arrow from "media/assets/audiobook/leftArrow.png"
import Image from 'next/image';

const ChooseAudio = () => {
    let chooseAudioslider = {
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section>
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex-col mr-lg:flex-row flex items-center justify-between pb-10">
                            <div className="txt">
                                <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] leading-[35px] mr-md:leading-[40px] mr-lg:leading-[50px] secondary pb-2'>Why Choose Us For <span class="text-[#3EA99F]">Audiobook <br className='mr-xl:block hidden' /> Services?</span></h2>
                                <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-4 mr-xl:mr-5 mr-xl:pr-5'>We turn your ideas into engaging storytelling, connecting effortlessly with listeners through our <br className='mr-xl:block hidden' /> skilled narrators and expert production</p>
                            </div>
                            <div className="btn mr-auto mr-lg:mr-0 mr-lg:ml-auto block">
                                <div className="flex flex-wrap items-center justify-start mr-md:gap-2">
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA link='javascript:void(Tawk_API.toggle())' classes="mt-5 w-full !font-medium" animation="__animatedPing" text="Connect With Us!" />
                                    </div>
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA link='tel:855-666-6675' classes="mr-xl:mt-5 w-full !border-2 !border-black bg-transparent !text-black" animation="__animatedPing" text="Call Us Now!" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Slider {...chooseAudioslider}>
                            <div className='px-2 mr-2xl:px-4'>
                                <div className="group">
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[40px] px-[15px] mr-2xl:px-[20px] flex flex-col justify-between">
                                        <div className="content border-b-4 border-black group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:border-white pb-2">
                                            <div className='h-[80px] flex items-end mb-[7px]'>
                                                <h3 className='text-[20px] mr-2xl:text-[25px] leading-[35px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 '>100% Original Narration</h3>
                                            </div>
                                            <p className='group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We deliver 100% original narration with solo, duet, and multicast options. Our experienced audiobook actors use soothing voices to enhance any genre.</p>
                                        </div>
                                        <div className="btn pt-4">
                                            <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='text-[16px] leading-[25px] secondary font-[500] flex items-center group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white'>
                                                <span className='mr-4'>Let's Talk</span>
                                                <Image src={Arrow} alt='PSB' className='!m-0 h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' width={22} height={11} />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='px-2 mr-2xl:px-4'>
                                <div className="group">
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[40px] px-[15px] mr-2xl:px-[20px] flex flex-col justify-between">
                                        <div className="content border-b-4 border-black group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:border-white pb-2">
                                            <div className='h-[80px] flex items-end mb-[7px]'>
                                                <h3 className='text-[20px] mr-2xl:text-[25px] leading-[35px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 '>Experienced Narrators</h3>
                                            </div>
                                            <p className='group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our narrators bring years of experience and a result-oriented mindset. They adapt to all kinds of books, achieving the best version of your audiobook.</p>
                                        </div>
                                        <div className="btn pt-4">
                                            <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='text-[16px] leading-[25px] secondary font-[500] flex items-center group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white'>
                                                <span className='mr-4'>Let's Talk</span>
                                                <Image src={Arrow} alt='PSB' className='!m-0 h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' width={22} height={11} />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='px-2 mr-2xl:px-4'>
                                <div className="group">
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[40px] px-[15px] mr-2xl:px-[20px] flex flex-col justify-between">
                                        <div className="content border-b-4 border-black group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:border-white pb-2">
                                            <div className='h-[80px] flex items-end mb-[7px]'>
                                                <h3 className='text-[20px] mr-2xl:text-[25px] leading-[35px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 '>Unlimited Revisions</h3>
                                            </div>
                                            <p className='group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We offer unlimited audiobook revisions to achieve the best result. Our focus is on delivering a final product that perfectly meets your vision.</p>
                                        </div>
                                        <div className="btn pt-4">
                                            <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='text-[16px] leading-[25px] secondary font-[500] flex items-center group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white'>
                                                <span className='mr-4'>Let's Talk</span>
                                                <Image src={Arrow} alt='PSB' className='!m-0 h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' width={22} height={11} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 mr-2xl:px-4'>
                                <div className="group">
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[40px] px-[15px] mr-2xl:px-[20px] flex flex-col justify-between">
                                        <div className="content border-b-4 border-black group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:border-white pb-2">
                                            <div className='h-[80px] flex items-end mb-[7px]'>
                                                <h3 className='text-[20px] mr-2xl:text-[25px] leading-[35px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 '>Precision-Driven Quality</h3>
                                            </div>
                                            <p className='group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Our narrators use a precision-driven approach, refining every detail to deliver top-notch quality. This commitment ensures your audiobook meets the highest standards.</p>
                                        </div>
                                        <div className="btn pt-4">
                                            <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='text-[16px] leading-[25px] secondary font-[500] flex items-center group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white'>
                                                <span className='mr-4'>Let's Talk</span>
                                                <Image src={Arrow} alt='PSB' className='!m-0 h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' width={22} height={11} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 mr-2xl:px-4'>
                                <div className="group">
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[40px] px-[15px] mr-2xl:px-[20px] flex flex-col justify-between">
                                        <div className="content border-b-4 border-black group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:border-white pb-2">
                                            <div className='h-[80px] flex items-end mb-[7px]'>
                                                <h3 className='text-[20px] mr-2xl:text-[25px] leading-[35px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 '>100% Original Narration</h3>
                                            </div>
                                            <p className='group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We deliver 100% original narration with solo, duet, and multicast options. Our experienced audiobook actors use soothing voices to enhance any genre.</p>
                                        </div>
                                        <div className="btn pt-4">
                                            <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='text-[16px] leading-[25px] secondary font-[500] flex items-center group-hover:duration-700 duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white'>
                                                <span className='mr-4'>Let's Talk</span>
                                                <Image src={Arrow} alt='PSB' className='!m-0 h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' width={22} height={11} />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseAudio
