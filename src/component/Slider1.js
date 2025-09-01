import React from 'react';
import Image from 'next/image';



const Slider1 = () => {

    return (
        <>
            <section className='w-full bg-white text-[#1d1d1f] py-4 lg:pt-10'>
                <div className='max-w-7xl lg:max-w-6xl mx-auto 2xl:text-center xl:text-center lg:text-center md:text-center text-left px-4 items-center justify-center'>

                    <h1 className='font-bold font-primary text-6xl mt-12 leading-tight sm:text-4xl xs:text-4xl'>
                        Your Source for Superior<br className='lg:hidden block' /> Book Writing!
                    </h1>
                    <p className='mx-auto font-secondary text-base mt-3 md:w-[80%]'>
                    Which book writing service is your need? You will find everything you are <br className='lg:hidden block' /> looking for, from professional writers to top marketers
                    </p>
                    <div className='w-[30%] lg:w-[40%] md:w-[60%] sm:w-[70%] xs:w-[80%] mx-auto grid grid-cols-2 grid-rows-1 gap-6 xs:gap-3 py-5 relative'>
                        <a href='tel:855-666-6675' className='bg-[#00C0E4] py-1 text-white border-[#00c0e4] border-[1px] hover:bg-white hover:border-solid hover:border-[1px] hover:text-[#1d1d1f] flex items-center justify-center text-center h-[40px]'>Get started</a>
                        <a href='javascript:$zopim.livechat.window.show()' className='bg-[#1d1d1f] py-1 text-white border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#1d1d1f] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                    </div>
                    <div className='mx-auto w-[70%] justify-center items-center text-center hover:-translate-y-1 hover:scale-105 duration-300'>
                        <Image priority={true}quality={95} src='/assets/images/newimg/open-book-with-hard-cover-isolated-white.png' width={1000} height={500} alt='Home Image banner' className='block mx-auto' />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Slider1
