import Image from "next/image"
import Call from "media/imageAR/call.png"
import Book from "media/imageAR/open-book.png"
import Scroll from "media/imageAR/scroll.png"
import World from "media/imageAR/world-map.png"
import { MRCTA } from "@/component"

const Steps = () => {
    let step = [
        {
            title: "Contact Us",
            desc: "You will contact our book publishing company in the first stage of the book publishing process to discuss your publishing aims and learn more about your book to see how we can best support you.",
            icon: Call
        },
        {
            title: "Submit Your Manuscript",
            desc: "In this step, you will give us your completed manuscript. As a result, our team of expert writers will review and evaluate it, providing comprehensive feedback.",
            icon: Book
        },
        {
            title: "Bring Your Book To Life",
            desc: "We understand that self-publishers can be daunting, but with our guidance, you can confidently navigate the process and turn your manuscript into a published book.",
            icon: Scroll
        },
        {
            title: "Share Your Story To The World",
            desc: "When you're ready to self-publish a book, we'll handle the printing and distribution while providing audiobook publishing and marketing assistance to help you connect with readers and share your story with the world.",
            icon: World
        },
    ]
    return (
        <section>
            <div className="mr-md:py-[50px] py-[40px] bg-black font-sans text-white">
                <div className="mr-container">
                    <div className="text-center">
                        <h2 className="mr-xl:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-bold">Unleashing The Power Of Words With Our 4-Step Of Publishing Process</h2>
                    </div>
                    <div className="grid mr-lg:grid-cols-4 mr-md:grid-cols-3 mr-sm:grid-cols-2 grid-cols-1 mr-sm:gap-x-8 gap-5 mt-[60px]">
                        {
                            step && step?.map((e, i) => (
                                <div key={i} className="relative">
                                    <span className="text-[60px] leading-tight font-bold">0{++i}</span>
                                    <div className="relative pl-3 before:absolute before:block before:top-0 before:w-full before:h-full mr-sm:before:-left-4 before:-left-1 before:bg-[url('../../public/imageAR/blueLine.png')] before:bg-no-repeat">
                                        <h3 className="mr-lg:text-[25px] text-xl leading-tight font-bold pt-5 mr-md:min-h-[90px] mr-sm:min-h-[70px] pb-2">{e.title}</h3>
                                        <p className="mr-md:text-base text-sm mr-md:text-start text-justify leading-normal mr-md:min-h-[200px] min-h-[150px] font-light">{e.desc}</p>
                                    </div>
                                    <Image src={e.icon} alt="Icons" width={92} height={92} className="block py-5" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="mr-sm:flex items-center mr-sm:flex-nowrap flex-wrap justify-center mr-sm:gap-x-10 gap-5 mt-10">
                        <MRCTA
                            text="Connect with Us!"
                            classes="hover:bg-secondary-100 mr-sm:mb-0 mb-5"
                            link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                        />
                        <MRCTA
                            text="Call us NOW!"
                            link="tel:8556666675"
                            bg="bg-transparent"
                            color="text-white"
                            border="border-white hover:!bg-primary-100 hover:border-transparent hover:text-white"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Steps
