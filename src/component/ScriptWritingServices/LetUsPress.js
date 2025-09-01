

import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';


const creativeGhostWriters = () => {
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
            <section className="py-[100px] sm:py-20 xs:py-20 ">
                <div className="container max-w-7xl lg:max-w-6xl relative font-secondary text-center">
                    <h6 className='text-[30px] font-primary text-[#3EA99F] font-semibold'>
                    The Script That Is
                    </h6>
                    <h3 className=' font-bold font-primary leading-[60px] text-[40px] xs:text-3xl xs:w-[100%] py-3'>
                        Written with Pure Perfection
                    </h3>
                    <p className='w-[70%] mx-auto sm:w-[80%] xs:w-[90%]'>Scriptwriting is massive, but with us, it becomes easy and accessible. You choose your script, and our writers do wonders with it. Our scriptwriting is known and acknowledged internationally.</p>


                    <div className={`${isLargeScreen ? '' : 'hidden'} grid w-[80%] mx-auto md:grid-cols-2 md:w-[90%] grid-cols-3 gap-4 mt-10 items-stretch justify-stretch xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 xs:py-14 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={60} height={60} className='mx-auto mb-5 invert-100 group-hover:bg-white ' src="/assets/images/newimg/filmwriting.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary '>Film <br></br> Writing</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={70} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/videowriting.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary '>Video<br></br>Scripting</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={60} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/Documentarywriting.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary '>Documentary <br></br> Scripting</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={80} height={100} className='mx-auto mb-5 ' src="/assets/images/newimg/storyScripting.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary '>Story <br></br> Scripting </h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={65} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/Manuscripting.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary '>Manuscript <br></br> Scripting</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} width={65} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/content-scripting.png" alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary '>Content <br></br> Scripting</h4>
                            </div>
                        </div>
                    </div>

                    <div className={`${isLargeScreen ? 'hidden' : ''} grid w-[90%] mx-auto md:grid-cols-2 grid-cols-3 gap-4 mt-10 items-stretch justify-stretch sm:grid-cols-1 sm:px-8 xs:grid-cols-1 xs:px-5 md:px-5`}>
                        <Slider {...settings}>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-5 invert-100 group-hover:bg-white ' src="/assets/images/newimg/filmwriting.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary '>Film <br></br> Writing</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/videowriting.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary '>Video<br></br>Scripting</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/Documentarywriting.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary '>Documentary <br></br> Scripting</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={100} height={100} className='mx-auto mb-5 ' src="/assets/images/newimg/storyScripting.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary '>Story <br></br> Scripting </h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/Manuscripting.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary '>Manuscript <br></br> Scripting</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} width={80} height={80} className='mx-auto mb-5 ' src="/assets/images/newimg/content-scripting.png" alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary '>Content <br></br> Scripting</h4>
                                </div>
                            </div>
                        </Slider>
                    </div>



                </div>
            </section>
        </>
    )
}

export default creativeGhostWriters
