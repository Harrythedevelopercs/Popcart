import Image from 'next/image'
import backgroundImage from "media/lp-four/portfolioBg.png"
import Portfolio1 from "media/lp-four/portfolios/1.png"
import Portfolio2 from "media/lp-four/portfolios/2.png"
import Portfolio3 from "media/lp-four/portfolios/3.png"
import Portfolio4 from "media/lp-four/portfolios/4.png"
import Portfolio5 from "media/lp-four/portfolios/5.png"
import Portfolio6 from "media/lp-four/portfolios/6.png"
import Portfolio7 from "media/lp-four/portfolios/7.png"
import Portfolio8 from "media/lp-four/portfolios/8.png"
import Portfolio9 from "media/lp-four/portfolios/9.png"
import Portfolio10 from "media/lp-four/portfolios/10.png"
import AutoPlaySlider from "./AutoPlaySlider"
const Portfolio = ({ title, desc }) => {
    return (
        <section id='portfolio'>
            <div className="mr-lg:mb-[65px] mr-lg:pt-[80px] mr-md:py-[60px] py-[40px] font-sans relative z-10">
                <Image src={backgroundImage} alt="consultationBanner" className="absolute top-0 left-0 right-0 bottom-0 -z-10 w-full h-full object-cover object-bottom" priority={true} />
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-xl:w-[75%] mr-md:w-[90%] w-full mx-auto text-white">
                        <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-medium leading-normal mb-3" dangerouslySetInnerHTML={{ __html: title }} />
                        <p className="mr-md:text-base text-sm font-normal leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>
                </div>
                <AutoPlaySlider wrapperClasses="mt-[50px]" arrowsCss="brightness-0 invert">
                    {
                        [
                            [Portfolio1],
                            [Portfolio2],
                            [Portfolio3],
                            [Portfolio4],
                            [Portfolio5],
                            [Portfolio6],
                            [Portfolio7],
                            [Portfolio8],
                            [Portfolio9],
                            [Portfolio10],
                        ].map(([img], i) => (
                            <div key={i} className={`grow-0 shrink-0 basis-[85%] mr-xl:basis-[25%] mr-2xl:basis-[25%] min-w-0 pl-4`}>
                                <Image src={img} alt='portfolios' width={317} height={474} className='block mx-auto w-full' />
                            </div>
                        ))
                    }
                </AutoPlaySlider>
            </div>
        </section>
    )
}
export default Portfolio;