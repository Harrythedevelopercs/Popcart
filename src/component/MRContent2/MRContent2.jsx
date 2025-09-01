import Image from "next/image"
import Woman from "media/imageAR/woman-writing-.webp"
import { MRCTAGroup } from ".."
const MRContent2 = ({
  subTitle,
  title,
  desc,
  data,
  direction,
  sideImage = Woman,
  isPopup = "",
}) => {
  return (
    <section>
      <div className="relative py-[40px] mr-lg:py-[70px]">
        <div className="mr-container">
          <div className="text-center mr-lg:mb-[20px]">
            {subTitle && (
              <span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                {subTitle}
              </span>
            )}
            {title && (
              <h2
                className="text-[26px] mr-md:text-[30px] mr-lg:text-[40px] block leading-tight font-bold font-sans text-[#000000] mb-2"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {desc && (
              <p
                className="text-[14px] mr-lg:text-[16px] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans text-[#000000]"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </div>
          <div className={`mr-lg:flex items-center ${direction} gap-x-10`}>
            <div className="basis-[45%] py-4">
              {data &&
                data?.map((e, i) => (
                  <div key={i}>
                    <h3 className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#000000] my-2">
                      {e.title}
                    </h3>
                    <p className="text-[14px] block leading-[24px] font-normal font-sans text-[#000000]">
                      {e.desc}
                    </p>
                  </div>
                ))}
              <MRCTAGroup isPopup={isPopup} classes="mt-5" />
            </div>
            <div className="basis-[50%]">
              <div className="mr-lg:mt-0 mt-4 mr-md:block hidden">
                <Image
                  src={sideImage}
                  alt="Icons"
                  className="block mx-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MRContent2
