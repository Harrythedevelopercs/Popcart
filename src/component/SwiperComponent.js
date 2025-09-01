// import function to register Swiper custom elements
import Image from "next/image";
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements

const TestimonialsSlider = ({
  subTitle = "Enough from Us",
  title = "See What Our Clients Have to Say",
  desc = "We can go on and on about our services, but if you seek further credibility, then see what our clients have to say about us:",
}) => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    register();
    const params = {
      slidesPerView: 3,
      injectStyles: [
        `.swiper-pagination-bullet {
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          background: #00c0e4;
        }
        .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
          bottom: var(--swiper-pagination-bottom, -6px);
      }
      `,
      ],
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
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
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/trust.png",
      name: "Samm Helton",
      title: "CTO, Cybertech Solutions",
      quote:
        "“I was lost in the sea of publishing until I found Broadway Publishers. Their ghostwriting and book marketing services were exactly what I needed. The team, especially Dennis, was phenomenal.”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Palma Lauria",
      title: "CTO, Cybertech Solutions",
      quote:
        "“Publishing my first novel with Broadway Publishers was a breeze. Their guidance on book editing and marketing made a world of difference. Dennis Daniel, in particular, was a pillar of support throughout this journey.”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Robert el Martin",
      title: "CTO, Cybertech Solutions",
      quote:
        "“From a tangled manuscript to a published book, Broadway Publishers made my dream a reality. Their comprehensive services, especially the marketing strategies provided the perfect launchpad for my book. Dennis Daniel's support was invaluable.”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Evain Stavenger",
      title: "CTO, Cybertech Solutions",
      quote:
        "“Broadway Publishers turned my publishing dreams into reality. Their book editing and marketing services are unparalleled. Special thanks to Dennis Daniel for his dedicated support and guidance.”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Llody hawk",
      title: "CTO, Cybertech Solutions",
      quote:
        "“Broadway Publishers is a beacon for any aspiring author. Their ghostwriting service breathed life into my ideas, and the book marketing strategies they employed were ingenious. A shoutout to Dennis for being an incredible support!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Pieter A.",
      title: "CTO, Cybertech Solutions",
      quote:
        "“The Journey to publishing my book felt insurmountable until I found Broadway Publishers. Their team, especially Dennis Daniel, guided me through every step with patience and expertise. The book editing and marketing services were exceptional. Highly recommend!”",
    },
    {
      avatar: "/assets/images/newimg/stars.png",
      polit: "/assets/images/newimg/stars.png",
      name: "Ingmar Singleton",
      title: "CTO, Cybertech Solutions",
      quote:
        "“I never imagined my manuscript could transform into something professional and polished. The Book editing team at Broadway Publishers is truly top-notch. Their publishing and marketing services exceeded all my expectations.”",
    },
  ];

  return (
    <section className="mr-xl:py-[100px] mr-lg:!py-[80px] mr-md:!py-[60px] !py-[40px]">
      <div className="mr-container">
        <div>
          <div className="text-center">
            <h6 className="font-semibold text-[#3EA99F] font-primary text-[30px] mb-3">
              {subTitle}
            </h6>
            <h2 className="mr-xl:text-[45px] font-bold mb-5 font-primary">
              {title}
            </h2>
            <p className="text-lg mb-3 mx-auto text-[16px] xs:text-[15px]">
              {desc}
            </p>
          </div>
        </div>
        <swiper-container
          init={false}
          ref={swiperElRef}
          centered-slides="true"
          autoplay-delay="3000"
          loop="true"
          pagination="true"
          pagination-clickable="true"
          autoHeight="true"
        >
          {slides &&
            slides.map((testimonial, index) => (
              <swiper-slide key={index}>
                <div>
                  <div className="w-[90%] m-auto pt-10">
                    <div className="card testimonialscard">
                      <Image
                        quality={95}
                        src="/images/newimg/trust.png"
                        width={80}
                        height={80}
                        className="mb-2"
                        priority
                      />
                      <Image
                        quality={95}
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        priority={true}
                      />
                      <div className="header">
                        <div className="name">{testimonial.name}</div>
                      </div>
                      <div className="quote-container">
                        <p className="quote text-[9px]">{testimonial.quote}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
