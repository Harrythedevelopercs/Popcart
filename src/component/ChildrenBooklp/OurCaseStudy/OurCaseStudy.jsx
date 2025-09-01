import React from 'react'
import Image from 'next/image'
// Images
import caseBg from "media/children-book-lp/case-studies-bg.png"
import CaseStudiesSlider from '../CaseStudiesSlider/CaseStudiesSlider'
import { Logos } from '@/component/LP-Three'

const OurCaseStudy = () => {
    const caseData = [
        { desc: "Unyielding Loyalty: Discover the powerful connections that drive soldiers to protect one another against all odds." },
        { desc: "Sacrifice and Survival: Witness the personal costs of war as characters grapple with life-altering decisions." },
        { desc: "Family and Brotherhood: Explore the deep bonds that extend beyond blood, shaping identities in the midst of conflict." }
    ];
    return (
        <section className='py-[50px] mr-lg:py-[80px] relative '>
            <Image src={caseBg} alt='Casestudy' fill={true} className='object-center object-cover' />
            <div className="mr-container relative z-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-center text-white'>
                            <span className='text-[#3EA99F] font-normal'>Case </span> Studies
                        </h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-white text-center mr-lg:w-9/12 mr-2xl:w-6/12 mx-auto '>Every children’s book has a story behind the story — the dream of an author who wants to inspire young readers. Our case studies celebrate these authors’ journeys, from their first draft to a beautifully published book. </p>
                    </div>
                    <div className="col-span-12 mt-6 mr-lg:mt-16 relative">
                        <CaseStudiesSlider />
                    </div>
                    <div className="col-span-12">
                        <Logos />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCaseStudy
