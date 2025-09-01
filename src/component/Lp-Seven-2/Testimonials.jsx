// Next
import Image from "next/image"
// Media
import ReviewBrands from "media/lp-seven/review-img.png"
// Components
import { AutoScroll } from "./index"
const Testimonials = () => {
  return (
    <section>
      <div className="mr-md:py-[80px] py-[50px]">
        <div className="mr-container">
          <div className="text-center">
            <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[22px] leading-tight font-bold mb-[15px]">
              Client Testimonials
            </h2>
            <p className="text-[17px] leading-normal font-normal">
              Our clients trust us with their dreams and we turn them into a
              solid reality. Hear it from our clients:
            </p>
            <Image
              src={ReviewBrands}
              alt="review_brands"
              className="mx-auto mt-[10px]"
            />
          </div>
          <AutoScroll emblaWrapper="mr-lg:justify-center">
            {[
              [
                "I asked Broadway Publishers to help me improve my book. They did a great job. They checked for mistakes, improved the content, and gave me advice on the story and characters. My experience with them was really good.",
                "Robert John",
              ],
              [
                "As a newbie to self publishing, I found Broadway Publishers pretty friendly. They walked me through the process, which was a relief. Wasn't thrilled about the limited font choices for my novel's interior, but overall, a good experience.",
                "Sarah Harol",
              ],
              [
                "There were a few bumps in the road the Broadway Publishers book marketing services, but the end results made it worthwhile. My book is getting the attention it deserves, and I've seen a positive impact on sales.",
                "Mason Theresa",
              ],
            ].map(([desc, name], i) => (
              <div
                key={i}
                className="grow-0 shrink-0 mr-xl:basis-[30%] mr-lg:basis-[40%] mr-md:basis-[50%] basis-[100%] mt-[60px] px-5"
              >
                <div className="text-center p-[25px] bg-[#efefef] rounded-[25px] h-full">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width={20}
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="inline-block mb-3"
                    >
                      <path
                        fill="#ffd700"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                  ))}
                  <p className="text-base font-normal leading-normal min-h-[150px]">
                    {desc}
                  </p>
                  <h4 className="text-[23px] font-bold leading-tight mt-3">
                    {name}
                  </h4>
                </div>
              </div>
            ))}
          </AutoScroll>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
