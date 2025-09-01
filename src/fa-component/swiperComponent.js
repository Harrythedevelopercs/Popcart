import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import styles from '@/styles/Enlisted.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import stars from 'media/images/newimg/stars.png'
const swiperComponent = () => {
    const swiperElRef = useRef(null);

    useEffect(() => {
        register();
        const params = {
            slidesPerView: 3,
            spaceBetween: 120,
            injectStyles: [
                `.swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00c0e4;
        }
        .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
            bottom: var(--swiper-pagination-bottom, -5px);
            top: var(--swiper-pagination-top, auto);
            left: 0px;
            width: 100%;
        }
      `,
            ],
            breakpoints: {
                300: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1340: {
                    slidesPerView: 3,
                  },
            },
        };

        Object.assign(swiperElRef.current, params);

        swiperElRef.current.initialize();
    }, []);

    const slides = [
        {
            avatar: stars,
            name: "- Michael P.",
            title: "CTO, Cybertech Solutions",
            quote:
                "I'm so grateful for the amazing book they crafted for me. Truly exceptional work!",
        },
        {
            avatar: stars,
            name: "- Sarah W.",
            title: "CTO, Cybertech Solutions",
            quote:
                "Working with this book writing company was a game-changer for me. Their expertise is unmatched!",
        },
        {
            avatar: stars,
            name: "- John D.",
            title: "CTO, Cybertech Solutions",
            quote:
                "I can’t believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
        },
        {
            avatar: stars,
            name: "- Michael P.",
            title: "CTO, Cybertech Solutions",
            quote:
                "I'm so grateful for the amazing book they crafted for me. Truly exceptional work!",
        },
        {
            avatar: stars,
            name: "- Sarah W.",
            title: "CTO, Cybertech Solutions",
            quote:
                "Working with this book writing company was a game-changer for me. Their expertise is unmatched!",
        },
        {
            avatar: stars,
            name: "- John D.",
            title: "CTO, Cybertech Solutions",
            quote:
                "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
        },
        {
            avatar: stars,
            name: "- John D.",
            title: "CTO, Cybertech Solutions",
            quote:
                "I can't believe the incredible quality of the book they wrote for me. It exceeded all my expectations!",
        },
    ];
    return (
        <>
            <section className={styles.enlistedFlod}>
                <div fluid className='mr-container px-4'>
                    <Row className='justify-center'>
                        <Col lg={12}>
                            <div>
                                <div className="text-center">
                                    <h6 className="font-24 fw-600 font-primary txt-primary mb-3">
                                        Hear The Words Of
                                    </h6>
                                    <h2 className="font-50 fw_700 mb-3 font-primary txt-secondary">
                                        Appreciation from Our Clients
                                    </h2>
                                    <p className="font-15 font-secondary txt-secondary mb-5 mx-auto">
                                        The appreciation from our clients is what keeps us going. Have a
                                        sneak peek of <br /> what our satisfied clients have to say about
                                        our work.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <swiper-container
                                init={false}
                                ref={swiperElRef}
                                centered-slides="true"
                                autoplay-delay="3000"
                                loop="true"
                                pagination="true"
                                pagination-clickable="true"
                            >
                                {slides &&
                                    slides.map((testimonial, index) => (
                                        <swiper-slide key={index}>
                                            <div>
                                                <div className="w-100 m-auto">
                                                    <div className="card testimonialscard">
                                                        <Image quality={100}
                                                            src={testimonial.avatar}
                                                            alt={testimonial.name}
                                                            width={100}
                                                            height={20}
                                                        />
                                                        <div className="header">
                                                            <h1 className="name">{testimonial.name}</h1>
                                                        </div>
                                                        <div className="quote-container">
                                                            <p className="quote text-[12px]">{testimonial.quote}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </swiper-slide>
                                    ))}
                            </swiper-container>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}

export default swiperComponent
