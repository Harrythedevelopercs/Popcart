import React from 'react'
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from 'media/ahsan/slider1.png'
import Slider2 from 'media/ahsan/slider2.png'
import Slider3 from 'media/ahsan/slider3.png'
import Slider4 from 'media/ahsan/slider4.png'
import Slider5 from 'media/ahsan/slider5.png'
import styles from "./bookslider.module.css"

const BookSliderData = [
    {
        imagePath: Slider1
    },
    {
        imagePath: Slider2
    },
    {
        imagePath: Slider3
    },
    {
        imagePath: Slider4
    },
    {
        imagePath: Slider5
    },
    {
        imagePath: Slider1
    },
    {
        imagePath: Slider2
    },
    {
        imagePath: Slider3
    },
    {
        imagePath: Slider4
    },
    {
        imagePath: Slider5
    }
]

const BookSlider = ({
    subTitle,
    title,
    desc,
    classes = " ",
    theme = "light",
    data,
}) => {

    let traditionslider = {
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section>
            <div className={`py-[40px] mr-lg:py-[70px] ${classes} lpOneBookSlider`}>
                <div className="mr-container">
                    <div className="text-center mb-5">
                        {subTitle && (<span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                            {subTitle}
                        </span>)}
                        {title && (<h2 className={`text-[26px] mr-md:text-[30px] mr-lg:text-[40px] block leading-tight font-black font-sans ${theme == "light" ? "text-[#000000]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{ __html: title }} />)}
                        {desc && (<p className={`text-[14px] mr-lg:text-[16px] mr-2xl:w-[75%] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans ${theme == "light" ? "text-[#000000]" : "text-white"}`} dangerouslySetInnerHTML={{ __html: desc }} />)}
                    </div>
                    <div>
                        <Slider {...traditionslider}>
                            {BookSliderData?.map((e, i) => (
                                <div>
                                    <Image quality={100}  className='img-fluid m-0'
                                        src={e.imagePath}
                                        alt='Best_Publisher'
                                    priority/>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookSlider
