import React from "react";
import Image from "next/image";
import AutoPlaySlider from "../AutoPlaySlider";

// Media
import Portfolio1 from "media/children-book-lp/portfolio/img1.svg";
import Portfolio2 from "media/children-book-lp/portfolio/img2.svg";
import Portfolio3 from "media/children-book-lp/portfolio/img3.svg";
import Portfolio4 from "media/children-book-lp/portfolio/img4.svg";
import Portfolio5 from "media/children-book-lp/portfolio/img5.svg";
import Portfolio6 from "media/children-book-lp/portfolio/img6.svg";
import Portfolio7 from "media/children-book-lp/portfolio/img7.svg";
import Portfolio8 from "media/children-book-lp/portfolio/img8.svg"; 
import Portfolio9 from "media/children-book-lp/portfolio/img10.svg";

export default function Portfolio({
  title = "Creating Magic Across <span class='text-[#3EA99F] font-normal'>Every Genre</span>",
  desc = "Every author that we have ever worked with has brought a unique and beautiful story to the table, and we're honored to have been part of their publishing journey.",
}) {
  return (
    <section className="pt-[20px] pb-[90px] mr-lg:pt-[30px] mr-lg:pb-[110px] mr-2xl:pb-[140px] relative ">
      <div className="mr-container">
        <div className="flex flex-col items-center justify-center gap-3 mb-10">
          <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal text-center text-black" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="mr-md:text-base text-sm font-normal leading-normal text-black text-center mr-lg:w-11/12 mr-xl:w-8/12 mx-auto mr-2xl:pb-8" dangerouslySetInnerHTML={{ __html: desc }} />
        </div>
      </div>
      <div className="relative before:content-[''] before:absolute before:left-0 before:h-full mr-lg:before:w-[100px] mr-xl:before:w-[150px] mr-2xl:before:w-[170px] mr-3xl:before:w-[230px] before:top-[-10px] mr-xl:before:top-[-15px] before:bg-[#ffffff74] before:z-10 before:rounded-r-[10px] after:content-[''] after:absolute after:right-0 after:h-full mr-lg:after:w-[100px] mr-xl:after:w-[150px] mr-2xl:after:w-[170px] mr-3xl:after:w-[230px] after:top-[-10px] mr-xl:after:top-[-15px] after:bg-[#ffffff74] after:z-10 after:rounded-r-[10px]">
        <AutoPlaySlider arrows={true} options={{ align: "center" }} wrapperClasses="mt-3" direction="forward">
          {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6, Portfolio7, Portfolio8, Portfolio9].map((imgPortfolio, i) => (
            <div key={i} className="group shrink-0 mr-xl:basis-[25%] mr-lg:basis-[25%] mr-md:basis-[25%] mr-sm:basis-[40%] basis-[50%] min-w-0 pl-4  items-center flex">
              <div className="flex items-center">
                <div className={``}>
                  <Image src={imgPortfolio} alt="Book Marketing" className="img-fluid" width={480} height={300} />
                </div>
              </div>
            </div>
          ))}
        </AutoPlaySlider>
      </div>
    </section>
  );
}
