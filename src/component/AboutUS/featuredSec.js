import React from 'react';
import Image from 'next/image';

const Aboutusfesc = (props) => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary'>
      <div className='relative -z-0'>
        <div
          className="absolute md:hidden sm:hidden xs:hidden top-0 right-0 w-[850px] h-[600px] bg-no-repeat bg-right md:bg-center"
          style={{ backgroundImage: "url('/assets/images/newimg/editing-banner.png')" }}
        ></div>
      </div>
      <div className='relative z-20  text-left justify-center items-center py-36 md:py-10 sm:py-10 xs:py-10 sm:px-5 md:container  2xl:px-14 xl:px-14 lg:px-14 md:px-14' >
        <div className='grid md:grid-cols-2 xs:grid sm:grid-cols-1 xs:grid-cols-1 items-center' >
          <div className='w-[55%] md:w-[100%] sm:mx-auto sm:w-[90%] xs:w-[100%] xs:py-5 xs:px-6 g-2 md:px-5 '>
            <h1 className=' font-bold leading-[60px] text-5xl md:text-4xl xs:text-4xl sm:w-[90%] xs:w-[100%]'>
              {props.title}
            </h1>
            <p className='w-[80%] mt-3 md:w-[100%] sm:w-[90%] xs:w-[100%]'>
              {props.dec}
            </p>
            <div className='w-[50%] md:w-[80%] grid grid-cols-2 grid-rows-1 gap-5 py-5 sm:w-[60%] sm:mx-auto xs:w-[100%]'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
              <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
            </div>
          </div>

          <div className='xl:hidden 2xl:hidden lg:hidden mx-auto justify-center items-center text-center md:pb-0 xs:w-[90%] xs:pb-0 md:mt-12 xs:mt-12 ' >
            <Image quality={95} src='/assets/images/newimg/editing-banner.png' width={800} height={600} alt='medium-magazine-writing' />
          </div>
          <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >

          </div>
        </div>




      </div>

    </section>
  );
};

export default Aboutusfesc;
