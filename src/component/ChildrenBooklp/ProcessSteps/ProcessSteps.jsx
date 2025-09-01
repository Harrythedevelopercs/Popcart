import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
// Images
import Process1 from "media/children-book-lp/process-1.svg"
import Process2 from "media/children-book-lp/process-2.svg"
import Process3 from "media/children-book-lp/process-3.svg"
import Process4 from "media/children-book-lp/process-4.svg"
import Process5 from "media/children-book-lp/process-5.svg"
import TickImage from "media/children-book-lp/tick-image.svg"
import { MRCTA } from '@/component'

const   ProcessSteps = () => {
    const processData = [
        {
            processImage: Process1,
            title: "Development"
        },
        {
            processImage: Process2,
            title: "Illustration"
        },
        {
            processImage: Process3,
            title: "Editing"
        },
        {
            processImage: Process4,
            title: "Formatting"
        },
        {
            processImage: Process5,
            title: "Publishing"
        },
    ]

    const [currentStep, setCurrentStep] = useState(0);
    const totalSteps = processData.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep(prevStep => (prevStep + 1) % totalSteps);
        }, 1500);

        return () => clearInterval(interval);
    }, [totalSteps]);

    return (
        <section className='pt-[50px] mr-lg:pt-[80px] pb-[50px] mr-lg:pb-[80px]'>
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mb-3 text-center text-black'>How <span className='text-[#3EA99F] font-normal'>We Work</span> As A Children’s Book <span className='text-[#3EA99F] font-normal'>Publishing</span> Company!</h2>
                        <p className='mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-8/12 mx-auto pb-8 mr-xl:pb-14'>Our proven 5-step process paves the way to self-publishing success. From refining your story to launching it worldwide, we do everything with great care and professionalism.</p>
                    </div>
                </div> 
                <div className="grid grid-cols-2 mr-md:grid-cols-5 justify-center gap-5 pb-4">
                    {processData.map((process, index) => (
                        <div
                            key={index}
                            className={`${index === processData.length - 1 ? 'col-span-2 ' : ''} mr-md:col-span-1`}
                        >
                            <div className="image">
                                <Image src={process.processImage} alt="Process" className={`${index === processData.length - 1 ? 'w-3/12' : 'w-6/12'} mx-auto mr-md:w-auto`} />
                            </div>
                            {currentStep < totalSteps && (
                                <div
                                    className={`progress relative pt-2 mr-md:pt-7 pb-6 mr-md:pb-10 ${index < totalSteps - 1
                                            ? `${index <= currentStep ? 'before:bg-[#3EA99F]' : 'before:bg-[#EFEFEF]'
                                            } mr-md:before:content-[''] mr-md:before:absolute mr-md:before:top-[32px] mr-md:before:right-[-52%] mr-md:before:w-[97%] mr-md:before:h-[5px]`
                                            : ''
                                        }`}
                                >
                                    <div
                                        className={`absolute top-[24%] left-0 right-0 mx-auto w-[20px] mr-md:w-[35px] h-[20px] mr-md:h-[35px] rounded-full ${index <= currentStep ? 'bg-transparent' : 'bg-[#EFEFEF]'
                                            }`}
                                    >
                                        {index <= currentStep ? (
                                            <Image src={TickImage} alt="Tick Image" />
                                        ) : (
                                            <span
                                                className={`w-[10px] mr-md:w-[16px] h-[10px] mr-md:h-[16px] mx-auto bg-[#CECECE] rounded-full absolute top-[50%] translate-y-[-50%] left-0 right-0`}
                                            ></span>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="txt">
                                <p
                                    className={`text-[16px] mr-xl:text-[20px] leading-[20px] mr-xl:leading-[30px] font-medium text-center ${index <= currentStep ? 'text-black' : 'text-gray-500'
                                        }`}
                                >
                                    {process.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-8 mr-lg:mt-16">
                    <MRCTA text="Connect With Us!" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px]" />
                    <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-[6px] !bg-[#161616] !border-0 hover:bg-black text-white hover:border-black" />
                </div>
            </div>
        </section>
    )
}

export default ProcessSteps
