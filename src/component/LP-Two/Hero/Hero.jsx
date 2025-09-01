import { MRCTAGroup } from "@/component";
import LogosCarousal from "../Logos/LogosCarousal";
import Image from "next/image";
import HeroBGOne from "media/book-marketing-company/hero/1.png"
import HeroBGTwo from "media/book-marketing-company/hero/2.png"
const Hero = ({ title, desc }) => {
    return (
        <section className="relative z-10">
            <Image src={HeroBGOne} alt="mockups" className="mr-xl:block hidden absolute top-10 mr-2xl:-left-[120px] -left-[190px] bottom-0 z-20 w-[477px] h-[555px] object-cover object-bottom" priority={true} />
            <Image src={HeroBGTwo} alt="mockups" className="mr-xl:block hidden absolute top-10 mr-2xl:-right-[100px] -right-[150px] bottom-0 z-20 w-[449px] h-[560px] object-cover object-bottom" priority={true} />
            <div className="font-sans mr-lg:py-[80px] mr-md:py-[60px] pt-[60px] pb-[40px]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-2xl:w-[57%] mr-xl:w-[65%] mr-lg:w-[75%] w-full mx-auto text-black">
                        <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="mr-md:text-base leading-normal text-sm font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                        <MRCTAGroup classes="justify-center mt-8" animation="__animatedPing" text1="Get Free Consultation" text2="Call Us Now!" />
                    </div>
                    <LogosCarousal />
                </div>
            </div>
        </section>
    )
}

export default Hero;