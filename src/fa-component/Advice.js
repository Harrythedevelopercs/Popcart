import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Advice.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
import advice from 'media/images/flods/advice.png'
// mport { Fade } from "react-awesome-reveal";
const Advice = () => {

    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };

    return (
        <>
            <section className={styles.adviceFlod}>
                <div className='mr-container mr-md:py-10 mr-xs:py-5 px-4'>
                    <Row className={`${styles.adviceRow} justify-center items-center`}>
                        <Col lg={6}>

                            <div className={styles.adviceImg}>
                                <Image quality={100}  className='img-fluid'
                                    src={advice}
                                    alt='Best_Publisher'

                                />
                            </div>

                        </Col>
                        <Col lg={6}>

                            <div className={`${styles.adviceTxt} marginright`}>
                                <h4 className='font-30 font-primary txt-primary mb-3'><em>Would you like to know a secret?</em></h4>
                                <h2 className='font-50 fw-500 font-primary txt-secondary'>Less Is Never More for Us – It Can Be If You Want It to Be!</h2>
                            </div>
                            <div className={`${Bookshelf.bttns} mt-5`}>
                                <Link className='btns btnPrimary' onClick={openLiveChat} href="#">Let's Start!</Link>
                                <Link className='btns btnSecondary' href="tel:855-666-6675">855-666-6675</Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default Advice