import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Climax.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// images
// mport { Fade } from "react-awesome-reveal";
const Climax = (props) => {
    return (
        <>
            <section className={styles.climaxFold}>
                <Container fluid className='p-0'>
                    <Row className={`${styles.climaxRow} justify-center items-center`}>
                        <Col lg={6}>
                           
                                <div className={`${styles.climaxTxt} marginleft`}>
                                    {props.title ?
                                        <h4 className='font-30 font-primary txt-primary'>{props.title}</h4>
                                        :
                                        ''
                                    }
                                    <h2 className='font-50 fw-500 font-primary txt-secondary'>{props.subtitle}</h2>
                                    <p className='font-15 font-secondary txt-secondary'> {props.text} </p>

                                    {props.text2 ?

                                        <p className='font-15 font-secondary txt-secondary mt-2'> {props.text2} </p>
                                        :
                                        ''
                                    }

                                    {props.text3 ?

                                        <p className='font-15 font-secondary txt-secondary mt-2'> {props.text3} </p>

                                        :

                                        ''


                                    }



                                    <div className={`${styles.bttns} mt-4 mb-5 mb-md-0`}>
                                        <Link className='btns btnPrimary' href="#"> {props.btn1} </Link>
                                        <Link className='btns btnSecondary' href="tel:855-666-6675"> {props.btn2} </Link>
                                    </div>
                                </div>
                            

                        </Col>
                        <Col lg={6}>
                           
                                <div className={styles.climaxImg}>
                                    <Image quality={100}    className='img-fluid w-100'
                                        src={props.imagecli}
                                        alt='Best_Publisher'
                                    />
                                </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Climax