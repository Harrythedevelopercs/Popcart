// React
import { useEffect, useRef } from "react"
// Swiper
import { register } from "swiper/element/bundle"
// Media
import Banner1 from "media/lp-four/herobanner1.png"
import Banner2 from "media/lp-four/herobanner2.png"
import Banner3 from "media/lp-four/herobanner3.png"
import Banner4 from "media/lp-four/herobanner1.png"
import Banner5 from "media/lp-four/herobanner2.png"
// Next
import Image from "next/image"

export default function Hero3dSlider() {
    const swiperElRef = useRef(null)

    useEffect(() => {
        register()
        const params = {
            grabCursor: "true",
            slidesPerView: 2,
            navigation: true,
            effect: 'coverflow',
            coverflowEffect: {
                slideShadows: false,
            },
            injectStyles: [
                `
                @media (min-width: 992px) {
                    .swiper {
                        margin-top: 100px;
                    }
                }
                .swiper {
                    padding-bottom: 105px;
                }
                .swiper-button-next {
                    top: inherit;
                    right: 40%;
                    bottom: 0;
                    color: white;
                }
                .swiper-button-prev {
                    top: inherit;
                    left: 40%;
                    bottom: 0;
                    color: white;
                }
                `
            ],
            breakpoints: {
                992: {
                    centeredSlides: "true",
                    coverflowEffect: {
                        stretch: "150",
                        depth: "150",
                        modifier: "1",
                        rotate: 0,
                    },
                },
            },
        };

        Object.assign(swiperElRef.current, params);

        swiperElRef.current.initialize();
    }, [])
    return (
        <div>
            <swiper-container init={false} ref={swiperElRef}>
                {
                    [Banner1, Banner2, Banner3, Banner4, Banner5].map((e, i) => (
                        <swiper-slide key={i}>
                            <Image src={e} alt="banner" className="h-[300px] mr-lg:h-[350px] mr-2xl:h-[400px] mr-lg:w-[85%] mr-2xl:w-[85%] mx-auto block" />
                        </swiper-slide>
                    ))
                }
            </swiper-container>
        </div>
    )
}