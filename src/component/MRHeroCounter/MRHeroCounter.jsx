import icon1 from "media/images/icons/align.png"
import icon2 from "media/images/icons/author.png"
import icon3 from "media/images/icons/cup.png"
import Image from "next/image"

const counterArr = [
    [icon1, "400", "Million Words"],
    [icon2, "100", "Authors"],
    [icon3, "870", "Cups Of Coffee"]
]

const MRHeroCounter = () => {
    return (
        <div className="hidden mr-sm:flex gap-5 !mt-4">
            {
                counterArr?.map(([icon, num, text]) => (
                    <div key={num} className="flex items-center gap-2 mr-xl:gap-3">
                        <Image src={icon} alt="bestsellingpublisher"  priority/>
                        <div className="text-center">
                            <h3 className="text-[30px] mr-xl:text-[35px] font-sans font-extrabold leading-none text-secondary-100">{num}</h3>
                            <span className="hidden mr-lg:inline-block text-[12px] mr-xl:text-[16px] mr-2xl:text-[16px] font-sans font-semibold text-primary-100 leading-normal uppercase">{text}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MRHeroCounter