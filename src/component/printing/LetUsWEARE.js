import React from 'react'
import Image from 'next/image'

const demandingSpecilaist = () => {
    return (
        <>
            <section className="py-[80px] font-secondary">
                <div className='container max-w-7xl'>
                    <div className='flex gap-5 xs:grid xs:grid-cols-1'>
                        <div className='basis-[40%]'>
                            <Image quality={95} className=' hover:-translate-y-1 hover:scale-110' src='/assets/images/newimg/publication-section.png' alt='publication-section' width={500} height={500} />
                        </div>
                        <div className='basis-[60%]'>
                            <div className=' xs:py-5'>
                                <h6 className='text-2xl'>Our amazing team</h6>
                                <h1 className='pt-5  font-semibold leading-[45px] text-4xl  xs:text-4xl xs:w-[90%] '>
                                    Our book publishing experts will work to fine tune your book
                                </h1>
                                <p className='xs:w-[90%]'>
                                    Welcome to our Book Publishing Services. We are your partners in turning your literary vision into reality. Our team of experienced ghostwriters and publishing experts is here to guide you through the entire process of publishing your book. Here at  Broadway Publishers Ghostwriting, we understand that publishing a book is a journey. We offer a comprehensive range of services to ensure your book receives the attention and care it deserves:
                                </p>
                                <ul className="grid grid-cols-2 xs:grid-cols-1 md:w-[100%] xs:w-[100%] md:mb-10">
                                    <li className='border-b-2 border-solid border-[#707070] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2 hover:invert-75" width={20} height={20} />
                                        <span className='text-[#00c0e4]'>Ghostwriting -</span>Our team of talented ghostwriters will work closely with you.
                                    </li>
                                    <li className='border-b-2 border-solid border-[#707070] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2 hover:invert-75" width={20} height={20} />
                                        <span className='text-[#00c0e4]'>Editing and Proofreading - </span>Our experienced editors will meticulously review your manuscript.
                                    </li>
                                    <li className='border-b-2 border-solid border-[#707070] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2 hover:invert-75" width={20} height={20} />
                                        <span className='text-[#00c0e4]'>Design and Layout - </span>Our designers will create a stunning book cover.
                                    </li>
                                    <li className='border-b-2 border-solid border-[#707070] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2 hover:invert-75" width={20} height={20} />
                                        <span className='text-[#00c0e4]'>Publishing Assistance -</span>We will guide you through the publishing process.
                                    </li>
                                    <li className='border-b-2 border-solid border-[#707070] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2 hover:invert-75" width={20} height={20} />
                                        <span className='text-[#00c0e4]'>Marketing and Promotion - </span> Once your book is published, we'll assist you with marketing.
                                    </li>
                                    <li className='border-b-2 border-solid border-[#707070] py-3 mr-10 xs:mr-0 md:mr-5'>
                                        <Image quality={95} src="/assets/images/newimg/color-check1.png" alt="Checkmark" className="inline-block mr-2 hover:invert-75" width={20} height={20} />
                                        <span className='text-[#00c0e4]'>Distribution - </span>We'll work to ensure your book is available in various formats.
                                    </li>
                                </ul>
                                <div className='w-[40%] grid grid-cols-2 grid-rows-1 gap-2 py-5 xs:w-[90%]'>
                                    <button className='bg-[#00C0E4] py-2 text-white'>Get Started</button>
                                    <button className='bg-[#1d1d1f] py-2 text-white motion-safe:animate-bounce '>Live Chat</button>
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
