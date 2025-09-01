import Image from "next/image"
import { useEffect, useRef } from "react"
import { register } from "swiper/element/bundle"

const Reviews = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 2,
            slidesPerGroupSkip: 1,
            spaceBetween: "20px",
            speed: 1500,
            loop: true,
            pagination: {
                clickable: true
            },
            injectStyles: [
                `.swiper-pagination-bullet {
                    width: 10px;
                    height: 10px;
                }
                .swiper-pagination-bullet-active {
                    background: #00c0e4;
                    width: 40px;
                    border-radius: 5px !important;
                }
                .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
                  bottom: var(--swiper-pagination-bottom, -6px);
                }
            `,
            ],
            breakpoints: {
                300: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
            },
        };

        Object.assign(swiperElRef.current, params);

        swiperElRef.current.initialize();
    }, []);
    const Review = [
        {
            name: "Tami Pierce",
            quote: "“I hired Broadway Publishers for ghostwriting services, and I couldn't be happier with the results! They perfectly captured my voice and brought my ideas to life in a way I never could have on my own. Highly recommend their talented team!”",
        },
        {
            name: "Lamar Wright",
            quote: "“Broadway Publishers’s SEO writing service has significantly boosted our online visibility. Their expertise in keyword optimization and engaging content creation has helped us climb the search engine rankings. We’ve seen a noticeable increase in traffic and leads since partnering with them!”",
        },
        {
            name: "Lucas Garcia",
            quote: "“I’ve used Broadway Publishers for article writing multiple times, and each time they’ve delivered top-notch content that exceeds my expectations. Their writers are skilled at researching diverse topics and presenting information clearly and engagingly. A fantastic choice for anyone in need of quality articles!”",
        },
        {
            name: "Darnell Patterson",
            quote: "“Broadway Publishers is my go-to for magazine writing projects. Their writers have a knack for crafting captivating stories and articles that resonate with our readers. Their attention to detail and commitment to meeting deadlines make them a pleasure to work with. Highly recommend!”",
        },
        {
            name: "Ernest Cortez",
            quote: "“When it comes to web copywriting, Broadway Publishers is second to none. They understand the importance of compelling copy in driving conversions, and their expertise shines through in every project they undertake. Our website has never looked better thanks to their exceptional work!”",
        },
    ];
    return (
        <section className="py-[30px] mr-lg:py-[50px]">
            <div className="mr-container">
                <div>
                    <div className="text-center">
                        <h2 className="mr-xl:text-[45px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-bold font-primary">
                            The Stamp of Approval for Our Services
                        </h2>

                    </div>
                </div>
                <swiper-container
                    init={false}
                    ref={swiperElRef}
                >
                    {Review &&
                        Review.map((testimonial, i) => (
                            <swiper-slide key={i}>
                                <div className="shadow-md">
                                    <div className="mr-lg:my-[40px] mr-md:my-[30px] py-[30px] bg-[#fff] w-full h-full">
                                        <Image quality={95}
                                            src="/images/newimg/trust.png"
                                            width={150}
                                            height={45}
                                            className="block mx-auto"
                                        />
                                        <Image quality={95}
                                            src="/assets/images/newimg/stars.png"
                                            alt="stars"
                                            width={100}
                                            height={19}
                                            className="block mx-auto py-4"
                                        />
                                        <div className="text-center">
                                            <p className="mr-md:w-[80%] min-h-[110px] font-light mx-auto text-sm leading-normal text-[#6E6E6E]">{testimonial.quote}</p>
                                            <h4 className="text-[20px] font-bold text-black">{testimonial.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                        ))}
                </swiper-container>
            </div>
        </section>
    )
}

export default Reviews
