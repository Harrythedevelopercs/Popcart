import React from 'react'
import Image from 'next/image'
import TABII from '../marketing/TabNavigation'
import optimizingSales from 'media/ahsan/optimizingSales.png'
const demandingSpecilaist = () => {
    return (
        <>
            <section className=" xs:py-10 font-secondary">
                <div className="mr-container py-[80px]">
                    <div className='grid grid-cols-12 sm:grid-cols-1 xs:grid-cols-1 text-left py-[80px] font-primary items-center'>
                        <div className='col-span-7'>
                            <h3 className='mr-lg:text-[30px] text-[20px] font-bold text-primary-100'>Optimizing Sales</h3>
                            <h2 className='mr-lg:text-[45px] mr-md:text-[35px] text-3xl font-bold text-secondary-100 leading-tight'>Optimal Marketing Strategies <br className='mr-md:block hidden'/> That Will Let Your Work Thrive!</h2>
                            <p className='text-[18px]'>An exceptional book can be let down with no or less marketing. After availing book writing services, marketing becomes a must in today’s hyper-competitive world. Effectively promoting yourself can be impossible without the necessary experience and expertise, qualities integral in the ghostwriters at Broadway Publishers Ghostwriting. Proficient book marketers are crucial in guiding you at every step of your journey. We provide comprehensive marketing services, including Amazon marketing for the Kindle Vella distribution platform, eBook marketing for various online digital stores, author marketing to enhance your personal brand, and book marketing for non-digital formats. Our approach to marketing involves analyzing market trends first and then incorporating innovative methods to maximize impact.</p>
                        </div>
                        <div className='col-span-5'>
                            <Image src={optimizingSales} quality={100} className="img-fuild m-auto sm:hidden xs:hidden" />
                        </div>
                    </div>
                </div>
                <div className="relative  text-white xs:mb-0 bg-black" >
                    <div className='mr-container m-auto py-0 mr-xs:px-0 mr-xs:py-5'>
                        <TABII />
                    </div>

                </div>
            </section>
        </>

    )
}

export default demandingSpecilaist
