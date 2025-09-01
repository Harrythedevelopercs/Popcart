import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '../EmblaSliderArrows/EmblaSliderArrows'
import styles from "./styles.module.css"
import Image from 'next/image'
import Stars from "media/book-illustrations/stars.png"
import CardBG from "media/book-illustrations/cardBG.png"
import { MRCTA } from '@/component'

const Testimonials = ({
    title,
    desc,
    data
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)
    return (
        <section id="testimonials">
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans">
                <div className="mr-container">
                    <div className='grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center'>
                        <div className='mr-lg:col-span-5 col-span-12'>
                            <div>
                                <h2 className='mr-xl:text-[40px] mr-md:text-[35px] text-[30px] leading-tight mb-3 font-semibold'>{title}</h2>
                                <p className='text-base leading-normal font-normal'>{desc}</p>
                                <div className="grid grid-cols-1 mr-sm:flex mr-sm:gap-x-5 gap-5 mt-5">
                                    <MRCTA text="Connect With Us!" isPopup={true} classes="__animatedPing !rounded-full hover:bg-transparent hover:border-black hover:text-[#000]" />
                                    <MRCTA text="Call Us Now!" link="tel:855-666-6675" classes="__animatedPing !rounded-full bg-transparent !border-black !text-black hover:bg-black hover:!text-white hover:border-black" />
                                </div>
                            </div>
                        </div>
                        <div className='mr-lg:col-span-7 col-span-12'>
                            <div className={styles.embla}>
                                <div className="overflow-hidden" ref={emblaRef}>
                                    <div className={`${styles.embla__container}`}>
                                        {data?.map(([title, aboutClient, clientImage, desc], i) => (
                                            <div key={i} className={`${styles.embla__slide}`}>
                                                <div className='relative z-10 text-white mr-xl:pt-[50px] mr-xl:py-0 py-16 pt-[30px] px-[25px]'>
                                                    <Image src={CardBG} alt='black' className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover rounded-3xl" priority={true} />
                                                    <div className='flex items-center justify-between pb-4'>
                                                        <div>
                                                            <Image src={Stars} alt='stars' width={100} height={100} className='block mb-2' />
                                                            <h4 className='mr-md:text-[25px] text-[20px] mr-xl:min-h-0 mr-lg:min-h-[50px] min-h-0 leading-normal font-bold'>{title}</h4>
                                                            <span className='block min-h-[50px] text-[#B2B2B2] mr-md:text-base text-sm font-normal'>{aboutClient}</span>
                                                        </div>
                                                        <div>
                                                            <Image src={clientImage} alt='client' width={60} height={50} className='block mx-auto' />
                                                        </div>
                                                    </div>
                                                    <p className='mr-md:text-[20px] mr-2xl:min-h-[200px] mr-lg:min-h-[200px] min-h-[100px] text-base leading-normal font-medium mt-4'>{desc}</p>
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
                </div>
            </div>
        </section>
    )
}
export default Testimonials;