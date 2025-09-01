import React from 'react'

import Image from 'next/image'
import { MRCTA, MRCTAGroup } from '@/component'

const bookWriting = (props) => {
    return (
        <>
            <section className=" py-20 text-[#1d1d1f] font-primary">
                <div className='mr-container'>
                    <div className='grid mr-lg:grid-cols-12 items-center'>
                        <div className=" mr-lg:col-span-5">
                            <h6 className='text-[30px] font-primary text-[#3EA99F] font-semibold mb-3'>
                                Are you in pursuit of
                            </h6>
                            <h2 className='mr-xl:text-[40px] mr-lg:text-[35px] mr-md:text-[30px] font-primary font-bold leading-normal mb-3'>
                                {props.title}
                            </h2>
                            <p className=' mr-xl:text-[16px] mr-md:text-[12px] text-[#000] mb-2 leading-6 pb-2'>
                                {props.desc}
                            </p>

                            <p className=' mr-xl:text-[16px] mr-md:text-[12px] text-[#000] mb-4 leading-6 pb-2'>
                                {props.descs}
                            </p>
                            <ul className='space-y-3 mt-4 mr-lg:w-[70%]'>
                                <li className='flex space-x-4 items-center border-b border-[#3EA99F] pb-2'>
                                    <Image quality={95} src="/assets/images/newimg/color-check2.png" alt="color-check" width={9} height={9} className='h-[9px] w-[9px]' />
                                    <h5 className='mr-xl:text-[16px] mr-md:text-[12px]'>
                                       Publishing on various online platforms such as Amazon Kindle. 
                                    </h5>
                                </li>
                                <li className='flex space-x-4 items-center border-b border-[#3EA99F] pb-2'>
                                    <Image quality={95} src="/assets/images/newimg/color-check2.png" alt="color-check" width={9} height={9} className='h-[9px] w-[9px]' />
                                    <h5 className='mr-xl:text-[16px] mr-md:text-[12px]'>Fast and affordable self-publishing.</h5>
                                </li>
                                <li className='flex space-x-4 items-center border-b border-[#3EA99F] pb-2'>
                                    <Image quality={95} src="/assets/images/newimg/color-check2.png" alt="color-check" width={9} height={9} className='h-[9px] w-[9px]' />
                                    <h5 className='mr-xl:text-[16px] mr-md:text-[12px]'>Convenient additions and revisions.</h5>
                                </li>
                            </ul>
                            <div className={`grid grid-cols-1 mr-sm:flex gap-3  mt-5`}>
                            <MRCTA
                                text="LET'S DISCUSS"
                                classes="hover:bg-transparent hover:border-secondary-100 hover:text-black rounded-sm bg-primary-100"
                                link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                            />
                            <MRCTA
                                text="855-666-6675"
                                link="tel:8556666675"
                                bg="bg-transparent"
                                color="text-primary-100"
                                border="border-primary-100 hover:!bg-white hover:border-secodary hover:text-black rounded-sm text-secondary-100"
                            />
                        </div>
                        </div>

                        <div className="mr-lg:col-span-7 hidden mr-lg:block">
                            <Image quality={95} width={1500} height={700} alt='' src="/assets/images/newimg/industry-section.png" className="img-fluid m-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default bookWriting
