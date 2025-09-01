// Next
import Image from "next/image"
// media
import Logo1 from "media/new-lp/lp1/btm-logo1.png"
import Logo2 from "media/new-lp/lp1/btm-logo2.png"
import Logo3 from "media/new-lp/lp1/btm-logo3.png"
import Logo4 from "media/new-lp/lp1/btm-logo4.png"
import Logo5 from "media/new-lp/lp1/btm-logo5.png"
import Logo6 from "media/new-lp/lp1/btm-logo6.png"
export default function Brands() {
  return (
    <section>
      <div className="bg-[#204889] py-[40px]">
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-6 mr-sm:grid-cols-3 grid-cols-2 gap-y-8 items-center">
            {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6].map((e, i) => (
              <Image key={i} src={e} alt="brands" className="mx-auto" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
