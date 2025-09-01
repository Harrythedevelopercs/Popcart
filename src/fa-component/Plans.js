import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Plans.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import rating from 'media/ahsan/rating.png'
import globe from 'media/ahsan/globe.png'
import project from 'media/ahsan/project.png'
import stamp from 'media/ahsan/stamp.png'
// mport { Fade } from "react-awesome-reveal";
const Plans = () => {
    let planslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <>
            <section className={`${styles.plansFlod} bg-black`}>
                <div className='mr-container px-5'>
                    <Row className='items-center'>
                        <Col lg={12} className='m-auto'>
                            <Row className={`${styles.plansRow}`}>
                                <Slider {...planslider}>
                                    <div>
                                        <div className={`${styles.plans} flex gap-2 items-center justify-center`}>
                                            <Image quality={80}  className='img-fluid d-block !m-0'
                                                src={rating}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary txt-white w-max line-height1'>
                                                100% Customer <span className='d-block'>Satisfaction</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                       <div className={`${styles.plans} flex gap-2 items-center justify-center`}>
                                            <Image quality={80}  className='img-fluid d-block !m-0'
                                                src={globe}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary  txt-white  w-max line-height1'>
                                                2500+ Customers in <span className='d-block'>51+ Countries</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                       <div className={`${styles.plans} flex gap-2 items-center justify-center`}>
                                            <Image quality={80}  className='img-fluid d-block !m-0'
                                                src={project}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary  txt-white w-max line-height1'>
                                                Flexible <span className=''>Plans</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                       <div className={`${styles.plans} flex gap-2 items-center justify-center`}>
                                            <Image quality={80}  className='img-fluid d-block !m-0'
                                                src={stamp}
                                                alt='Best_Publisher'
                                            />
                                            <p className='font-18 fw-500 font-secondary  txt-white w-max line-height1'>
                                                All Royalties <span className='d-block'>Belong To You</span>
                                            </p>
                                        </div>
                                    </div>
                                </Slider>
                            </Row> 
                        </Col>
                    </Row>

                </div>
            </section>
        </>
    )
}

export default Plans