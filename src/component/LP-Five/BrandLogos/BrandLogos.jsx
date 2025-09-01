import Image from "next/image";
import BrandLogos1 from "media/book-marketing-company/brandLogos/1.svg"
import BrandLogos2 from "media/book-marketing-company/brandLogos/2.svg"
import BrandLogos3 from "media/book-marketing-company/brandLogos/3.svg"
import BrandLogos4 from "media/book-marketing-company/brandLogos/4.svg"
import BrandLogos5 from "media/book-marketing-company/brandLogos/5.svg"
import BrandLogos6 from "media/book-marketing-company/brandLogos/6.svg"
import BrandLogos7 from "media/book-marketing-company/brandLogos/7.svg"
import BrandLogos8 from "media/book-marketing-company/brandLogos/8.svg"
import BrandLogos9 from "media/book-marketing-company/brandLogos/9.svg"
import BrandLogos10 from "media/book-marketing-company/brandLogos/10.svg"
import BrandLogos11 from "media/book-marketing-company/brandLogos/11.svg"
import BrandLogos12 from "media/book-marketing-company/brandLogos/12.svg"
import BrandLogos13 from "media/book-marketing-company/brandLogos/13.svg"
import BrandLogos14 from "media/book-marketing-company/brandLogos/14.svg"
import BrandLogos15 from "media/book-marketing-company/brandLogos/15.svg"
import BrandLogos16 from "media/book-marketing-company/brandLogos/16.svg"
import BrandLogos17 from "media/book-marketing-company/brandLogos/17.svg"
import BrandLogos18 from "media/book-marketing-company/brandLogos/18.svg"
import BrandLogos19 from "media/book-marketing-company/brandLogos/19.svg"
import BrandLogos20 from "media/book-marketing-company/brandLogos/20.svg"
import BrandLogos21 from "media/book-marketing-company/brandLogos/21.svg"
import BrandLogos22 from "media/book-marketing-company/brandLogos/22.svg"
import { MRCTAGroup } from "@/component";
const BrandLogos = ({ title, desc }) => {
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <div className="mr-container">
                    <div className="grid mr-lg:grid-cols-12 grid-cols-1 mr-xl:gap-x-5 mr-lg:gap-x-6 gap-8 items-center">
                        <div className="mr-2xl:col-span-5 mr-lg:col-span-6 mr-sm:text-start text-justify">
                            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                            <p className="mr-md:text-base text-sm leading-normal font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                            <MRCTAGroup classes="mt-5" animation="__animatedPing" />
                        </div>
                        <div className="mr-2xl:col-span-7 mr-lg:col-span-6">
                            {
                                [
                                    [
                                        BrandLogos1,
                                        BrandLogos2,
                                        BrandLogos10,
                                        BrandLogos6
                                    ],
                                    [
                                        BrandLogos12,
                                        BrandLogos15,
                                        BrandLogos7,
                                        BrandLogos13
                                    ],
                                    [
                                        BrandLogos18,
                                        BrandLogos21,
                                        BrandLogos17,
                                        BrandLogos16
                                    ],
                                    [
                                        BrandLogos22,
                                        BrandLogos14,
                                        BrandLogos19,
                                        BrandLogos20
                                    ],
                                ].map((e, i) => (
                                    <div key={i} className={`grid relative mr-sm:grid-cols-4 grid-cols-2 items-center gap-x-5 ${i % 2 === 0 ? "mr-lg:w-[calc(100%-20px)] mr-lg:ml-auto" : "mr-lg:right-5"}`}>
                                        {
                                            e.map((logo, index) => (
                                                <div key={index} className="bg-[#F3F3F3]  mr-2xl:px-0 px-2 h-[90px] flex items-center  mb-5 rounded-lg">
                                                    <Image src={logo} alt="BrandLogos" className="block mx-auto max-w-[90%]" />
                                                </div>
                                            ))
                                        }
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
export default BrandLogos;