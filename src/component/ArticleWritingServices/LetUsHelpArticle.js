import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
const LetUsHelpArticle = () => {
    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };
    var settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3, // Display 2 columns at this breakpoint
                    slidesToScroll: 3, // Scroll 2 columns at this breakpoint
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // Display 1 column at this breakpoint
                    slidesToScroll: 3, // Scroll 1 column at this breakpoint
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
                }
            }
        ]
    };

    // Initialize state for screen size
    const [isLargeScreen, setIsLargeScreen] = useState(true); // Default to true for larger screens

    // Function to update the screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 768); // Customize the breakpoint as needed
    };

    // Add an event listener to update the screen size state on resize
    useEffect(() => {
        updateScreenSize(); // Initial call

        const handleResize = () => {
            updateScreenSize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            // Clean up the event listener
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <section className="mr-lg:!py-[100px] mr-md:!py-[80px] py-[60px] relative">
                <div className="mr-container relative z-10 font-secondary">
                    <div className="text-center justify-center ">
                        <h6 className='mr-md:text-3xl text-2xl text-[#3EA99F] font-semibold'>Our services are consistently praised for their excellence </h6>
                        <h2 className='mr-lg:text-[50px] mr-md:text-[40px] text-3xl leading-tight py-2 font-semibold xs:text-4xl'>Discover What Makes Us Stand Out From The Rest</h2>
                        <p className="mr-md:text-base text-sm mr-md:text-center text-justify leading-normal mr-2xl:w-[80%] mr-xl:w-[90%] mx-auto">
                        Broadway Publishers sets itself apart from competitors with its exceptional article writing services. Unlike others, Broadway Publishers employs an approach that combines in-depth research, compelling storytelling, and expert craftsmanship to produce articles.
                        </p>
                    </div>
                    <div className={`grid mr-xl:w-[90%] mr-xl:mx-auto ${isLargeScreen ? '' : 'hidden'} grid-cols-3 md:grid-cols-2 gap-4 mt-12 items-stretch justify-stretch`}>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 hover:invert-1 hover:brightness-100 hover:grayscale ' alt="Seal of Approval" width={100} height={100} />
                                <h4 className='text-xl font-semibold mx-auto '>Keyword Optimized Content</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={100} height={100} />
                                <h4 className='text-xl font-semibold mx-auto '>Writing and Editing</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={100} height={100} />
                                <h4 className='text-xl font-semibold mx-auto '>SEO Oriented Pieces</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={100} height={100} />
                                <h4 className='text-xl font-semibold mx-auto '>User Friendly Platform</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={100} height={100} />
                                <h4 className='text-xl font-semibold mx-auto '>Ideation and Moderation</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={100} height={100} />
                                <h4 className='text-xl font-semibold mx-auto '>Creative Taglines</h4>
                            </div>
                        </div>
                    </div>
                    <div className={`grid w-[80%] mx-auto ${isLargeScreen ? 'hidden' : ''} grid-cols-3 gap-4 mt-12 items-stretch justify-stretch sm:grid-cols-1 sm:px-5 xs:grid-cols-1 xs:px-0 md:px-0`}>
                        {/* Medium, Small, and Extra Small screen content */}
                        <Slider {...settings}>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 hover:invert-1 hover:brightness-100 hover:grayscale ' alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Keyword Optimized Content</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Writing and Editing</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>SEO Oriented Pieces</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>User Friendly Platform</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Ideation and Moderation</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="imageAR/checkmark.png" className='mx-auto mb-8 ' alt="Seal of Approval" width={70} height={70} />
                                    <h4 className='text-xl font-semibold mx-auto '>Creative Taglines</h4>
                                </div>
                            </div>
                        </Slider>
                    </div>
                    <div className='flex justify-center items-center gap-x-5 mt-10'>
                        <a href="tel:855-666-6675" className='transition-all ease-in-out duration-500 py-2 text-base font-normal font-secondary text-white px-10 border-2 border-[#3EA99F] bg-[#3EA99F] rounded-md hover:bg-[#1d1d1f] hover:border-[#1d1d1f]' >Get Started</a>
                        <a onClick={openLiveChat} href="#" className='transition-all ease-in-out duration-500 py-2 text-base font-normal font-secondary text-black hover:text-white px-11 border-2 border-[#1d1d1f] bg-transparent rounded-md hover:bg-[#3EA99F] hover:border-[#3EA99F]' >Live Chat</a>
                    </div>
                </div>
            </section>
        </>

    )
}

export default LetUsHelpArticle
