"use client"
import React from 'react'
import Head from 'next/head'
import { Consultation, FAQS, Footer, MarketingProcess } from '@/component/LP-Two'
import Working from '@/component/AudioBooklp/Working'
import MarketBook from '@/component/AudioBooklp/MarketBook'
import Banner from '@/component/AudioBooklp/Banner'
import BrandLogos from '@/component/AudioBooklp/BrandLogos'
import AudioBooks from '@/component/AudioBooklp/AudioBooks'
import ServiceAudio from '@/component/AudioBooklp/ServiceAudio'
// Images 
// Testimonial Icons
import Icon16 from "media/assets/audiobook/trust.png"
import Icon17 from "media/assets/audiobook/google.png"
import Testimonials from '@/component/AudioBooklp/Testimonials/Testimonials'
import ChooseAudio from '@/component/AudioBooklp/ChooseAudio'
// Stand Out 
import StandOutBanner from "media/assets/audiobook/standOutBanner.png"
// Industry Expert 
import IndustryExpertsBanner from "media/assets/audiobook/IndustryExpertsBanner.png"
// Marketing Image
import StreamlinedBooks from "media/assets/audiobook/streamlinedBooks.png"
// Consultation
import BannerBg from "media/assets/audiobook/consultationBanner.png"
import BannerMockup from "media/assets/audiobook/bannerMockup.png"
import Header from '@/component/AudioBooklp/Header'
import IndustryExperts from '@/component/AudioBooklp/IndustryExperts/IndustryExperts'
import StandOut from '@/component/AudioBooklp/StandOut/StandOut'

