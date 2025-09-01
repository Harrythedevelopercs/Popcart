// Next
import Image from "next/image"
// Media
import CheckIcon from "media/new-lp/lp1/done_grey.png"
import SideImage from "media/new-lp/lp1/awsome-img.jpg"
// Components
import { CTA } from "./index"

export default function About({ description = "ghostwriters" }) {
  return (
    <section>
      <div className="py-[60px]">
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-12 grid-cols-1 gap-y-8 gap-x-10">
            <div className="mr-lg:col-span-5">
              <h2 className="text-[#232323] mr-xl:text-[45px] mr-md:text-[40px] mr-sm:text-[30px] text-[25px] leading-tight font-bold mb-3 capitalize max-w-[450px]">
                The world is waiting for your book
              </h2>
              <p className="text-[#9c9c9c] mr-md:text-[16px] text-[14px] leading-normal font-normal">
                Every great advancement is born out of a fascinating work of
                imagination. We, at Broadway Publishers, will take that step
                forward for you. Every story deserves to be told and heard.
                Therefore, we invite you to experience the work of industry's
                most professional yet extremely innovative {description}, all
                under one roof. We have a track record of delivering thousands
                of successful publications – meticulously written, edited,
                designed and published. Many of the published works we have done
                for our clients have created a buzz in the literary sphere and
                ranked among the best sellers. Broadway Publishers is the
                perfect choice to put your ideas on paper. We have writers who
                can help you tell your story, in any genre, from fiction to
                nonfiction.
              </p>
              <CTA css="mt-5" />
            </div>
            <div className="mr-lg:col-span-7 grid mr-lg:grid-cols-12 grid-cols-1 gap-y-8">
              <div className="mr-2xl:col-span-3 mr-lg:col-span-4">
                <ul className="grid mr-lg:grid-cols-1 grid-cols-2 gap-y-3.5">
                  {[
                    "Fiction",
                    "Non-Fiction",
                    "Biography",
                    "Informative",
                    "Autobiography",
                    "Memoirs",
                    "Action & Adventure",
                    "Western",
                    "Anthology",
                    "Romance",
                  ].map((e, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-x-1 font-medium"
                    >
                      <Image src={CheckIcon} alt="icon" />
                      <span className="block mr-md:text-base text-sm text-[#0e4f4b] leading-tight capitalize">
                        {e}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mr-2xl:col-span-9 mr-lg:col-span-8">
                <Image src={SideImage} alt="side_image" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
