import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import TABII from '../genre/TabNavigation'

const TabNavigationGenre = () => {
    return (
        <>
            <section className="pt-[100px] md:py-20 sm:py-10 xs:py-10 font-secondary">
                <div className="container max-w-7xl lg:max-w-6xl">
                    <div className="text-center justify-center ">
                        <h6 className='text-[30px] text-[#3EA99F] capitalize font-primary font-semibold'>Why we are exceptional </h6>
                        <h2 className='text-[40px] font-bold font-primary mb-2 lg:text-5xl py-3 md:text-4xl sm:text-3xl xs:text-4xl sm:py-5'>The Greatness of Our Team Cannot Be Understated</h2>
                        <p className="mr-2xl:w-[80%] mr-lg:w-[90%] mx-auto mr-md:text-center text-justify">
                        We hate to brag, but we’ve worked on every single genre in existence and even helped create custom-tailored genres that are not easy to fit in one box. Our team’s adaptability, persistence, and perseverance make all of your literary dreams possible. Our international best-selling writers have compelled people to turn their stories into movies and shows based on their stories. Our writers are a tight-knit team of strong-minded and accomplished people who know how to bring about great results in any time frame, depending on the project’s scope.</p>
                    </div>
                </div>
                <div className="relative mb-10 text-white " >
                    <div className='max-w-7xl mx-auto py-8 sm:px-5 xs:px-5'>
                        <TABII />

                    </div>

                </div>
            </section>
        </>

    )
}

export default TabNavigationGenre
