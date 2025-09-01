
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Hardback from 'media/ahsan/Hardback.png'
import finelinen from 'media/ahsan/fine_linen.png'
import plaintextured from 'media/ahsan/plain_textured.png'
import foilstamping from 'media/ahsan/foil_stamping.png'
import spotUV from 'media/ahsan/spotUV.png'
import fullwrap from 'media/ahsan/full_wrap.png'
import stylishHead from 'media/ahsan/stylishHead.png'
import printedOr from 'media/ahsan/printedOr.png'

const data = [
    {
        imagePath: Hardback,
        title: "Hardback And <br/> Paperback Books",
        alt: "Hardback And Paperback Books"
    },
    {
        imagePath: finelinen,
        title: "Fine Linen <br/> Cloth Covers",
        alt: "Fine Linen Cloth Covers"
    },
    {
        imagePath: plaintextured,
        title: "Plain Or Textured <br/> Cover Materials",
        alt: "Plain Or Textured Cover Materials"
    },
    {
        imagePath: foilstamping,
        title: "Foil Stamping, Embossing <br/> And Blind Embossing",
        alt: "Foil Stamping, Embossing And Blind Embossing"
    },
    {
        imagePath: spotUV,
        title: "Spot UV Varnishes <br/> And Laminates",
        alt: "Spot UV Varnishes And Laminates"
    },
    {
        imagePath: fullwrap,
        title: "Full Wrap Around <br/> Laminated Dust Jacket",
        alt: "Full Wrap Around Laminated Dust Jacket"
    },
    {
        imagePath: stylishHead,
        title: "Stylish Head And Tail <br/> Bands In Various Colors",
        alt: "Stylish Head And Tail Bands In Various Colors"
    },
    {
        imagePath: printedOr,
        title: "Printed Or <br/> Colored Endpapers",
        alt: "Printed Or Colored Endpapers"
    }
]

const PublishingSlider = () => {
    // var settings = {
    //     dots: true,
    //     spacing: 50,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 5,
    //     autoplay: true,
    //     slidesToScroll: 5,
    //     nextArrow: <Image quality={95} src={'/assets/images/newimg/right-arrow.png'} className='img-fluid' width={500} height={500} alt='sliderarrow' />,
    //     prevArrow: <Image quality={95} src={'/assets/images/newimg/prev-arrow.png'} className='img-fluid' width={500} height={500} alt='sliderarrow' />,
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //             }
    //         }


    //     ]
    // };


    return (
        <>
            <section className="py-[80px] mr-md:bg-[url('../../public/ahsan/bgBlack2.png')] bg-no-repeat bg-cover bg-black md:py-20 md:px-5 sm:py-20 sm:px-5 xs:py-20 xs:px-5">
                <div className='container justify-center mt-10 testimonial mx-auto mb-20 testimonial md:px-5 xs:px-7'>
                    <div className='py-10 text-center xs:py-5 text-white'>
                        <h6 className='text-[30px] leading-tight font-primary text-[#3EA99F] font-semibold xs:text-base'>Only the Best</h6>
                        <h2 className='font-bold font-primary text-[45px] py-2'>Book Printing Services Available</h2>
                        <p className='m-auto xs:w-[100%]'>With our #1 ranked book printing services, you can focus on writing and promoting your book, knowing that we have got the printing covered…among other things. </p>
                    </div>
                    <div className='justify-center grid grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-4 items-center'>
                        {data?.map((e, i) => (
                            <div key={i} className=''>
                                <div className='relative'>
                                    <Image quality={95} width={500} height={240} src={e.imagePath} alt={e.alt} className='img-fluid m-auto' />
                                    <div>
                                        <h6 className='mr-2xl:text-[18px] mr-xl:text-[16px] mr-lg:text-[15px] mt-2 text-center text-white font-bold' dangerouslySetInnerHTML={{__html:e.title}} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}

export default PublishingSlider
