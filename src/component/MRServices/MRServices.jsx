import React from 'react'
import Image from 'next/image'
import author from 'media/ahsan/author_website.png'
import Seo from 'media/ahsan/seo-concept-women-using-computer.png'
import Books from 'media/ahsan/books-placed-leaves-autumn-forest1.png'
import customer from 'media/ahsan/customer-satisfaction-with-five-star.png'
import editorial from 'media/ahsan/editorial-critiques.png'
import SocialMedia from 'media/ahsan/social-media.png'
import VideoReview from 'media/ahsan/video-review.png'
import VideoReview1 from 'media/ahsan/video-review1.png'
import BlogsBooks from 'media/ahsan/blogs-for-books.png'
import PressRelease from 'media/ahsan/press-releases.png'
import Link from 'next/link'

const MRServices = ({
    subTitle,
    title,
    desc,
    classes,
    theme = "light"
}) => {
    return (
        <section>
            <div className={`py-[40px] mr-lg:py-[70px] ${classes}`}>
                <div className="mr-container">
                    <div className="text-center mb-5">
                        {subTitle && (<span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                            {subTitle}
                        </span>)}
                        {title && (<h2 className={`text-[26px] mr-md:text-[30px] mr-lg:text-[50px] block leading-tight font-black font-sans ${theme == "light" ? "text-[#000000]" : "text-white"} mb-2`} dangerouslySetInnerHTML={{ __html: title }} />)}
                        {desc && (<p className={`text-[14px] mr-lg:text-[16px] mr-2xl:w-[75%] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans ${theme == "light" ? "text-[#000000]" : "text-white"}`} dangerouslySetInnerHTML={{ __html: desc }} />)}
                    </div>
                    <div className='grid mr-md:grid-cols-12 grid-cols-1 mr-md:gap-2 gap-y-3 mr-xl:w-[90%] w-[90%] text-white font-bold m-auto relative mt-5'>
                        <div className='mr-md:col-span-3 '>
                            <div className='relative mr-md:mb-1 mb-3'>
                                <Image src={author} quality={100} width={500} height={500} alt='author website' className=''  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]  '>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'><h3>Author Website<br />
                                        Design & Development
                                    </h3>
                                    </Link>

                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$1699</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$1999</span></p>
                                </div>
                            </div>
                            <div className='relative'>
                                <Image src={Seo} quality={100} alt='Search Engine Optimization'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Search Engine<br />Optimization
                                        </h3></Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$3999</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$4999</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mr-md:col-span-6'>
                            <div className='relative'>
                                <Image src={customer} quality={95} alt='Online Independent'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Online Independent<br />
                                            Reviews
                                        </h3></Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$899</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$1199</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mr-md:col-span-3'>
                            <div className='relative mr-md:mb-1 mb-3'>
                                <Image src={Books} quality={100} alt='author website'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Book<br />
                                            Trailer
                                        </h3>
                                    </Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$999</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$1240</span></p>
                                </div>
                            </div>
                            <div className='relative'>
                                <Image src={editorial} quality={100} alt='EditorialCritiques'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Editorial<br />
                                            Critiques
                                        </h3></Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$899</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$1199</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mr-md:col-span-9'>
                            <div className='relative'>
                                <Image src={SocialMedia} quality={95} width={1000} height={400} alt='Social Media Marketing'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Social Media <br />
                                            Marketing
                                        </h3></Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$1999</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$2499</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mr-md:col-span-3'>
                            <div className='relative '>
                                <Image src={VideoReview} quality={100} alt='book trailer' className='mr-md:block hidden'  priority/>
                                <Image src={VideoReview1} quality={100} alt-="book trailer" className='mr-md:hidden block'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Book<br />
                                            Trailer
                                        </h3></Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$999</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$1240</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mr-md:col-span-6'>
                            <div className='relative'>
                                <Image src={BlogsBooks} quality={95} alt='Blogs For Book Promotion'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[14px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Blogs For <br />
                                            Book Promotion
                                        </h3>
                                    </Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$1299</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$1599</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='mr-md:col-span-6'>
                            <div className='relative'>
                                <Image src={PressRelease} quality={95} alt='Press Releases'  priority/>
                                <div className='absolute bottom-0 p-5 mr-lg:text-[22px] text-[20px]'>
                                    <Link href="javascript:;" className='hover:text-[#3EA99F]'>
                                        <h3>Press <br />
                                            Releases
                                        </h3>
                                    </Link>
                                    <p className='flex gap-x-2 items-center'> <span className='text-primary-100 mr-lg:text-[14px] text-[14px]'>$699</span>
                                        <span className='mr-lg:text-[14px] text-[14px] line-through'>$899</span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default MRServices
