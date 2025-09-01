import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Banner.module.css'
import { Container, Row, Col } from 'react-bootstrap'
// import { keyframes } from "@emotion/react";
// import { Reveal } from "react-awesome-reveal";
// mport { Fade } from "react-awesome-reveal";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images
import alignicon from 'media/images/icons/align.png'
import authoricon from 'media/images/icons/author.png'
import cupicon from 'media/images/icons/cup.png'


import banslider1 from 'media/images/banner/logo/1.png'
import banslider2 from 'media/images/banner/logo/2.png'
import banslider3 from 'media/images/banner/logo/3.png'
import banslider4 from 'media/images/banner/logo/4.png'

// const customAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translate3d(-200px, -100px, 0);
//   }

//   to {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// `;
const Banner = (props) => {

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

    
    const openLiveChat = (e) => {
        e.preventDefault();
        if (window.LiveChatWidget) {
          window.LiveChatWidget.call('maximize');
        }
      };

    return (
        <>
            <section className={`${styles.homeBanner}`}>
                <Container fluid className='px-md-5 justify-center'>
                    <Row className='truealign align-items-end'>
                        <Col lg={6}>
                            <div className={styles.bannerTxt}>
                                {props.title ?
                                    props.title
                                    :
                                    ''
                                }

                                {props.text ?
                                    <p className='font-16 fw-300 font-secondary txt-secondary'>{props.text}</p>
                                    :
                                    ''
                                }

                                {props.subtext ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'>{props.subtext}</p>
                                    :
                                    ''
                                }

                                {props.subtext1 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext1}</p>
                                    :
                                    ''
                                }

                                {props.subtext2 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext2}</p>
                                    :
                                    ''
                                }

                                {props.subtext3 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext3}</p>
                                    :
                                    ''
                                }

                                {props.subtext4 ?

                                    <p className='font-16 fw-300 font-secondary txt-secondary'> {props.subtext4}</p>
                                    :
                                    ''
                                }

                                {props.discuss ?
                                    <div className={`${styles.bttns} mt-4`}>
                                        <Link onClick={openLiveChat} className='btns btnPrimary' href="#">{props.discuss}</Link>
                                        <Link className='btns btnSecondary' href="tel:855-666-6675"> {props.homebannernum}</Link>
                                    </div>
                                    :
                                    ''
                                }

                                {props.homebannernum2 ?
                                    <div className={`${styles.bttns} mt-3`}>
                                        <Link className='btns btnSecondary' href="tel:855-666-6675"> {props.homebannernum2}</Link>
                                    </div>
                                    :
                                    ''
                                }


                                {props.bannercounter ?
                                    <div className={`${styles.count} mt-3 mainclass`}>
                                        <Row className={styles.counteRow}>
                                            <Col className='colo'>
                                                <div className='flex items-center gap-3'>
                                                    <Image quality={100}  className='img-fluid'
                                                        src={alignicon}
                                                        alt='Best_Publisher'
                                                    />
                                                    <div style={{lineHeight: 1}}>
                                                        <span className='font-50 fw-700 font-primary txt-secondary'>400</span>
                                                        <p className='font-20 fw-800 font-primary txt-primary'>Million Words</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className='colo'>
                                                <div className='flex items-center gap-3'>
                                                    <Image quality={100}  className='img-fluid'
                                                        src={authoricon}
                                                        alt='Best_Publisher'
                                                    />
                                                    <div style={{lineHeight: 1}}>
                                                        <span className='font-50 fw-700 font-primary txt-secondary'>100</span>
                                                        <p className='font-20 fw-800 font-primary txt-primary'>Authors</p>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col className='colo'>
                                                <div className='flex items-center gap-3'>
                                                    <Image quality={100}  className='img-fluid'
                                                        src={cupicon}
                                                        alt='Best_Publisher'
                                                    />
                                                    <div style={{lineHeight: 1}}>
                                                        <span className='font-50 fw-700 font-primary txt-secondary'>870</span>
                                                        <p className='font-20 fw-800 font-primary txt-primary'>Cups Of Coffee</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    :
                                    ''
                                }

                                {props.img2 ?
                                    <div className={styles.banshortimg} style={{paddingBottom: "50px"}}>
                                        <Image quality={100} src={props.img2} alt='Best_Publisher' className='img-fluid mt-4'></Image>

                                    </div>
                                    :
                                    ''
                                }
{/* 
                                <Slider {...bannerslider} className='mt-4 gloslider'>
                                    <div>
                                        <Image quality={100}  className='img-fluid'
                                            src={banslider1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}  className='img-fluid'
                                            src={banslider2}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}  className='img-fluid'
                                            src={banslider3}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}  className='img-fluid'
                                            src={banslider4}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}  className='img-fluid'
                                            src={banslider1}
                                            alt='Best_Publisher'
                                        />
                                    </div>
                                    <div>
                                        <Image quality={100}  className='img-fluid'
                                            src={banslider2}
                                            alt='Best_Publisher'
                                        />
                                    </div>

                                </Slider> */}



                            </div>
                        </Col>
                        <Col lg={6} className={styles.bannImg}>
                            <div className={styles.bannerImg}>
                                <Image quality={100} className='img-fluid m-auto'
                                    src={props.imageban}
                                    alt='Best_Publisher'
                                />
                            </div>
                        </Col>
                    </Row>
                    {/* <Reveal keyframes={customAnimation}>SADDADASDAS</Reveal> */}

                </Container>



            </section>


        </>
    )
}

export default Banner