import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Formdata from '@/fa-component/Formdata';
// // mport { Fade } from "react-awesome-reveal";

const Bookshelf = () => {
    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
            window.LiveChatWidget.call('maximize');
        }
    };

    return (
        <>
            <section className={styles.bookshelfFlod}>
                <Container className='px-md-4'>
                    <Row className={`${styles.bookshelfRow} justify-content-between`}>
                        <Col xl={6}>
                            <div className={styles.bookshelfTxt}>
                                <h4 className='font-24 fw-600 font-primary txt-primary mb-3'>From Bookshelf to Amazon</h4>

                                <h2 className='font-50 fw-700 font-primary txt-secondary mb-3'>We’re Your Premier Book Publishers</h2>
                                <p className='font-15 font-secondary txt-secondary mb-3'>Broadway Publishers provides a full-suite selection of conventional publishing services to writers of all genres and companies of all sizes. From editing and formatting to publication and distribution, our staff of publishing experts can assist you at every stage of the publishing process. We also provide digital publishing services and Amazon publishing services, among other publishing choices to suit your particular requirements.</p>

                                <p className='font-15 font-secondary txt-secondary'>Broadway Publishers provides a range of services meant to assist authors in negotiating the always-shifting publishing world. The demands of writers of today are met by our <a href="https://www.broadwaypublishers.com/book-publishing" rel='dofollow'>book publishing services</a>. We are dedicated to assisting writers in succeeding in a very competitive market, from offering self-publishing advice to publishing assistance. Broadway Publishers is unique among publishers in that we are dedicated to quality. We work with each author on an individual basis, providing the personalized attention that is so essential to success in today's publishing landscape.</p>
                                <div className={`${styles.bttns} mt-5`}>
                                    <Link className='btns btnPrimary' onClick={openLiveChat} href="#">Let's discuss</Link>
                                    <Link className='btns btnSecondary' href="tel:855-666-6675">855-666-6675</Link>
                                </div>
                            </div>

                        </Col>
                        <Col xl={6}>
                            <Formdata />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Bookshelf