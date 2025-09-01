import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider2 = () => {
  const config = {
    dots: true,
    infinite: true,
    centerMode:true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [settings] = useState(config);
  const products = [
    {
      img: '/assets/images/newimg/02.png',
      title: 'Dolore magna',
      text: 'Lorem ipsum dolor sit amet elit.',
    },
    {
      img: '/assets/images/newimg/02.png',
      title: 'Eget est lorem',
      text: 'Lorem Ipsum adipiscing elit ipsum.',
    },
    {
      img: '/assets/images/newimg/02.png',
      title: 'Tempus imperdiet',
      text: 'Orci porta non pulvinar neque laoreet.',
    },
    {
      img: '/assets/images/newimg/02.png',
      title: 'Mattis rhoncus',
      text: 'Bibendum neque egestas congue quisque.',
    },
    
  ];

  return (
    <div className="App">
      <Slider {...settings}>
        {products.map((x, i) => {
          return (
            <div key={i} className="img-card">
              <img className="img" src={x.img} alt={x.title} />
              <div className="card-body">
                <div className="card-title">{x.title}</div>
                <div className="card-text">{x.text}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Slider2;
