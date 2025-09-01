import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Enlisted.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import before from 'media/images/flods/enlisted-before.png'
import after from 'media/images/flods/enlisted-after.png'
import mid from 'media/images/flods/enlisted-mid.png'
import Link from 'next/link';
import PublishingNewComponent from './PublishingNewComponent'
import { MRCTAGroup } from '@/component'
// import { Slide } from "react-awesome-reveal";


const Enlisted = ({
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

            <section className={styles.enlistedFlod}>
                <div className='mr-container px-md-5'>
                    <Row className='justify-center'>
                        <Col lg={12}>

                            <div className={`${styles.enlistedHead} text-center`}>
                                <h4 className='font-30 font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary mb-3'>{title}</h2>
                            </div>

                        </Col>
                        <Col lg={12}>
                            <div className={`${styles.enlisContnt} text-center mt-3`}>
                                <div className={styles.enlisImg}>
                                    <Image quality={100}  className='img-fluid'
                                        src={before}
                                        alt='Best_Publisher'
                                    />

                                    <div className={styles.midImg}>
                                        <div>
                                            <p className={`${styles.para1} font-30 font-primary txt-secondary mt-5 mb-5`}>1.</p>
                                            <p className={`${styles.para2} font-30 font-primary txt-secondary`}>2.</p>
                                            <p className={`${styles.para3} font-30 font-primary txt-secondary`}>3.</p>
                                            <p className={`${styles.para4} font-30 font-primary txt-secondary`}>4.</p>
                                            <p className={`${styles.para5} font-30 font-primary txt-secondary`}>5.</p>
                                            <p className={`${styles.para6} font-30 font-primary txt-secondary`}>6.</p>
                                        </div>
                                        <Image quality={100}  className='img-fluid'
                                            src={mid}
                                            alt='Best_Publisher'
                                        />
                                        <div>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Experience and Quality</p>
                                            <p className='font-15 font-secondary txt-secondary'>We are a highly experienced and reputable book publishing company.
                                            </p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Industry Experts</p>
                                            <p className='font-15 font-secondary txt-secondary'>Our best seller publishing team is composed of industry experts.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Range of Services</p>
                                            <p className='font-15 font-secondary txt-secondary'>We offer a wide range of book publishing services, including manuscript <br /> editing, formatting, and publishing consultation.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Goal-Driven</p>
                                            <p className='font-15 font-secondary txt-secondary'>We have a proven track record of success in helping our  authors<br /> achieve their publishing goals.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Affordable Packages</p>
                                            <p className='font-15 font-secondary txt-secondary'>We offer competitive pricing and terms that are favorable to our authors.</p>
                                            <p className='font-30 font-primary txt-secondary mt-5'>Passion and Creativity</p>
                                            <p className='font-15 font-secondary txt-secondary mb-5'>As a leading book publishing company, we are passionate about helping our authors <br /> reach their full potential and bring their vision to life.</p>
                                        </div>
                                    </div>

                                    <Image quality={100}  className='img-fluid'
                                        src={after}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            </div>
                            <MRCTAGroup classes='justify-center mt-5' />
                        </Col>

                    </Row>
                </div>
            </section>
            <PublishingNewComponent
                subtitle="Enlist Yourself with the All-Time Best "
                title="Your Book Deserves Only The"
                desc="Broadway Publisherss."
                bgImage="bg-[url('../../public/ahsan/bg_black.png')]"
                classes="bg-cover bg-no-repeat"
                textBG="bg-primary-100"
                txtBlK="!text-white"
            />

        </>
    )
}

export default Enlisted