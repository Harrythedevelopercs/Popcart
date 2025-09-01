
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';


const ProcessWorkMode = () => {

    var settings = {
        spacing: 50,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        autoplay: true,
        slidesToScroll: 5,
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
            <section className="w-full py-20 md:py-20 xs:py-5 font-secondary">
                <div className="container max-w-7xl py-5 text-[#1d1d1f] xs:py-16">
                    <div className="text-center mb-20 md:mb-10 xs:mb-5 justify-center">
                        <h6 className='text-[30px] font-primary text-[#3EA99F] font-semibold'>
                            What We
                        </h6>
                        <h2 className='text-[40px] font-primary font-semibold leading-10 xs:text-[26px]'>
                            Specialize In
                        </h2>
                    </div>

                    <div className={` ${isLargeScreen ? '' : 'hidden'}  grid grid-cols-3 text-center gap-4 md:grid-cols-2 xs:grid-cols-1 md:w-[90%] mx-auto xs:w-[90%]`}>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all mb-20'>
                                        Printed Books:
                                        <span className='block font-secondary font-normal text-[13px] leading-5 mt-2'>
                                            Long-lasting covers that protect your book from damage.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                    <Image quality={95} src='/assets/images/newimg/printed-books.png' width={300} height={250} alt="printed books" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Photo Album
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Preserving your cherished memories that can always be revisited.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                    <Image quality={95} src='/assets/images/newimg/photo-album1.png' width={300} height={150} alt="photo album" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Comic Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Detailed illustrations with catchy dialogues and impeccable panels.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                    <Image quality={95} src='/assets/images/newimg/COMICBOOK.png' width={300} height={150} alt="comicbook" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Magazine
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            An entire catalog filled with diverse and intriguing content.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                    <Image quality={95} src='/assets/images/newimg/OMYB9R0.png' width={300} height={150} alt="OMYB9R0" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        Year Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            All your achievements and memories in one place.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-28 w-[50%] mx-auto'>
                                    <Image quality={95} src='/assets/images/newimg/your-book.png' width={300} height={150} alt="your-book" className='w-[75%]' />
                                </div>
                            </div>
                        </div>

                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 ">
                            <div>
                                <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                    <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                        E Books
                                        <span className='block font-normal text-[13px] leading-5 mt-2'>
                                            Easy to carry, easy to read, and easy to access books.
                                        </span>
                                    </p>
                                </div>
                                <div className='z-10 relative -mt-20 w-[90%] mx-auto'>
                                    <Image quality={95} src='/assets/images/newimg/e-books.png' width={400} height={150} alt="e-books" />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className={` ${isLargeScreen ? 'hidden' : ''}  grid grid-cols-3 text-center gap-4 md:grid-cols-2 sm:grid-cols-1 sm:px-20 xs:grid-cols-1 md:w-[90%] mx-auto xs:w-[90%]`}>
                        <Slider {...settings}>
                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                                <div>
                                    <div className="rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                        <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                            Printed Books
                                            <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                Perfect, long-lasting covers to protect your story and message from damage
                                            </span>
                                        </p>
                                    </div>
                                    <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                        <Image quality={95} src='/assets/images/newimg/printed-books.png' width={300} height={150} alt="printed books" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                                <div>
                                    <div className="rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                        <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                            Photo Album
                                            <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                Photographing photo album covers is a critical task our professionals excel at.
                                            </span>
                                        </p>
                                    </div>
                                    <div className='z-10 relative -mt-28 w-[80%] mx-auto'>
                                        <Image quality={95} src='/assets/images/newimg/photo-album1.png' width={300} height={150} alt="photo album" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                                <div>
                                    <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                        <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                            Comic Books
                                            <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                Colorful and appealing illustrations to entice comic <br /> readers.

                                            </span>
                                        </p>
                                    </div>
                                    <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                        <Image quality={95} src='/assets/images/newimg/COMICBOOK.png' width={300} height={150} alt="comic books" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                                <div>
                                    <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                        <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                            Magazine
                                            <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                Cover design that is trendy and fashionable to help you put your best foot forward in terms of glamour.
                                            </span>
                                        </p>
                                    </div>
                                    <div className='z-10 relative -mt-28 w-[70%] mx-auto'>
                                        <Image quality={95} src='/assets/images/newimg/OMYB9R0.png' width={300} height={150} alt="OMYB9R0" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                                <div>
                                    <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                        <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                            Year Books
                                            <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                Compilation of your academic achievements in an appealing format.
                                            </span>
                                        </p>
                                    </div>
                                    <div className='z-10 relative -mt-28 w-[50%] mx-auto'>
                                        <Image quality={95} src='/assets/images/newimg/your-book.png' width={300} height={150} alt="your-book" className='w-[75%]' />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md hover:-translate-y-1 hover:scale-95 duration-300 ">
                                <div>
                                    <div className="box rounded-2xl bg-[#f2f2f2] text-[#1d1d1f] hover:text-white h-[100%] py-[100px] px-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                        <p className='text-[20px] font-primary font-semibold leading-6 m-0 transition-[.5s all] mb-20'>

                                            E Books
                                            <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                Digital book cover design that is both creative and high-quality for maximum impact on your online audience.
                                            </span>
                                        </p>
                                    </div>
                                    <div className='z-10 relative -mt-20 w-[90%] mx-auto'>
                                        <Image quality={95} src='/assets/images/newimg/e-books.png' width={300} height={150} alt="e-books" />
                                    </div>
                                </div>
                            </div>
                        </Slider>

                    </div>
                </div>
            </section>
            <section>

            </section>
        </>


    )
}

export default ProcessWorkMode
