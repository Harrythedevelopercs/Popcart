import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const TestimonialSlider = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    speed: 300,
    centerMode: true,
    centerPadding: '20px',
    infinite: true, // Enable looping
    
  };

  return (
    <>
      <section className="py-28 xs:py-10">
        <div className="container xs:container">
          <div>
            <div className="text-center">
              <h6 className="font-semibold font-secondary text-[18px] mb-3">Hear The Words Of</h6>
              <h2 className="text-4xl font-bold mb-5 font-secondary">Appreciation from Our Clients</h2>
              <p className="text-lg mb-5 mx-auto text-[16px] xs:text-[15px]">
                The appreciation from our clients is what keeps us going. Have a sneak peek of <br /> what our satisfied clients have to say about our work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Slider {...settings}>
        <div>
          <div className="testimonial-card">
            <img className="star-image" src="/assets/images/newimg/stars.png" alt="star" />
            <div className="header">
              <h1 className="name">- Sarah W.</h1>
            </div>
            <div className="quote-container">
              <p className="quote text-[12px]">
                Working with this book writing company was a game-changer for me. Their expertise is unmatched!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial-card">
            <img className="star-image" src="/assets/images/newimg/stars.png" alt="star" />
            <div className="header">
              <h1 className="name">- Sarah W.</h1>
            </div>
            <div className="quote-container">
              <p className="quote text-[12px]">
                Working with this book writing company was a game-changer for me. Their expertise is unmatched!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial-card">
            <img className="star-image" src="/assets/images/newimg/stars.png" alt="star" />
            <div className="header">
              <h1 className="name">- Sarah W.</h1>
            </div>
            <div className="quote-container">
              <p className="quote text-[12px]">
                Working with this book writing company was a game-changer for me. Their expertise is unmatched!
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial-card">
            <img className="star-image" src="/assets/images/newimg/stars.png" alt="star" />
            <div className="header">
              <h1 className="name">- Sarah W.</h1>
            </div>
            <div className="quote-container">
              <p className="quote text-[12px]">
                Working with this book writing company was a game-changer for me. Their expertise is unmatched!
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default TestimonialSlider;
