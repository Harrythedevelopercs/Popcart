import React from 'react'
import Image from 'next/image'
import { MRCTAGroup } from '.'


const demandingSpecilaist = (props) => {
    return (
        <>
            <div>
                <section className='font-secondary mr-2xl:py-[80px] mr-xl:py-[80px] py-[40px]'>
                    <div className='mr-container m-auto py-24 grid mr-lg:grid-cols-2 items-center'>

                        <div>
                            <div className=''>
                                <h6 className='text-[30px] text-[#3EA99F] font-semibold mb-3 font-primary'>Expose Yourself to An Experience</h6>
                                <h2 className='mr-lg:text-[45px] mr-xs:text-[30px] font-primary font-bold leading-normal'>{props.title}
                                </h2>
                                <p className='text-[16px] pt-3'>{props.desc}</p>
                            </div>
                            <div className='mt-5' >
                                <div className=" justify-center mx-auto">
                                    <h3 className='text-white text-[25px] w-80 bg-[#000] py-1 px-5 text-center demandingheading'>
                                    Our Services Include
                                    </h3>
                                    <div className="mt-4 flex gap-x-5 mr-md:w-[70%] mr-xs:w-[80%] font-semibold ">
                                        <ul className='flex-auto inline-block text-[16px] space-y-3 justify-center items-center xs:text-[16px] xs:space-y-0'>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="eBook Writing" className='!h-[9px]' /><h5> E-Book Writing</h5> </li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Proofreading Services" className='!h-[9px]' /><h5>Proofreading Services</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Book Editing" className='!h-[9px]' /><h5>Book Editing</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Book Formatting" className='!h-[9px]' /><h5>Book Formatting</h5> </li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="Video Trailer" className='!h-[9px]' /><h5>Video Trailer</h5></li>
                                        </ul>
                                        <ul className='flex-auto inline-block text-[16px] space-y-3 justify-center items-center xs:text-[16px] xs:space-y-0'>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Audio Book</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Book Cover Designing</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Author's Website</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Book Publishing</h5></li>
                                            <li className='flex space-x-3 border-b-[2px] border-solid items-center border-[#3EA99F] py-2'><Image quality={95} src="/assets/images/newimg/color-check2.png" width={9} height={9} alt="" className='!h-[9px]' /><h5>Book Marketing</h5></li>
                                        </ul>
                                       
                                    </div>
                                    <MRCTAGroup classes='mt-5'/>
                                </div>
                            </div>
                        </div>
                        <div className='pt-10 hidden mr-lg:block '>
                            <Image quality={95} className='img-fluid m-auto' src="/ahsan/demand_specialist.png" width={1000} height={1200} alt='demanding-specialist' />
                        </div>
                    </div>
                    {/* <div className="bg-cover bg-no-repeat -mt-72 md:-mt-72 sm:-mt-48 p-0 h-96 relative z-10" style={{ backgroundImage: "url('/assets/images/newimg/exceptional-list.png')" }}> */}
                </section>

            </div>
        </>

    )
}

export default demandingSpecilaist
