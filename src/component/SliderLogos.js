import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const sliderLogos = () => {
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
              slidesToShow: 1.3,
              slidesToScroll: 1,
            }
          }
    
        ]
      };
    return (
        <>
            <section>
                <div className='max-w-7xl mx-auto'>
                        <Slider {...settings}>
                            <div><img src='/assets/images/newimg/amazon.png' width={150} height={100} alt="amazon" /></div>
                            <div><img src='/assets/images/newimg/kobo.png' width={150} height={100} alt="kobo" /></div>
                            <div><img src='/assets/images/newimg/google-play.png' width={150} height={100} alt="google-play" /></div>
                            <div><img src='/assets/images/newimg/scribed.png' width={150} height={100} alt="scribed" /></div>
                            <div><img src='/assets/images/newimg/ibook.png' width={150} height={100} alt="ibook" /></div>
                            <div><img src='/assets/images/newimg/Barnes-Noble-Logo.png' alt="Barnes-Noble-Logo" /></div>
                        </Slider>
                </div>
            </section>
        </>
    )
}

export default sliderLogos
