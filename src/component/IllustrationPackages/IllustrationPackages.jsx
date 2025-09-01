import Image from "next/image"
import RedCircle from "media/imageAR/redCircle.png"
import { MRCTA } from "@/component"

const IllustrationPackages = ({ packagesData }) => {
    return (
        <div className="mr-xl:py-[100px] mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
            <div className="mr-container">
                <div className="text-center font-secondary text-[#2d2d2d]">
                    <h2 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-2xl leading-tight font-extrabold">Exclusive Illustration Packages</h2>
                    <p className="mr-md:text-base text-sm font-normal">Our vast experience encourages us to offer fast and captivating book illustrations without fail at affordable rates. <br className="mr-lg:block hidden" />
                        Have a look at our comprehensive pricing plans for illustration services.</p>
                </div>
                <div className="grid mr-xl:!gap-x-4 gap-5 mr-xl:grid-cols-3 mr-lg:grid-cols-2 grid-cols-1 pt-16">
                    {
                        packagesData && packagesData?.map((e, i) => (
                            <div key={i} className="py-5 mr-xl:even:scale-100 mr-xl:scale-90 shadow-[10px_10px_25px_0px_rgba(0,0,0,0.12)] font-secondary text-[#2d2d2d] mr-2xl:px-4 px-3 border-2 border-[#D9D9D9] rounded-xl">
                                <div className="flex justify-between items-center text-white pb-2">
                                    <h2 className="inline-block bg-black rounded-lg mr-2xl:text-[27px] mr-sm:text-[22px] text-lg py-4 px-2 font-bold">{e.title}</h2>
                                    <div className={`relative before:absolute ${e.amount} before:flex before:items-center before:justify-center before:w-full before:h-full before:z-20 before:text-[30px] before:font-bold before:top-0 before:left-0 before:right-0 before:bottom-0 `}>
                                        <Image src={RedCircle} alt="Icons" className="block ml-auto" />
                                    </div>
                                </div>
                                <div className="w-full bg-gradient-to-r from-white via-blue-300 to-white h-1"></div>
                                <div className="py-4">
                                    <p className="mr-md:text-base text-sm font-medium mr-2xl:min-h-[100px] min-h-[120px]">{e.desc}</p>
                                    <ul className="list-disc pl-5 text-lg font-medium pt-3">
                                        {
                                            e.list && e.list.map((e, i) => (
                                                <li key={i}>{e}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="w-full bg-gradient-to-r from-white via-blue-300 to-white h-1"></div>
                                <div className="py-3">
                                    <p className="mr-md:text-base text-sm font-medium">{e.note}</p>
                                    <div className="flex mr-2xl:justify-between justify-center mr-2xl:gap-0 mr-lg:gap-x-10 gap-x-5 items-center text-white mt-6">
                                        <MRCTA
                                            text="Order Now!"
                                            link="tel:8556666675"
                                            bg="bg-transparent"
                                            color="text-primary-100"
                                            border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white rounded-sm"
                                        />
                                        <MRCTA
                                            text="Live Chat"
                                            classes="hover:bg-secondary-100 rounded-sm"
                                            link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default IllustrationPackages
// before:content-['$75']