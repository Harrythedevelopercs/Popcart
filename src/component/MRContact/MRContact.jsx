import React from "react"
import Image from "next/image"
import { MRHeroForm } from "@/component"
import image1 from "media/ahsan/image1.webp"


const MRContact = ({
    BGimage = "before:bg-[url('../../public/ahsan/students-working-study-group.webp')]",
    subTitle = "Discuss Your Ideas",
    title = "Do You Have A Story Plot <br class='hidden mr-lg:block' /> In Mind? Tell Us About It!",
    desc = "We value your time and energy, which is why we're here to help you transform your <br class='hidden mr-lg:block' /> narrative into a beautifully written book.",
    titleB = "Your Book Deserves To Be Written!",
    descB = `Now that you have an expert book writing, editing, <br className="hidden mr-sm:block" /> and publishing agency. What are you waiting for?`
}) => {
    return (
        <>
            <section className="relative z-10 py-[40px] mr-lg:py-[70px]">
                <div className={`${BGimage} before:bg-no-repeat before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:-z-10 before:bg-cover before:h-[70%] before:bg-center`}>
                    <div className="mr-container">
                        <div className="grid grid-cols-1 gap-y-5 mr-lg:grid-cols-12 items-end mr-lg:gap-x-3">
                            <div className="mr-lg:col-span-7 border-b-[1px] border-[#707070]">
                                <div className="mr-lg:h-[500px] mr-xl:h-[450px] mb-5">
                                    <h4 className="text-[16px] font-sans font-bold text-white leading-tight mb-3">
                                        {subTitle}
                                    </h4>
                                    <h2 className="text-[30px] mr-md:text-[40px] font-sans font-semibold text-white leading-tight mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                                    <p
                                        className="text-[15px] font-sans font-normal text-white leading-[25px] text-justify"
                                        dangerouslySetInnerHTML={{ __html: desc }}
                                    />
                                </div>
                                <div className="flex items-center gap-2 pb-3">
                                    <Image
                                        src={image1}
                                        qualit={95}
                                        width={100}
                                        height={50}
                                        priority
                                    />
                                    <div>
                                        <h4 className="text-[16px] mr-md:text-[20px] font-sans font-semibold  mr-lg:!text-black leading-tight mb-1">{titleB}</h4>
                                        <p className="text-[14px] mr-md:text-[15px] font-sans font-normal  mr-lg:!text-black leading-[23px]" dangerouslySetInnerHTML={{ __html: descB }} />
                                    </div>
                                </div>
                            </div>
                            <div className="mr-lg:col-span-5">
                                <MRHeroForm classes="!w-[80%] mr-lg:!w-[90%] shadow-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MRContact