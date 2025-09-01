import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Clients.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import banslider1 from 'media/images/clients/client.png'
import banslider2 from 'media/images/clients/client2.png'
import banslider3 from 'media/images/clients/client3.png'
import banslider4 from 'media/images/clients/client4.png'
import banslider5 from 'media/images/clients/client5.png'
// mport { Fade } from "react-awesome-reveal";

const Clients = () => {

    let bannerslider = {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
            <section className={styles.clientsFold}>
                <Container fluid className='px-md-5 mt-3'>
                
                    <Row className='justify-center'>
                        <Col md={10}>
                            <div className={styles.homebannerlogo}>
                                <Slider {...bannerslider}>
                                    <div>
                                        <Image quality={100}    className='img-fluid'
                                            src={banslider1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}    className='img-fluid'
                                            src={banslider2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}    className='img-fluid'
                                            src={banslider3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}    className='img-fluid'
                                            src={banslider4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}    className='img-fluid'
                                            src={banslider5}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                
                </Container>
            </section>
        </>
    )
}

export default Clients