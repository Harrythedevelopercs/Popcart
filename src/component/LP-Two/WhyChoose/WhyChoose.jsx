import { MRCTA } from "@/component";

const WhyChoose = ({ title, desc, card }) => {
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans bg-[#F3F3F3]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[75%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="mr-md:text-base text-sm font-normal leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className="grid mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-md:grid-cols-2 grid-cols-1 items-center mr-lg:gap-x-5 gap-5 mt-[50px]">
                        {card.map(([title, desc], i) => (
                            <div className="bg-white rounded-2xl text-center mr-md:px-6 px-4 py-5 group hover:bg-black transition-all duration-500 ease-in-out cursor-pointer">
                                <h4 className="text-[20px] leading-normal font-medium mb-2 group-hover:text-white">{title}</h4>
                                <p className="mr-md:text-base text-sm font-normal leading-normal group-hover:text-white mr-md:min-h-[100px]">{desc}</p>
                            </div>
                        ))
                        }
                    </div>
                    <MRCTA text="Get Free Consultation" classes="__animatedPing mx-auto mt-[40px] hover:bg-black" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" />
                </div>
            </div>
        </section>
    )
}
export default WhyChoose;