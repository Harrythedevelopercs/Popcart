
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';

const bottomLogos = () => {
  var settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 0,
    speed: 5000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 5,
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
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }

    ]
  };
  return (
    <>
      <div className='bg-[#fff] w-full !pt-3'>
        <div className='mr-container'>
          <div className='relative z-20'>
            <div
              className="absolute sm:hidden xs:hidden top-0 -left-10 w-[250px] h-[90px] lg:h-[60px] bg-no-repeat bg-cover md:bg-center"
              style={{ backgroundImage: "url('/assets/images/left-shade.png') " }}
            ></div>
            <div
            className="absolute sm:hidden xs:hidden top-0 right-0 w-[250px] h-[90px] lg:h-[60px] bg-no-repeat bg-cover md:bg-center"
            style={{ backgroundImage: "url('/assets/images/right-shade.png') " }}
          ></div>
          </div>
          <div>
            <ul className='relative mx-auto items-center justify-center py-5 lg:py-2 sm:py-2 xs:max-w-[100%]'>

              <Slider {...settings}>
                <div><Image quality={95} src='/assets/images/newimg/amazon.png' width={120} height={45} alt="amazon" /></div>
                <div><Image quality={95} src='/assets/images/newimg/kobo.png' width={120} height={45} alt="kobo" /></div>
                <div><Image quality={95} src='/assets/images/newimg/google-play.png' width={120} height={45} alt="google-play" /></div>
                <div><Image quality={95} src='/assets/images/newimg/scribed.png' width={120} height={45} alt="scribed" /></div>
                <div><Image quality={95} src='/assets/images/newimg/ibook.png' width={120} height={45} alt="ibook" /></div>
                <div><Image quality={95} src='/assets/images/newimg/Barnes-Noble-Logo.png' width={180} height={45} alt="Barnes-Noble-Logo" /></div>

              </Slider>
            </ul>
          </div>
        </div>
      </div>
    </>

  )
}

export default bottomLogos
