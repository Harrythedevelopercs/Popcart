
import Image from 'next/image';
import React from 'react';

const PressRelease = (props) => {


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };
  return (
    <>
      <section className='w-full text-[#1d1d1f] pt-10 pb-32 md:pb-0 sm:pb-0 xs:pb-0 font-secondary'>
        <div className='relative z-10'>
          <div
            className="absolute md:hidden sm:hidden xs:hidden top-0 right-0 w-[900px] h-[550px] bg-no-repeat bg-cover md:bg-center"
            style={{ backgroundImage: "url('/assets/images/newimg/rolled-newspaper11.png') " }}
          ></div>
        </div>

        <div className='sm:px-5 md:container 2xl:px-14 xl:px-14 lg:px-14 md:px-14 grid grid-cols-1 xs:grid-cols-1 text-left justify-center ' >
          <div className='w-[55%] md:mx-auto md:w-[90%] sm:w-[100%] xs:w-[100%]' >
            <div className=' py-10 xs:w-[100%] xs:py-5 xs:px-6 sm:px-5'>
              <h1 className='font-primary font-bold leading-[55px] text-5xl mt-12 md:mt-0 xs:mt-0 sm:text-4xl xs:text-4xl xs:w-[100%]'>
                {props.title}
              </h1>
              <p className='w-[90%] md:w-[100%] sm:w-[100%] mt-3 sm:py-2 xs:py-5 xs:w-[100%]'>
                {props.dec}
              </p>
              <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:w-[70%] xs:w-[100%] md:mx-auto xs:mx-auto sm:mx-auto'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                  <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
              </div>
            </div>
          </div>
          <div className='mx-auto w-[100%] xl:hidden 2xl:hidden lg:hidden justify-center items-center text-center pb-20 md:pb-0 sm:px-10 xs:w-[90%] xs:pb-10 ' >
              <Image quality={95} src={'/assets/images/newimg/rolled-newspaper11.png'} width={800} height={600} alt='rolled-newspaper11' />
            </div>
            <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] xs:pb-10 ' >

            </div>
        </div>

      </section>
    </>
  )
}

export default PressRelease
