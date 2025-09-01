const OurComprehensive = () => {
    let cards = [
        {
            title: "Concept Development:",
            desc: "Our team at Broadway Publishers Ghostwriting is among the best in developing concepts. We work closely with authors to understand their book’s theme, genre, and essence. From this foundation, we develop unique and captivating concepts for the book cover that resonate with the story’s core. This eventually leads to our creative designers working on making an ideal cover that fits the book’s theme.",
        },
        {
            title: "Custom Illustration And Artwork:",
            desc: "For authors seeking a one-of-a-kind cover, our artists can create original illustrations and artwork personalized to the book’s content. These handcrafted visuals infuse the cover with the author’s vision and creativity, making them among the best designs the industry will get to grace their eyes with.",
        },
        {
            title: "Typography And Layout:",
            desc: "Our designers expertly handle typography and layout to ensure that the cover is visually appealing and conveys the book’s genre and mood effectively. Fonts, colors, and the arrangement of elements are meticulously chosen to enhance the reader’s experience. Your audience is guaranteed to appreciate the exquisite typography crafted by our creative design team.",
        },
        {
            title: "Print And Digital Optimization:",
            desc: "We design covers that shine both in print and digital formats. Whether creating a striking paperback cover or ensuring a pixel-perfect e-book design, we optimize for every medium. Our designers specialize in both print and digital formats, meticulously crafting your book to excellence. We tailor the design to suit the appropriate package, whether it’s a print paperback or an eBook, ensuring the pixel precision needed to make your digital edition truly stand out.",
        },
    ]
    return (
        <div className="bg-no-repeat bg-cover bg-center bg-[url('../../public/imageAR/our-comprehensive.png')] mr-lg:py-[80px] mr-md:py-[60px] py-[40px]">
            <div className="mr-container">
                <div className="font-secondary text-center text-white pb-10">
                    <h4 className="mr-lg:text-3xl text-xl font-bold leading-tight text-[#3EA99F]">Our Comprehensive Publishing Services</h4>
                    <h2 className="mr-xl:text-[50px] mr-lg:text-[40px] text-[30px] font-bold leading-tight py-2">A Design That's Unique To You</h2>
                    <p className="mr-md:text-base text-sm font-normal leading-normal mr-2xl:w-[60%] mr-lg:w-[70%] mx-auto">Our excellence stems from our unique and client-centric approach. We have catered to projects of various genres, formats, and platforms. Let us do the walking and talking on your behalf and see the exceptional results yourself.</p>
                </div>
                <div className="grid mr-xl:grid-cols-4 mr-lg:grid-cols-3 mr-md:grid-cols-2 gap-x-5 gap-y-10">
                    {
                        cards && cards.map((e, i) => (
                            <div key={i} className="bg-white py-10 px-5 rounded-lg">
                                <h5 className="text-[25px] leading-tight font-bold text-[#3EA99F] mb-3">{e.title}</h5>
                                <p className="text-base mr-md:h-[150px] overflow-y-scroll">{e.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurComprehensive;
