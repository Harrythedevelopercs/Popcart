
import Image from 'next/image';
import React from 'react';

const GhostwritingBanner = (props) => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <>
      <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary'>
        <div className='2xl:px-14 xl:px-14 lg:px-14 md:px-14 sm:px-5 md:container  text-left justify-center items-center' >
          <div className='flex sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 md:grid items-center md:mt-10 sm:mt-20' >
            <div className='basis-[50%] xs:w-[100%] xs:py-5 xs:px-6 md:mx-auto md:w-[95%] sm:px-5 sm:w-[100%'>
              <h1 className='font-primary font-bold leading-[55px] text-5xl md:text-5xl xs:text-3xl md:mx-auto md:w-[90%] xs:w-[100%]'>
                {props.title}
              </h1>
              <p className='mt-3 w-[90%] md:mx-auto sm:mx-auto xs:mx-auto md:w-[90%] sm:w-[100%] xs:w-[100%]'>
                {props.dec}
              </p>
              <div className='w-[60%] md:mx-auto  grid grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:w-[80%] sm:mx-auto xs:w-[100%] xs:mx-auto'>
                <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
              </div>
            </div>

            <div className='basis-[50%] mx-auto justify-center items-center text-center xs:w-[90%] xs:pb-10 ' >
              <Image quality={95} src='/assets/images/newimg/script-writing-banner.png' width={400} height={400} className='mx-auto' alt='seo-featured-banner' />
            </div>
          </div>




        </div>

      </section>
    </>
  )
}

export default GhostwritingBanner
