import React from 'react'
import { MRCTA, MRCTAGroup } from '.'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProcessWorkMode = ({
    subtitle,
    title = "Why Publish With Us?",
    desc = "Choosing us for your publishing needs means partnering with a team deeply committed to bringing your literary vision to life. Our dedicated approach ensures your book not only reaches but captivates a global audience. Here's why you should publish with us:",
    classes="!text-[#fff] justify-center",
    PublishWithUs
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
    const [isLargeScreen, setIsLargeScreen] = React.useState(true); // Default to true for larger screens

    // Function to update the screen size state
    const updateScreenSize = () => {
        setIsLargeScreen(window.innerWidth >= 767); // Customize the breakpoint as needed
    };

    // Add an event listener to update the screen size state on resize
    React.useEffect(() => {
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
                <div className="mr-container !py-[80px] mr-sm:py-10 mr-xs:py-10 text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center">
                        <h2 className='text-[45px] font-sans font-bold leading-normal mb-5 mr-sm:text-4xl mr-xs:text-3xl mr-xs:my-2 '>
                            {title}
                        </h2>
                        <p className='w-[70%] mx-auto md:w-[90%] sm:w-[95%] xs:w-[100%]'>
                            {desc}
                        </p>
                    </div>
                    <div className=''>
                        <div className=' grid mr-xl:grid-cols-3 gap-4  mr-md:grid-cols-2 mr-sm:grid-cols-2 mr-xs:grid-cols-1 mb-5 '>

                            {PublishWithUs && PublishWithUs?.map((e, i) => (
                                <div key={i} className="hover:-translate-y-1 hover:scale-105 duration-300 h-[250px]">
                                    <div className="box rounded-2xl bg-[#f2f2f2] text-left text-[#1d1d1f] hover:!text-white h-[100%] p-5 border-2 border-solid transition-[.5s] hover:bg-[#1d1d1f] hover:border-white">
                                        <h5 className='text-[#3EA99F] hover:text-[#00C0E4] text-sm font-bold mt-5'>{e.step}</h5>
                                        <p className='text-[20px] font-semibold leading-6 m-0 transition-[.5s all]'>
                                            {e.heading}
                                            <span className='block font-normal text-[13px] leading-5 mt-2'>
                                                {e.desc}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                            <MRCTAGroup classes="justify-center mt-5" />
                    </div>
                </div>
            </section>
            <section>

            </section>
        </>


    )
}

export default ProcessWorkMode
