import React from 'react'
import BlogTabs from '../blogsContent'


const TabNavigationGenre = () => {
    return (
        <>
            <section className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] xs:py-10 font-secondary">
                <div className="mr-container relative z-10 ">
                    <div className="text-center justify-center ">
                        <h6 className='font-semibold text-[30px] leading-tight font-sans text-[#3EA99F]'>Blogs</h6>
                        <h2 className='text-5xl font-sans font-bold capitalize sm:text-4xl xs:text-3xl py-3'>Our Center Of Learning</h2>
                        <p className='max-w-[90%] mx-auto mb-5 sm:text-justify text-[#05193c] font-normal text-[17px]'>
                            A place where you can be educated on matters of all things books!</p>
                    </div>
                    <div className="relative mb-10 text-white " >
                        <div className='mx-auto py-10 xs:px-5'>
                            <BlogTabs />
                        </div>

                    </div>
                </div>

            </section>
        </>

    )
}

export default TabNavigationGenre
