import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from "./styles.module.css"
import Image from 'next/image'
import Logo1 from "media/book-marketing-company/new-logos/1.svg"
import Logo2 from "media/book-marketing-company/new-logos/2.svg"
import Logo3 from "media/book-marketing-company/new-logos/3.svg"
import Logo4 from "media/book-marketing-company/new-logos/4.svg"
import Logo5 from "media/book-marketing-company/new-logos/5.svg"

const LogosCarousal = () => {
    const autoScrollOptions = {
        playOnInit: true, speed: 0.5, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false
    }
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
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
                            [Logo1],
                            [Logo2],
                            [Logo3],
                            [Logo4],
                            [Logo5]
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