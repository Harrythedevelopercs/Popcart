// Next
import Image from "next/image"
// Media
import Logo1 from "media/lp-seven/logos/1.png"
import Logo2 from "media/lp-seven/logos/2.png"
import Logo3 from "media/lp-seven/logos/3.png"
import Logo4 from "media/lp-seven/logos/4.png"
import Logo5 from "media/lp-seven/logos/5.png"
// Components
import { AutoScroll } from "./index"
const BrandsLogos = () => {
  return (
    <section>
      <div className="py-5 bg-[#8f181b]">
        <div className="mr-container">
          <AutoScroll emblaWrapper="justify-between">
            {[Logo1, Logo2, Logo3, Logo4, Logo5].map((e, i) => (
              <div key={i} className="grow-0 shrink-0 basis-auto px-5">
                <Image
                  src={e}
                  alt={`logos${++i}`}
                  priority
                  className="mx-auto"
                />
              </div>
            ))}
          </AutoScroll>
        </div>
      </div>
    </section>
  )
}

export default BrandsLogos
