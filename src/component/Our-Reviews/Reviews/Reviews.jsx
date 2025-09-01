const Reviews = () => {
    let count = [
        {
            vid: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe class="rounded-2xl" src="https://player.vimeo.com/video/969194638?badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`,
            title: "How Best-Selling Publisher Personalized Guidance Made Christopher’s Book Shine",
            desc: "I chose Broadway Publishers for their complete package. They refined my manuscript, editors polished it to perfection, and the marketing team of got my book into the hands of readers. Their cohesive efforts made my book a huge success."
        },
        {
            vid: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe class="rounded-2xl" src="https://player.vimeo.com/video/969194794?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Frederick Huff s Journey_ How Our Expertise Made His Book a Triumph _ _ Broadway Publishers"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
            title: "How Our Expertise Made Frederick Huff’s Book a Triumph ",
            desc: "I had my debut novel published by Broadway Publisherss. Their experience exceeded all my expectations. Their team guided me at every step of the publishing process. They truly cared about my vision for the book and made sure it is exactly as I dreamed it would. "
        },
        {
            vid: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe class="rounded-2xl" src="https://player.vimeo.com/video/969194720?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Eric s Publishing Journey_ Seamless Process and Exceptional Support with Broadway Publishers"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
            title: "Eric’s Publishing Journey: Seamless Process and Exceptional Support",
            desc: "I just want to say that their marketing team is fantastic. I published my self-help with Broadway Publishers. They crafted a marketing plan that resonated with my target audience. Their team handled the book signing campaigns, social media. Thanks to their marketing strategies, my book became a best seller."
        },
        {
            vid: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe class="rounded-2xl" src="https://player.vimeo.com/video/969194426?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="How We Brought Brandy Hughes  Story to Life_ A Memorable Publishing Journey _ Broadway Publishers"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
            title: "Brandy Hughes’ Story to Life: A Memorable Publishing Journey  ",
            desc: "Amazed by their editors’ attention to detail. Every suggestion they made was aimed at clarifying and enhancing my argument whilst making sure that the original tone and intent of my idea remains intact. "
        },
        {
            vid: `<div style="padding:56.25% 0 0 0;position:relative;"><iframe class="rounded-2xl" src="https://player.vimeo.com/video/969194554?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="A Heartfelt Thank You to Our Valued Customers _ Broadway Publishers"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`,
            title: "Max’s Entrepreneurial Journey Captured in Words That Reflects His Passion for Business",
            desc: "As an entrepreneur, I wanted to pen my journey but never had the time. Broadway Publishers’s writing and editing team captured my voice and my passion for business in the book. The final manuscript really felt like my story. "
        }
    ];
    return (
        <section>
            <div className="mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
                <div className="mr-container">
                    <div className="mr-sm:text-center text-justify mr-md:mb-0 mb-[40px]">
                        <h2 className="mr-xl:text-[50px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold text-black">Book Reviews</h2>
                        <span className="mr-md:text-xl text-lg block text-primary-100 my-3">Let’s hear what they have to say! </span>
                        <p className="mr-md:text-base text-sm leading-normal font-normal mr-lg:w-[60%] w-full mx-auto">We have been delivering top-notch services to our clients, which has established us as one of the most trusted book writing, publishing and marketing company in the eyes of every author out there!</p>
                    </div>
                    {
                        count.map((e, i) => (
                            (i % 2) === 0 ? (
                                <div className="grid mr-md:grid-cols-12 grid-cols-1 mr-lg:gap-0 gap-x-5 items-center  mr-md:mt-20 mt-0 my-4">
                                    <div className="mr-lg:col-span-5 mr-md:col-span-6">
                                        <div className="z-20 w-[100%] rounded-[50px] relative mr-lg:left-8" dangerouslySetInnerHTML={{ __html: e.vid }} />
                                    </div>
                                    <div className="mr-lg:col-span-7 mr-md:col-span-6 mr-sm:block hidden">
                                        <div className="bg-primary-100  text-white mr-lg:px-[50px] px-[20px] mr-2xl:py-[100px] mr-lg:py-[80px] mr-sm:py-[40px] py-[30px] rounded-xl">
                                            <h3 className="mr-2xl:text-[35px] mr-xl:text-[28px] mr-sm:text-[25px] text-xl leading-tight font-semibold mb-3" dangerouslySetInnerHTML={{ __html: e.title }} />
                                            <p className="mr-md:text-base text-sm leading-normal font-normal mr-2xl:min-h-[80px] min-h-[100px]">{e.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="grid mr-md:grid-cols-12 grid-cols-1 mr-lg:gap-0 gap-x-5 items-center  mr-md:mt-20 mt-0 my-4">
                                    <div className="mr-lg:col-span-7 mr-md:col-span-6">
                                        <div className="bg-[#272727] mr-sm:block hidden text-white mr-lg:px-[50px] px-[20px] mr-2xl:py-[100px] mr-lg:py-[80px] mr-sm:py-[40px] py-[30px] rounded-xl">
                                            <h3 className="mr-2xl:text-[35px] mr-xl:text-[28px] mr-sm:text-[25px] text-xl leading-tight font-semibold mb-3" dangerouslySetInnerHTML={{ __html: e.title }} />
                                            <p className="mr-md:text-base text-sm leading-normal font-normal mr-2xl:min-h-[80px] min-h-[100px]">{e.desc}</p>
                                        </div>
                                    </div>
                                    <div className="mr-lg:col-span-5 mr-md:col-span-6">
                                        <div className="z-20 w-[100%] rounded-[50px] relative mr-lg:right-8" dangerouslySetInnerHTML={{ __html: e.vid }} />
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Reviews;