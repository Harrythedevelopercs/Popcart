import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Image from 'next/image'
import Portfolio1 from "media/book-marketing-company/portfolio/1.png"
import Portfolio2 from "media/book-marketing-company/portfolio/2.png"
import Portfolio3 from "media/book-marketing-company/portfolio/3.png"
import Portfolio4 from "media/book-marketing-company/portfolio/4.png"
import Portfolio5 from "media/book-marketing-company/portfolio/5.png"
import Portfolio6 from "media/book-marketing-company/portfolio/6.png"
import Portfolio7 from "media/book-marketing-company/portfolio/7.png"
import Portfolio8 from "media/book-marketing-company/portfolio/8.png"
import Portfolio9 from "media/book-marketing-company/portfolio/9.png"
import Portfolio10 from "media/book-marketing-company/portfolio/10.png"
const Portfolio = ({subtitle,title ,desc}) => {
    const autoScrollOptions = {
        playOnInit: true, speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false
    }
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoScroll(autoScrollOptions)
    ])
    useEffect(() => {
        if (!emblaApi) return
        const autoScroll = emblaApi.plugins().autoScroll
        if (autoScroll) {
            autoScroll.play()
        }
    }, [emblaApi])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section id='portfolio'>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[75%] mr-md:w-[90%] w-full mx-auto">
                        <span className='mr-md:text-base text-sm font-normal leading-normal'>{subtitle}</span>
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-3" dangerouslySetInnerHTML={{__html : title}}/>
                        <p className="mr-md:text-base text-sm font-normal leading-normal" dangerouslySetInnerHTML={{__html : desc}} />
                    </div>
                </div>
                    <div className={styles.embla}>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className={styles.embla__container}>
                                {
                                    [
                                        [Portfolio1],
                                        [Portfolio2],
                                        [Portfolio3],
                                        [Portfolio4],
                                        [Portfolio5],
                                        [Portfolio6],
                                        [Portfolio7],
                                        [Portfolio8],
                                        [Portfolio9],
                                        [Portfolio10],
                                    ].map(([img], i) => (
                                        <div className={styles.embla__slide} key={i}>
                                            <Image src={img} alt='portfolios' width={317} height={474} className='block mx-auto' />
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
        </section>
    )
}
export default Portfolio;