
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from 'media/assets/images/newimg/bold-typography.png'
import Illustration from 'media/assets/images/newimg/Illustrations.png'
import Retro from 'media/assets/images/newimg/Retro.png'
import Millennial from 'media/assets/images/newimg/millennial-pink.png'
import ColorFulChildren from 'media/assets/images/newimg/colorful-children.png'
import Design from 'media/assets/images/newimg/designs-for-classic-literature.png'
import PhotoGraph from 'media/assets/images/newimg/photography.png'
import Minimalist from 'media/assets/images/newimg/minimalist-covers.png'
import Portrait from 'media/assets/images/newimg/Portrait.png'
import Classic from 'media/assets/images/newimg/Classic.png'
import HandCovers from 'media/assets/images/newimg/hand-drawn-covers.png'
import React from 'react';


const sliderTabs = [
    {
        image: Typography,
        title: 'Bold Typography',
    },
    {
        image: Illustration,
        title: 'Illustration',
    },
    {
        image: Retro,
        title: 'Retro',
    },
    {
        image: Millennial,
        title: 'Millennial Pink',
    },
    {
        image: ColorFulChildren,
        title: 'Colorful children books illustrations',
    },
    {
        image: Design,
        title: 'Designs for classic literature',
    },
    {
        image: PhotoGraph,
        title: 'photography',
    },
    {
        image: Minimalist,
        title: 'Minimalist Covers',
    },
    {
        image: Portrait,
        title: 'Portrait',
    },
    {
        image: Classic,
        title: 'Classic',
    },
    {
        image: HandCovers,
        title: 'Hand Drawn Covers',
    }
]
const PublishingSlider = () => {
    var settings = {
        dots: false,
        spacing: 50,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        autoplay: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }

        ]
    };


    return (
        <>
            <section className='publishing-slider font-secondary py-10 md:py-0 xs:py-0'>
                <div className='mr-container justify-center mt-10 testimonial m-auto mb-28 testimonial md:px-5 xs:px-7'>
                    <div className=' text-center xs:py-5 mb-5'>
                        <h6 className='text-[30px] leading-tight font-primary text-[#3EA99F] font-semibold sm:text-base xs:text-base'>Book Cover</h6>
                        <h3 className='font-bold font-primary text-4xl py-2'>Types Of Cover Designs</h3>
                        {/* <p className='w-[62%] mx-auto xs:w-[100%]'>At , we provide a variety of book trim size options, cover styles, bookbinding kinds, and other elevated possibilities. We can do whatever you can think of.</p> */}
                    </div>
                    <div className='justify-center mr-lg:w-[70%] m-auto grid grid-cols-1 gap-2 items-center space-y-10 sm:px-14 '>
                        <Slider {...settings} className='__slides'>
                            {sliderTabs?.map((e, i) => (
                                <div key={i} className='mx-auto px-2'>
                                    <div className='relative'>
                                        <Image quality={95} src={e.image} width={240} height={240} alt="SliderImage" />
                                        <div >
                                            <Image quality={95} src='/assets/images/newimg/rectangle11.png' width={240} height={240} alt="before-image" className='absolute top-0 right-0 bottom-0 left-0' />
                                            <h6 className='absolute right-0 bottom-[20px] text-center text-white left-0'>{e.title}</h6>
                                        </div>
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

export default PublishingSlider
