import { MRCTA, MRCTAGroup, MRHeroCounter, MRHeroForm } from "@/component"
import { Image } from "react-bootstrap"

const MRHero = ({
    subTitle,
    title,
    desc,
    form = true,
    containImg,
    fullImg = "",
    logos,
    counter = false,
    classes = "",
    groupCTA = true,
    isPopup = "",
    beforeImg,
}) => {
    return (
        <section>
            <div className={`relative pt-[80px] ${fullImg} bg-[10% 10%] bg-no-repeat ${classes} !border-b-[#00c4e4] border-solid border-b-[1px]`}>
                <div className="mr-container">
                    <div className="grid grid-cols-1 mr-md:grid-cols-12 items-center gap-y-5 mr-md:gap-y-0 mr-md:gap-x-4 ">
                        <div className={`mr-md:col-span-7 mr-lg:col-span-6`}>
                            {subTitle && <h1 className="text-[18px] uppercase leading-none font-sans font-semibold border-[3px] border-primary-100 text-secondary-100 w-max p-2 !mb-4">{subTitle}</h1>}
                            {title && subTitle ? <h2 className="text-[30px] mr-lg:text-[35px] mr-xl:text-[45px] mr-2xl:text-[40px] font-sans font-semibold leading-tight text-secondary-200 mb-4" dangerouslySetInnerHTML={{ __html: title }} /> : <h1 className="text-[30px] mr-lg:text-[35px] mr-xl:text-[40px] mr-2xl:text-[45px] font-sans font-bold leading-tight text-secondary-200 mb-4" dangerouslySetInnerHTML={{ __html: title }} />}
                            {desc && <p className="text-[16px] font-sans font-normal leading-normal !mb-4 text-justify lg:text-left" dangerouslySetInnerHTML={{ __html: desc }} />}
                            {groupCTA ?
                                <MRCTAGroup isPopup={isPopup} /> :
                                <MRCTA
                                    text="Start Your Publishing Journey Today"
                                    classes="hover:bg-secondary-100"
                                    link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                                />
                            }
                            {counter && <MRHeroCounter />}

                            {logos && <Image src={logos.src} className="!mt-4 pt-2  mr-lg:block hidden" alt="bestsellingpublisher" />}
                        </div>
                        {containImg && <div className="mr-md:col-span-5 mr-lg:col-span-6 mr-lg:block hidden">
                            <Image src={containImg.src} className="block m-auto" quality={95} alt="Broadway Publishers" priority />

                        </div>}
                        {(form || beforeImg) && <div className={`z-10 mr-md:col-span-5 mr-xs:mt-5 mr-sm:mt-5 mr-lg:col-span-6 bg-no-repeat ${beforeImg} before:bg-no-repeat before:absolute before:bg-cover before:w-[43%] mr-lg:before:w-[45%] mr-xl:before:w-[48%] before:h-full -z-10 before:right-0 before:bottom-0 before:top-0 before:opacity-25`}>
                            {form && <MRHeroForm />}
                        </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MRHero