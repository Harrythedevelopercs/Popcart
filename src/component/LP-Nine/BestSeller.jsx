// Next
import Image from "next/image"
// Components
import { CTA } from "./index"
// Media
import Book from "media/new-lp/lp1/cta-book.jpg"

export default function BestSeller() {
  return (
    <section>
      <div className="bg-[#db2908] mr-xl:py-[10px] mr-md:py-[60px] py-[40px] relative z-10">
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 items-center gap-x-10 gap-y-5">
            <div className="text-white max-w-[500px]">
              <p className="mr-xl:text-[35px] mr-sm:text-[30px] text-[20px] leading-tight font-normal">
                We'll help you write the book that could be the next best
                seller.
              </p>
              <h2 className="mr-lg:text-[45px] mr-md:text-[40px] text-[30px] leading-tight font-bold my-5">
                Get your best seller at{" "}
                <span className="text-[#fdc162] [text-shadow:#000_0_1px_1px;] mr-lg:text-[50px] mr-md:text-[45px] text-[35px]">
                  85% Off
                </span>{" "}
              </h2>
              <CTA
                variant="yellow"
                text="Activate Coupon Now"
                css="rounded-none border-none py-[15px] text-[18px]"
              />
            </div>
            <Image src={Book} alt="book-Image" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
