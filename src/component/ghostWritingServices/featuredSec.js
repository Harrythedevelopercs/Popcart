
import React from 'react';
import Image from 'next/image';

const openLiveChat = (e) => {
  e.preventDefault();
  if (window.LiveChatWidget) {
    window.LiveChatWidget.call('maximize');
  }
};


const GhostwritingBanner = (props) => {
  return (
    <>
      <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary'>
        <div className='max-w-7xl lg:max-w-6xl mx-auto 2xl:text-center xl:text-center lg:text-center md:text-center text-left items-center justify-center'>
          <h1 className='w-[80%] mx-auto font-primary font-bold xs:font-bold text-6xl mt-12 leading-[70px] md:text-4xl sm:text-4xl sm:w-[95%] xs:text-4xl xs:w-[90%]'>
            {props.title}
          </h1>
          <p className='w-[60%] text-[16px] md:w-[70%] mx-auto mt-3 sm:w-[90%] xs:w-[90%]'>
            {props.dec}
          </p>
          <div className='mx-auto py-2 sm:w-[100%] xs:w-[90%] '>
            <div className='w-[30%] md:w-[60%] mx-auto grid grid-cols-2 grid-rows-1 gap-x-5 py-4 sm:w-[70%] xs:w-[100%]'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white border-solid border-[#00c0e4] border-[1px] hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] flex items-center justify-center text-center h-[40px]'>Get Started</a>
              <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
            </div>
          </div>
          <div className='mx-auto w-[100%] justify-center items-center text-center pt-10 sm:w-[90%] sm:pb-0 xs:w-[90%] xs:pb-10'>
            <Image priority={true}quality={100} src='/assets/images/newimg/professional-ghostwriting.png' width={650} height={400} className='mx-auto' alt='professional-ghostwriting' />
          </div>
        </div>

      </section>
    </>
  )
}

export default GhostwritingBanner
