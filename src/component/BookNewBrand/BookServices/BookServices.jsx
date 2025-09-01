import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import tel from "media/newBrandv2/call.png"
import Portfolio1 from "media/book-illustrations/portfolio/1.png"

const BookServices = () => {
    const services = [
        {
            title: "Book Editing",
            desc: "We know that every word counts, so we're committed to crafting captivating stories for any length and style. Our talented staff will take on your project from start to finish because no task is too big when you have people like us working together...",
            image: Portfolio1,
        },
        {
            title: "Children’s Book Publication",
            desc: "Children’s Book Publishing is no easier task. Of course, the length of the book is relatively short, but précising an idea with a well-instilled message requires multiple rewrites and re-drafts.",
            image: Portfolio1,
        },
        {
            title: "Children's Book Illustrations",
            desc: "Children are the most unfiltered and harshest critics! That doesn't mean they are not biased. They pick up the book and flip through pages, looking at the images and illustrations, and if those speak to them,",
            image: Portfolio1,
        },
        {
            title: "Book Writing",
            desc: "When you think about writing a book, know that it doesn't have to be complicated. As absurd as it may sound, thoughts/ideas may already exist within your head as seed or germinating premises of stories that still need development before they can blossom into anything concrete and comprehensive for readers around the world.",
            image: Portfolio1,
        },
        {
            title: "E-Book Writing",
            desc: "We want to help you shine your eBook and make it compelling for readers, so we'll work with the most important ideas. You have an option of doing a one-hour interview where any challenging or confusing topics will be bouncing off us before they're even published.",
            image: Portfolio1,
        },
        {
            title: "Book Marketing",
            desc: "We promote & market your book in the most effective way, and bring your book(s) from the shadows of the back-of-the-shelf to Best seller. We are the book marketing & book promotion experts you need;",
            image: Portfolio1,
        },
        {
            title: "Article Publication",
            desc: "We are an Award-winning Children’s Book Publisher, with some top-sellers and best- sellers in our portfolio. Publishing a book has never been easier.",
            image: Portfolio1,
        },
        {
            title: "Book Publishing Services",
            desc: "Our experience enables us to craft captivating stories. Short or long – your manuscript gets the attention it deserves! Every word is polished and prepared to create an impact.",
            image: Portfolio1,
        },
    ]
    return (
        <section className='bg-[#f7f8f9] pt-10 pb-12 mr-xl:py-20'>
            <div className="max-w-7xl mx-auto px-4 mr-md:px-8 mr-2xl:px-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[30px] mr-md:text-[45px] mr-xl:text-[53px] leading-[40px] mr-md:leading-[55px] mr-xl:leading-[60px] font-semibold capitalize dm-serif mb-2 text-center'>Our Comprehensive Book Services Include!</h2>
                        <p className='text-[14px] mr-md:text-[15px] poppins font-[500] text-center'>Our comprehensive author toolkit and suite of services will guide you on your journey from an aspiring writer to a successful published author.</p>
                        <div className="flex flex-col mr-md:flex-row items-center justify-center gap-4 mt-8">
                            <Link href="mailto:info@broadwaypublishers.com" className='bg-[#65c7e4] hover:bg-black hover:duration-700 ease-in-out duration-700 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center text-white poppins uppercase text-[15px] font-[400]'>
                                Explore All Services
                            </Link>
                            <Link href="tel:(800) 781-9093" className='bg-[#131313] hover:bg-[#65c7e4] hover:duration-700 ease-in-out duration-70 rounded-full shadow-[0_10px_20px_0px_#0000001A] w-full mr-md:w-max h-[42px] px-4 mr-lg:px-6 flex items-center justify-center gap-2 text-white poppins uppercase text-[15px] font-[400]'>
                                <Image src={tel} alt='Tel Icon' className='w-[18px] h-[18px]' />
                                855-666-6675
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 mr-md:grid-cols-2 mr-lg:grid-cols-3 mr-xl:grid-cols-4 gap-4 mt-14">
                    {services.map((content, index) => (
                        <div key={index} className="servicesCards group">
                            <div className="bg-white rounded-[13px] py-[35px] px-[20px] h-full flex flex-col items-center justify-center relative z-[9]">
                                <div className="absolute h-full w-full z-[-1]">
                                    <Image
                                        src={content.image}
                                        alt="Background Image"
                                        className="relative h-full w-full opacity-0 group-hover:opacity-100 duration-700 ease-in-out"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute h-full w-full bg-[#0000006e] rounded-[13px] top-0 left-0 z-[1] opacity-0 group-hover:opacity-100" />
                                </div>
                                <div className="text-center z-[2]">
                                    <h3 className="text-[20px] mr-xl:text-[25px] mr-xl:leading-[30px] font-semibold dm-serif mb-2 group-hover:text-white group-hover:duration-700 ease-in-out">
                                        {content.title}
                                    </h3>
                                    <p className="text-[14px] leading-[22px] font-medium poppins group-hover:text-white group-hover:duration-700 ease-in-out">
                                        {content.desc}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}



export default BookServices
