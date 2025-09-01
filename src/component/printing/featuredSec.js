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
    <section className='w-full bg-white text-[#1d1d1f] font-secondary '>
      <div className='relative -z-0'>
        <div
          className="absolute -z-0 md:hidden sm:hidden xs:hidden top-0 right-0 w-[600px] h-[605px] bg-no-repeat md:bg-right bg-center"
          style={{ backgroundImage: "url('/assets/images/newimg/man-working-printing-house-with-paper-paints.png')" }}
        ></div>
      </div>
      <div className='sm:px-5 md:container 2xl:px-14 xl:px-14 lg:px-14 md:px-14 text-left justify-center items-center pt-28 pb-36 sm:pt-10 sm:pb-5 md:pt-20 md:pb-0 xs:pt-0 xs:pb-0' >
        <div className='flex md:grid sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center ' >
          <div className='basis-[50%] md:text-center  md:w-[100%] sm:px-10 sm:text-center sm:w-[100%] xs:w-[90%] xs:py-14 g-2 xs:mx-auto md:mx-auto sm:mx-auto '>
            <h1 className='font-primary font-bold leading-[60px] text-5xl sm:w-[100%] xs:text-3xl xs:w-[100%]'>
              {props.title}
            </h1>
            <p className='w-[90%] mt-3 md:mx-auto sm:w-[100%] xs:w-[100%]'>
              {props.dec}
            </p>
            <div className='w-[70%] md:mx-auto grid grid-cols-2 grid-rows-1 gap-2 py-5 sm:w-[80%] sm:mx-auto xs:w-[90%] xs:mx-auto md-mx-auto'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
              <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
            </div>
          </div>

          <div className='mx-auto w-[100%] xl:hidden 2xl:hidden lg:hidden justify-center items-center text-center pb-20 md:pb-0 sm:pb-0 xs:w-[90%] xs:pb-5 ' >
            <Image quality={95} src={'/assets/images/newimg/man-working-printing-house-with-paper-paints.png'} width={800} height={600} alt='man-working-printing-house-with-paper-paints' className='' />
          </div>
          <div className='basis-[50%] mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 md:pb-0 xs:w-[90%] xs:pb-10 ' >

          </div>
        </div>




      </div>

    </section>
  );
};

export default GhostwritingBanner;
