// Next
import Image from "next/image"
// Media
import Banner from "media/new-lp/lp2/features-img.jpg"
export default function Features() {
  return (
    <section>
      <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] relative z-10">
        <div className="mr-container">
          <div>
            <div className="text-center mr-md:pb-[50px] pb-[40px] max-w-[1250px] mx-auto">
              <h2 className="mr-lg:text-[40px] mr-md:text-[30px] mr-sm:text-[25px] text-[20px] leading-tight font-semibold">
                Our premium ghostwriting and publishing services are aimed at
                assisting you to achieve your professional writing and
                publishing goals.
              </h2>
            </div>
            <Image
              src={Banner}
              alt="banner"
              className="mx-auto"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
