import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Banner from "media/book-marketing-company/bannerBG.png"
import Mockup1 from "media/book-marketing-company/bookMockups/1.png"
import Mockup2 from "media/book-marketing-company/bookMockups/2.png"
import Mockup3 from "media/book-marketing-company/bookMockups/3.png"
import Mockup4 from "media/book-marketing-company/bookMockups/4.png"
import Mockup5 from "media/book-marketing-company/bookMockups/5.png"
import Mockup6 from "media/book-marketing-company/bookMockups/6.png"
import Mockup7 from "media/book-marketing-company/bookMockups/7.png"
import Mockup8 from "media/book-marketing-company/bookMockups/8.png"
import Mockup9 from "media/book-marketing-company/bookMockups/9.png"
import Mockup10 from "media/book-marketing-company/bookMockups/10.png"
import Mockup11 from "media/book-marketing-company/bookMockups/11.png"
import Mockup12 from "media/book-marketing-company/bookMockups/12.png"
import Mockup13 from "media/book-marketing-company/bookMockups/13.png"
import Mockup14 from "media/book-marketing-company/bookMockups/14.png"
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
                <Image src={Banner} alt="mockupsBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-50 w-full h-full object-cover object-bottom" priority={true}/>
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
                                        Mockup5,
                                        Mockup6,
                                        Mockup7,
                                        Mockup8,
                                        Mockup9,
                                        Mockup10,
                                        Mockup11,
                                        Mockup12,
                                        Mockup13,
                                        Mockup14,
                                        Mockup1
                                    ].map((e, i) => (
                                        <div className={styles.embla__slide} key={i}>
                                            <Image src={e} alt='mockups' className='block mx-auto shadow-[10px_5px_5px_0px_rgba(0,0,0,0.2)]' priority={true}/>
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