import React, { useEffect } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import styles from "./Brand.module.css"
// Images
import Book1 from "media/assets/audiobook/logo-1.png"
import Book2 from "media/assets/audiobook/logo-2.png"
import Book3 from "media/assets/audiobook/logo-3.png"
import Book4 from "media/assets/audiobook/logo-4.png"
import Book5 from "media/assets/audiobook/logo-5.png"
import Book6 from "media/assets/audiobook/logo-6.png"
import Book7 from "media/assets/audiobook/logo-7.png"
import Book8 from "media/assets/audiobook/logo-8.png"
import Book9 from "media/assets/audiobook/logo-9.png"
import Book10 from "media/assets/audiobook/logo-10.png"
import Book11 from "media/assets/audiobook/logo-11.png"
import Book12 from "media/assets/audiobook/logo-12.png"
import Book13 from "media/assets/audiobook/logo-13.png"
import Book14 from "media/assets/audiobook/logo-14.png"
import Book15 from "media/assets/audiobook/logo-15.png"

const BrandLogos = () => {
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
        <section className={styles.embla}>
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 overflow-hidden" ref={emblaRef}>
                        <div className={styles.embla__container}>
                            {
                                [
                                    [Book1],
                                    [Book2],
                                    [Book3],
                                    [Book4],
                                    [Book5],
                                    [Book6],
                                    [Book7],
                                    [Book8],
                                    [Book9],
                                    [Book10],
                                    [Book11],
                                    [Book12],
                                    [Book13],
                                    [Book14],
                                    [Book15],
                                ].map(([img], i) => (
                                    <div className={styles.embla__slide} key={i}>
                                        <Image src={img} alt='logos' className='block mx-auto' property />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BrandLogos
