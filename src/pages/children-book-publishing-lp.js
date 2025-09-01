import { Cta, Header, Hero, Portfolio, PublishAuthor, PublishBook, Tabs, WorkingWithUs, Logos, OurCaseStudy, PublishingServices, SatisfiedClient, ProcessSteps, ChooseOur, BookPublished, Faqs } from '@/component/ChildrenBooklp'
import Head from 'next/head';
import React from 'react'

const ChildrenBookServicesLP = () => {
    const faqsContent = [
        ["Should I copyright my book before sending it to a publisher?", "No, it's not necessary to officially copyright your book before sending it to a publisher. Once you write your story, it’s automatically protected by copyright law. Adding a copyright symbol is not needed and might signal inexperience to industry professionals. However, registering your copyright can provide additional legal protection if needed."],
        ["How do I know if my book is worth publishing?", "A book with long-term appeal—known as shelf-life—is more likely to be worth publishing. If your story is timeless and can continue to sell years after its release, it's a good candidate for publishing. Consider whether your book has lasting value for readers."],
        ["Who can help me get my book published?", "For traditional publishing, a literary agent is often key. Most major publishers won’t accept unsolicited manuscripts, so an agent helps navigate the process. If you're looking for serious distribution and reviews, reaching out to agents is the best route."],
        ["Do authors own the rights to their books?", "Yes, as the author, you own the rights to your book unless you sign a contract transferring ownership to someone else. Always review any agreement to ensure you maintain the rights you want to keep."],
        ["How many pages should a book be to get published?", "For first-time authors, books around 200 pages are common. Shorter books often appeal to readers with busy schedules and can be easier to market. Some successful authors even release books with fewer than 300 pages."],
        ["Can I publish a book without an LLC?", "Yes, you can publish a book without an LLC. While an LLC provides legal protection for publishing other people's books, it’s not required for self-publishing. With modern platforms, you can publish your own or others' books without establishing a formal business."]
    ];
    return (
        <>
            {/* Head */}
            <Head>
                <meta name="robots" content="noindex" />
                <title>Best Children’s Book Publishing Company For Every Author</title>
                <meta name="description" content="Our top-tier children's book publishing services help you with book printing, cover design, Print On Demand, global distribution, and much more according to your needs." />
            </Head>
            {/* Head */}
            <Header />
            <Hero />
            <Logos />
            <PublishBook />
            <OurCaseStudy />
            <PublishAuthor />
            <Portfolio />
            <PublishingServices />
            <Tabs />
            <Cta />
            <WorkingWithUs />
            <SatisfiedClient />
            <ProcessSteps />
            <ChooseOur />
            <BookPublished />
            <Faqs items={faqsContent} />

        </>
    )
}

export default ChildrenBookServicesLP
