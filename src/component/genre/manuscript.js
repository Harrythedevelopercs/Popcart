import React from 'react'

const manuscript = () => {
    return (
        <>
            <section className=''>
                <div className='mr-container mr-xl:!py-28 mr-lg:py-20 mr-md:py-14 py-10 font-secondary'>
                    <div className='grid grid-cols-2 gap-x-20 grid-rows-1 justify-between sm:grid-cols-1 xs:grid-cols-1 sm:gap-10 xs:justify-normal xs:gap-10 '>
                        <div>
                            <h6 className='text-[30px] text-[#3EA99F] capitalize font-primary font-semibold md:w-[80%]'>Our Outstanding Approach To Writing</h6>
                            <h3 className='font-primary leading-[50px] lg:py-5 font-bold text-[40px] sm:text-3xl sm:py-5 xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>We Will Create a Manuscript <br className='mr-xl:block hidden' /> Free of Errors</h3>
                            <p className='text-base text-justify'>Our writers work tirelessly to produce a manuscript that is not only devoid of errors but also reads well and requires much less micromanagement in the form of revisions. Here is how we process your project</p>
                            <ul className='list-disc pl-4 mt-6'>
                                <li className='font-normal text-black pb-2'>Collaborate closely to understand your vision, preferences, and storytelling goals.</li>
                                <li className='font-normal text-black pb-2'>Create a detailed outline to guide the writing process.</li>
                                <li className='font-normal text-black'>Ensure coherence and engagement throughout.</li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='text-[30px] text-[#3EA99F] capitalize font-primary font-semibold'>Our Outstanding Publishing Expertise</h6>
                            <h3 className='font-primary font-bold text-[40px] lg:py-5 leading-[50px] xs:w-[100%] sm:text-3xl sm:py-5 xs:text-3xl md:leading-[45px] md:py-3 xs:py-5'>Publishing Made Easy With Our Services</h3>
                            <p className='text-base text-justify'>Publishing is the hardest aspect of delivering a story to its audience due to the complexities of publishing in this day and age. Our convenient in-house publishing allows ease so you don’t have to worry about a single thing.</p>
                            <ul className='list-disc pl-4 mt-6'>
                                <li className='font-normal text-black pb-2'>We ensure manuscripts meet industry standards for print and digital formats.</li>
                                <li className='font-normal text-black pb-2'>We manage distribution across various platforms and retailers</li>
                                <li className='font-normal text-black'>Develop marketing strategies to promote books and maximize visibility..</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default manuscript
