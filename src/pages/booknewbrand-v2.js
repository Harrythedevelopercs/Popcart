import React from 'react'
import Header from '@/component/BookNewBrand/Header/Header'
import Banner from '@/component/BookNewBrand/Banner/Banner'
import ProfessionalWriters from '@/component/BookNewBrand/ProfessionalWriters/ProfessionalWriters'
import CountlessWriters from '@/component/BookNewBrand/CountlessWriters/CountlessWriters'
import WritingExpert from '@/component/BookNewBrand/WritingExpert/WritingExpert'
import BookServices from '@/component/BookNewBrand/BookServices/BookServices'
import BookPublish from '@/component/BookNewBrand/BookPublish/BookPublish'
import Success from '@/component/BookNewBrand/OurSuccess/Success'
import BookFeatured from '@/component/BookNewBrand/BookFeatured/BookFeatured'
import BookSeller from '@/component/BookNewBrand/BookSeller/BookSeller'
import Faqs from '@/component/BookNewBrand/Faqs/Faqs'
import Head from 'next/head'

const booknewbrad = () => {
    const faqsContent = [
        ["How long does it take to publish a book?", "The book publication time varies, typically ranging from a few months to a year. Factors like editing, design, and marketing plans impact the timeline. We streamline the process, ensuring efficient progress while maintaining high-quality standards, so your book reaches readers as soon as possible."],
        ["Can I publish both print and e-book versions?", "The book publication time varies, typically ranging from a few months to a year. Factors like editing, design, and marketing plans impact the timeline. We streamline the process, ensuring efficient progress while maintaining high-quality standards, so your book reaches readers as soon as possible."],
        ["Do I retain the rights to my book?", "The book publication time varies, typically ranging from a few months to a year. Factors like editing, design, and marketing plans impact the timeline. We streamline the process, ensuring efficient progress while maintaining high-quality standards, so your book reaches readers as soon as possible."],
    ];
    return (
        <>
            <Head>
                <meta name="robots" content="noindex" />
                <title>Book New Brand</title>
            </Head>
            <Header />
            <Banner />
            <ProfessionalWriters />
            <CountlessWriters />
            <WritingExpert />
            <BookServices />
            <BookPublish />
            <Success />
            <BookFeatured />
            <BookSeller />
            <Faqs items={faqsContent} />
        </>
    )
}

export default booknewbrad
