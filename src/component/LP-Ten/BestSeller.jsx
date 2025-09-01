// Next
import Image from "next/image"
// Components
import { CTA } from "./index"
// Media
import Book from "media/new-lp/lp2/cta-book.png"
import Mail from "media/new-lp/lp2/mail.png"

export default function BestSeller() {
  return (
    <section>
      <div className="bg-[linear-gradient(to_right,_rgba(84,127,191,1)_0%,_rgba(83,188,226,1)_100%)] mr-xl:pb-0 mr-xl:pt-[10px] mr-md:py-[60px] py-[40px] relative z-10">
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 items-center gap-x-10 gap-y-5">
              <Image src={Book} alt="book-Image" className="mx-auto" />
            <div className="text-white max-w-[700px]">
              <p className="mr-sm:text-[30px] text-[20px] leading-tight font-normal">
                We'll help you write the book that could be the next best
                seller.
              </p>
              <h2 className="mr-lg:text-[45px] mr-md:text-[40px] text-[30px] leading-tight font-bold my-5">
                Get your best seller at  <span className="text-[#fff18f] mr-lg:text-[50px] mr-md:text-[45px] text-[35px]">
                  85% Off
                </span>
              </h2>
              <div className="flex items-start gap-x-4 mb-5">
                <Image src={Mail} alt="mail" className="shrink-0"/>
                <div>
                  <span className="block text-base leading-tight font-normal">DISCUSS YOUR IDEAS</span>
                  <a href="mailto:info@broadwaypublishers.com" className="text-base leading-tight font-medium">info@broadwaypublishers.com</a>
                </div>
              </div>
              <CTA
                text="Activate Coupon Now"
                css="bg-black text-white !border-black py-[10px] text-[18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
