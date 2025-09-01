import React from 'react'
import Image from 'next/image';


const creativeGhostWriters = () => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };


    return (
        <>
            <section className="py-[100px] font-secondary sm:py-8 xs:py-16">
                <div className='container max-w-7xl lg:max-w-6xl md:max-w-2xl'>
                    <div className='flex items-center justify-between gap-10 xs:grid sm:grid sm:grid-cols-1 xs:grid-cols-1'>
                        <div className='basis-[40%] md:py-12 xs:hidden md:hidden sm:px-10'>
                            <Image quality={95} width={1000} height={200} className=' hover:-translate-y-1 hover:scale-105 sm:w-[70%] sm:mx-auto' src='/imageAR/bold.png' alt='press-newspapers-magazines' />
                        </div>
                        <div className='basis-[55%] md:basis-[100%] sm:w-[100%] sm:mx-auto xs:w-[90%] xs:mx-auto md:mx-auto '>
                            <div className='sm:px-10 xs:py-5'>
                                <h1 className='capitalize font-primary font-bold leading-[60px] text-[40px] md:text-4xl sm:text-4xl sm:w-[100%] sm:py-5 xs:text-4xl xs:w-[100%] '>
                                    Press releases covered by the <br/> right sites
                                </h1>
                                <p className='w-[90%] xs:w-[100%] xs:py-5 sm:w-[100%] sm:mx-auto'>
                                    Press Release gives you maximum acquaintance, achieved through the careful selection of your target audience through media and targeted niche.
                                </p>
                                <ul className="grid grid-cols-2 mt-5 gap-x-3 w-[60%] xs:grid-cols-1 md:w-[90%] sm:w-[90%] sm:gap-x-5 xs:w-[100%] md:mb-5  text-[17px] font-semibold ">
                                    <li className='flex border-b-2 border-solid items-center border-[#989898] py-3'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="h-[9px] w-[9px] mr-2 hover:invert-75" />EIN Presswire</li>
                                    <li className='flex border-b-2 border-solid items-center border-[#989898] py-3'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="h-[9px] w-[9px] first-letter mr-2 hover:invert-75" />eReleases</li>
                                    <li className='flex border-b-2 border-solid items-center border-[#989898] py-3'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="h-[9px] w-[9px] mr-2 hover:invert-75" />issueWire</li>
                                    <li className='flex border-b-2 border-solid items-center border-[#989898] py-3'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="h-[9px] w-[9px] mr-2 hover:invert-75" />Linking news</li>
                                    <li className='flex border-b-2 border-solid items-center border-[#989898] py-3'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="h-[9px] w-[9px] mr-2 hover:invert-75" />Newswire</li>
                                    <li className='flex border-b-2 border-solid items-center border-[#989898] py-3'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Checkmark" className="h-[9px] w-[9px] mr-2 hover:invert-75" />PR Distribution</li>
                                </ul>
                                <div className='w-[50%] md:w-[50%] gap-x-5 grid grid-cols-2 grid-rows-1 py-5 md:py-1 sm:pt-10 sm:w-[80%] xs:w-[100%]'>
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

export default creativeGhostWriters
