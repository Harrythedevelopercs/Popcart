import React from 'react'

import Image from 'next/image';


const publishing = ({
    bgImg = "bg-[url('../../public/ahsan/bg_black.png')]",
    classes = ""
}) => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };

    return (
        <>
            <section className={`py-[80px] ${bgImg} bg-no-repeat bg-cover ${classes} md:py-20 md:px-5 sm:py-20 sm:px-5 xs:py-20 xs:px-5`}>
                <div className='mr-container'>
                    <div className='grid mr-xl:grid-cols-12 gap-5 items-center'>
                        <div className='mr-xl:col-span-6'>
                            <div className=' xs:py-5'>
                                <h2 className='mb-3 font-primary text-white font-bold leading-normal text-[45px] md:text-[35px] sm:text-4xl sm:w-[100%] xs:text-3xl xs:w-[100%] '>
                                    Maximize Your Book's Impact with Our Publishing Services
                                </h2>
                                <h3 className='text-[25px] font-primary text-[#3EA99F] font-semibold sm:text-base xs:text-base mb-3'>Global Publishing Excellence Awaits Your Book</h3>
                                <p className=' text-white'>
                                    Step into the spotlight with Broadway Publishers, your trusted book publishing company dedicated to amplifying authors' voices worldwide. We specialize in navigating the complexities of the publishing landscape to ensure your book achieves the recognition it deserves. From Amazon book publishing services to extensive distribution networks, our tailored approach positions your work in front of the right audience, both digitally and in print.
                                </p>
                            </div>
                            <div className='w-[75%] grid grid-cols-1 grid-rows-1 gap-x-5 py-5 md:w-[60%] sm:w-[90%] xs:w-[90%]'>
                                <a onClick={openLiveChat} href="#" className='bg-[#00C0E4] py-2 text-white border-solid border-transparent border-[1px] hover:bg-transparent hover:text-[#00c0e4] hover:border-[1px] hover:border-[#00C0E4] items-center justify-center text-center'>Publish Your Book, Reach the World - Get Started!</a>
                            </div>
                        </div>
                        <div className='mr-xl:col-span-6 mr-lg:block mr-xl:block hidden '>
                            <Image quality={95} src='/assets/images/newimg/graduation-cap-earth-globe.png' width={500} height={500} alt='Tablist Images' className='mx-auto hover:-translate-y-1 hover:scale-110' />
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default publishing
