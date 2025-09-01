import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from "./styles.module.css"
import Image from 'next/image'
import Logo1 from "media/newBrandv2/logo1.png"
import Logo2 from "media/newBrandv2/logo2.png"
import Logo3 from "media/newBrandv2/logo3.png"
import Logo4 from "media/newBrandv2/logo4.png"
import Logo5 from "media/newBrandv2/logo5.png"

const BrandCarousal = () => {
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
                            [Logo1],
                            [Logo2],
                            [Logo3],
                            [Logo4],
                            [Logo5],
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
export default BrandCarousal;