// Next
import Image from "next/image"
// Media
import Icon1 from "media/new-lp/lp1/box-color-srv1.png"
import Icon2 from "media/new-lp/lp1/box-color-srv2.png"
import Icon3 from "media/new-lp/lp1/box-color-srv3.png"
import Icon4 from "media/new-lp/lp1/box-color-srv4.png"
export default function Features() {
  return (
    <section>
      <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] relative z-10">
        <div className="mr-container">
          <div>
            <div className="text-center mr-md:pb-[50px] pb-[40px]">
              <h2 className="mr-lg:text-[40px] mr-md:text-[30px] mr-sm:text-[25px] text-[20px] leading-tight font-semibold">
                Our premium ghostwriting and publishing services are aimed at
                assisting you to achieve your professional writing and
                publishing goals.
              </h2>
            </div>
            <div className="grid mr-lg:grid-cols-4 mr-md:grid-cols-2 grid-cols-1 gap-y-8 gap-x-5 items-center">
              {[
                [
                  "bg-[linear-gradient(to_bottom,rgba(181,244,206,1)_0,rgba(255,255,255,1)_100%)]",
                  Icon1,
                  "text-[#256941]",
                  "Affordable",
                  "We promise the best quality delivered at an incredible price.",
                ],
                [
                  "bg-[linear-gradient(to_bottom,rgba(191,215,239,1)_0,rgba(255,255,255,1)_100%)]",
                  Icon2,
                  "text-[#5a728b]",
                  "Ownership",
                  "You remain protected with our non-disclosure agreement at all times.",
                ],
                [
                  "bg-[linear-gradient(to_bottom,rgba(190,223,235,1)_0,rgba(255,255,255,1)_100%)]",
                  Icon3,
                  "text-[#68a3b9]",
                  "Profitable",
                  "Your book your earnings. You keep all you earn from your work.",
                ],
                [
                  "bg-[linear-gradient(to_bottom,rgba(249,207,207,1)_0,rgba(255,255,255,1)_100%)]",
                  Icon4,
                  "text-[#be8b8b]",
                  "Professional Excellence",
                  "You remain protected with our confidentiality agreement at all times.",
                ],
              ].map(([bg, img,textColor, title, desc], i) => (
                <div key={i} className={`p-[23px] h-full ${bg}`}>
                  <div className="flex items-start gap-x-3">
                    <Image src={img} alt="icon" className="shrink-0" />
                    <div>
                      <h3 className={`${textColor} text-base leading-tight font-semibold mb-2`}>
                        {title}
                      </h3>
                      <p className="text-sm text-[#6f6e6e] font-normal leading-normal">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
