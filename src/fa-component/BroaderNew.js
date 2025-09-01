import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Broader.module.css'
import Bookshelf from '@/styles/Bookshelf.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { MRCTAGroup } from '@/component'
// images
// mport { Fade } from "react-awesome-reveal";

const Broader = ({
    subtitle,
    title,
    desc,
    image
}) => {
    return (
        <>
            <section className={styles.broaderFlod}>
                <div className='mr-container px-md-3'>
                    <Row className={`${styles.broaderRow} justify-center items-center`}>
                        <Col lg={6}>

                            <div className={`${styles.broaderTxt} marginleft`}>
                                <h4 className='text-[30px] font-bold font-primary txt-primary'>{subtitle}</h4>
                                <h2 className='text-[45px] font-bold font-primary txt-secondary mb-4' dangerouslySetInnerHTML={{ __html: title }} />
                                <p className='font-15 font-secondary txt-secondary mb-4' dangerouslySetInnerHTML={{ __html: desc }} />
                                <MRCTAGroup/>
                            </div>

                        </Col>
                        <Col lg={6}>
                            <div className={styles.broaderImg}>
                                <Image
                                    quality={100}
                                    
                                    width={1000}
                                    height={1000}
                                    className='img-fluid m-auto'
                                    src={image}
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