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
        <div className='relative -z-0'>
          <div
            className="absolute md:hidden sm:hidden xs:hidden top-0 right-0 2xl:right-40 w-[1000px] h-[750px] bg-no-repeat bg-right md:bg-center"
            style={{ backgroundImage: "url('/assets/images/newimg/medium-magazine-writing.png') " }}
          ></div>
        </div>

        <div className='sm:px-5 md:container 2xl:px-14 xl:px-14 lg:px-14 md:px-14 pt-32 pb-56 md:py-10 sm:pt-10 sm:pb-0 xs:pt-10 xs:pb-0 text-left justify-center items-center ' >

          <div className='flex md:grid sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center' >
            <div className='md:w-[90%] mx-auto xs:w-[100%] sm:px-5 xs:py-5 xs:px-6  '>
              <h1 className='md:w-[90%] font-primary font-bold leading-[60px] text-5xl mt-12 xs:mt-0 xs:text-4xl xs:w-[100%]'>
                {props.title}
              </h1>
              <p className='md:w-[90%] mt-3 xs:w-[100%]'>
                {props.dec}
              </p>
              <div className='w-[60%] md:w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-4 md:mx-auto sm:mx-auto sm:w-[80%] xs:w-[100%]'>
                  <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                  <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                </div>
            </div>

            <div className='xl:hidden 2xl:hidden lg:hidden mx-auto justify-center items-center text-center md:pb-0 sm:pt-5 sm:px-10 xs:w-[90%] xs:pb-0 ' >
              <Image quality={95} src={'/assets/images/newimg/medium-magazine-writing.png'} width={800} height={600} alt='medium-magazine-writing' />
            </div>
            <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-24 xs:w-[90%] xs:pb-10 ' >

            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default GhostwritingBanner
