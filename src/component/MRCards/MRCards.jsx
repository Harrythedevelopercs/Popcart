import { MRCTA, MRCTAGroup } from "@/component/"
import Image from "next/image"
import Checkmark from "media/imageAR/checkmark.webp"

const MRCards = ({
  subTitle,
  title,
  desc,
  classes = " ",
  gridsClasses = " ",
  cta = "",
  variant = "steps",
  data,
  theme = "light",
  isPopup = "",
}) => {
  return (
    <section className="serviceSection">
      <div className={`py-[40px] mr-lg:py-[70px] ${classes}`}>
        <div className="mr-container">
          <div className="text-center mb-5">
            {subTitle && (
              <span className="text-[20px] mr-lg:text-[30px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                {subTitle}
              </span>
            )}
            {title && (
              <h2
                className={`text-[26px] mr-md:text-[30px] mr-lg:text-[50px] block leading-tight font-black font-sans ${theme == "light" ? "text-[#000000]" : "text-white"
                  } mb-2`}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}
            {desc && (
              <p
                className={`text-[14px] mr-lg:text-[16px] mr-2xl:w-[75%] mr-lg:w-[85%] mx-auto block leading-[26px] font-normal font-sans ${theme == "light" ? "text-[#000000]" : "text-white"
                  }`}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </div>
          {variant == "steps" && (
            <div className={`grid ${gridsClasses} gap-x-4 gap-y-5`}>
              {data &&
                data?.map(({ content, cta, classes, stepText, indexing }) =>
                  content?.map(
                    (
                      {
                        title,
                        desc,
                        border,
                        padding,
                        image,
                        minHeight,
                        textColor,
                      },
                      i
                    ) => (
                      <div className={`${classes} cursor-pointer`} key={i}>
                        {stepText && indexing && (
                          <span
                            className={`mr-lg:text-[20px] text-[20px] block leading-tight font-semibold font-sans text-[#3EA99F] group-hover:text-white my-[16px]`}
                          >
                            {stepText} 0{i + 1}
                          </span>
                        )}
                        {!stepText && indexing && (
                          <div
                            className={`absolute flex items-center justify-center font-sans bg-[#3EA99F] w-[80px] rounded-[50%] h-[80px] text-white border-4 border-[#E2E2E2] mr-lg:text-[25px] text-[20px] font-semibold -top-[40px] bottom-0 left-5 right-0`}
                          >
                            0{i + 1}
                          </div>
                        )}
                        <div>
                          {image && <Image src={image} alt="icon" priority />}
                          {title && (
                            <h3
                              className={`text-[25px] block leading-tight ${textColor} ${border} ${padding} font-semibold font-sans mt-[15px] mb-[10px]`}
                            >
                              {title}
                            </h3>
                          )}
                          {desc && (
                            <p
                              className={`text-[14px] ${minHeight} mr-2xl:text-[15px] block leading-normal font-normal font-sans customTxt`}
                              dangerouslySetInnerHTML={{ __html: desc }}
                            />
                          )}
                          {cta && (
                            <MRCTA
                              text="Connect with Us!"
                              classes="hover:bg-secondary-100 rounded-sm mx-auto mt-[16px]"
                              link="javascript:;"
                              handle="parent.LC_API.open_chat_window();return false;"
                            />
                          )}
                        </div>
                      </div>
                    )
                  )
                )}
            </div>
          )}
          {variant == "icons" && (
            <div className={`grid ${gridsClasses} gap-x-4 gap-y-5`}>
              {data &&
                data?.map(({ content, classes }) =>
                  content?.map(({ title, desc, icon }, i) => (
                    <div className={`${classes} cursor-pointer`} key={i}>
                      <div>
                        {title && desc && (
                          <h3
                            className={`text-[20px] block text-[#3EA99F] leading-tight font-semibold font-sans mt-[15px] mb-[10px]`}
                            dangerouslySetInnerHTML={{ __html: `${title}` }}
                          />
                        )}
                        {icon ? (
                          <Image
                            src={icon}
                            alt="checkmark"
                            className="block mx-auto my-[16px] group-hover:brightness-0 group-hover:invert"
                          />
                        ) : (
                          <Image
                            src={Checkmark}
                            alt="checkmark"
                            className="block mx-auto my-[16px]"
                          />
                        )}
                        {desc && title && (
                          <p
                            className={`text-[16px] mr-2xl:text-[16px] block leading-normal font-normal font-sans`}
                            dangerouslySetInnerHTML={{ __html: `${desc}` }}
                          />
                        )}
                        {!desc && title && (
                          <h3
                            className={`text-[20px] block leading-tight font-semibold font-sans mt-[15px] mb-[10px]`}
                            dangerouslySetInnerHTML={{ __html: `${title}` }}
                          />
                        )}
                      </div>
                    </div>
                  ))
                )}
            </div>
          )}
          {cta && (
            <MRCTAGroup isPopup={isPopup} classes="justify-center mt-10" />
          )}
        </div>
      </div>
    </section>
  )
}

export default MRCards
