import Image from 'next/image'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const demandingSpecilaist = () => {
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
    return (
        <>
            <section className="py-[100px] sm:py-20">
                <div className="container max-w-7xl font-secondary">
                    <div className="text-center justify-center ">
                        <h6 className='text-[30px] font-primary font-semibold text-[#3EA99F]'>Let Us Help You</h6>
                        <h2 className='text-[50px] font-primary font-bold xs:text-4xl mt-2'>What Sets Us Apart?</h2>
                        <p className='w-[80%] mx-auto my-3 text-[#05193c] xs:text-justify sm:w-[90%] xs:w-[90%]'>
                             Broadway Publishers Ghostwriting is a well-known international ghostwriting and editing firm operating for over a decade. Our experts create well-versed writing that demonstrates true professionalism while exhibiting creativity. Our services are not only economical but also ensure that both the needs of the authors and the preferences of their target audience are adequately met. Some of our platform's distinguishing traits are as follows:
                        </p>
                    </div>
                    <div className={`grid w-[80%] md:w-[90%] ${isLargeScreen ? '' : 'hidden'} mx-auto md:grid-cols-2 grid-cols-3 gap-5 mt-12 items-stretch justify-stretch xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={50} height={50} className='mx-auto mb-5  ' src="/assets/images/newimg/reasearch.png" alt="research and faq section" />
                                <h4 className='text-xl font-semibold mx-auto '>Research <br></br> FAQ Section</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={65} height={50} className='mx-auto mb-5 ' src="/assets/images/newimg/copywriting11.png" alt="copy wiriting" />
                                <h4 className='text-xl font-semibold mx-auto '>SEO Copywriting <br></br> and Editing</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={65} height={65} className='mx-auto mb-5 ' src="/assets/images/newimg/seo11.png" alt="SEO Titile" />
                                <h4 className='text-xl font-semibold mx-auto '>SEO Titile and <br></br> Meta Description</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={65} height={65} className='mx-auto mb-5 ' src="/assets/images/newimg/Professional.png" alt="Professional Analysis" />
                                <h4 className='text-xl font-semibold mx-auto '>Professional <br></br> Analysis </h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={65} height={65} className='mx-auto mb-5 ' src="/assets/images/newimg/Optimization.png" alt="effective Keyword Optimization" />
                                <h4 className='text-xl font-semibold mx-auto '>Effective Keyword <br></br> Optimization</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={65} height={65} className='mx-auto mb-5 ' src="/assets/images/newimg/link.png" alt="in depth page linking" />
                                <h4 className='text-xl font-semibold mx-auto '>In-Depth <br></br> Page Linking</h4>
                            </div>
                        </div>
                    </div>





                    <div className={`grid xs:w-[90%] ${isLargeScreen ? 'hidden' : ''} mx-auto gap-5 mt-12 items-stretch justify-stretch sm:grid-cols-1 sm:px-20 xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <Slider {...settings}>
                        <div className="  ">
                            <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={60} className='mx-auto mb-5  ' src="/assets/images/newimg/reasearch.png" alt="research and faq section" />
                                <h4 className='text-xl font-semibold mx-auto '>Research <br></br> FAQ Section</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/copywriting11.png" alt="copy wiriting" />
                                <h4 className='text-xl font-semibold mx-auto '>SEO Copywriting <br></br> and Editing</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/seo11.png" alt="SEO Title " />
                                <h4 className='text-xl font-semibold mx-auto '>SEO Titile and <br></br> Meta Description</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/Professional.png" alt="Professional Analysis" />
                                <h4 className='text-xl font-semibold mx-auto '>Professional <br></br> Analysis </h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/Optimization.png" alt="eefective Keyword Optimization" />
                                <h4 className='text-xl font-semibold mx-auto '>Effective Keyword <br></br> Optimization</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/link.png" alt="in depth page linking" />
                                <h4 className='text-xl font-semibold mx-auto '>In-Depth <br></br> Page Linking</h4> 
                            </div>
                        </div>

                        </Slider>
                    </div>
                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
