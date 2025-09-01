import React from 'react'
import Image from 'next/image'
import { MRCTA, MRCTAGroup } from '..';

const demandingSpecilaist = () => {


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };


    return (
        <>
            <section className="py-[80px]">
                <div className='mr-container'>
                    <div className='grid xl:grid-cols-12 mr-lg:grid-cols-12 m-auto gap-5 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1'>
                        <div className='col-span-5 hidden mr-lg:block mr-xl:block md:hidden'>
                            <Image quality={95} src='/ahsan/book-publishingsection2.png' width={500} height={500} className='m-auto block justify-center md:m-auto' alt="publication-section" />
                        </div>
                        <div className='col-span-7 '>
                            <div className=' xs:py-0'>
                                <h2 className='py-4 font-primary font-bold leading-normal text-[45px]  xs:text-[30px]'>
                                    Our Book Publishing Experts Will Work to Fine-Tune Your Book
                                </h2>
                                <p className='xs:w-[90%] m-auto mb-5'>
                                    At Broadway Publishers, we specialize in comprehensive book publishing services designed to bring your manuscript to life and get it into the hands of eager readers we're dedicated to crafting legacies. Here’s why countless authors have trusted us to navigate their publishing journey:
                                </p>
                                <ul className="grid grid-cols-2 list-[square] list-inside indent-0.5 gap-x-5 xs:grid-cols-1 md:w-[100%] md:p-5 xs:w-[100%] md:mb-10">
                                    <li className='border-b-2 border-solid items-center border-[#707070] py-3'>
                                        <span className='text-[#00c0e4] font-bold'>Expertise Across Genres:  </span>Whether your masterpiece is fiction, non-fiction, or anything in between, our team of seasoned editors, designers, and marketing strategists bring your story to life, ensuring it resonates with your target audience.
                                    </li>
                                    <li className='border-b-2 border-solid items-center border-[#707070] py-3'>
                                            <span className='text-[#00c0e4] font-bold'>Customized Publishing Plans:  </span>Understanding that each book is unique, we offer personalized publishing services tailored to meet your specific needs. From Amazon book publishing to global distribution, we customize our approach to maximize your book's success.
                                    </li>
                                    <li className='border-b-2 border-solid items-center border-[#707070] py-3'>
                                            <span className='text-[#00c0e4] font-bold'>Unparalleled Amazon Presence: </span>Leveraging our deep understanding of Amazon book publishing services, we optimize your book’s visibility and sales potential, helping you climb the ranks and achieve bestseller status.
                                    </li>
                                    <li className='border-b-2 border-solid items-center border-[#707070] py-3'>
                                            <span className='text-[#00c0e4] font-bold'>Comprehensive Marketing Support: </span>Our innovative marketing solutions extend your book's reach, engaging readers across multiple platforms and turning visibility into sustained success
                                    </li>

                                </ul>
                                <p className='sm:px-5 xs:px-5 mt-5 mb-5'>Join the ranks of our satisfied authors and let us transform your publishing aspirations into achievements</p>
                                <div className='mr-xl:w-[50%] mr-lg:w-[50%] grid grid-cols-2 grid-rows-1 gap-x-5 py-5'>
                                    <a href="tel:855-666-6675" className='bg-[#00C0E4] py-1 xs:px-[50px]  text-white hover:bg-transparent hover:border-solid hover:border-[1px]  hover:border-[#1d1d1f] hover:text-[#1d1d1f] hover:transition-all hover:transform-gpu flex items-center justify-center text-center h-[40px]'>Get Started</a>
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
