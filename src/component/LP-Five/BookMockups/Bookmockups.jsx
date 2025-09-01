import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Banner from "media/book-marketing-company/bannerBG.png"
import Mockup1 from "media/book-marketing-company/bookMockups/20.png"
import Mockup2 from "media/book-marketing-company/bookMockups/21.png"
import Mockup3 from "media/book-marketing-company/bookMockups/22.png"
import Mockup4 from "media/book-marketing-company/bookMockups/23.png"
import Image from 'next/image'
const Bookmockups = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' })
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section id="caseStudies">
            <div className="relative mr-md:py-[10px] py-[40px] font-sans">
                <Image src={Banner} alt="mockupsBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-50 w-full h-full object-auto" priority={true}/>
                <div className="mr-container">
                    <div className={styles.embla}>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className={styles.embla__container}>
                                {
                                    [
                                        Mockup1,
                                        Mockup2,
                                        Mockup3,
                                        Mockup4,
                                        Mockup1,
                                        Mockup2,
                                        Mockup3,
                                        Mockup4,
                                        Mockup1,
                                        Mockup2,
                                        Mockup3,
                                        Mockup4
                                    ].map((e, i) => (
                                        <div className={styles.embla__slide} key={i}>
                                            <Image src={e} alt='mockups' className='mr-2xl:max-w-[250px] max-w-[200px] block mx-auto' priority={true}/>
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
export default Bookmockups;