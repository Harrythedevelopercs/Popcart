import { useEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import Image from "next/image"
import Logo1 from "media/lp-six/logos/1.png"
import Logo2 from "media/lp-six/logos/2.png"
import Logo3 from "media/lp-six/logos/3.png"
import Logo4 from "media/lp-six/logos/4.png"
import Logo5 from "media/lp-six/logos/5.png"
import Logo6 from "media/lp-six/logos/6.png"
const Awards = () => {
  const autoScrollOptions = {
    playOnInit: true,
    speed: 0.5,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
    stopOnFocusIn: false,
  }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll(autoScrollOptions),
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
      <div className="max-w-full my-[40px] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="[backface-visibility:hidden] flex items-center touch-pan-y touch-pinch-zoom ml-[calc(2rem_*_-1)]">
            {[
              [Logo1],
              [Logo2],
              [Logo3],
              [Logo4],
              [Logo5],
              [Logo6],
              [Logo1],
              [Logo2],
              [Logo3],
              [Logo4],
            ].map(([img], i) => (
              <div className="shrink-0 grow-0 basis-auto min-w-0 pl-[2rem]" key={i}>
                <Image
                  src={img}
                  alt="awards"
                  className="block mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards
