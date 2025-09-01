
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
            className="absolute -z-0 md:hidden sm:hidden xs:hidden top-0 right-0 w-[800px] h-[605px] lg:-right-20 bg-no-repeat md:bg-right bg-right"
            style={{ backgroundImage: "url('/assets/images/newimg/web-copywriting-banner.png')" }}
          ></div>
        </div>
        <div className='sm:px-5 md:container 2xl:px-14 xl:px-14 lg:px-14 md:px-14 text-left justify-center' >
          <div className='grid grid-cols-1  '>
            <div className='w-[75%]  md:w-[90%] md:mx-auto py-20 md:py-10 sm:w-[100%] xs:w-[100%] sm:py-5 sm:px-10 xs:py-5 xs:px-6 '>
              <h1 className='w-[70%] md:w-[100%] lg:w-[80%] font-primary font-bold leading-tight text-5xl mt-12 md:mt-0 xs:mt-0 sm:text-4xl xs:text-3xl sm:py-5 xs:py-5 sm:w-[100%] xs:w-[100%]'>
                {props.title}
              </h1>
              <p className='w-[70%] md:w-[95%] mt-3 sm:w-[100%] xs:w-[100%]'>
                {props.dec}
              </p>
              <div className='w-[45%] md:w-[60%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:w-[80%] xs:w-[100%] sm:pt-10 xs:pt-10 xs:mx-auto md:mx-auto sm:mx-auto'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                  <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
              </div>
            </div>

            <div className='mx-auto w-[100%] xl:hidden 2xl:hidden lg:hidden justify-center items-center text-center pb-20 md:pb-0 xs:w-[90%]  sm:pb-0 xs:pb-10 ' >
              <Image quality={95} src={'/assets/images/newimg/web-copywriting-banner.png'} width={800} height={600} alt='web-copywriting-banner' />
            </div>
            <div className='mx-auto w-[100%] md:hidden sm:hidden xs:hidden justify-center items-center text-center pb-20 xs:w-[90%] sm:pb-0 xs:pb-10 ' >

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GhostwritingBanner
