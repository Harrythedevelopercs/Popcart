
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';



const workMode = ({
    subtitle,
    title,
    desc,
    StoryPlotData,
    GridCols
}) => {
    console.log(subtitle,
        title,)
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
                    slidesToShow: 2, // Display 1 column at this breakpoint
                    slidesToScroll: 2, // Scroll 1 column at this breakpoint
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
        setIsLargeScreen(window.innerWidth >= 767); // Customize the breakpoint as needed
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
            <section className="our-process">
                <div className="mr-container text-[#1d1d1f] mr-lg:!py-[80px] mr-md:!py-[60px] !py-[40px]">
                    <div className="text-center mb-14 justify-center">
                        <h6 className='text-[30px] text-[#3EA99F] font-primary font-semibold mb-2'>
                            {subtitle}
                        </h6>
                        <h2 className='mr-xl:text-[45px] font-bold font-primary leading-tight mt-3 mb-3 sm:text-[30px] xs:text-[30px]' dangerouslySetInnerHTML={{ __html: title }} />
                        <p className='w-[54%] mx-auto md:w-[90%] sm:w-[80%] xs:w-[100%] xs:px-5'>
                            {desc}
                        </p>
                    </div>

                    <div className={`grid ${GridCols} grid-rows-1 ${isLargeScreen ? '' : 'hidden'} gap-4 md:grid-cols-2 md:w-[90%] mx-auto`}>
                        {StoryPlotData && StoryPlotData?.map((e, i) => (
                            <div key={i} className="col-md hover:-translate-y-1 hover:scale-105 duration-300 shadow-gray-300 rounded-xl shadow-lg">
                                <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-white h-[100%] py-16 px-4 border-0 border-solid transition-[.5s] hover:!bg-[#000] hover:border-white group">
                                    <h5 className='text-[#3EA99F]  text-xl font-semibold mb-3'>{e.steps}</h5>
                                    <p className='text-[20px]  font-primary text-[#3EA99F] font-semibold leading-tight m-0 mb-3 transition-[.5s all]' dangerouslySetInnerHTML={{ __html: e.heading }} />

                                    <span className='block text-[16px] leading-5 mt-3'>
                                        {e.desc}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className={`grid w-[80%] mx-auto ${isLargeScreen ? 'hidden' : ''} grid-cols-3 md:w-[80%] md:grid-cols-1 sm:grid-cols-1 gap-4 mt-12 items-stretch justify-stretch xs:grid-cols-1 xs:px-0 md:px-0`}>
                        <Slider {...settings}>
                            {StoryPlotData && StoryPlotData?.map((e, i) => (
                                <div key={i} className=" hover:-translate-y-1 hover:scale-95 duration-300 shadow-gray-300 rounded-xl shadow-lg">
                                    <div className="box rounded-2xl bg-white text-left text-[#1d1d1f] hover:text-black h-[100%] py-24 px-7 md:py-24 md:px-10 border-0 border-solid transition-[.5s] hover:bg-[#00c0e4] hover:border-white">
                                        <h5 className='text-[#3EA99F] hover:text-[#000] text-xl font-semibold mb-3'>{e.steps}</h5>
                                        <p className='text-[19px] text-[#242424] font-semibold leading-6 m-0 mb-3 transition-[.5s all]'>
                                            {e.heading}
                                        </p>
                                        <span className='block text-[16px] leading-5 mt-3'>
                                            {e.desc}
                                        </span>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>

                </div>
            </section>
        </>


    )
}

export default workMode
