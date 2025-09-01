import { MRContent1, MRContent2 } from "@/component"
import { BookSlider, Contact, Header, Hero, Reviews, ScrollBanner,Steps } from "@/component/LP-One"
import Head from "next/head"
import Nature from "media/imageAR/nature.png"
import Enlistedlogo from "@/fa-component/Enlistedlogo"

const LPOne = () => {
    const MRContent2Data = [
        {
            title: "Personalized Support",
            desc: "Our expert writers specialize in crafting top-notch articles and blog posts on virtually any topic. We guarantee your readers will be captivated with the quality of our work."
        },
        {
            title: "Quality Publishing",
            desc: "Get the best of native English writing with our U.S.-based writers! Our experts have perfected their grammar and command of language to ensure that you get quality written pieces."
        },
        {
            title: "Wide Distribution",
            desc: "Our team of experts review each piece with incredible scrutiny before giving it the seal of approval - so you can rest assured any article published goes through some serious quality control!"
        },
        {
            title: "Affordable Pricing",
            desc: "Our clients are always in full ownership of the content we create for them. This way, you can use your written articles and blog posts however you like – no strings attached!"
        },
        {
            title: "Satisfaction Guaranteed",
            desc: "Experience top-notch article writing services with us! Our satisfaction guarantee means that if you're not happy, we'll keep revising until every requirement is met. Get the quality content your business deserves today!"
        }
    ]
    return (
        <main>
            <Head>
                <title>LP One | Best Book Publishing Company</title>
                <meta name="description" content="Experience the pinnacle of publishing services with the Best Book Publishing Company. With our commitment to quality, we guide every author toward success. Get started today!" />
            </Head>
            <Header />
            <Hero />
            <Enlistedlogo />
            <BookSlider
                title="We Have Supported Countless Writers Get Best Selling Books Published Under Their Name"
            />
            <MRContent1
             title="Why Choose Us?"
             desc="Every successful book has a team of dedicated professionals behind it. Our renowned group of editors, designers, and marketing specialists is dedicated to taking your book to the next level and making it stand out from the competition. choosing a Best-Selling Publisher is an investment in your literary career rather than merely a choice. Become a part of our esteemed writer community and see your tale turn into the next big hit!"
             img1="/ahsan/mocknew.png"
            />
            <MRContent2
                title={`Unleash Your Literary Dreams with Broadway Publishers! <br class="mr-xl:block hidden"/> Embark on a Journey to Authorship Today!`}
                desc={`Are you ready to transform your creative vision into a captivating masterpiece? <br class="mr-xl:block hidden"/> Look no further! At Broadway Publishers, we're your dedicated partners in making your literary dreams a reality.`}
                direction="flex-row-reverse"
                sideImage={Nature}
                data={MRContent2Data}
            />
            <ScrollBanner />
            <MRContent1
             title="Why Choose Our Amazon <br class='hidden mr-lg:block'/> Publishing Services?"
             desc="Your work is over after creating a masterpiece. Let us take the lead from here. Our Amazon publishing services include the three crucial areas of the publishing process: Production, Marketing, and Distribution. As the best publishers, our experience lies in publishing many books by professional writers. And our publishing experts have upgraded many authors to published book authors universally. It’s time for you to get famous!"
             img1="/ahsan/mocknew1.png"
             direction="flex-row-reverse"
            />
            <Steps />
            <Reviews />
            <Contact />
        </main>
    )
}

export default LPOne