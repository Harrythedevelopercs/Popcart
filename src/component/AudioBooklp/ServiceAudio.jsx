import React from 'react'
import Image from 'next/image';
import { MRCTA } from '..';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service1 from "media/assets/audiobook/services-1.png"
import Service2 from "media/assets/audiobook/services-2.png"
import Service3 from "media/assets/audiobook/services-3.png"
import Service4 from "media/assets/audiobook/services-4.png"
import Service5 from "media/assets/audiobook/services-5.png"
import Service6 from "media/assets/audiobook/services-6.png"
import Service7 from "media/assets/audiobook/services-7.png"
import Service8 from "media/assets/audiobook/services-8.png"
import Service9 from "media/assets/audiobook/services-9.png"

const ServiceAudio = () => {
    let servicesSlider = {
        dots: false,
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section id="services" className='pt-[80px] mr-lg:pb-[100px]'>
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="txt text-center">
                            <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] mr-md:leading-[70px] secondary'>Our <span className='text-[#3EA99F]'>Audiobook</span> Services</h2>
                            <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary pb-7 mr-lg:pb-10 mr-xl:mr-5 mr-xl:pr-5'>Authors! Connect with your audience and expand your reach by transforming your books into engaging audiobooks. <br className='mr-lg:block hidden' /> Here are the audiobook services we offer:</p>
                        </div>
                        <Slider {...servicesSlider} className='servicesSlider'>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service1} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Audiobook Distribution</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Reach a broad audience with global availability on platforms like Audible, Scribd, Apple audiobooks, and more! Our distribution service makes your audiobook accessible across various online stores, maximizing your book's exposure.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service2} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Content Licensing</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Content licensing protects your intellectual property rights, allowing you to legally share and monetize your audiobook. Create additional revenue streams and explore partnership opportunities to expand your reach and maximize your earnings.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service3} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Subscription Services</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Utilize subscription models to secure consistent income. Feature your audiobooks on major platforms, increasing discoverability while gaining detailed analytics and insights to refine your content and grow your listener base.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service4} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Audio Book Production Services</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We provide high-quality audiobook production with professional narrators and state-of-the-art recording studios. Our detailed editing and post-production process, along with perfect voice talent, guarantees your project is completed on time and to the highest standard.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service5} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Platform Development</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We specialize in creating tailored platforms with intuitive and easy-to-navigate interfaces. Our scalable solutions grow with your audience and integrate seamlessly with payment gateways, marketing tools, and analytics for comprehensive support.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service6} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Marketing and Promotiong</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We boost your audiobook's reach with targeted marketing campaigns, leveraging social media platforms, email marketing, influencer partnerships, advertising, content marketing, and enticing promotional offers and discounts to attract and retain listeners!</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service7} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Exclusive Content</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>Provide your readers unique and original audiobooks with our exclusive content service. Collaborate with us to create premium access editions, limited releases, and special loyalty rewards, giving your audience an unforgettable experience.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service8} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Social Media Marketing</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We use platforms like Facebook, Instagram, X, and LinkedIn to promote your audiobook. Our services include creating shareable content, engaging audiences, running targeted ad campaigns, and providing detailed analytics to refine strategies.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service9} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>SEO</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We optimize audiobook descriptions, titles, and metadata with relevant keywords. Our services include creating keyword-rich content, building high-quality backlinks, enhancing technical aspects, and improving visibility in local searches for better search engine rankings.</p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-4'>
                                <div className='group h-full'>
                                    <div className="card bg-white group-hover:bg-[#3EA99F] duration-700 group-hover:duration-700  group-hover:ease-in-out ease-in-out rounded-[20px] py-[60px] px-[30px] min-h-[415px] flex flex-col justify-between">
                                        <div>
                                            {/* <div className="cardimage w-2/12">
                                                <Image src={Service9} alt='PSB' className='w-full h-auto duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:invert group-hover:brightness-100' />
                                            </div> */}
                                            <div className="txt">
                                                <h3 className='text-[25px] leading-[45px] font-semibold group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white pb-2 pt-3'>Email Campaigns</h3>
                                                <p className='group-hover:duration-700   duration-700 group-hover:ease-in-out ease-in-out group-hover:text-white text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2'>We provide targeted audience segmentation and write compelling email content with audiobook previews, exclusive offers, author insights, and updates. Our automated email campaigns include welcome series, abandoned cart reminders, follow-up emails, and personalized subject lines with promotional offers.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="btn pt-3">
                                            <div className="w-full mr-md:w-max">
                                                <Link href="javascript:;" onClick={() => { parent.LC_API.open_chat_window(); return false; }} className='border-2 border-black rounded-[6px] bg-transparent h-[45px] w-[175px] flex items-center justify-center duration-700 group-hover:duration-700 group-hover:ease-in-out ease-in-out group-hover:bg-[#000] group-hover:border-0 group-hover:text-white text-[16px] leading-[19px] secondary font-[300]'>
                                                    Let's Talk
                                                </Link>
                                            </div>
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

export default ServiceAudio