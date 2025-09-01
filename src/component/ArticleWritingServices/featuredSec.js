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
    <>
      <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary'>

        <div className='relative'>
          <div
            className="absolute z-0 md:hidden sm:hidden xs:hidden top-0 right-0 w-[1000px] h-[750px] bg-no-repeat bg-cover md:bg-center"
            style={{ backgroundImage: "url('/assets/images/newimg/article-banner.png') " }}
          ></div>
          </div>
          <div className='sm:px-5 md:container 2xl:px-14 xl:px-14 lg:px-14 md:px-14 text-left justify-center'>
            <div className='grid grid-cols-1 '>
              <div className='w-[80%] md:w-[100%] md:mx-auto md:px-10  pt-20 pb-40 md:pt-16 md:pb-0 xs:pt-5 sm:pt-10 sm:pb-0 xs:pb-5 sm:w-[100%] xs:w-[90%] xs:mx-auto'>
                <h1 className='w-[70%] md:w-[90%] font-primary font-bold leading-[60px] text-5xl md:text-5xl mt-12 md:mt-1  xs:text-3xl sm:text-4xl sm:w-[100%] xs:w-[100%]   '>
                  {props.title}
                </h1>
                <p className='w-[60%] md:w-[90%] mt-3 sm:w-[100%] xs:w-[90%]'>
                  {props.dec}
                </p>
                <div className='w-[30%] md:w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-4 sm:mx-auto sm:w-[70%] xs:w-[100%]'>
                  <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                  <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                </div>
              </div>
              <div className='w-[100%] lg:hidden xl:hidden 2xl:hidden  pb-40 md:pb-0 xs:w-[90%] sm:pb-0 xs:pb-10'>
                <Image quality={95} src='/assets/images/newimg/article-banner.png' width={750} height={400} objectFit='fill' alt='article banner'/>
              </div>

              <div className='w-[100%] xs:hidden md:hidden pb-40 md:pb-10 sm:pb-0 xs:w-[90%] xs:pb-10'>
                {/* <Image quality={95} src='/assets/images/newimg/article-banner.png' width={750} height={400} objectFit='fill'/> */}
              </div>
            </div>
          </div>
       
      </section>
    </>
  )
}

export default GhostwritingBanner
