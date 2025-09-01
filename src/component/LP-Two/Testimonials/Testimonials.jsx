import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Image from 'next/image'
import ReviewIcon from "media/book-marketing-company/clientReviews.svg"
import Stars from "media/book-marketing-company/stars.png"

const Testimonials = ({
    title,
    desc,
    data
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [ClassNames()])
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section id="testimonials">
            <div className="__testimonialsAR mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[75%] mr-md:w-[90%] w-full mx-auto mr-md:mb-[40px]">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-normal font-medium mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="mr-md:text-base text-sm leading-normal font-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                    <div className={styles.embla}>
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className={`${styles.embla__container}`}>
                                {data?.map(([title, aboutClient, clientImage, desc], i) => (
                                    <div key={i} className={`${styles.embla__slide} embla__slide mr-md:py-10 py-5`}>
                                        <div className='__card bg-[#F3F3F3] mr-md:py-[50px] py-[30px] px-[25px] rounded-3xl'>
                                            <div className='flex items-center justify-between border-b border-[#C9C9C9] pb-4'>
                                                <div>
                                                    <Image src={Stars} alt='stars' className='block' />
                                                    <h4 className='mr-md:text-[25px] text-[20px] leading-normal font-bold'>{title}</h4>
                                                    <span className='block text-[#B2B2B2] mr-md:text-base text-sm font-normal'>{aboutClient}</span>
                                                </div>
                                                <div>
                                                    <Image src={clientImage} alt='client' className='block mx-auto' />
                                                </div>
                                            </div>
                                            <p className='mr-md:text-[20px] min-h-[160px] text-base leading-normal font-medium mt-4'>{desc}</p>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>
                        <div className='mr-md:mb-16 mb-10'>
                            <Image src={ReviewIcon} alt='icons' className='block mx-auto' draggable="false" />
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
export default Testimonials;