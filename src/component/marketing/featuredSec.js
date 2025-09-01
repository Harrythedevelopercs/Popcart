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
    <section className='w-full bg-white text-[#1d1d1f] font-secondary' >
      <div className='relative -z-0'>
        <div
          className="absolute md:hidden sm:hidden xs:hidden top-0 right-28 w-[850px] h-[600px] bg-no-repeat bg-contain bg-center md:bg-center"
          style={{ backgroundImage: "url('/assets/images/newimg/marketing.png') " }}
        ></div>
      </div>

      <div className=' sm:px-5 md:container px-14 text-left justify-center items-center' >
        <div className='flex md:grid sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center py-36 sm:py-10 xs:py-10' >
          <div className='md:mx-auto  md:w-[90%] sm:w-[100%] xs:w-[100%] sm:text-center sm:px-10 sm:pt-12 xs:py-5 xs:px-6 md:text-center xs:text-center '>
            <h1 className='font-bold font-primary leading-[50px] text-[50px] sm:text-4xl xs:text-4xl sm:w-[100%] xs:w-[100%]'>
              {props.title}
            </h1>
            <p className='text-[20px] mt-3 xs:w-[100%]'>
              {props.dec}
            </p>
            <div className='w-[50%] gap-x-5 grid grid-cols-2 grid-rows-1 gap-2 py-5 md:mx-auto sm:pt-12  md:w-[70%] sm:mx-auto sm:w-[80%] xs:w-[100%]'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
              <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
            </div>
          </div>

          <div className='xl:hidden 2xl:hidden lg:hidden mx-auto sm:pt-10 justify-center items-center text-center md:pb-0 xs:w-[90%] xs:pb-0 md:mt-12 xs:mt-12 ' >
            <Image quality={95} src={'/assets/images/newimg/marketing.png'} width={800} height={600} alt='marketing' />
          </div>
          <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >

          </div>
        </div>


      </div>

    </section>
  );
};

export default GhostwritingBanner;
