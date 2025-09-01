"use client"
// Embla
import useEmblaCarousel from "embla-carousel-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
// Components
import { PrevButton, NextButton, usePrevNextButtons } from "./SliderArrows"

export default function AutoPlaySlider({ wrapperClasses = " ", options, arrows = true, arrowsCss = " ", EmblaBtn = "", flexClasses = "", children }) {
    const plugins = [
        ClassNames(),
        Autoplay({ delay: 3000, stopOnFocusIn: false, stopOnInteraction: false })
    ]
    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, loop: true, ...options }, plugins)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <>
            <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
                <div className={`flex ${flexClasses} gap-3 [margin-left:calc(1rem_*_-1)] my-3`}>
                    {children}
                </div>
            </div>
            {arrows && <div className={`flex justify-between w-4/12 mr-sm:w-2/12 mx-auto mt-5 absolute bottom-[-55px] mr-2xl:bottom-[-60px] left-0 right-0 ${EmblaBtn}`}>
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} css={arrowsCss} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} css={arrowsCss} />
            </div>}
        </>
    )
}