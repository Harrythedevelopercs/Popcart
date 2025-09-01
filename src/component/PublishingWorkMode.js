import React from 'react'

const data = [
    {
        heading: "Low Upfront Costs",
        desc: "Publishing children's books is no easy undertaking. Even though the book is only a little over 100 pages long, not everything appeals to these tiny beings. It takes several rewrites and re-drafts to concisely express an idea with a clear message, and we are here to assist."
    },
    {
        heading: "Complete Publishing Solution",
        desc: "From publishing your book on the appropriate platform to creating strategies to generate online exposures for your compositions, we provide a complete package of marketing to ebook publishing services, where our professionals devote their time and expertise to ensure your book is getting the attention and acclaim it deserves."
    },
    {
        heading: "Print On Demand",
        desc: "Professional book authors and buyers rely on us to complete high-quality bulk book printing projects on time. We also distribute books without having to buy and store hundreds of books on your own."
    },
    {
        heading: "Reach Millions Of Readers",
        desc: "We will help you reach millions of readers who enjoy the genre of your book through our book promotion services for authors, ensuring an increase in visibility and sales."
    },
]

const PublishingWorkMode = ({
    subTitle,
    title,
    desc
}) => {
    return (
        <>
            <section className="our-process font-secondary">
                <div className="container py-[80px]">
                    <div className="text-center mb-10 justify-center md:px-10 sm:px-5 xs:px-5">
                        <h6 className='text-[30px] font-primary text-primary-100 font-semibold xs:text-base'>
                            {subTitle}
                        </h6>
                        <h2 className='text-[45px] font-primary font-bold leading-tight mt-2 mb-2 sm:text-[35px] xs:text-[35px]' dangerouslySetInnerHTML={{ __html: title }} />
                        <p className='w-[80%] mx-auto md:w-[90%] xs:w-[100%]' dangerouslySetInnerHTML={{ __html: desc }} />
                    </div>

                    <div className=' grid grid-cols-4 gap-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 md:w-[95%] md:gap-5 mx-auto sm:w-[90%] xs:w-[90%]'>
                        {data?.map((e, i) => (
                            <div key={i} className="rounded-2xl shadow-xl shadow-slate-300 text-left text-[#000] hover:text-[#fff] p-3 hover:bg-black">
                                <div className='p-2'>
                                    <h4 className='text-[20px] font-primary py-3 text-primary-100 font-semibold leading-6 m-0 transition-[.5s all]'>
                                        {e.heading}</h4>
                                    <p className='h-[200px] overflow-y-scroll overflow-auto'>
                                        {e.desc}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>


    )
}

export default PublishingWorkMode
