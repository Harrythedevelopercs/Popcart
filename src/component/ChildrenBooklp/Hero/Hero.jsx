import Image from "next/image";
import { MRCTA } from "@/component";
// Images
import Banner from "media/children-book-lp/hero-bg.png"
import Book1 from "media/children-book-lp/hero-book-1.png"
import Book2 from "media/children-book-lp/hero-book-2.png"
import Book3 from "media/children-book-lp/hero-book-3.png"

const Hero = () => {
    return (
        <section className="font-sans">
            <div className="relative z-10 pt-[95px] mr-sm:pt-[135px] mr-lg:pt-[100px] mr-2xl:pt-[130px] pb-[50px]">
                <Image src={Banner} alt="heroBanner" fill={true} className='z-[-1] object-cover mr-lg:object-center mt-[-10px]' /> 
                <div className="mr-container">
                    <div className="mr-sm:text-center text-white mr-2xl:w-[70%] mr-lg:w-[75%] w-full mx-auto ">
                        <h1 className="mr-2xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] mb-3 leading-[35px] mr-md:leading-[40px] mr-lg:leading-[60px] mr-2xl:leading-[70px] font-semibold">Your  <span className="text-[#3EA99F] font-normal">Children's Story</span> And Our Children’s Book Publishing Are Made For <span className="text-[#3EA99F] font-normal">Each Other</span></h1>
                        <p className="mr-2xl:text-[16px] text-sm font-normal leading-normal text-justify mr-sm:text-center">We love, love, LOVE children’s stories! Publish a children’s book with us, and we’ll bring your story to life with careful attention and a passion for storytelling. From simple picture books to cool chapter books, and everything in between we enjoy working on every kind of story for young readers.</p>
                        <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-5 mr-2xl:mt-8">
                            <MRCTA text="Connect With Us" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing !rounded-[6px] hover:bg-transparent hover:border-white" />
                            <MRCTA text="Talk To An Expert" link="tel:855-666-6675" classes="__animatedPing !rounded-[6px] bg-transparent !border-0 hover:bg-black !bg-white !text-black hover:border-black" />
                        </div>
                        <div className="flex items-center justify-center gap-3 mr-lg:gap-5 pt-7 mr-2xl:pt-12">
                            <div>
                                <Image src={Book1} alt="BSP" width={268} height={380} />
                            </div>
                            <div>
                                <Image src={Book2} alt="BSP" width={268} height={380} />
                            </div>
                            <div>
                                <Image src={Book3} alt="BSP" width={268} height={380} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero;