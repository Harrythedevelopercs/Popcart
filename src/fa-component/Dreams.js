import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Dreams.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { MRCTA } from '@/component'
// mport { Fade } from "react-awesome-reveal";

const Dreams = () => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };

    return (
        <>
            <section className={styles.dreamsFlod}>
                <div className='mr-container pb-3 px-md-4'>
                    <Row className='justify-center'>
                        <Col lg={10}>
                            <div className={`${styles.dreamsHead} text-center`}>
                                <h2 className='font-50 fw-800 font-primary txt-secondary mb-3'>Dreams Don’t Turn to Dust with Broadway Publishers</h2>
                                <p className='font-15 font-secondary txt-secondary mb-5'>Your dreams matter to us. We understand that there is nothing more painful for a writer than to witness their written word go to waste. We know exactly how to publish your work and emphasize it in unimaginable ways that will leave the readers wanting more.</p>
                            </div>
                        </Col>
                        <Col lg={12} className='px-md-4'>
                            <Row className={`${styles.dreamsRow} justify-center pt-5`}>
                                <Col lg={4}>
                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Top Notch Services </h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 '>The first thing that’s probably on your mind is why we are the best. Our services prioritize quality, reliability, and customer satisfaction. We aim to exceed expectations and deliver exceptional value. By consistently delivering superior results, our top-notch services earn your trust, loyalty, and a reputation for excellence that sets us apart in a competitive marketplace.</p>
                                        <MRCTA text="Let's Publish Together!" classes='mx-auto'/>
                                    </div>
                                </Col>
                                <Col lg={4}>

                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Experience and Dedication</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3 '>Our team of experts has years of experience that allows them to pursue every project with great dedication. We strongly believe there should never be any compromise on quality and your satisfaction.</p>
                                        <MRCTA text="Let's Publish Together!" classes='mx-auto'/>
                                    </div>

                                </Col>
                                <Col lg={4}>

                                    <div className={`${styles.dreamsCard} bg-gray text-center`}>
                                        <h3 className='font-26 fw-500 font-primary txt-secondary pb-2'>Cost Effective Packages</h3>
                                        <p className='font-15 font-secondary txt-secondary mt-3  pb-lg-0'>These packages are designed to meet the needs of budget-conscious consumers or businesses without compromising on quality. They often include a combination of products or services bundled together at a discounted rate compared to purchasing each item separately. </p>
                                        <MRCTA text="Let's Publish Together!" classes='mx-auto'/>
                                    </div>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Dreams