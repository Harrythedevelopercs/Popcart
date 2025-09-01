
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { MRCTAGroup } from '.';





const magazineProp = ({
    subtitle,
    title,
    desc,
    data
}) => {
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
            <section className="py-[80px]">
                <div className="mr-container font-primary text-center sm:px-5">
                    <h6 className='text-[30px] font-primary text-[#3EA99F] font-semibold'>
                        {subtitle}
                    </h6>
                    <h3 className='font-primary mx-auto font-semibold leading-normal mr-lg:text-[45px] text-[35px]'>
                        {title}
                    </h3>
                    <p className='mr-lg:w-[70%] m-auto mb-5'>{desc}</p>



                    <div className={`grid ${isLargeScreen ? '' : 'hidden'} m-auto mr-lg:grid-cols-4 gap-3 items-center justify-stretch`}>
                        {data?.map((e, i) => (
                            <div key={i} className="  ">
                                <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#fff] h-[250px] py-10 px-auto items-center justify-center mx-auto rounded-3xl shadow-lg">
                                    <Image quality={95} src={e.imagePath} width={80} height={80} className='mx-auto mb-8 invert-100 group-hover:bg-white ' alt={e.alt} />
                                    <h4 className='text-xl font-semibold mx-auto font-primary' dangerouslySetInnerHTML={{ __html: e.heading }} />
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className={`grid w-[80%] ${isLargeScreen ? 'hidden' : ''}  mx-auto grid-cols-1 gap-5 mt-12 items-stretch justify-stretch md:px-5`}>
                        <Slider {...settings}>
                            {data?.map((e, i) => (
                                <div key={i} className="  ">
                                    <div className="hover:shadow-2xl hover:shadow-[#777777] hover:-translate-y-1 hover:scale-105  hover:bg-[#00c0e4] duration-300 hover:text-white box text-center bg-[#f2f2f2] py-16 px-auto items-center justify-center mx-auto rounded-3xl">
                                        <Image quality={95} src={e.imagePath} width={80} height={80} className='mx-auto mb-8 invert-100 group-hover:bg-white ' alt={e.alt} />
                                        <h4 className='text-xl font-semibold mx-auto font-primary' dangerouslySetInnerHTML={{ __html: e.heading }} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                            <MRCTAGroup classes='justify-center mt-5'/>



                </div>
            </section>
        </>
    )
}

export default magazineProp
