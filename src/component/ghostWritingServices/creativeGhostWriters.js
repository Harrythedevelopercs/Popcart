import React from 'react'
import Image from 'next/image';
import Woman from "../../../public/imageAR/woman-writing-.png"
import { MRCTA } from '..';


const openLiveChat = (e) => {
    e.preventDefault();
    if (window.LiveChatWidget) {
        window.LiveChatWidget.call('maximize');
    }
};
const creativeGhostWriters = ({
    classes="mt-5"
}) => {
    return (
        <>
            <section className="our-bringing6 mr-xl:py-24 mr-lg:py-20 mr-md:py-14 py-10">
                <div className="mr-container mx-auto font-secondary">
                    <div className="text-center mb-5 heading">
                        <h6 className="text-[30px] font-primary text-[#3EA99F] font-semibold">
                        Our Creative Ghostwriters
                        </h6>
                        <h2 className='text-[40px] font-primary sm:text-4xl font-bold py-1'>
                        Breathe Life into the Mundane
                        </h2>
                        <p className="mt-2 max-w-[70%] mx-auto sm:text-justify sm:max-w-[88%] xs:max-w-[95%]">
                        Our ghostwriters accentuate your ideas on a whole different level. Every project that we work on inevitably becomes a page-turner.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 items-center px-auto md:grid-cols-1 sm:grid-cols-1 sm:px-5 sm:text-justify xs:text-justify xs:grid-cols-1 ">
                        <div className='mr-lg:py-[40px] py-12'>
                            <ul className=" items-center pt-5">
                                <li className="mb-4">
                                    <h4 className="text-[25px] font-semibold font-primary mb-1">
                                        Fiction
                                    </h4>
                                    <p className="text-[16px]">
                                    Our ghostwriters accentuate your ideas on a whole different level. Every project that we work on inevitably becomes a page-turner.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-[25px] font-semibold font-primary mb-1">
                                        Informative
                                    </h4>
                                    <p className="text-[16px]">
                                    In a world brimming with knowledge, informative literature serves as a guiding light, illuminating the path to understanding and enlightenment. From academic textbooks to engaging non-fiction, informative works provide readers with valuable insights and practical wisdom on a myriad of subjects.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-[25px] font-semibold font-primary mb-1">
                                        Memoir
                                    </h4>
                                    <p className="text-[16px]">
                                    Journey through the world of lived experiences with memoirs, where personal narratives weave tales of triumph, resilience, and self-discovery. Memoirs offer a glimpse into the intimate moments and transformative events that shape a person's life, inviting readers to connect with the raw authenticity of the human experience.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-[25px] font-semibold font-primary mb-1">
                                        Children's Book
                                    </h4>
                                    <p className="text-[16px]">
                                    Spark the imagination and ignite a love for reading with children's books, where whimsy and wonder abound on every page. From colorful picture books to enchanting fairy tales, children's literature enthralls young minds and fosters a lifelong passion for learning and creativity. 
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-[25px] font-semibold font-primary mb-1">
                                        Self Help Book
                                    </h4>
                                    <p className="text-[16px]">
                                    Empower yourself to steer life's challenges and unlock your full potential with self-help books, where personal growth and transformation take center stage. From practical strategies for success to insights on mindfulness and resilience, self-help literature offers valuable tools and guidance for individuals striving to live happier, healthier, and more fulfilling lives.
                                    </p>
                                </li>
                                <li className="mb-4">
                                    <h4 className="text-[25px] font-semibold font-primary mb-1">
                                        Biography
                                    </h4>
                                    <p className="text-[16px]">
                                    Probe into the lives of extraordinary individuals and explore the world of human existence with biographies, where real-life stories unfold with depth and authenticity. From historical figures to modern-day icons, biographies offer a glimpse into the triumphs, tribulations, and defining moments that shape a person's legacy.
                                    </p>
                                </li>
                            </ul>
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
                        <div className="pt-10 pl-5 xs:justify-center xs:items-center">
                            <Image quality={95} src={Woman} alt="fiction ghostwriting services" className='img-fluid m-0' />
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

export default creativeGhostWriters
