import React from 'react';

const CustomPagination = ({ swiper, totalSlides }) => {
  // Check if the swiper instance is available
  if (!swiper) {
    return null;
  }

  const activeIndex = swiper.activeIndex; // Get the current active slide index

  // Handle navigation to the previous slide
  const goToPrevious = () => {
    if (activeIndex > 0) {
      swiper.slideTo(activeIndex - 1);
    }
  };

  // Handle navigation to the next slide
  const goToNext = () => {
    if (activeIndex < totalSlides - 1) {
      swiper.slideTo(activeIndex + 1);
    }
  };

  return (
    <div className="custom-pagination">
      <button onClick={goToPrevious} disabled={activeIndex === 0}>
      <Image quality={95} src={'/assets/images/newimg/prev-arrow.png'} className='img-fluid' width={500} height={500} />
      </button>
      <button onClick={goToNext} disabled={activeIndex === totalSlides - 1}>
      <Image quality={95} src={'/assets/images/newimg/right-arrow.png'} className='img-fluid' width={500} height={500} />
      </button>
    </div>
  );
};

export default CustomPagination;
