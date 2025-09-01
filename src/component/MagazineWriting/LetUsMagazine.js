
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
            <section className="py-[100px] relative font-secondary ">
                <div className="container max-w-7xl lg:max-w-6xl relative z-10 font-secondary text-center sm:px-5">
                    <h6 className='text-[30px] font-primary text-[#3EA99F] font-semibold'>
                        The script that is
                    </h6>
                    <h3 className='font-primary mx-auto font-semibold leading-[70px] text-[40px] sm:text-4xl xs:text-3xl sm:py-5 xs:py-5 sm:w-[100%] xs:w-[90%]'>
                        Magazine Work Best in Your Favor
                    </h3>
                    <p className='w-[70%] mx-auto xs:w-[90%] md:w-[80%] sm:w-[100%] sm:px-4 '>Magazine writing demands the delicate balance of sustaining interest through creativity while maintaining simplicity. We integrate all content, observing the specific requirements of magazine writing. Our content upholds a high standard of writing and grammar, ensuring exceptional quality.</p>



                    <div className={`grid w-[80%] ${isLargeScreen ? '' : 'hidden'} md:w-[95%] mx-auto md:grid-cols-2 grid-cols-3 gap-5 mt-12 items-stretch justify-stretch md:px-5`}>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="/assets/images/newimg/eassy-articles.png" width={80} height={80} className='mx-auto mb-8 invert-100 group-hover:bg-white ' alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary'>Essay <br></br>Articles</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="/assets/images/newimg/historical-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary'>Historical <br></br> Articles</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="/assets/images/newimg/profile-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary'>Profile <br></br> Articles</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="/assets/images/newimg/service-article.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary'>Service <br></br>Articles</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="/assets/images/newimg/research-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary'>Research <br></br> Articles</h4>
                            </div>
                        </div>
                        <div className="  ">
                            <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                <Image quality={95} src="/assets/images/newimg/informative-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                <h4 className='text-xl font-semibold mx-auto font-primary'>Informative <br></br> Articles</h4>
                            </div>
                        </div>
                    </div>


                    <div className={`grid w-[80%] ${isLargeScreen ? 'hidden' : ''}  mx-auto grid-cols-1 gap-5 mt-12 items-stretch justify-stretch md:px-5`}>
                        <Slider {...settings}>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="/assets/images/newimg/eassy-articles.png" width={80} height={80} className='mx-auto mb-8 invert-100 group-hover:bg-white ' alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary'>Essay <br></br>Articles</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="/assets/images/newimg/historical-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary'>Historical <br></br> Articles</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="/assets/images/newimg/profile-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary'>Profile <br></br> Articles</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="/assets/images/newimg/service-article.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary'>Service <br></br>Articles</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="/assets/images/newimg/research-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary'>Research <br></br> Articles</h4>
                                </div>
                            </div>
                            <div className="  ">
                                <div className="hover:shadow-lg hover:shadow-[#777777] hover:-translate-y-1 hover:scale-95 hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                    <Image quality={95} src="/assets/images/newimg/informative-articles.png" width={80} height={80} className='mx-auto mb-8 ' alt="Seal of Approval" />
                                    <h4 className='text-xl font-semibold mx-auto font-primary'>Informative <br></br> Articles</h4>
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
