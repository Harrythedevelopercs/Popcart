import React from 'react'
import Image from 'next/image'
import AuthorGlassImage from 'media/ahsan/spacious-bookstore-interior.png'
import { MRCTA } from '.'
// const openZendeskChat = () => {
//     if (window.zESettings) {
//         window.zE('webWidget', 'open');
//     }
// };

const marketBook1 = () => {
    return (
        <>
            <section className='py-[80px]'>
                <div className='mr-container m-auto '>
                    <div className='grid mr-lg:grid-cols-2 items-center'>
                        <div className='hidden mr-md:block'>
                            <Image className='img-fluid m-auto' quality={100} alt="Author Glass Reading Books" src={AuthorGlassImage} />
                        </div>
                        <div className='items-center'>
                            <div className=''>
                                <h6 className='font-semibold mr-lg:!text-[30px] font-primary !text-[20px] text-[#3EA99F] mb-3 leading-tight'>Market your book</h6>
                                <h2 className='mr-lg:text-[45px] text-[30px] font-primary font-bold mb-3 leading-tight'>In the best possible way!
                                </h2>
                                <p className='text-[16px] leading-normal'>When selecting  Broadway Publishers Ghostwriting, be assured that you have opted for a highly professional company serving as the definitive one-stop solution for all your marketing requirements.</p>
                            </div>
                            <div className='relative z-auto pt-5' >
                                <div className="justify-center md:gap-10 mx-auto md:pr-0 md:ml-0 ">
                                    <div className=" md:w-[100%] md:gap-x-6 sm:w-[100%] xs:w-[100%] space-x-10 py-3 md:px-5 mx-auto xs:space-x-0 xs:px-4 font-semibold">
                                        <ul className='xs:w-[100%] x:block inline-block text-[16px] space-y-3 justify-center items-center xs:text-[14px] '>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'>
                                                <Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Video Trailer" /><h5>Video Trailer</h5> </li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'>
                                                <Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Book Cover Designing" /><h5>Book Cover Designing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'>
                                                <Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Book publishing" /><h5>Book Publishing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'>
                                                <Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Book Translation" /><h5>Book Translation</h5> </li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'>
                                                <Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Amazong Marketing" /><h5>Amazong Marketing</h5></li>
                                        </ul>
                                        <ul className='xs:w-[100%] x:block  inline-block text-[16px] space-y-3 justify-center items-center xs:text-[14px] '>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'><Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Audio Book" /><h5>Audio Book</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'><Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Author's Website" /><h5>Author's Website</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'><Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Social Media Marketing" /><h5>Social Media Marketing</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'><Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Marketing Consultation" /><h5>Marketing Consultation</h5></li>
                                            <li className='flex space-x-3 border-b-[1px] items-center border-solid border-[#3EA99F] pb-3'><Image src="/assets/images/newimg/color-check2.png" width={9} height={9} className='h-[9px] w-[9px]' alt="Barnes & Noble Nook Edition" /><h5>Barnes & Noble Nook Edition</h5></li>
                                        </ul>
                                    </div>
                                    <div className={`grid grid-cols-1 mr-sm:flex gap-3 mt-5`}>
                                        <MRCTA
                                            text="LET'S DISCUSS"
                                            classes="hover:bg-transparent hover:border-secondary-100 rounded-sm bg-secondary-100"
                                            link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                                        />
                                        <MRCTA
                                            text="855-666-6675"
                                            link="tel:8556666675"
                                            bg="bg-transparent"
                                            color="text-primary-100"
                                            border="border-secondary-100 hover:!bg-white hover:border-secodary hover:text-black rounded-sm text-secondary-100"
                                        />
                                    </div>
                                    {/* <div className='w-[55%] md:w-[60%] sm:w-[90%] xs:w-[100%] grid grid-cols-2 grid-rows-1 gap-x-6 py-5 relative'>
                                        <a href='tel:855-666-6675' className='bg-[#00C0E4] py-1 text-white hover:bg-white hover:border-solid hover:border-[3px] hover:text-[#1d1d1f] hover:transition-all text-center flex items-center justify-center h-[40px]'>Get started</a>
                                        <a href='javascript:$zopim.livechat.window.show()' className='bg-[#1d1d1f] py-1 text-white border-[#1d1d1f] border-[3px] hover:bg-[#00C0E4] hover:text-[#1d1d1f] hover:border-[2px] hover:border-[#00C0E4] text-center flex items-center justify-center h-[40px]'>Live Chat</a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>

    )
}

export default marketBook1
