import React, { useRef, useState } from 'react'
import { MRCTA } from '..'
import Image from 'next/image'
// Images
import Audio1 from "media/assets/audiobook/audio-book-1.png"
import Audio2 from "media/assets/audiobook/audio-book-2.png"
import Audio3 from "media/assets/audiobook/audio-book-3.png"
import play from 'media/assets/audiobook/playIcon.png'
import pause from 'media/assets/audiobook/pauseIcon.png'
import Link from 'next/link'

const AudioBooks = () => {
    const [isPlayingOne, setIsPlayingOne] = useState(false);
    const [isPlayingTwo, setIsPlayingTwo] = useState(false);
    const [isPlayingThree, setIsPlayingThree] = useState(false);

    const audioRefOne = useRef(null);
    const audioRefTwo = useRef(null);
    const audioRefThree = useRef(null);

    const togglePlayOne = () => {
        const audio = audioRefOne.current;
        if (isPlayingOne) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlayingOne(!isPlayingOne);
    };

    const togglePlayTwo = () => {
        const audio = audioRefTwo.current;
        if (isPlayingTwo) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlayingTwo(!isPlayingTwo);
    };

    const togglePlayThree = () => {
        const audio = audioRefThree.current;
        if (isPlayingThree) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlayingThree(!isPlayingThree);
    };
    return (
        <section id="portfolio" className='bg-[#F3F3F3] py-[50px] mr-md:py-[80px]'>
            <div className="mr-container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex-col mr-lg:flex-row flex items-center justify-between pb-5">
                            <div className="txt">
                                <h2 className='text-[25px] mr-md:text-[30px] mr-lg:text-[40px] font-[600] mr-md:leading-[70px] secondary pb-2'>Listen to Our <span className='text-[#3EA99F]'> Audiobook Creations</span></h2>
                                <p className='text-[14px] mr-md:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-4 mr-xl:mr-5 mr-xl:pr-5'>Enjoy samples of top-quality audiobooks from successful authors and enhance your listening experience with our expertly produced titles.</p>
                            </div>
                            <div className="btn mr-auto mr-lg:mr-0 mr-lg:ml-auto block">
                                <div className="w-full mr-md:w-max">
                                    <MRCTA link="tel:8556666675" classes="mt-5 w-full !px-12 !font-medium secondary" animation="__animatedPing" text="Call Us Now" />
                                </div>
                            </div>
                        </div>
                        <div className="books border-t-2 pt-6 pb-6 flex items-center gap-y-10">
                            <div className="image !w-full mr-md:!w-[35%] mr-lg:!w-[26%] mr-xl:!w-[20%] mr-2xl:!w-[17%] !p-0 relative">
                                <Image src={Audio1} alt='PSB' />
                                {/* <Link href="javascript:;" className="cursor-pointer playIcon absolute right-[20px] top-0 mr-md:hidden block">
                                    <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                                </Link> */}
                            </div>
                            <div className="content w-full mr-md:w-[70%] mr-lg:w-[65%]">
                                {/* <div className="flex items-center gap-x-14">
                                    <p className='secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181]'>Podcastermaster</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">30 min</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">Episode 08</p>
                                </div> */}
                                <h3 className='text-[25px] leading-[45px] font-semibold pb-2'>Whispers in the Wind</h3>
                                <p className='text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2 mr-xl:mr-5 mr-xl:pr-5'>A haunting mystery that follows detective Laura Carter as she unravels secrets in a small town, where every whisper could be the key to solving a chilling murder.</p>
                                <div className="btn">
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA link='javascript:void(Tawk_API.toggle())' classes="mt-5 w-full !font-[300] secondary" animation="__animatedPing" text="Let’s Connect!" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10%] mr-md:flex hidden mr-lg:w-[18%] items-end justify-end pr-[20px]'>
                                <audio ref={audioRefOne} src="/audios/Dance-Two-Hearts.mp3" type="audio/mpeg" />
                                <button onClick={togglePlayOne}>
                                    {isPlayingOne ? <Image src={pause} width="50" height="50" /> : <Image src={play} width="50" height="50" />}
                                </button>
                            </div>
                        </div>
                        <div className="books border-t-2 pt-6 pb-6 flex items-center gap-y-10">
                            <div className="image !w-full mr-md:!w-[35%] mr-lg:!w-[26%] mr-xl:!w-[20%] mr-2xl:!w-[17%] !p-0 relative">
                                <Image src={Audio2} alt='PSB' />
                                {/* <Link href="javascript:;" className="cursor-pointer playIcon absolute right-[20px] top-0 mr-md:hidden block">
                                    <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                                </Link> */}
                            </div>
                            <div className="content w-full mr-md:w-[70%] mr-lg:w-[65%]">
                                {/* <div className="flex items-center gap-x-14">
                                    <p className='secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181]'>Podcastermaster</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">30 min</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">Episode 08</p>
                                </div> */}
                                <h3 className='text-[25px] leading-[45px] font-semibold pb-2'>Rise of the Phoenix</h3>
                                <p className='text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2 mr-xl:mr-5 mr-xl:pr-5'>An epic fantasy adventure where young mage Elara embarks on a perilous journey to revive the mythical Phoenix, battling dark forces and uncovering her true destiny along the way.</p>
                                <div className="btn">
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA link='javascript:void(Tawk_API.toggle())' classes="mt-5 w-full !font-[300] secondary" animation="__animatedPing" text="Let’s Connect!" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10%] mr-md:flex hidden mr-lg:w-[18%] items-end justify-end pr-[20px]'>
                                <audio ref={audioRefTwo} src="/audios/The-Quest-For-Lost-Treasures.mp3" type="audio/mpeg" />
                                <button onClick={togglePlayTwo}>
                                    {isPlayingTwo ? <Image src={pause} width="50" height="50" /> : <Image src={play} width="50" height="50" />}
                                </button>
                            </div>
                        </div>
                        <div className="books border-t-2 pt-6 pb-6 flex items-center gap-y-10">
                            <div className="image !w-full mr-md:!w-[35%] mr-lg:!w-[26%] mr-xl:!w-[20%] mr-2xl:!w-[17%] !p-0 relative">
                                <Image src={Audio3} alt='PSB' />
                                {/* <Link href="javascript:;" className="cursor-pointer playIcon absolute right-[20px] top-0 mr-md:hidden block">
                                    <Image src={playIcon} alt='PSB' width={60} height={60} className='ml-auto' />
                                </Link> */}
                            </div>
                            <div className="content w-full mr-md:w-[70%] mr-lg:w-[65%]">
                                {/* <div className="flex items-center gap-x-14">
                                    <p className='secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181]'>Podcastermaster</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">30 min</p>
                                    <p className="secondary text-[15px] mr-lg:text-[18px] leading-[26px] mr-lg:leading-[50px] font-[300] text-[#818181] flex items-center gap-x-2 mr-md:gap-x-4 relative mr-md:before:content-[''] mr-md:before:absolute mr-md:before:bg-[#6DDEFF] mr-md:before:w-[9px] mr-md:before:h-[9px] mr-md:before:rounded-full mr-md:before:top-[50%] mr-md:before:translate-y-[-50%] mr-md:before:left-[-45%]">Episode 08</p>
                                </div> */}
                                <h3 className='text-[25px] leading-[45px] font-semibold pb-2'>The Silent Witness</h3>
                                <p className='text-[14px] mr-lg:text-[16px] leading-[26px] font-[300] secondary mr-lg:pb-2 mr-xl:mr-5 mr-xl:pr-5'>A gripping true crime novel that delves into the mind of a lone survivor of a brutal attack, whose silent testimony holds the power to bring a dangerous criminal to justice.</p>
                                <div className="btn">
                                    <div className="w-full mr-md:w-max">
                                        <MRCTA link='javascript:void(Tawk_API.toggle())' classes="mt-5 w-full !font-[300] secondary" animation="__animatedPing" text="Let’s Connect!" />
                                    </div>
                                </div>
                            </div>
                            <div className='w-[10%] mr-md:flex hidden mr-lg:w-[18%] items-end justify-end pr-[20px]'>
                                <audio ref={audioRefThree} src="/audios/The-Story-of-a-Lifetime.mp3" type="audio/mpeg" />
                                <button onClick={togglePlayThree}>
                                    {isPlayingThree ? <Image src={pause} width="50" height="50" /> : <Image src={play} width="50" height="50" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AudioBooks
