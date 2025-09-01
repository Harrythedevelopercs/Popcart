import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';

const LibrarySphere = ({
    subTitle = "",
    title = "",
    desc = "",
    background = "",
    BGclasses = "",
    CardClasses = "",
    GridClasses = "mr-md:grid-cols-3 mr-lg:grid-cols-4",
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

    const [isLargeScreen, setIsLargeScreen] = useState(true);
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 767); // Customize the breakpoint as needed
    };
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
            <section>
                <div className={`${background} ${BGclasses}`}>
                    <div className="mr-container">
                        <div className="text-center mb-5">
                            {subTitle && (<span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                                {subTitle}
                            </span>)}
                            {title && (<h2 className="text-[26px] mr-md:text-[30px] mr-lg:text-[40px] block leading-tight font-bold font-sans mb-2" dangerouslySetInnerHTML={{ __html: title }} />)}
                            {desc && (<p className="text-[14px] mr-lg:text-[16px] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans" dangerouslySetInnerHTML={{ __html: desc }} />)}
                        </div>
                        <div className={`grid  ${isLargeScreen ? '' : 'hidden'} m-auto ${GridClasses} gap-5 mt-12 items-stretch justify-stretch mr-xs:grid-cols-1`}>
                            {data?.map((e, i) => (
                                <div key={i} className="">
                                    <div className={`hover:shadow-lg hover:shadow-[#707070]  hover:bg-[#000] duration-300 hover:text-white box text-center bg-[#fff] p-1 items-center justify-center m-auto rounded-lg shadow-[#707070] shadow-lg  ${CardClasses}`} >
                                        <Image quality={95} className='m-auto mb-5' src={e.imagePath} alt={e.alt} />
                                        <h4 className={`text-xl font-semibold mx-auto`} dangerouslySetInnerHTML={{ __html: e.title }} />
                                        <p
                                            className={`text-base mb-5`}
                                            dangerouslySetInnerHTML={{ __html: e.desc }} />
                                            
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={`grid xs:w-[90%] ${isLargeScreen ? 'hidden' : ''} mx-auto gap-5 mt-12 items-stretch justify-stretch sm:grid-cols-1 sm:px-20 xs:grid-cols-1 xs:px-5 md:px-5`}>
                            <Slider {...settings}>
                                {data?.map((e, i) => (
                                    <div key={i} className="">
                                        <div className={`hover:shadow-lg hover:shadow-[#707070]  hover:bg-[#000] duration-300 hover:text-white box text-center bg-[#fff] py-1 items-center justify-center m-auto rounded-lg shadow-[#707070] shadow-lg${CardClasses}`} >
                                            <Image quality={95} width={50} height={50} className='m-auto mb-5' src={e.imagePath} alt={e.alt} />
                                            <h4 className={`text-xl font-semibold mx-auto`} dangerouslySetInnerHTML={{ __html: e.title }} />
                                            <p
                                                className={`text-base mb-3`}
                                                dangerouslySetInnerHTML={{ __html: e.desc }} />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default LibrarySphere
