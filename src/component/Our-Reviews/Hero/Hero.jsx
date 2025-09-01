import { MRCTAGroup } from "@/component";
import Image from "next/image";
import HeroBanner from "media/our-reviews/banner.png"
import HeroImage from "media/our-reviews/books.png"
import Logos from "media/our-reviews/logos.png"
import Logos1 from "media/our-reviews/logos1.png"
import Logos2 from "media/our-reviews/logos2.png"
const Hero = () => {
    return (
        <section className="relative z-10">
            <Image src={HeroBanner} alt="banner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
            <div className="mr-md:pt-[150px] pt-[120px] mr-lg:pb-[80px] mr-md:pb-[60px] pb-[40px]">
                <div className="mr-container">
                    <div className="grid mr-lg:grid-cols-2 grid-cols-1 mr-lg:gap-x-5 gap-y-5 items-center">
                        <div className="text-white">
                            <h1 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mb-5"><span className="border-t-4 border-primary-100">99% Client </span> Satisfaction Is  <br className="mr-md:block hidden" /> Our Biggest <span className="border-b-4 border-primary-100">Achievement </span></h1>
                            <p className="text-base leading-normal font-normal">Broadway Publishers continues to provide top-notch book writing, book marketing and publishing services to clients. We have turned authors into best-sellers with our strategic marketing and publishing strategies. </p>
                            <MRCTAGroup classes="mt-10" animation="__animatedPing" text1="Let’s Talk" text2="Call Now " />
                        </div>
                        <div>
                            <Image src={HeroImage} alt="hero" className="block mx-auto" priority={true} />
                        </div>
                    </div>
                    <div className="mr-md:mt-20 mt-12">
                        <Image src={Logos} alt="logos" className="mr-md:block hidden mx-auto" priority={true} />
                        <Image src={Logos1} alt="logos" className="mr-md:hidden block mx-auto" priority={true} />
                        <Image src={Logos2} alt="logos" className="mr-md:hidden block mx-auto mt-5" priority={true} />
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;