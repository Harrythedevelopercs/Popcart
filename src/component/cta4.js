import React from 'react'
import Image from 'next/image'

// const openZendeskChat = () => {
//   if (window.zESettings) {
//       window.zE('webWidget', 'open');
//   }
// };

const cta4 = () => {
  return (
    <>
      <div className=''>
        <div className='container x:w-[100%] relative bg-[#00C0E4] m-0 mx-auto max-h-[300px] rounded-xl max-w-7xl lg:max-w-6xl text-left items-center text-white md:py-0 py-4 md:px-5 xs:px-5'>
          <div className='grid grid-cols-2 grid-rows-1 sm:grid-cols-1 items-center  xs:grid-cols-1  xs:justify-center xs:align-center'>
            <div className='py-0 pl-24 md:pl-0 sm:pl-10 xs:pl-0'>
              <h2 className='text-white mb-3 md:text-2xl lg:text-[35px] text-[40px] leading-normal font-bold font-primary relative text-left xs:text-left'>
                Are You Ready To Be on the <br className='block lg:hidden' /> List of Best-Selling Authors? <br className='block lg:hidden' /> <span className='inline-block bg-black text-white'>Let’s Work Together!</span>
              </h2>
              <div className='w-[60%] md:w-[90%] sm:w-[90%] xs:w-[100%] grid grid-cols-2 grid-rows-1 gap-6 py-5 relative'>
                <a href='tel:855-666-6675' className='bg-[#1d1d1f] py-1 text-white hover:bg-white hover:border-solid hover:border-[1px] hover:text-[#1d1d1f] hover:transition-all text-center flex items-center justify-center h-[40px]'>Get started</a>
                <a href='javascript:$zopim.livechat.window.show()' className='bg-transparent py-1 text-white border-[#1d1d1f] border-[1px] hover:bg-black hover:text-white hover:border-[1px] hover:border-[#00C0E4] text-center flex items-center justify-center h-[40px]'>Live Chat</a>
              </div>
            </div>
            <div className="relative xs:hidden overflow-hidden sm:hidden md:m-0 before:absolute before:bg-[url('../../public/imageAR/circle.png')] before:bg-center before:bg-no-repeat before:bg-contain before:w-[100%] before:h-[350px]">
              <Image quality={95} src='/assets/images/newimg/stack-books-with-word-title.png' width={400} height={200} alt='stack-books-with-word-title' className='z-10 relative block mx-auto' />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default cta4;
