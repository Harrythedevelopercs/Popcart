import React from 'react';
import Image from 'next/image';
const GhostwritingBanner = (props) => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary'>
      <div className='relative '>
        <div
          className="absolute -z-0 md:hidden sm:hidden xs:hidden top-0 right-0 lg:-right-20 w-[1000px] h-[750px] bg-no-repeat bg-right md:bg-center"
          style={{ backgroundImage: "url('/assets/images/newimg/genre-banner-new.png') " }}
        ></div>
      </div>

      <div className='sm:px-5 md:container px-14 text-left justify-center items-center py-36 md:py-16 sm:py-10 xs:py-10 ' >
        <div className='flex md:grid sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 md:mx-auto md:w-[90%] md:text-center' >
          <div className='basis  sm:w-[100%] xs:w-[100%] xs:py-0 xs:px-6 md:text-center sm:text-center xs:text-center sm:px-5'>
            <h1 className='w-[90%] md:w-[100%] font-bold font-primary leading-[60px] text-[52px] sm:text-4xl xs:text-3xl sm:w-[100%] xs:w-[100%]'>
              {props.title}
            </h1>
            <p className='w-[75%] mt-3 md:w-[100%] sm:w-[100%] xs:w-[100%]'>
              {props.dec}
            </p>
            <div className='w-[50%] grid md:mx-auto grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:mx-auto sm:w-[70%] xs:w-[100%]'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
              <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
            </div>
          </div>

          <div className='xl:hidden 2xl:hidden lg:hidden mx-auto justify-center items-center text-center md:pb-0 xs:w-[90%] xs:pb-0 md:mt-12 sm:mt-12 xs:mt-12 ' >
            <Image quality={95} src={'/assets/images/newimg/genre-banner-new.png'} width={800} height={600} alt='medium-magazine-writing' />
          </div>
          <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >

          </div>
        </div>



      </div>




    </section>
  );
};

export default GhostwritingBanner;
