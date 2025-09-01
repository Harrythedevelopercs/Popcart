import { MRCTAGroup } from "@/component"

const MRQuestioners = ({
    subTitle,
    title,
    desc,
    data,
    isPopup="",
}) => {
    return (
        <section>
            <div className="relative py-[40px] mr-lg:py-[70px]">
                <div className="mr-container">
                    <div className="text-center mb-5">
                        {subTitle && (<span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                            {subTitle}
                        </span>)}
                        {title && (<h2 className="text-[26px] mr-md:text-[30px] mr-lg:text-[40px] block leading-tight font-bold font-sans text-[#000000] mb-2" dangerouslySetInnerHTML={{ __html: title }} />)}
                        {desc && (<p className="text-[14px] mr-lg:text-[16px] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans text-[#000000]" dangerouslySetInnerHTML={{ __html: desc }} />)}
                    </div>
                    <div className="mr-lg:w-[70%] mx-auto">
                        <div className="grid grid-cols-1 gap-y-2">
                            <span className="block w-full h-[1px] bg-[#3EA99F]"></span>
                            <span className="block w-full h-[1px] bg-[#3EA99F]"></span>
                        </div>
                        <div className="grid grid-cols-12 gap-x-2">
                            {
                                data && data?.map((e, i) => (
                                    <>
                                        <div className="col-span-2 border-r-[1px] border-[#3EA99F] py-4">
                                            <div className="block text-end pr-3 mr-lg:pr-5">
                                                <span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#000000]">{i + 1}.</span>
                                            </div>
                                        </div>
                                        <div className="col-span-10 border-l-[1px] border-[#3EA99F] py-4">
                                            <div className="pl-3 mr-lg:pl-5">
                                                <h3 className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#000000] mb-2">{e.title}</h3>
                                                <p className="text-[14px] block leading-[24px] font-normal font-sans text-[#000000]">{e.desc}</p>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-1 gap-y-2">
                            <span className="block w-full h-[1px] bg-[#3EA99F]"></span>
                            <span className="block w-full h-[1px] bg-[#3EA99F]"></span>
                        </div>
                    </div>
                    <MRCTAGroup isPopup={isPopup} classes="justify-center mt-5" />
                </div>
            </div>
        </section>
    )
}

export default MRQuestioners