import React from 'react'
import Image from 'next/image'


const demandingSpecilaist = () => {


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };

    return (
        <>
            <section className="py-[80px] font-secondary md:py-10">
                <div className='container max-w-7xl'>
                    <div className='flex gap-5 sm:grid sm:grid-cols-1 xs:grid xs:grid-cols-1'>
                        <div className='basis-[40%] items-center md:hidden sm:hidden xs:hidden'>
                            <Image quality={95} src='/imageAR/cover-design2.png' width={600} height={300} alt='outstanding-cover' className=' hover:-translate-y-1 hover:scale-110' />
                        </div>
                        <div className='basis-[60%] xs:px-5 md:px-12 md:basis-[100%] sm:px-10'>
                            <div className='w-[90%] md:w-[100%] sm:w-[100%] xs:py-5 xs:w-[100%]'>
                                <h6 className='text-[30px] leading-tight font-primary text-[#3EA99F] font-semibold xs:text-base'>The Most Immaculate Book Cover Designs</h6>
                                <h1 className='pt-5 font-bold font-primary mb-3 leading-[45px] text-4xl xs:py-4 xs:text-4xl xs:w-[100%] '>
                                Create An Outstanding Book Cover <br className='mr-xl:block hidden'/> That Stands Out
                                </h1>
                                <p className='xs:w-[100%]'>
                                    Our creative designers will work to bring life to your book project with their amazing and artistic creative skill set. The importance of a good book cover cannot be understated. It can make or break your book and therefore it must be handled with priority.
                                </p>
                                <ul className="grid grid-cols-2 xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10">
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p className='mr-lg:text-lg mr-md:text-base text-sm font-medium font-secondary'>We provide diverse formats and design types</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p className='mr-lg:text-lg mr-md:text-base text-sm font-medium font-secondary'>Customer satisfaction is our driving force.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p className='mr-lg:text-lg mr-md:text-base text-sm font-medium font-secondary'>You are the sole owner of the design once it's delivered.</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p className='mr-lg:text-lg mr-md:text-base text-sm font-medium font-secondary'>We are available 24/7 for your assistance.</p>
                                    </li>
                                </ul>
                                <div className='w-[60%] grid md:mx-auto grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:w-[80%] xs:w-[100%]'>
                                    <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 text-white hover:bg-transparent hover:border-solid hover:border-[1px] hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
                                    <a href="#" onClick={openLiveChat} className='bg-[#1d1d1f] py-1 text-white border-solid border-[#1d1d1f] border-[1px] hover:bg-[#00C0E4] hover:text-[#fff] hover:border-[1px] hover:border-[#00C0E4] flex items-center justify-center text-center h-[40px]'>Live Chat</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
