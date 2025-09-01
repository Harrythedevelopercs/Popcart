import React from 'react'

import Image from 'next/image'


const PublishingWorkMode = () => {
    return (
        <>
            <section className="bg-[#f2f2f2] w-full font-secondary">
                <div className="container max-w-7xl lg:max-w-6xl py-24 text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center">
                        <h6 className='text-[30px] leading-tight font-primary text-[#3EA99F] font-semibold'>
                            We Offer Bespoke Graphics
                        </h6>
                        <h2 className='text-[40px] font-primary font-bold leading-10 mt-2 mb-2 xs:text-[26px]'>
                            A Design that’s Unique to You
                        </h2>
                        <p className='w-[80%] mx-auto md:w-[75%] xs:w-[100%]'>
                            Our creative designers work on providing you with a book cover design that’s not only unique to you and your brand but also markets your product with its beautifully and well-crafted design.
                        </p>
                    </div>

                    <div className=' grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 md:w-[95%] md:gap-5 mx-auto sm:w-[90%] xs:w-[90%] xs:gap-4'>
                        <div className="col-md  hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 hover:bg-white bg-transparent text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image quality={95} src='/assets/images/newimg/concept-development.png' width={200} height={200} alt='concept-development' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 font-primary text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Concept Development: </h4>
                                    <p className='text-sm'>
                                        Our team at  Broadway Publishers Ghostwriting is among the best in developing concepts. We work closely with authors to understand their book’s theme, genre, and essence. From this foundation, we develop unique and captivating concepts for the book cover that resonate with the story’s core. This eventually leads to our creative designers working on making an ideal cover that fits the book’s theme.
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 hover:bg-white bg-transparent text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image quality={95} src='/assets/images/newimg/custom-illustration.png' width={200} height={200} alt='Custom illustration and artwork' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 font-primary text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Custom Illustration and Artwork</h4>
                                    <p className='text-sm'>
                                        For authors seeking a one-of-a-kind cover, our artists can create original illustrations and artwork personalized to the book’s content. These handcrafted visuals infuse the cover with the author’s vision and creativity, making them among the best designs the industry will get to grace their eyes with.
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 hover:bg-white bg-transparent text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image quality={95} src='/assets/images/newimg/typographylayout.png' width={200} height={200} alt='Print On Demand' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 font-primary text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Typography and Layout:</h4>
                                    <p className='text-sm'>
                                        Our designers expertly handle typography and layout to ensure that the cover is visually appealing and conveys the book’s genre and mood effectively. Fonts, colors, and the arrangement of elements are meticulously chosen to enhance the reader’s experience. Your audience is guaranteed to appreciate the exquisite typography crafted by our creative design team.
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-black">
                            <div className="rounded-2xl p-2 hover:bg-white bg-transparent text-center text-[#1d1d1f] hover:text-[#000] h-[100%] border-2 border-solid">
                                <Image quality={95} src='/assets/images/newimg/print-and-digital.png' width={200} height={200} alt='Reach Millions of Readers' className='w-[100%]' />
                                <div className='p-2'>
                                    <h4 className='text-[20px] py-3 font-primary text-[#242424] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Print and Digital Optimization:</h4>
                                    <p className='text-sm'>
                                        We design covers that shine both in print and digital formats. Whether creating a striking paperback cover or ensuring a pixel-perfect e-book design, we optimize for every medium. Our designers specialize in both print and digital formats, meticulously crafting your book to excellence. We tailor the design to suit the appropriate package, whether it’s a print paperback or an eBook, ensuring the pixel precision needed to make your digital edition truly stand out.
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}

export default PublishingWorkMode
