import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Broader.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import broader from 'media/images/flods/broader.png'
// mport { Fade } from "react-awesome-reveal";
const Broader = ({
    subtitle,
    title,
    desc
}) => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };

    return (
        <>
            <section className={styles.broaderFlod}>
                <div className='mr-container px-md-4'>
                    <Row className={`${styles.broaderRow} justify-center`}>
                        <Col lg={6}>

                            <div className={`${styles.broaderTxt} marginleft`}>
                                <h4 className='font-30 fw-500 font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='font-50 fw-600 font-primary txt-secondary mb-4'>{title}</h2>
                                <p className='font-15 font-secondary txt-secondary mb-4'>{desc}</p>
                                <h4 className='font-30 fw-500 font-primary txt-secondary mb-4'>Our Package Include</h4>
                                <Row className={styles.listRow}>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Idea research and analysis</li>
                                            <li>Proofreading to eliminate errors</li>
                                            <li>Book Cover design and illustration</li>
                                            <li>Traditional and self-publishing</li>
                                            <li>Video Book Trailers</li>
                                        </ul>
                                    </Col>
                                    <Col md={6}>
                                        <ul className={`${styles.broaderList} p-0 mb-0`}>
                                            <li>Manuscript drafting</li>
                                            <li>Critical reviews</li>
                                            <li>Preparing text for publication</li>
                                            <li>Publishing on best libraries</li>
                                            <li>Branding and marketing</li>
                                        </ul>
                                    </Col>
                                    <div className={`${Bookshelf.bttns} mt-5`}>
                                        <Link className='btns btnPrimary' onClick={openLiveChat} href="#">Let's discuss</Link>
                                        <Link className='btns btnSecondary' href="tel:855-666-6675">855-666-6675</Link>
                                    </div>
                                </Row>
                            </div>
                        </Col>
                        <Col lg={6}>

                            <div className={styles.broaderImg}>
                                <Image quality={100}  width={800} height={800} className='img-fluid'
                                    src={broader}
                                    alt='Best_Publisher'
                                />
                            </div>

                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Broader