import { AutoPlaySlider } from ".";
import { MRCTA } from "..";

const Services = () => {
    return (
        <section id="services">
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[65%] mr-lg:w-[75%] mr-md:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-tight mb-3">Book Publishing Services We Offer</h2>
                        <p className="mr-md:text-base text-sm leading-normal font-normal">We handle all the phases including editing, design, marketing, and distribution to ensure your book reaches its full potential. Here are the book publishing services we offer:</p>
                    </div>
                    <AutoPlaySlider wrapperClasses="mr-md:mt-[50px] mt-[00px] __publishingService">
                        {
                            [
                                ["Standard Publishing", "We provide services including professional editing, precise formatting, and custom cover design. Our team ensures your manuscript adheres to industry standards and is distributed across major platforms like Amazon and Barnes & Noble, optimizing metadata, implementing SEO strategies, and managing print and digital versions for maximum reach."],
                                ["Self-Publishing", "Our self-publishing services assist authors with manuscript preparation, ISBN assignment, and copyright registration. Take advantage of our advanced analytics, automated distribution, and royalty management systems to maintain control over your work while efficiently reaching a global audience."],
                                ["E-Book Publishing", "We provide comprehensive e-book publishing services, including file conversion to popular formats, DRM protection, and metadata optimization. Our team ensures your e-book is compatible with major platforms like Kindle, Apple Books, and Kobo, maximizing its digital reach and reader engagement."],
                                ["Print-On-Demand Publishing", "We offer print-on-demand publishing with high-quality printing, automated inventory management, and global distribution. Our services include custom cover design, formatting, and smooth integration with platforms like Amazon and IngramSpark, ensuring your book is available to readers worldwide without upfront costs."],
                                ["Vanity Publishing", "We provide complete editorial support, custom book design, and marketing assistance in Vanity publishing. Our team handles ISBN registration, professional printing, and distribution through major retailers, ensuring your book is published with the highest standards and maximum exposure."],
                                ["Hybrid Publishing", "With a unique partnership approach, we offer both author autonomy and professional support in hybrid publishing. Our services include collaborative editorial guidance, multi-channel distribution, and targeted promotional campaigns. Benefit from shared expertise and resources to enhance your book's reach and impact."],
                            ].map(([title, desc], i) => (
                                <div key={i} className={`grow-0 shrink-0 basis-[85%] mr-xl:basis-[30%] mr-2xl:basis-[30%] min-w-0 pl-4 `}>
                                    <div className="__card relative mt-24 mb-5 text-center shadow-[0_0_15px_rgba(0,_0,_0,_0.2)] bg-white rounded-xl mr-md:px-[25px] px-[20px] py-[40px] inline-flex flex-col items-center justify-center">
                                        <h4 className="text-[20px] leading-tight font-medium mr-md:mt-8 mb-4" dangerouslySetInnerHTML={{ __html: title }} />
                                        <p className="text-base font-normal leading-normal">{desc}</p>
                                        <MRCTA text="Let's Talk" classes="mt-5 hover:bg-black" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" animation="__animatedPing" />
                                    </div>
                                </div>
                            ))
                        }
                    </AutoPlaySlider>
                </div>
            </div>
        </section>
    )
}
export default Services;