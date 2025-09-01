import React, { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons
} from '@/component/LP-Two/EmblaSliderArrows/EmblaSliderArrows';
import styles from "./styles.module.css";
import Image from 'next/image';
import Avater from "media/imageAR/avater/1.png";
import Avater2 from "media/imageAR/avater/2.png";
import Avater3 from "media/imageAR/avater/3.png";
import Avater4 from "media/imageAR/avater/4.png";
import Avater5 from "media/imageAR/avater/5.png";
import Avater6 from "media/imageAR/avater/6.webp";
import Player from '@vimeo/player';

const MRVideoTestimonialslp = ({
    subtitle = "Publishing Service Reviews",
    title = "From Authors of All Genres",
    desc = "From fiction to memoirs, authors trust us as their go-to publishing partners and children book publishers.",
    colorChange
}) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    const [sectionVisible, setSectionVisible] = useState(false);
    const sectionRef = useRef(null);

    const playerRefs = useRef([]);
    const iframeRefs = useRef([]);


    const testimonialsData = [
        ["969194638", "I chose Broadway Publishers for their complete package. They refined my manuscript, editors polished it to perfection, and the marketing team of got my book into the hands of readers. Their cohesive efforts made my book a huge success.", Avater2, "Christopher Ray"],
        ["969194794", "I had my debut novel published by Broadway Publisherss. Their experience exceeded all my expectations. Their team guided me at every step of the publishing process. They truly cared about my vision for the book and made sure it is exactly as I dreamed it would.", Avater, "Frederick Huff"],
        ["969194720", "I just want to say that their marketing team is fantastic. I published my self-help with Broadway Publishers. They crafted a marketing plan that resonated with my target audience. Their team handled the book signing campaigns, social media. Thanks to their marketing strategies, my book became a best seller.", Avater3, "Eric Miller"],
        ["969194426", "Amazed by their editors’ attention to detail. Every suggestion they made was aimed at clarifying and enhancing my argument whilst making sure that the original tone and intent of my idea remains intact. ", Avater4, "Brandy Hughes"],
        ["969194554", "As an entrepreneur, I wanted to pen my journey but never had the time. Broadway Publishers’s writing and editing team captured my voice and my passion for business in the book. The final manuscript really felt like my story. ", Avater5, "Max"],
        ["1094744787", "I just want to say that working with Broadway Publishers was an absolute delight. As a first-time author, their team guided me through every step—from designing a cover that captured my story to making the entire publishing process smooth and stress-free.", Avater6, "Roberta Smith"]
    ];


    // Lazy-load section visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setSectionVisible(true);
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Setup Vimeo Players once visible
    useEffect(() => {
        if (!sectionVisible) return;

        // Clear old players
        playerRefs.current.forEach(p => p.destroy?.());
        playerRefs.current = [];

        iframeRefs.current.forEach((ref, index) => {
            if (ref) {
                const player = new Player(ref);
                player.on("play", () => {
                    playerRefs.current.forEach((p, i) => {
                        if (i !== index) {
                            p.pause().catch(() => { });
                        }
                    });
                });
                playerRefs.current.push(player);
            }
        });

        return () => {
            playerRefs.current.forEach(p => p.unload().catch(() => { }));
            playerRefs.current = [];
        };
    }, [sectionVisible]);

    // Pause all videos on carousel navigation
    const pauseAllVideos = () => {
        playerRefs.current.forEach((player) => {
            player.pause().catch(() => { });
        });
    };

    const handleNextClick = () => {
        pauseAllVideos();
        onNextButtonClick();
    };

    const handlePrevClick = () => {
        pauseAllVideos();
        onPrevButtonClick();
    };

    return (
        // <section className='font-sans' ref={sectionRef}>
        //     <div className='relative mr-lg:py-[80px] mr-md:py-[60px] py-[40px]'>
        //         <div className="mr-container">
        //             <div className="mr-sm:text-center text-justify">
        //                 <span className={`block mr-lg:text-[30px] mr-md:text-[25px] text-xl leading-tight font-semibold ${colorChange ? "text-[#8f181b]" : "text-primary-100"}`}>
        //                     {subtitle}
        //                 </span>
        //                 <h2 className="mr-xl:text-[45px] mr-lg:text-[40px] mr-md:text-[30px] text-[25px] leading-tight font-semibold mt-2 mb-3">{title}</h2>
        //                 <p className="mr-md:text-base text-sm mr-lg:w-[70%] mx-auto leading-tight font-normal">{desc}</p>
        //             </div>
        //             <div className={styles.embla}>
        //                 <div className="overflow-hidden" ref={emblaRef}>
        //                     <div className={styles.embla__container}>
        //                         {testimonialsData.map(([videoId, desc, img, name], i) => (
        //                             <div className={styles.embla__slide} key={i}>
        //                                 <div className={`rounded-[20px] border-[#C4C4C4] border overflow-hidden shadow-md ${colorChange ? styles.colorChange : ''}`}>
        //                                     <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        //                                         {sectionVisible ? (
        //                                             <iframe
        //                                                 ref={(el) => (iframeRefs.current[i] = el)}
        //                                                 src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=video-${i}&app_id=58479`}
        //                                                 allow="autoplay; fullscreen; picture-in-picture"
        //                                                 frameBorder="0"
        //                                                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        //                                                 title={`video-${i}`}
        //                                             ></iframe>
        //                                         ) : (
        //                                             <div style={{ background: '#e0e0e0', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#777' }}>
        //                                                 <p>Loading Video...</p>
        //                                             </div>
        //                                         )}
        //                                     </div>
        //                                     <div className='py-[30px] px-[25px]'>
        //                                         <p className='text-[16px] leading-normal font-normal mr-2xl:min-h-[145px] mr-xl:min-h-[168px] mr-lg:min-h-[215px] mr-md:min-h-[170px] mr-sm:min-h-[120px] min-h-[195px]'>{desc}</p>
        //                                         <div className='flex items-center gap-x-5 mr-2xl:mt-4 mt-4'>
        //                                             <Image src={img} alt='client' className={`${styles.imgBox} block`} />
        //                                             <div>
        //                                                 <h4 className='text-2xl font-semibold leading-tight text-[#000]'>{name}</h4>
        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </div>
        //                 <div className={styles.embla__controls}>
        //                     <div className={styles.embla__buttons}>
        //                         <PrevButton onClick={handlePrevClick} disabled={prevBtnDisabled} colorChange={colorChange} />
        //                         <NextButton onClick={handleNextClick} disabled={nextBtnDisabled} colorChange={colorChange} />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <></>
    );
};

export default MRVideoTestimonialslp;
