import React from 'react';
import Image from 'next/image';
const CoverFesc = (props) => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };


  return (
    <section className='w-full bg-white text-[#1d1d1f] py-4 font-secondary'>
      
        <div className=' sm:px-5 md:container px-14 text-left justify-center items-center py-5' >
          <div className='grid grid-cols-2 md:mx-auto md:w-[90%] sm:grid-cols-1 xs:grid xs:grid-cols-1 items-center xs:text-center md:gap-x-4' >
            <div className='xs:w-[100%] xs:py-5 xs:px-6 g-2 sm:px-10 sm:text-center sm:pt-14  '>
              <h1 className='font-primary font-bold leading-tight text-5xl md:text-4xl sm:text-4xl xs:text-4xl xs:w-[100%]'>
                {props.title}
              </h1>
              <p className='mt-3 xs:w-[100%]'>
                {props.dec}
              </p>
              <div className='w-[50%] grid grid-cols-2 grid-rows-1 gap-5 py-2 md:w-[80%] sm:w-[80%] sm:py-5 sm:mx-auto xs:mx-auto xs:w-[80%]'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                  <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
              </div>
            </div>

            <div className=' mx-auto z-10 relative justify-center items-center  text-center pb-20 sm:pb-0 xs:w-[90%] xs:pb-10 ' >
            <Image quality={95} src='/assets/images/newimg/book-cover-table-banner.png' width={500} height={300} alt='book-cover-table-banner' className='mx-auto float-right' />
            </div>
          </div>
        </div>

      </section>
  );
};

export default CoverFesc;
