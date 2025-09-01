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
            <section className="py-[80px] font-secondary">
                <div className='container max-w-7xl lg:max-w-6xl'>
                    <div className='flex gap-5 md:grid sm:grid sm:grid-cols-1 xs:grid items-center xs:grid-cols-1 md:px-10'>
                        <div className='basis-[40%] items-center md:hidden sm:hidden xs:hidden'>
                            <Image quality={95} src='/imageAR/book-editing2.png' width={600} height={300} alt='Low Upfront Cost' className=' hover:-translate-y-1 hover:scale-110' />
                        </div>
                        <div className='basis-[60%] xs:basis-[100%] sm:px-10 '>
                            <div className='w-[90%] md:w-[100%]  xs:py-5 xs:px-5 sm:w-[100%] xs:w-[100%]'>
                                <h6 className='text-[30px] font-primary text-[#3EA99F] font-semibold'>Bring quality to your book</h6>
                                <h1 className='pt-5 font-primary font-semibold leading-tight mb-3 text-5xl xs:text-4xl xs:w-[100%] '>
                                    Our immaculate editing and proofreading services
                                </h1>
                                <p className='xs:w-[100%] mb-3'>
                                    Our editors ensure that your work is improved and your story structured into a work of art. From identifying what should stay and what should go to finessing your words so they are embellished in your voice, our editors’ offer stunning success. Our services consist of:
                                </p>
                                <ul className="grid grid-cols-2 xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10">
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p>Substantial editing - to improve structure</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p>Error Free Text - Grammar & Punctuation</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p>Writing critical reviews - filling in the loopholes</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p>Editing - Rewriting or Paraphrasing</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p>Manuscript formatting - well organized writing</p>
                                    </li>
                                    <li className='flex gap-4 border-b-2 border-solid items-center border-[#989898] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="inline-block h-[9px] w-[9px] hover:invert-75" />
                                        <p>Publishing - comprehensive publishing services</p>
                                    </li>
                                </ul>
                                <div className='w-[60%] grid  grid-cols-2 grid-rows-1 gap-x-5 py-5 sm:w-[80%] xs:w-[100%]'>
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
