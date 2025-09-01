import Image from 'next/image'
import { MRCTA } from '@/component'
import AutoPlaySlider from './AutoPlaySlider'
import ReviewIcon from "media/book-marketing-company/clientReviews.svg"

const Testimonials = ({
    title,
    desc,
    data
}) => {
    return (
        <section id="testimonials">
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px] font-sans bg-[#F3F3F3]">
                <div className="mr-container">
                    <div className='grid grid-cols-12 mr-lg:gap-x-5 gap-5 items-center'>
                        <div className='mr-lg:col-span-5 col-span-12'>
                            <div className='mr-sm:text-start text-justify'>
                                <h2 className='mr-xl:text-[40px] text-[35px] leading-tight mb-3 font-semibold'>{title}</h2>
                                <p className='text-base leading-normal font-normal'>{desc}</p>
                                <MRCTA text="Leave A Reply!" link="javascript:;" handle="parent.LC_API.open_chat_window();return false;" classes="__animatedPing hover:bg-transparent hover:border-black hover:text-[#000] mt-5" />
                                <div className='mt-10'>
                                    <Image src={ReviewIcon} alt='icons' className='block mx-auto' draggable="false" />
                                </div>
                            </div>
                        </div>
                        <div className='mr-lg:col-span-7 col-span-12'>
                            <AutoPlaySlider wrapperClasses="mt-[50px]" options={{ align: "start" }}>
                                {data?.map(([title, aboutClient, clientImage, desc], i) => (
                                    <div key={i} className={`grow-0 shrink-0 basis-[85%] mr-xl:basis-[45%] mr-2xl:basis-[45%] min-w-0 pl-4`}>
                                        <div className='relative z-10 text-black rounded-2xl bg-white mr-xl:py-[50px] py-16 pt-[30px] px-[25px]'>
                                            <p className='mr-md:text-[20px] mr-2xl:min-h-[180px] mr-lg:min-h-[220px] min-h-[100px] text-base leading-normal font-medium mt-0'><em>{desc}</em></p>
                                            <div className='flex items-center justify-between pb-4'>
                                                <div>
                                                    <h4 className='mr-md:text-[25px] text-[20px] text-primary-100 mr-xl:min-h-0 mr-lg:min-h-[50px] min-h-0 leading-normal font-medium'><em>{title}</em></h4>
                                                    <span className='block mr-2xl:min-h-0 mr-md:min-h-[50px] min-h-0 text-[#9D9D9D] mr-md:text-base text-sm font-normal'><em>{aboutClient}</em></span>
                                                </div>
                                                <div>
                                                    <Image src={clientImage} alt='client' width={60} height={50} className='block mx-auto' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </AutoPlaySlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Testimonials;