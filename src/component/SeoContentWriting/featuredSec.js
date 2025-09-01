
import Image from "next/image";
import React from "react";



const openZendeskChat = () => {
  if (window.zESettings) {
    window.zE("webWidget", "open");
  }
};


const GhostwritingBanner = (props) => {

  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <>
      <section>
        <div className="py-[60px]">
          <div className="mr-container">
            <div className="grid grid-cols-12  items-center">
              <div className="col-span-7 sm:col-span-12 xs:col-span-12">
                <h1 className='w-[80%] font-primary md:w-[100%] sm:w-[100%] font-bold leading-[70px] text-[60px] md:text-[50px] md:leading-[50px] mt-12 sm:mt-0 sm:text-4xl sm:m-auto xs:text-4xl xs:w-[100%] '>
                  {props.title}
                </h1>
                <p className='w-[70%] md:w-[100%] mt-3 sm:m-auto sm:w-[100%] xs:w-[100%]'>
                  {props.dec}
                </p>
                <div className='w-[30%] mr-md:w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-4 sm:mx-auto sm:w-[100%] xs:w-[100%]'>
                  <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                  <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                </div>
              </div>
              <div className="col-span-5 sm:col-span-12 xs:col-span-12">
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GhostwritingBanner
