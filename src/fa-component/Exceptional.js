import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Dreams.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { MRCTAGroup } from '@/component'

const data = [
    {
        heading: "Amazon Book Publishing",
        para: "With our expert support and global platform, your manuscript can reach readers worldwide. We handle the details, from formatting to distribution, so you can focus on writing. Using our professional Amazon book publishing services, you can have access to Amazon’s extensive distribution network and excellent publishing technologies. Publish a book on Amazon hassle-free by partnering up with Broadway Publishers!",
        path: "/images/flods/amazon_publishing.png",
        alt: "Book Editing"
    },
    {
        heading: "Book Publishing",
        para: "Book publishing is the process of bringing your written works to the market for public consumption! Exciting isn’t it? It involves various stages, from acquiring manuscripts or ideas, editing, design, production, and distribution to marketing and sales. Publishers play a crucial role in curating and refining content, ensuring its quality and relevance to target your audience.",
        alt: "Book Writing"
    },
    {
        heading: "Digital Book Publishing",
        para: "Broaden the scope of your book with our links to the major distribution networks, such as Amazon Kindle, Apple Books, Barnes & Noble, and others. We control the procedure, so you can focus on the writing of your story. Benefit from expert guidance and a global platform for maximum exposure and reader engagement.",
        path: "/images/flods/ebook_publishing.png",
        alt: "Article Publication"
    },
    {
        heading: "E-Book Publishing",
        para: `We format, design, and distribute your eBooks across major platforms like Amazon Kindle, Apple Books, and Google Play. Our technical team ensures compatibility across devices for smooth reading experiences. Reach wider audiences, boost your visibility, and maximize sales with our professional <a href="https://www.broadwaypublishers.com/ebook-publishing" rel="dofollow"> ebook publishing service.</a>`,
        alt: "E-Book Writing"
    },
    {
        heading: "Self-publishing",
        para: "Edit your manuscript, format it professionally, design a captivating cover, and distribute it across major platforms like Amazon Kindle, Apple Books, and Google Play. With our expertise, your book will shine on any device, captivating readers worldwide. Break free from traditional publishing limitations and take control of your book's journey.",
        path: "/images/flods/book_marketing.png",
        alt: "Book Marketing"
    },
    {
        heading: "Book Marketing",
        para: `We strategize promotions across social media, Amazon, and book review platforms. Our targeted advertising maximizes audience engagement, driving sales and building reader loyalty. Other than strategic promotion and target advertising of your book, our <a href="https://www.broadwaypublishers.com/book-marketing" rel="dofollow">book marketing services</a> include personalized outreach to influencers and bloggers in your book's genre.`,
        alt: "Children’s Book Publication"
    },
]

const Exceptional = ({
    title,
    subtitle,
}) => {


    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };


    return (
        <>
            <section className={`${styles.dreams1Flod} py-5`}>
                <div className="mr-container px-md-3">
                    <div className={`${styles.dreamsHead} text-center`}>
                        <h2 className='font-50 fw-700 font-primary txt-secondary mb-3' dangerouslySetInnerHTML={{ __html: title }} />
                        <p className='font-15 font-secondary txt-secondary mb-5' dangerouslySetInnerHTML={{ __html: subtitle }} />
                    </div>
                    <Row className={`${styles.dreamsRow} justify-center pt-4 pb-5 gy-4 gx-4 mr-xs:mx-3`}>
                        {data?.map((e, i) => (
                            <Col key={i} xl={4} lg={4} md={6} xxl={4} >
                                <div className={`${styles.ExceptionalCard} bg-white text-left position-relative`}>
                                    <div style={{
                                        position: "absolute",
                                        top: "-40px",
                                        borderRadius: "50%",
                                        width: "80px",
                                        height: "80px",
                                        fontSize: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        background: "#3EA99F",
                                        color: "white",
                                        border: "2px solid #E2E2E2"
                                    }}>0{i + 1}</div>
                                    <h3 className='font-32 fw-700 font-primary txt-secondary1 pb-2'>{e.heading}</h3>
                                    <p className='font-15 font-medium font-secondary txt-secondary ' dangerouslySetInnerHTML={{__html : e.para}} />
                                </div>
                            </Col>
                        ))}
                        {/* <div className={`${Bookshelf.bttns} dislpay-flex mt-5 justify-center`}>
                            <Link className='btns btnPrimary' onClick={openLiveChat} href="#">Let's discuss</Link>
                            <Link className='btns btnSecondary' href="tel:855-666-6675">855-666-6675</Link>
                        </div> */}
                        <MRCTAGroup classes='justify-center mt-5'/>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Exceptional
