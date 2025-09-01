// Next
import Image from "next/image"
// Components
import { CTA } from "./index"
// Media
import BookImage from "media/lp-seven/book-public-img.webp"
import Leaf from "media/lp-seven/book-public-bfr.png"
const MadeEasy = () => {
  return (
    <section>
      <div className="bg-[#8f181b] text-white mr-md:py-[60px] py-[50px] mt-[50px]">
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 gap-y-10 gap-x-5">
            <div className="max-w-[580px]">
              <h2 className="mr-lg:text-[37px] mr-md:text-[30px] text-[27px] leading-tight font-bold mb-[15px]">
                Book Publishing Made Easy
              </h2>
              {[
                "Self-publishing a book is much more than uploading a Word file on platforms. eBook publishing is a complex process that requires a certain level of expertise. Teaming up with Broadway Publishers service means you work with authors and eBook publishers who know how to effectively utilize these platforms, publish a book, and transform your eBook into an overnight success.",

                "We provide consultation to authors and self-publishing companies on how to effectively publish their books on Amazon Kindle, Barnes & Noble, Lulu, Apple books and other popular platforms. Our experts not only make the eBook publishing process extremely easy – they help you publish a book, and increase your book’s visibility on these platforms.",

                "Discover the comprehensive services available at Broadway Publishers, designed to bring your vision to life. Our expertise extends to editing, audiobook publishing, design, self-publishing through Kindle Direct Publishing (KDP) on Amazon, and distribution services. We excel in eBook publishing and offer excellent children's book publishing options. Our extensive distribution network and dedicated marketing support ensure your book receives the exposure it deserves. By utilizing our Amazon book publishing services, including Kindle book publishing, you can enjoy numerous advantages.",
              ].map((e, i) => (
                <p
                  key={i}
                  className="mr-xl:text-[17px] mr-md:text-[16px] text-[14px] leading-normal font-normal pb-3 last:pb-0"
                >
                  {e}
                </p>
              ))}
              <div className="flex items-center gap-x-5 mt-5">
                <CTA
                   handle="parent.LC_API.open_chat_window();return false;"
                  css="bg-white !text-black hover:bg-transparent hover:border-white hover:!text-white"
                />
                <CTA
                  text="Call Now"
                  link="tel:8556666675"
                  variant="secondary"
                  css="text-white border-white hover:bg-white group"
                  svgClasses="border border-white rounded-full group-hover:border-black"
                />
              </div>
            </div>
            <div className="relative z-10">
              <Image src={BookImage} alt="book" className="mx-auto" />
              <Image
                src={Leaf}
                alt="leaf"
                className="mr-lg:block hidden absolute inset-[-50px_0_0_0] -z-10 w-[450px] h-[720px] brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MadeEasy
