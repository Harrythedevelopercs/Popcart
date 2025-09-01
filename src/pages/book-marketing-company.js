import {
    Header,
    Hero,
    Bookmockups,
    Benifits,
    MarketingService,
    Consultation,
    Portfolio,
    MarketingProcess,
    WhyChoose,
    StandOut,
    BrandLogos,
    Testimonials,
    IndustryExperts,
    FAQS,
    Footer,
} from "@/component/LP-Two"
import Head from "next/head"
// Services Icons
import Icon1 from "media/book-marketing-company/servicesIcons/1.svg"
import Icon2 from "media/book-marketing-company/servicesIcons/2.svg"
import Icon3 from "media/book-marketing-company/servicesIcons/3.svg"
import Icon4 from "media/book-marketing-company/servicesIcons/4.svg"
import Icon5 from "media/book-marketing-company/servicesIcons/5.svg"
import Icon6 from "media/book-marketing-company/servicesIcons/6.svg"
import Icon7 from "media/book-marketing-company/servicesIcons/7.svg"
import Icon8 from "media/book-marketing-company/servicesIcons/8.svg"
import Icon9 from "media/book-marketing-company/servicesIcons/9.svg"
import Icon10 from "media/book-marketing-company/servicesIcons/10.svg"
import Icon11 from "media/book-marketing-company/servicesIcons/11.svg"
import Icon12 from "media/book-marketing-company/servicesIcons/12.svg"
import Icon13 from "media/book-marketing-company/servicesIcons/13.svg"
import Icon14 from "media/book-marketing-company/servicesIcons/14.svg"
import Icon15 from "media/book-marketing-company/servicesIcons/15.svg"
// Testimonial Icons
import Icon16 from "media/book-marketing-company/testimonials/1.png"
import Icon17 from "media/book-marketing-company/testimonials/2.png"
import Icon18 from "media/book-marketing-company/testimonials/3.png"
import Icon19 from "media/book-marketing-company/testimonials/4.png"
import Icon20 from "media/book-marketing-company/testimonials/5.png"
import Icon21 from "media/book-marketing-company/testimonials/6.png"
// Stand Out 
import StandOutBanner from "media/book-marketing-company/standOutBanner.png"
// Industry Expert 
import IndustryExpertsBanner from "media/book-marketing-company/IndustryExpertsBanner.png"
// Marketing Image
import StreamlinedBooks from "media/book-marketing-company/streamlinedBooks.png"
// Consultation
import BannerBg from "media/book-marketing-company/consultationBanner.png"
import BannerMockup from "media/book-marketing-company/bannerMockup.png"

