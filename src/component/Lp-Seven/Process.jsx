// Next
import Image from "next/image"
// Media
import Icon1 from "media/lp-seven/icons/1.png"
import Icon2 from "media/lp-seven/icons/2.svg"
import Icon3 from "media/lp-seven/icons/3.png"
import Icon4 from "media/lp-seven/icons/4.png"
import Icon5 from "media/lp-seven/icons/5.png"
const Process = () => {
  return (
    <section>
      <div className="mr-md:pt-[50px] mr-md:py-0 py-[40px]">
        <div className="mr-container">
          <div className="text-center">
            <h2 className="mr-lg:text-[37px] mr-md:text-[30px] text-[22px] leading-tight font-bold mb-[20px]">
              Unleash The Power Of Words With Our Publishing Process
            </h2>
          </div>
          <div className="grid mr-xl:grid-cols-5 mr-lg:grid-cols-4 mr-md:grid-cols-3 mr-sm:grid-cols-2 grid-cols-1 gap-y-16 gap-x-5 mt-[100px] max-w-[1250px] mx-auto">
            {[
              [
                Icon1,
                "Devising An Outline",
                "We begin by outlining an initial draft idea, then move towards plot scheming and proposing a tentative completion process.",
              ],
              [
                Icon2,
                "Ghost Writing & Structuring",
                "After an outline approval, the ghost writing process begins with research or in close collaboration with the author.",
              ],
              [
                Icon3,
                "Editorial Review",
                "Our editing team thoroughly and continuously reviews and edits the drafts to peruse for quality and creative checks.",
              ],
              [
                Icon4,
                "Formatting & Typesetting",
                "We set out formatting and typesetting protocols as per the standards of multiple publishing houses, and then format accordingly.",
              ],
              [
                Icon5,
                "Publishing & Branding",
                "Once approved by the client, the book is published in the desired formats. Our team does a final evaluation and promotes accordingly.",
              ],
            ].map(([img, title, desc], i) => (
              <div
                key={i}
                className="relative z-10 p-[80px_15px_20px_15px] mx-auto transition-all ease-in-out duration-300 bg-white hover:bg-[#8f181b] hover:text-white rounded-[10px] text-center"
              >
                <div className="bg-[#8f181b] flex items-center justify-center mx-auto w-[110px] h-[110px] rounded-full absolute -top-12 left-0 right-0">
                  <Image
                    src={img}
                    alt="icon"
                    className="mx-auto brightness-0 invert"
                  />
                </div>
                <h5 className="text-[1.5rem] leading-tight font-medium mb-2 mr-sm:min-h-[50px]">
                  {title}
                </h5>
                <p className="text-base leading-normal font-normal mx-auto">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
