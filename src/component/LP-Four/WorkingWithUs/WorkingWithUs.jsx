import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from "./styles.module.css"
import Image from 'next/image'
import Partner1 from 'media/lp-four/partners/1.svg'
import Partner2 from 'media/lp-four/partners/2.svg'
import Partner3 from 'media/lp-four/partners/3.svg'
import Partner4 from 'media/lp-four/partners/4.svg'
import Partner5 from 'media/lp-four/partners/5.svg'
import Partner6 from 'media/lp-four/partners/6.svg'
import Partner7 from 'media/lp-four/partners/7.svg'
import Partner8 from 'media/lp-four/partners/8.svg'
import Partner9 from 'media/lp-four/partners/9.svg'
import Partner10 from 'media/lp-four/partners/10.svg'
import Partner11 from 'media/lp-four/partners/11.svg'
import Partner12 from 'media/lp-four/partners/12.svg'
import { MRCTA } from '@/component'
const WorkingWithUs = () => {
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
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-2xl:w-[65%] mr-xl:w-[75%] mr-lg:w-[90%] w-full mx-auto">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-3">Get Your Book Featured On Leading Publications!</h2>
                        <p className="mr-md:text-base text-sm font-normal leading-normal">We can put your book in the spotlight across top publications! Specializing in strategic placement and targeted publicity, we drive author success with proven results.</p>
                    </div>
                </div>
                <div className={styles.embla}>
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className={styles.embla__container}>
                            {
                                [Partner1, Partner2, Partner3, Partner4, Partner5, Partner6, Partner7, Partner8, Partner9, Partner10, Partner11, Partner12].map((e, i) => (
                                    <div className={styles.embla__slide} key={i}>
                                        <Image src={e} alt='logos' className='block mx-auto' priority={true} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="grid grid-cols-1 mr-sm:flex justify-center mr-sm:gap-x-5 gap-5 mt-12">
                        <MRCTA text="Let's Chat!" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing hover:bg-transparent hover:border-black hover:!text-black" />
                        <MRCTA text="Call Us Now!" link='tel:8556666675' classes="__animatedPing bg-white !border-black !text-black hover:bg-black hover:!text-white hover:border-black" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WorkingWithUs;