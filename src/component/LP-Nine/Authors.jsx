// Next
import Image from "next/image"
// Media
import Logos from "media/new-lp/lp1/logo-img-all.jpg"

export default function Authors() {
  return (
    <section>
      <div className="bg-[#f4ede7] mr-sm:py-[31px] py-[20px]">
        <div className="mr-container">
          <Image src={Logos} alt="logos" className="mx-auto object-cover" />
        </div>
      </div>
    </section>
  )
}
