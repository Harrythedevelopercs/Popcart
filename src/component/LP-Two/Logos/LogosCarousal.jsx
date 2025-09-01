import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from "./styles.module.css"
import Image from 'next/image'
import Logo1 from "media/book-marketing-company/logos/1.svg"
import Logo2 from "media/book-marketing-company/logos/2.svg"
import Logo3 from "media/book-marketing-company/logos/3.svg"
import Logo4 from "media/book-marketing-company/logos/4.svg"
import Logo5 from "media/book-marketing-company/logos/5.svg"
import Logo6 from "media/book-marketing-company/logos/6.svg"
import Logo7 from "media/book-marketing-company/logos/7.svg"
import Logo8 from "media/book-marketing-company/logos/8.svg"

const LogosCarousal = () => {
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
        <div className={styles.embla}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className={styles.embla__container}>
                    {
                        [
                            [Logo1],
                            [Logo2],
                            [Logo3],
                            [Logo4],
                            [Logo5],
                            [Logo6],
                            [Logo7],
                            [Logo8],
                        ].map(([img], i) => (
                            <div className={styles.embla__slide} key={i}>
                                <Image src={img} alt='logos' className='block mx-auto' priority={true} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default LogosCarousal;