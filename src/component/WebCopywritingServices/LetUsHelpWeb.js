
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const LetUsHelpWeb = () => {
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
                    slidesToShow: 1, // Display 1 column at this breakpoint
                    slidesToScroll: 1, // Scroll 1 column at this breakpoint
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


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };


    return (
        <>
            <section className="py-20 relative md:py-10">
                <div className="container max-w-7xl lg:max-w-6xl relative z-10 font-secondary">
                    <div className={`${isLargeScreen ? '' : 'hidden'} grid w-[90%] mx-auto md:grid-cols-2 grid-cols-3 gap-4 mt-6 items-stretch justify-stretch xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Original Key-word <br></br> Optimized content</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Content Writing<br></br> and Editing Services</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Professional Writers <br></br> trained in SEO</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Easy-to-use <br></br> platform </h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Topic<br></br> Ideation</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto '>Creative <br></br> Out-of-the-box taglines</h4>
                            </div>
                        </div>
                    </div>



                    <div className={`${isLargeScreen ? 'hidden' : ''} grid w-[90%] mx-auto md:grid-cols-2 grid-cols-3 gap-4 mt-6 items-stretch justify-stretch sm:grid-cols-1 sm:px-5 xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <Slider {...settings}>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Original Key-word <br></br> Optimized content</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Content Writing<br></br> and Editing Services</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Professional Writers <br></br> trained in SEO</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Easy-to-use <br></br> platform </h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Topic<br></br> Ideation</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#1d1d1f] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-8 ' src="imageAR/checkmark.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto '>Creative <br></br> Out-of-the-box taglines</h4>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>

    )
}

export default LetUsHelpWeb
