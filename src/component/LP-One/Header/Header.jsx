import { MRCTA } from "@/component"
import Link from "next/link"
import Image from "next/image"

// Images 
import Mail from 'media/images/icons/mail.svg'
import Facebook from 'media/images/icons/facebook.svg'
import Instagram from 'media/images/icons/instagram.svg'
import XIcon from 'media/images/icons/x-icon.svg'
import logo from 'media/images/logo.png';
import CTA from "../CTA/CTA"

const Header = () => {
    return (
        <>
            <div className="top-bar bg-[#3EA99F] py-3">
                <div className="mr-container">
                    <div className="flex items-center justify-center mr-sm:justify-between">
                        <div className="email mr-sm:block hidden">
                            <a href="mailto:info@broadwaypublishers.com" className="flex items-center gap-x-2">
                                <Image src={Mail} alt="Mail-Icon" />
                                <span className="text-[16px] text-white leading-[19px]">info@broadwaypublishers.com</span>
                            </a>
                        </div>
                        <div className="social_media flex items-center gap-3">
                            <a href="https://www.facebook.com/bestsellingpublisher" target="_blank" rel="noopener noreferrer">
                                <Image src={Facebook} alt="SocialMedia" width={30} height={30} />
                            </a>
                            <a href="https://www.instagram.com/bspublisher/" target="_blank" rel="noopener noreferrer">
                                <Image src={Instagram} alt="SocialMedia" width={30} height={30} />
                            </a>
                            <a href="https://twitter.com/bspublisher" target="_blank" rel="noopener noreferrer">
                                <Image src={XIcon} alt="SocialMedia" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <header className="pb-4 pt-4 mr-sm:pt-5 mr-lg:h-[95px]">
                <div className="mr-container">
                    <div className="flex items-center justify-center mr-sm:justify-between">
                        <div className="logo">
                            <Link href="/">
                                <Image quality={100}  src={logo} alt='Best_Publisher' width={200} height={67} />
                            </Link>
                        </div>
                        <div className="links">
                            <ul className="flex items-center gap-x-8 mr-lg:gap-x-5 mr-xl:gap-x-14">
                                <li className="mr-md:block hidden">

                                    <CTA
                                        text="(800)781-9093"
                                        icon="/images/icons/tell.svg"
                                        imageCss="!w-[35px] !h-[35px]"
                                        link="tel:855-666-6675"
                                    />
                                </li>
                                <li className="mr-md:block hidden">
                                    <CTA
                                        text="Live Chat"
                                        link="javascript:;"
                                        link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                                        imageCss="!w-[40px] !h-[40px]"
                                        icon="/images/icons/live-chat.svg"
                                    />
                                </li>
                                <li className="mr-sm:block hidden">
                                    <MRCTA
                                        text="Let's discuss"
                                        classes="hover:bg-secondary-100 rounded-[5px] !h-[45px]"
                                        link="javascript:;" handle="parent.LC_API.open_chat_window();return false;"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header