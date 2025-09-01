import useEmblaCarousel from 'embla-carousel-react'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Image from 'next/image'
import Portfolio1 from "media/book-illustrations/portfolio/1.png"
import Portfolio2 from "media/book-illustrations/portfolio/2.png"
import Portfolio3 from "media/book-illustrations/portfolio/3.png"
import Portfolio4 from "media/book-illustrations/portfolio/4.png"
import Portfolio5 from "media/book-illustrations/portfolio/5.png"
import Portfolio6 from "media/book-illustrations/portfolio/6.png"
const PortfolioCarousal = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" })
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section>
            <div className={styles.embla}>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className={`${styles.embla__container}`}>
                        {[
                            Portfolio1,
                            Portfolio2,
                            Portfolio3,
                            Portfolio4,
                            Portfolio5,
                            Portfolio6,
                        ].map((e, i) => (
                            <div className={`${styles.embla__slide}`} key={i}>
                                <Image src={e} alt='portfolios' className='block bg-primary-100 rounded-xl' priority={true} />
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
        </section>
    )
}
export default PortfolioCarousal;