import { useCallback, useEffect, useState } from "react"
import styles from "./styles.module.css"
export const usePrevNextButtons = (emblaApi, onButtonClick) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}
export const PrevButton = (props) => {
    const { children, ...restProps } = props

    return (
        <button
            className={`${styles.embla__button} ${styles.embla__button__prev}`}
            type="button"
            {...restProps}
        >
            <svg className={`${styles.embla__button__svg} rotate-180`} xmlns="http://www.w3.org/2000/svg" width="30.657" height="16.382" viewBox="0 0 30.657 16.382">
                <g id="Group_54205" data-name="Group 54205" transform="translate(-1359.427 -839.184)">
                    <path id="Path_126740" data-name="Path 126740" d="M2434.417,3833.565l-1.414-1.414,6.777-6.777L2433,3818.6l1.414-1.414,8.191,8.191Z" transform="translate(-1052.524 -2978)" />
                    <path id="Path_126741" data-name="Path 126741" d="M2399.964,3840.555h-29.242v-2h29.242Z" transform="translate(-1011.295 -2992.181)" />
                </g>
            </svg>
            {children}
        </button>
    )
}
export const NextButton = (props) => {
    const { children, ...restProps } = props

    return (
        <button
            className={`${styles.embla__button} ${styles.embla__button__next}`}
            type="button"
            {...restProps}
        >
            <svg className={styles.embla__button__svg} xmlns="http://www.w3.org/2000/svg" width="30.657" height="16.382" viewBox="0 0 30.657 16.382">
                <g id="Group_54205" data-name="Group 54205" transform="translate(-1359.427 -839.184)">
                    <path id="Path_126740" data-name="Path 126740" d="M2434.417,3833.565l-1.414-1.414,6.777-6.777L2433,3818.6l1.414-1.414,8.191,8.191Z" transform="translate(-1052.524 -2978)" />
                    <path id="Path_126741" data-name="Path 126741" d="M2399.964,3840.555h-29.242v-2h29.242Z" transform="translate(-1011.295 -2992.181)" />
                </g>
            </svg>
            {children}
        </button>
    )
}