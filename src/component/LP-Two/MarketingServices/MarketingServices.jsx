import { MRCTA } from "@/component";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
const MarketingServices = ({services,title,desc}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [ClassNames()])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section id="services">
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans __bookMarketingServices">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-lg:w-[75%] mr-md:w-[80%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal text-black mb-3" dangerouslySetInnerHTML={{__html : title}}/>
                        <p className="text-base leading-normal font-normal" dangerouslySetInnerHTML={{__html : desc}} />
                    </div>
                    <div className={styles.embla}>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className={`${styles.embla__container}`}>
                                {services.map(([img, title, desc], i) => (
                                        <div className={`${styles.embla__slide} embla__slide`} key={i}>
                                            <div className="__card relative mr-md:mt-24 mt-14 text-center shadow-[0_0_15px_rgba(0,_0,_0,_0.2)] bg-white rounded-xl px-[25px] py-[40px] inline-flex flex-col items-center justify-center">
                                                <span className="bg-[#F3F3F3] rounded-xl flex items-center justify-center w-[85px] h-[82px] absolute -top-10">
                                                    <Image src={img} alt="icons" className="block mx-auto" />
                                                </span>
                                                <h4 className="text-[20px] leading-tight font-medium mt-8 mb-4" dangerouslySetInnerHTML={{__html : title}}/>
                                                <p className="text-base font-normal leading-normal">{desc}</p>
                                                <MRCTA text="Let's Talk" classes="mt-5 hover:bg-black" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" animation="__animatedPing" />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className={styles.embla__controls}>
                            <div className={styles.embla__buttons}>
                                <PrevButton
                                    onClick={onPrevButtonClick}
                                    disabled={prevBtnDisabled}
                                />
                                <NextButton
                                    onClick={onNextButtonClick}
                                    disabled={nextBtnDisabled}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MarketingServices;