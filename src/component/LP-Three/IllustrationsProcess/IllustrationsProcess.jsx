import { MRCTA } from "@/component";
import Image from "next/image";
import ProcessSideImage from "media/book-illustrations/processSideImage.png"
import ProcessSideNum1 from "media/book-illustrations/1.png"
import ProcessSideNum2 from "media/book-illustrations/2.png"
import ProcessSideNum3 from "media/book-illustrations/3.png"
import ProcessSideNum4 from "media/book-illustrations/4.png"
import ProcessSideNum5 from "media/book-illustrations/5.png"
const IllustrationsProcess = () => {
    return (
        <section className="font-sans" id="process">
            <div className="relative z-10 mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <div className="mr-container">
                    <div className="grid mr-lg:grid-cols-2 grid-cols-1 mr-lg:gap-x-5 gap-5">
                        <div className="mr-sm:text-start text-justify">
                            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-tight mb-3">Our Book Illustrations Process</h2>
                            <p className="mr-md:text-base text-sm leading-normal font-normal">Experience the artistry that transforms your story into a visual masterpiece, enchanting children and creating lasting memories. Hire us to turn your book into an unforgettable emotional journey.</p>
                            <div className="grid grid-cols-1 mr-sm:flex mr-sm:gap-x-5 gap-5 mt-5">
                                <MRCTA text="Get Free Consultation" isPopup={true} classes="__animatedPing !rounded-full hover:bg-transparent hover:border-black hover:text-[#000]" />
                                <MRCTA text="Call Us Now" link="tel:855-666-6675"classes="__animatedPing !rounded-full bg-transparent !border-black !text-black hover:bg-black hover:!text-white hover:border-black" />
                            </div>
                            <Image src={ProcessSideImage} alt="illustrations" className="block relative mr-xl:right-40 mt-8 w-full" />
                        </div>
                        <div>
                            {
                                [
                                    [ProcessSideNum1,
                                        "Concept Development",
                                        "We begin by understanding your vision. We are happy to talk through as many details as you'd like and answer any questions you might have to ensure clarity and precision."],
                                    [ProcessSideNum2,
                                        "Character and Scene Design",
                                        "Our team of illustrators designs the characters and scenes according to your story. It is a step necessary to visualize the main elements and settings."],
                                    [ProcessSideNum3,
                                        "Thumbnail Sketches",
                                        "Next, we create thumbnail sketches to map out the overall layout and flow of the illustrations. These small, rough sketches provide a blueprint for the final artwork."],
                                    [ProcessSideNum4,
                                        "Final Illustration",
                                        "Once the thumbnails are approved, we start the final illustrations. This step involves adding colors, details, and finishing touches to bring your story to life."],
                                    [ProcessSideNum5,
                                        "Final Touches",
                                        "Every illustration, whether for the book cover or for inside pages, gets fully polished to make it beautiful and eye-catching for kid readers."]
                                ].map(([img, title, desc], i) => (
                                    <div key={i} className="grid grid-cols-12 gap-x-5 mb-6">
                                        <div className="col-span-1">
                                            <Image src={img} alt="numberImage" width={39} height={78} className="block mr-2xl:w-[39px] mr-2xl:h-[78px]" />
                                        </div>
                                        <div className="col-span-11">
                                            <h2 className="mr-lg:text-[30px] mr-md:text-[25px] text-[20px] leading-normal font-semibold mb-3">{title}</h2>
                                            <p className="text-base leading-normal font-normal">{desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IllustrationsProcess;