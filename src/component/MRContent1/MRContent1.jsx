import { MRCTA } from "@/component"
import Image from "next/image"

const MRContent1 = ({
  subTitle,
  title,
  desc,
  img1,
  img2,
  listTitle,
  listTitleClasses = " ",
  listClasses = "mr-xs:grid-cols-1 mr-sm:grid-cols-2",
  classes = " ",
  list,
  theme = "light",
  cta = true,
  textTheme = "text-[#000000]",
  direction = " ",
  ctaText,
  isPopup = "",
}) => {
  return (
    <section>
      <div
        className={` ${classes} py-[30px] mr-lg:py-[70px] bg-cover bg-center`}
      >
        <div className="mr-container">
          <div
            className={`${img1
              ? "flex gap-3 mr-lg:gap-5 items-center !flex-wrap mr-lg:!flex-nowrap"
              : ""
              } ${direction}`}
          >
            <div className={`${img1 ? "basis-full mr-lg:basis-1/2" : ""}`}>
              <div
                className={`${img2
                  ? "grid grid-cols-1 mr-lg:grid-cols-2 gap-5 items-center"
                  : ""
                  }`}
              >
                <div>
                  {subTitle && (
                    <span className="text-[18px] mr-xl:text-[25px] block leading-tight font-semibold font-sans text-[#3EA99F] mb-2">
                      {subTitle}
                    </span>
                  )}
                  {title && (
                    <h2
                      className={`text-[20px] mr-md:text-[25px] mr-xl:text-[35px] mr-2xl:text-[40px] block leading-tight font-bold font-sans ${textTheme} mb-[10px] mr-xl:mb-[16px]`}
                      dangerouslySetInnerHTML={{ __html: title }}
                    />
                  )}
                  {desc && (
                    <p
                      className={`text-[14px] leading-[20px] mr-xl:text-[16px] block mr-xl:leading-[26px] font-normal font-sans ${textTheme}`}
                      dangerouslySetInnerHTML={{ __html: desc }}
                    />
                  )}
                  {img1 && listTitle && (
                    <h3
                      className={`text-[16px] mr-xl:text-[20px] block leading-tight font-semibold font-sans pr-10 w-max p-3 mt-[10px] mr-xl:mt-[16px] ${textTheme == "text-[#000000]"
                        ? "bg-primary-100 text-white"
                        : "bg-white text-black"
                        } rounded-r-[50px] ${listTitleClasses}`}
                      dangerouslySetInnerHTML={{ __html: listTitle }}
                    />
                  )}
                  {img1 && list && (
                    <ul
                      className={`mt-3 grid gap-2 mr-xl:gap-3 ${listClasses} list-image-[url(../../public/listIcon.webp)] list-inside`}
                    >
                      {list?.map((e, i) => (
                        <li
                          key={i}
                          className={`text-[12px] leading-[16px] mr-xl:text-[14px] mr-xl:leading-[26px] font-semibold font-sans ${textTheme}`}
                          dangerouslySetInnerHTML={{ __html: e }}
                        />
                      ))}
                    </ul>
                  )}
                  {img1 && cta && cta && (
                    <div className="grid grid-cols-1 mr-sm:flex gap-3 mt-[16px]">
                      {theme == "light" ? (
                        <>
                          {isPopup ? (
                            <MRCTA
                              text="Connect with Us!"
                              classes="hover:bg-secondary-100 rounded-sm"
                              isPopup={true}
                            />
                          ) : (
                            <MRCTA
                              text="Connect with Us!"
                              classes="hover:bg-secondary-100 rounded-sm"
                              link="javascript:;"
                              handle="parent.LC_API.open_chat_window();return false;"
                            />
                          )}
                          <MRCTA
                            text="Call us NOW!"
                            link="tel:8556666675"
                            bg="bg-transparent"
                            color="text-primary-100"
                            border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white rounded-sm"
                          />
                        </>
                      ) : (
                        <>
                          <MRCTA
                            text="Connect with Us!"
                            classes="hover:bg-white hover:text-black rounded-sm"
                            link="javascript:;"
                            handle="parent.LC_API.open_chat_window();return false;"
                          />
                          <MRCTA
                            text="Call us NOW!"
                            link="tel:8556666675"
                            bg="bg-transparent"
                            color="!text-white"
                            border="border-white hover:!bg-primary-100 hover:border-transparent rounded-sm"
                          />
                        </>
                      )}
                    </div>
                  )}
                  {ctaText && img1 && (
                    <MRCTA
                      text={ctaText}
                      classes="hover:bg-white hover:!text-black rounded-sm mt-[16px]"
                      link="javascript:;"
                      handle="parent.LC_API.open_chat_window();return false;"
                    />
                  )}
                </div>
                <div>
                  {img2 && (
                    <Image
                      src={img2}
                      alt="img"
                      width={900}
                      height={100}
                      className="!w-auto mx-auto"
                      priority
                    />
                  )}
                </div>
              </div>
            </div>
            {img2 && listTitle && (
              <h3
                className={`text-[16px] mr-xl:text-[20px] block leading-tight font-semibold font-sans pr-10 mr-md:w-max w-full p-3 mt-[10px] mr-xl:mt-[16px] ${textTheme == "text-[#000000]"
                  ? "bg-primary-100 text-white"
                  : "bg-white text-black"
                  } rounded-r-[50px] ${listTitleClasses}`}
                dangerouslySetInnerHTML={{ __html: listTitle }}
              />
            )}
            {img2 && list && (
              <ul
                className={`mt-3 grid gap-2 mr-xl:gap-3 ${listClasses} list-image-[url(../../public/listIcon.webp)] list-inside`}
              >
                {list?.map((e, i) => (
                  <li
                    key={i}
                    className={`text-[12px] leading-[16px] mr-xl:text-[14px] mr-xl:leading-[26px] font-semibold font-sans ${textTheme}`}
                    dangerouslySetInnerHTML={{ __html: e }}
                  />
                ))}
              </ul>
            )}
            {img2 && cta && (
              <div className="grid grid-cols-1 mr-sm:flex gap-3 mt-[16px]">
                {theme == "light" ? (
                  <>
                    <MRCTA
                      text="Connect with Us!"
                      classes="hover:bg-secondary-100 rounded-sm"
                      link="javascript:;"
                      handle="parent.LC_API.open_chat_window();return false;"
                    />
                    <MRCTA
                      text="Call us NOW!"
                      link="tel:8556666675"
                      bg="bg-transparent"
                      color="text-primary-100"
                      border="border-primary-100 hover:!bg-primary-100 hover:border-transparent hover:text-white rounded-sm"
                    />
                  </>
                ) : (
                  <>
                    {isPopup ? (
                      <MRCTA
                        text="Connect with Us!"
                        classes="hover:bg-white hover:text-black rounded-sm"
                        isPopup={true}
                      />
                    ) : (
                      <MRCTA
                        text="Connect with Us!"
                        classes="hover:bg-white hover:text-black rounded-sm"
                        link="javascript:;"
                        handle="parent.LC_API.open_chat_window();return false;"
                      />
                    )}
                    <MRCTA
                      text="Call us NOW!"
                      link="tel:8556666675"
                      bg="bg-transparent"
                      color="!text-white"
                      border="border-white hover:!bg-primary-100 hover:border-transparent rounded-sm"
                    />
                  </>
                )}
              </div>
            )}
            {ctaText && img2 && (
              <MRCTA
                text={ctaText}
                classes="hover:bg-white hover:!text-black rounded-sm mt-[16px]"
                link="javascript:;"
                handle="parent.LC_API.open_chat_window();return false;"
              />
            )}
            <div className={`${img1 ? "basis-full mr-lg:basis-1/2" : ""}`}>
              {img1 && (
                <Image
                  src={img1}
                  alt="img"
                  width={650}
                  height={490}
                  className="!w-auto mx-auto"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MRContent1
