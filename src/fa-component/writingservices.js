
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import ebook from "media/images/newimg/Evgenie-Marakou1.png"
import tradebook from "media/images/newimg/trade-book.png"
import magazines from "media/images/newimg/magazines.png"
import photobook from "media/images/newimg/photo-book.png"
const writingservices = () => {
    var settings = {

        infinite: true,
        speed: 500,
        // autoplay: true,
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
        setIsLargeScreen(window.innerWidth >= 639); // Customize the breakpoint as needed
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
            <section className="w-full px-8 py-16 xs:py-8 md:px-2 bg-[#f2f2f2] ">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <div className={`grid lg:grid-cols-5 sm:grid-cols-2 text-left`}>
                                <div className='py-10 xs:py-5'>
                                    <h4 className='text-[45px] font-bold md:py-5 md:text-center md:text-[45px] xs:text-[40px] xs:text-center xs:py-3 leading-[50px]'>Exceptional Book Writing Service!</h4>
                                </div>
                                <div className='xs:m-0 px-3 md:px-1'>
                                    <Image quality={95} src={ebook} className='avatar' width={98} height={200} alt="ebook publishing" />
                                    <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>E-books</h5>
                                    <p className=' text-base sm:text-base '>
                                        Transform your book into a digital format, complete with stories, text, and images, for a convenient and enjoyable reading experience.
                                    </p>
                                </div>
                                <div className='px-3 md:px-1'>
                                    <Image quality={95} src={tradebook} width={100} height={200} alt="trade books" className='avatar' />
                                    <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>Trade Books</h5>
                                    <p className=' text-base sm:text-base'>
                                        A book intended and designed for the general public that a commercial publisher publishes.
                                    </p>
                                </div>

                                <div className='px-3 md:px-1'>
                                    <Image quality={95} src={magazines} width={100} height={200} alt="magazine publishing" className='avatar' />
                                    <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>Magazines</h5>
                                    <p className=' text-base sm:text-base'>
                                        A printed or digitally published compilation of articles, stories, and poems, mostly with illustrations, that is issued regularly with specific frequencies.
                                    </p>
                                </div>
                                <div className='px-3 md:px-1'>
                                    <Image quality={95} src={photobook} width={100} height={200} alt="graphic book" className='avatar border-r-0' />
                                    <h5 className='font-bold m-1 mt-3 text-[20px] sm:text-[25px]'>Photo Books</h5>
                                    <p className=' text-base sm:text-base'>
                                        A publication comprising of photographs as a means of the overall content, for a picture is worth a thousand words!
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default writingservices