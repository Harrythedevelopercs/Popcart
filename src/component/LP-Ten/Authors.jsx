// Next
import Image from "next/image"
// Media
import Icon1 from "media/new-lp/lp2/icon1.png"
import Icon2 from "media/new-lp/lp2/icon2.png"
import Icon3 from "media/new-lp/lp2/icon3.png"

export default function Authors() {
  return (
    <section>
      <div className="relative z-10 grid mr-md:grid-cols-3 grid-cols-1 items-center">
        {[
          ["bg-[#547ebf]", Icon2, "Affordable <br/> Prices"],
          ["bg-[#539ed1]", Icon1, "Quickest <br/> Turnaround Time"],
          ["bg-[#53bce1]", Icon3, "24/7 Professional <br/> Support"],
        ].map(([bgColor, img, text], i) => (
          <div
            key={i}
            className={`flex items-center h-full justify-center ${bgColor} py-[35px] text-white`}
          >
            <div className="flex gap-x-4 items-center max-w-[250px] mx-auto">
              <Image src={img} alt="icon" className="shrink-0" />
              <span className="block text-[17px] leading-tight font-medium" dangerouslySetInnerHTML={{__html : text}} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
