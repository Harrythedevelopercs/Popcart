import React from 'react';
import Image from 'next/image';
//
import BannerItems from '@/component/bookPublication/BannerItems';

const GhostwritingBanner = (props) => {


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };


  return (
    <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary newdata'>
      <div className='sm:px-5 md:container px-14 text-left justify-center items-center' >
        <div className='flex md:grid sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center sm:pt-20' >
          <div className='newbanner basis-[60%] md:w-[100%] xs:w-[100%] xs:py-5 xs:px-6  xs:text-center md:text-center md:py-10 sm:px-5 sm:text-center'>
            <h1 className='border border-1 border-[#00c0e4] px-3 py-2 w-max mb-2'>Awarded #1 Book Publishing Services</h1>
            <h2 className='font-primary font-bold leading-[55px] text-5xl md:text-3xl md:w-[100%] sm:text-3xl sm:w-[100%] xs:text-3xl xs:w-[100%]'>
              {props.title}
            </h2>
            <p className='mt-3 md:w-[90%] sm:w-[100%]  xs:w-[100%]'>
              {props.dec}
            </p>
            <div className='w-[100%] gap-x-5 grid grid-cols-2 grid-rows-1 py-5 md:w-[60%] md:mx-auto sm:mx-auto sm:w-[70%] xs:w-[100%]'>
              <a href="#" onClick={openLiveChat} className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Start Your Publishing Journey Today</a>
            </div>
            <BannerItems />
          </div>
          <div className='basis-[40%] ml-28 sm:ml-5 xs:ml-5 text-center  xs:w-[90%] xs:pb-0 ' >
            <Image quality={95} src='/assets/images/newimg/girl-library.png' width={500} height={500} className='sm:mx-auto sm:w-[40%] text-center' alt='book-publishing-services' />
          </div>
        </div>
      </div>

    </section>
  );
};

export default GhostwritingBanner;