const BookMarketingCompany = () => {
    {/* Marketing Services Section Content */ }
    const serviceContent = [
        [Icon1, "Barnes and Noble <br/> Nook Edition", "Convert your manuscript into a professional Nook edition, ensuring compatibility and optimal display on Barnes and Noble’s platform. Expanding your reach on this platform is essential for comprehensive book marketing for self-published authors on Amazon."],
        [Icon2, "Apple <br/> Books", "We ensure your book is converted and optimized for Apple Books. Expanding your digital footprint on multiple platforms is crucial for book promotion to enhance your overall book marketing strategy."],
        [Icon3, "Amazon <br/> Kindle", "Format and publish your book on Amazon Kindle, utilizing industry best practices to enhance readability and discoverability. Effective Amazon book marketing ensures your book reaches a global audience and maximizes sales."],
        [Icon4, "Marketing <br/> Consultation", "Our marketing consultation provides personalized strategies for marketing your book. We focus on Amazon book promotion and digital marketing book tactics, leveraging data-driven insights to optimize reach and impact within your target audience."],
        [Icon5, "Business <br/> Cards", "We design professional business cards that serve as effective tools for book publicity and networking. Our printed business cards can reflect your author brand, promoting your books at events, signings, and conferences."],
        [Icon6, "Personal Marketing <br/> Assistants", "As a top-tier book promotion company, we offer dedicated marketing assistants to manage book promotion services, from planning and execution to performance tracking, ensuring consistent and effective marketing efforts."],
        [Icon7, "Social Media <br/> Set-Up", "We set up and optimize your social media profiles, crucial for social media marketing book strategies. This enables effective engagement with readers and promotion of your book across multiple social media platforms."],
        [Icon8, "Creative and Appealing <br/> Bookmarks", "Design and create beautiful bookmarks that have two functions: working practically in keeping places in a reader's book, but also serving as a promotional tool to keep your title top of mind."],
        [Icon9, "Digital <br/> Postcards", "Develop visually striking digital postcards for email campaigns and social media promotions, offering a modern way to reach and engage with your audience, driving interest in your book."],
        [Icon10, "Press <br/> Release", "Compose and distribute professional press releases to announce your book’s launch, garnering media attention and enhancing public awareness, leveraging our established media contacts."],
        [Icon11, "Book Video <br/> Trailers", "We create compelling book video trailers to captivate potential readers. Our book video trailers visually narrate your book’s story, increasing engagement and excitement, and driving potential readers to explore further."],
        [Icon12, "Marketing on Social Media <br/> Platforms", "Implement targeted marketing campaigns across social media platforms to enhance your book’s reach, leveraging platform-specific strategies for marketing a book to maximize engagement and conversions."],
        [Icon13, "Audio <br/> Book", "Produce high-quality audiobooks with professional narration, expanding your book’s accessibility and reaching new audiences who prefer audio content, enhancing overall readership."],
        [Icon14, "Author <br/> Website", "Design and develop a custom author website to serve as a central hub for your brand, providing a professional platform to showcase your work, and blog, and engage with readers."],
        [Icon15, "Article <br/> Writing", "We provide professional article-writing services to enhance your book's visibility. Our team creates engaging content for effective Amazon book marketing, contributing to your overall book promotion strategy and boosting your online presence."],
    ];
    {/* Marketing Services Section Content */ }

    {/* MarketingProcess Section Content*/ }
    const accordionContent = [
        ["Initial Consultation", "We begin detailed consultations as part of our services to understand the goals and target audience of a book. We discuss your needs and outline the best marketing strategies to reach your aims"],
        ["Customized Marketing Plan", "We create a marketing plan customized to your book's needs. This plan outlines strategies and tactics to effectively reach and engage your target audience."],
        ["Content Creation and Optimization", "We produce high-quality content and optimize it for search engines. This ensures your book gets noticed and attracts the right audience."],
        ["Multi-Channel Promotion", "We do social media, email, and online advertising to promote your book, thereby maximizing your outreach and engagement with readers."],
        ["Ongoing Support and Analysis", "We provide continuous support and analyze your book's performance. This helps refine strategies and ensure your marketing efforts are always effective."],
    ];
    {/* MarketingProcess Section Content*/ }

    {/* WhyChoose Section Content*/ }
    const cardData = [
        ["Proven Results", "We deliver consistent, successful outcomes that help authors achieve their marketing and sales goals."],
        ["Personalized Strategies", "We create customized marketing plans for each book's unique needs and target audience."],
        ["Dedicated Support", "We offer continuous, hands-on support to guide you through every step of the marketing process."],
        ["Comprehensive Services", "We provide a full range of marketing services to cover all your book promotion needs."]
    ];
    {/* WhyChoose Section Content*/ }

    {/* Testimonials Section Content*/ }
    const testimonialData = [
        ["Emma Rodriguez", "Bestselling Author", Icon16, "Working with this team transformed my book's reach. Their personalized marketing strategies truly made a significant difference in my book's success."],
        ["Michael Chen", "CEO of PageTurner Publishing", Icon17, "Their comprehensive services helped our authors gain visibility and drive sales. We're thoroughly impressed with the consistent and impactful results."],
        ["Lisa Thompson", "Indie Author", Icon18, "I was amazed by their dedication and support. They guided me through every step, ensuring my book's success and wider reach."],
        ["David Johnson", "Founder of Literary Horizons", Icon19, "Collaborating with them was a game-changer for our company. Their expertise and professionalism significantly boosted our authors' visibility."],
        ["Rachel Adams", "Marketing Director at BookWave", Icon20, "Our partnership with them has been incredibly fruitful. Their tailored strategies elevated our authors' works to new levels of success."],
        ["John Miller", "Author and Speaker", Icon21, "Their team provided the tools and support I needed to connect with a wider audience. Highly recommended for any author."]
    ];
    {/* Testimonials Section Content*/ }
    {/* FAQS Section Content */ }
    const faqsContent = [
        ["Can I hire someone to market my book?", "Yes, you can hire book marketing services to optimize your sales pages, making them irresistible to readers. A professional book marketer can enhance your Amazon description, select effective keywords, and even improve your website with special offers. This ensures your book attracts more attention and drives more sales."],
        ["What is the difference between a book publicist and a book marketer?", "A book marketer focuses on paid promotions to drive sales, such as ads and optimized sales pages. On the other hand, a book publicist handles earned promotions and events, like media coverage and book signings. Essentially, marketing is about creating direct advertising opportunities, while publicity focuses on generating buzz and organic interest through media and events."],
        ["Can you sell a book without marketing?", "Selling a book without any form of marketing is virtually impossible, especially in self-publishing. Marketing is crucial to reach potential readers, generate interest, and drive sales. Without it, your book is unlikely to gain the visibility needed to achieve success"],
        ["What does book marketing look like?", "Book marketing involves using various online platforms and strategies to promote your book. This includes using social media, maintaining an engaging author website, and optimizing your Amazon profile. Key strategies encompass email marketing, search engine optimization (SEO), and paid advertisements. Together, these efforts help increase your book's visibility and attract a wider audience."]
    ];
    {/* FAQS Section Content */ }
    return (
        <main>
            {/* Head */}
            <Head>
                <meta name="robots" content="noindex" />
                <title>Top Book Marketing Company - Broadway Publishers</title>
                <meta name="description" content="Partner with Broadway Publishers, an expert book marketing company, offering customized strategies to maximize your book's visibility and drive sales!" />
            </Head>
            {/* Head */}
            <Header />
            {/* Hero Section */}
            <Hero
                title={`Our <span class="text-[#3EA99F]"> Book Marketing Company</span> Helps Authors Become <span class="text-[#3EA99F]">Bestsellers</span>`}
                desc={`We help you break through the noise by connecting your book with ideal readers. Our strategic book marketing services drive sustainable book sales, boost your book’s visibility, and ensure lasting success for your author brand!`}
            />
            {/* Hero Section */}

            {/* Books Mockup Section */}
            <Bookmockups />
            {/* Books Mockup Section */}

            {/* Benifits Section */}
            <Benifits
                title="How We Market Your Book?"
                desc="We utilize data-driven strategies, including SEO optimization, targeted social media campaigns, and email marketing, to enhance your book's reach. Our approach includes advanced analytics to track performance, ensuring continuous improvement. Using influencer partnerships and comprehensive PR efforts, we create a buzz around your book, driving engagement and sales."
            />
            {/* Benifits Section */}

            {/* Marketing Services Section */}
            <MarketingService
                title={`Our Services As a Result-Driven Book <span class="text-[#3EA99F]">Marketing</span> Agency`}
                desc={`We offer versatile book marketing services to increase your books' visibility and sales. We know how to run effective, targeted campaigns, ensuring your book reaches the right audience. `}
                services={serviceContent} />
            {/* Marketing Services Section */}

            {/* Consultation Section */}
            <Consultation
                title={`Grab Your Free <span class="text-[#3EA99F]">Book Marketing</span> Strategy Session!`}
                desc={`Receive a complimentary strategy session to discover personalized marketing insights. Fill out the form below to enhance your book's reach and achieve your marketing goals.`}
                backgroundImage={BannerBg}
                mockup={BannerMockup}
            />
            {/* Consultation Section */}

            {/* Portfolio Section */}
            <Portfolio
                subtitle="Forget Niche Limits"
                title={`Reach <span class="text-[#3EA99F]">Millions Across</span> Every Genre!`}
                desc={`Expand your book's audience beyond niche markets. Our expert strategies ensure your book reaches readers from all genres, maximizing your potential for widespread success.`}
            />
            {/* Portfolio Section */}

            {/* MarketingProcess Section */}
            <MarketingProcess
                title={`Our <span class='text-[#3EA99F]'>Streamlined</span> Book <span class='text-[#3EA99F]'>Marketing</span> Process`}
                desc={`We make book marketing easy! From start to finish, our process covers everything you need to get your book noticed and reach more readers.`}
                items={accordionContent}
                booksImage={StreamlinedBooks}
            />
            {/* MarketingProcess Section */}

            {/* WhyChoose Section */}
            <WhyChoose
                title={`Why Authors Choose Us?`}
                desc={`Authors choose us for our exceptional support and expertise in book marketing. Here are some of the key reasons why authors trust our services:`}
                card={cardData}
            />
            {/* WhyChoose Section */}

            {/* StandOut Section */}
            <StandOut
                title={`Boost Your Book Sales With Us`}
                desc={`Our expert marketing team crafts custom strategies to skyrocket your visibility & reader engagement. There are no gimmicks, just proven results to get your book noticed and bought.`}
                bannerBg={StandOutBanner}
                isContact={false}
            />
            {/* StandOut Section */}

            {/* BrandLogos Section */}
            <BrandLogos
                title={`Get Your Book <span class="text-[#3EA99F]">Featured</span> Everywhere!`}
                desc={`We work with top authors and publishers, delivering effective marketing strategies that enhance visibility and drive success across multiple genres and platforms.`}
            />
            {/* BrandLogos Section */}

            {/* Testimonials Section */}
            <Testimonials
                title="Insights from <span class='text-[#3EA99F]'>Our Valued</span> Clients"
                desc="Our clients share their success stories and experiences, highlighting how our customized marketing strategies have helped them achieve their goals and reach a broader audience."
                data={testimonialData}
                isBadges={true}
            />
            {/* Testimonials Section */}

            {/* IndustryExperts Section */}
            <IndustryExperts
                title={`Time to Play Big with Book Marketing That Dominates!`}
                desc={`Broadway Publishers knows how to make your book stand out. Our team of experts uses proven strategies and innovative techniques to boost your book's visibility and sales. We're committed to helping you succeed and reach a wider audience. `}
                descTwo={``}
                isContact={true}
                bannerBg={IndustryExpertsBanner}
            />
            {/* IndustryExperts Section */}

            {/* FAQS Section */}
            <FAQS
                title={`Frequently <span class='text-[#3EA99F]'>Asked</span> Questions`}
                items={faqsContent}
            />
            {/* FAQS Section */}
            {/* Footer Section */}
            <Footer />
            {/* Footer Section */}
        </main>
    )
}
export default BookMarketingCompany;