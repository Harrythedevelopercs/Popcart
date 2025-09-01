// Embla

import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"

export default function AutoScrollSlider({
  wrapperClasses = "",
  direction = "forward",
  emblaWrapper = "",
  children,
}) {
  const plugins = [
    AutoScroll({
      playOnInit: true,
      speed: 0.5,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
      direction,
    }),
  ]
  const [emblaRef] = useEmblaCarousel(
    { align: "start", dragFree: true, loop: true },
    plugins
  )
  return (
    <div className={`overflow-hidden ${wrapperClasses}`} ref={emblaRef}>
      <div className={`flex -mr-5 items-center ${emblaWrapper}`}>
        {children}
      </div>
    </div>
  )
}
