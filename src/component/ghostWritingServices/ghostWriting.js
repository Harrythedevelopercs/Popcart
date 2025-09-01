import React from 'react'
import Image from 'next/image'



const openZendeskChat = () => {
  if (window.zESettings) {
    window.zE('webWidget', 'open');
  }
};
const ghostWriting = ({
  serviceTitle,
  serviceDesc,
  serviceDesc2,

}) => {


  const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
      window.LiveChatWidget.call('maximize');
    }
  };

  return (
    <>
      <section className="immaculate achieve bg-cover mb-8 py-20 bg-[url('../../public/imageAR/serviceBG.png')]">
        <div className="mr-container font-secondary">
          <div className='grid grid-cols-2 items-center sm:grid-cols-1 xs:grid-cols-1'>
            <div className='text-white'>
              <div className="text-left mb-0">
                <h6 className='text-[30px] font-primary text-[#3EA99F] font-semibold'>Our Exceptional</h6>
                <h2 className='text-[45px] font-primary font-bold py-2 md:leading-tight xs:leading-tight'>{serviceTitle}</h2>
                <p className='sm:text-justify xs:text-justify pb-3'>{serviceDesc}</p>
                <p className='sm:text-justify xs:text-justify'>{serviceDesc2}</p>
                <br></br>
                <p className=''>
                Our process is simple yet effective.
                </p>
              </div>
            </div>
            <div className='sm:py-10'>
              <Image quality={95} width={800} height={700} src='/assets/images/newimg/ghostwriting_book.png' alt='ghost writing' className='mx-auto xs:py-10' />
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-x-8 xl:w-[75%] lg:w-[85%] w-full xs:grid-cols-1 md:mb-10 text-[18px] font-semibold text-white list-disc pl-3 marker:text-[#3EA99F]">
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Genuine Content</li>
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Extensive Formatting</li>
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Critical Reviews and Assessments</li>
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Copy Editing</li>
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Editing and Proofreading</li>
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Publishing, Marketing, and Promotions</li>
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Creative Consultancy</li>
            <li className='border-b-2 border-solid border-[#3EA99F] py-4'>Line and Developmental Editing</li>
          </ul>
          <div className='mx-auto py-3'>
            <div className='w-[30%] grid grid-cols-2 grid-rows-1 gap-x-6 py-5 relative md:w-[70%] sm:w-[100%] xs:w-[100%]'>
              <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#00C0E4] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Talk to us!</a>
              <a onClick={openLiveChat} href="#" className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Let's Start!</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ghostWriting
