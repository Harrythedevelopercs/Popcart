import React from 'react'
import { MRCTA } from '..'




const PublishingWorkMode = ({
    classes="justify-center mt-5"
}) => {
    return (
        <>
            <section className="mr-lg:py-[50px] py-[40px] font-sans">
                <div className="mr-container text-[#1d1d1f]">
                    <div className="text-center mb-10 justify-center">
                        <h6 className='text-[30px] leading-tight font-primary text-[#3EA99F] font-semibold'>
                            High quality editing
                        </h6>
                        <h2 className='font-primary text-[34px] font-bold leading-10 mt-2 mb-2 xs:text-[32px]'>
                            Editing Tailored to Your Needs
                        </h2>
                        <p className='w-[80%] md:text-center mx-auto md:w-[90%] sm:w-[90%] xs:w-[90%]'>
                            We create the ideal editing workflow to suit all your editing needs. Our editors are the best at creating an ideal environment for refining your manuscripts and producing the highest quality. Our outstanding results are a testament to the hard work of affordable book editing services the people at  Broadway Publishers Ghostwriting provide.
                        </p>
                    </div>

                    <div className='w-[80%] grid grid-cols-3 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 md:w-[90%] mx-auto xs:w-[90%] mb-5'>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-[#1d1d1f]">
                            <div className="rounded-2xl bg-white text-left p-2 text-[#1d1d1f] h-[100%] shadow-2xl">
                                <div className='p-5'>
                                    <p className='text-2xl font-primary text-[#3EA99F] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Copy-Editing
                                        <span className='block font-normal text-[#242424] font-secondary text-base leading-5 mt-2'>
                                            The process of revising the written material to improve the readability of the book ensures it is free of grammatical errors. Work with our professional book editing services, you will be provided with all the fixes you need.
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-[#1d1d1f]">
                            <div className="rounded-2xl bg-white text-left p-2 text-[#1d1d1f] h-[100%] shadow-2xl">
                                <div className='p-5'>
                                    <p className='text-2xl font-primary text-[#3EA99F] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Line-Editing:
                                        <span className='block font-normal text-[#242424] font-secondary text-base leading-5 mt-2'>
                                            In this form of editing, our expert editors’ help with the flow, writing style, and comprehension of the manuscript.
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md hover:-translate-y-1 hover:scale-105 duration-300 hover:text-[#1d1d1f]">
                            <div className="rounded-2xl bg-white text-left p-2 text-[#1d1d1f] h-[100%] shadow-2xl">
                                <div className='p-5'>
                                    <p className='text-2xl font-primary text-[#3EA99F] font-semibold leading-6 m-0 transition-[.5s all]'>
                                        Proof-reading:
                                        <span className='block font-normal text-[#242424] font-secondary text-base leading-5 mt-2'>
                                            Our expert proofreaders check your text for errors before sharing it. We offer the best proofreading services in the industry.
                                        </span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={`grid grid-cols-1 mr-sm:flex gap-3 ${classes}`}>
                        <MRCTA
                            text="LET'S DISCUSS"
                            classes="hover:bg-secondary-100 rounded-sm"
                            link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                        />
                        <MRCTA
                            text="855-666-6675"
                            link="tel:8556666675"
                            bg="bg-transparent"
                            color="text-primary-100"
                            border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white rounded-sm"
                        />
                    </div>
                </div>
            </section>
        </>


    )
}

export default PublishingWorkMode
