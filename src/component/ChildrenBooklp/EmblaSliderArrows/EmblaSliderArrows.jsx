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
            <svg className={`${styles.embla__button__svg}`} xmlns="http://www.w3.org/2000/svg" id="Group_54992" data-name="Group 54992" width="58.1" height="31.046" viewBox="0 0 58.1 31.046">
                <path id="Path_126740" data-name="Path 126740" d="M2448.527,3848.23l2.68-2.68-12.843-12.843,12.843-12.843-2.68-2.68L2433,3832.706Z" transform="translate(-2433.003 -3817.183)" fill="#fff" />
                <path id="Path_126741" data-name="Path 126741" d="M2370.722,3842.346h55.419v-3.791h-55.419Z" transform="translate(-2368.041 -3824.927)" fill="#fff" />
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
            <svg className={`${styles.embla__button__svg} rotate-180`} xmlns="http://www.w3.org/2000/svg" id="Group_54992" data-name="Group 54992" width="58.1" height="31.046" viewBox="0 0 58.1 31.046">
                <path id="Path_126740" data-name="Path 126740" d="M2448.527,3848.23l2.68-2.68-12.843-12.843,12.843-12.843-2.68-2.68L2433,3832.706Z" transform="translate(-2433.003 -3817.183)" fill="#fff" />
                <path id="Path_126741" data-name="Path 126741" d="M2370.722,3842.346h55.419v-3.791h-55.419Z" transform="translate(-2368.041 -3824.927)" fill="#fff" />
            </svg>
            {children}
        </button>
    )
}