const autoBookLp = () => {
    {/* MarketingProcess Section Content*/ }
    const accordionContent = [
        ["Preparation", "We find the perfect narrator from our network of thousands to match your voice. Our audiobook producer plans recording sessions out of your busy schedule. Before the recording process, we’ll use Pozotron to flag words that might cause pronunciation difficulties."],
        ["Recording", "Our experienced director oversees the recording sessions, making sure the narration is up to the mark. We prioritize accurate pronunciation, proper pacing, and getting the best performance from the narrator for optimal results."],
        ["Editing", "Our editing engineer listens carefully, adjusting pacing and removing background pops, distractions, and clicks."],
        ["Post Production", "Our QC engineer provides a second fail-safe, reviewing edits to ensure nothing slipped past the initial editing. We then deliver a seamless final product for your review"],
        ["Launch", "We finalize and upload audio files and upload it on all the leading platforms to get you the maximum listeners."],
    ];
    {/* Testimonials Section Content*/ }
    const testimonialData = [
        ["Robert Warren", "Author at StoryCraft", Icon16, "Their service made transforming my book into an audiobook seamless. The professional narrators and state-of-the-art recording studi!"],
        ["Natalie Brown", "CEO of Epic Reads Publishing", Icon17, "Their audiobook production services are outstanding. From selecting the perfect voice talent to meticulous post-production, they ensured my book sounded incredible. Our listeners are thrilled with the result!"],
        ["Emmanuel Harding", "Independent Author", Icon16, "As an independent author, I was blown away by their audiobook services. The detailed editing and high-quality narration made my book truly stand out. The positive feedback from listeners has been overwhelming."],
        ["Miguel Waters", " Marketing Director at LitWave Media", Icon16, "Their team turned our latest release into an engaging audiobook. The combination of top-notch recording equipment and expert narrators delivered a product that exceeded our expectations. Our audience loves it!"],
        ["Aron McCoy", "Founder of BookBuzz Inc.", Icon17, "Working with their audiobook production service was a fantastic experience. They handled everything from voice casting to final edits, making the process stress-free. The finished audiobook has received rave reviews from our readers."],
    ];
    {/* Testimonials Section Content*/ } 
    {/* FAQS Section Content */ }
    const faqsContent = [
        ["What formats do you offer for audiobooks?", "We provide audiobooks in formats like MP3, M4B, and WAV, making them compatible with major platforms such as Audible, Apple Books, and Google Play.."],
        ["What if I need changes after the audiobook is produced?", "We offer unlimited revisions during the review phase. You can request adjustments to the audiobook before the final version is published."],
        ["How will my audiobook be marketed and distributed?", "We market and distribute your audiobook across platforms like Audible, Apple Books, and Google Play. Our promotional efforts help boost visibility and connect with your target audience."],
    ];
    {/* FAQS Section Content */ }
    return (
        <>
            {/* Head */}
            <Head>
                <meta name="robots" content="noindex" />
                <title>Top Audiobook Services | Expert Production & Distribution</title>
                <meta name="description" content="Maximize your book’s impact with our audiobook services, featuring expert narration, superior production quality, and extensive distribution!" />
            </Head>
            {/* Head */}
            <Header />
            {/* Banner Start */}
            <Banner />
            {/* Banner End */}
            {/* Brands Logo Slider Start */}
            <BrandLogos />
            {/* Brands Logo Slider End */}
            {/* MarketBook Section */}
            <MarketBook />
            {/* MarketBook Section */}
            {/* Audio Book Start */}
            <AudioBooks />
            {/* Audio Book End */}
            {/* Services Start */}
            <ServiceAudio />
            {/* Services End */}
            {/* Testimonials Start */}
            <Testimonials
                title="Client <span class='text-[#3EA99F]'>Testimonials</span>"
                desc="Hear from our satisfied authors about their experiences turning their books into captivating audiobooks with our services."
                data={testimonialData}
            />
            {/* Testimonials End */}
            {/* Consultation Section */}
            <Consultation
                title={`Get Your <span class="text-[#3EA99F]">Audiobook Production</span> Cost Estimate!`}
                desc={`Find out how much it will cost to convert your book into an engaging audiobook.`}
                backgroundImage={BannerBg}
                mockup={BannerMockup}
            />
            {/* Consultation Section */}
            {/* MarketingProcess Section */}
            <MarketingProcess
                title={`Our 5-Step <span class="text-[#3EA99F]">Audiobook Creation</span> Process`}
                desc={`We use a proven process to bring your book's voice to life. After recording and editing, we distribute your audiobook on popular platforms where audiobooks are sold.`}
                items={accordionContent}
                booksImage={StreamlinedBooks}
            />
            {/* MarketingProcess Section */}
            {/* Choose Audio Start */}
            <ChooseAudio />
            {/* Choose Audio End */}
            {/* StandOut Section */}
            <StandOut
                title={`Ready to Hear Your Words Come Alive?`}
                desc={'Our audiobook services offer top-quality narrations across genres, bringing your story to life with professional <br class="mr-lg:block hidden" /> voices and expert production.'}
                bannerBg={StandOutBanner}
            />
            {/* StandOut Section */}
            {/* BrandLogos Section */}
            <Working
                title={`Feature Your Audiobook on <span class="text-[#3EA99F]">Popular Platforms!</span>`}
                desc={`We spotlight your audiobook across major platforms including Audible, ChirpBooks, Apple Audiobooks, Scribd, and Google Play. Using strategic placements, we boost visibility and drive listener engagement, helping your audiobook reach a broad and engaged audience`}
            />
            {/* BrandLogos Section */}
            {/* IndustryExperts Section */}
            <IndustryExperts
                title={`10,000+ Listens and Growing! Let Your Audiobook Be the Next Big Hit!`}
                desc={`Our expert audiobook services have helped numerous authors achieve outstanding success, reaching over 10,000+ listens. We offer comprehensive support, including professional narration, strategic marketing, and high-quality production.`}
                descTwo={`Our dedicated team is committed to amplifying your audiobook's visibility, boosting listener engagement, and expanding your reach. Let us turn your audiobook into a top contender, connecting with a wider audience and making a lasting impression in the audiobook world.`}
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
        </>
    )
}

export default autoBookLp
