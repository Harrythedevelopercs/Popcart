// Next
import Image from "next/image"
import Link from "next/link"
// Media
import Logo from "media/assets/images/logo.png"
import CallIcon from "media/new-lp/lp1/call.png"
import MailIcon from "media/new-lp/lp1/mail.png"
import TopIcon from "media/new-lp/lp1/top-scroll.png"
export default function Footer() {
  return (
    <footer>
      <div className="bg-[#e6eff6] py-[40px] text-[#36576d] text-[15px]">
        <div className="mr-container">
          <div className="grid mr-md:grid-cols-2 gap-y-8 grid-cols-1 items-end">
            <div className="max-w-[410px]">
              <a href="#" className="text-decoration-none block mb-5">
                <Image
                  priority
                  quality={100}
                  src={Logo}
                  alt="Broadway Publishers"
                  width={180}
                  height={50}
                ></Image>
              </a>
              <p className="text-base leading-normal">
                Broadway Publishers has brilliant writers to accommodate all
                genres, from fiction novels to business books, memoirs to
                self-help guides. We also provide turnkey publishing services
                for authors globally.
              </p>
              <div className="flex items-center text-[#5f8ead] gap-x-2 mt-4">
                <Link
                  href="/privacy-policy"
                  className="text-base leading-tight font-normal"
                >
                  Privacy Policy
                </Link>
                <span className="text-black">/</span>
                <Link
                  href="/privacy-policy"
                  className="text-base leading-tight font-normal"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="mr-md:ms-auto">
              <a
                href="tel:+18556666675"
                className="text-decoration-none text-base leading-tight flex items-center gap-x-2 mb-5"
              >
                <Image src={CallIcon} alt="icon" className="shrink-0" />
                <span>(855) 666-6675</span>
              </a>
              <a
                href="tel:+12135563626"
                className="text-decoration-none text-base leading-tight flex items-center gap-x-2 mb-5"
              >
                <Image src={CallIcon} alt="icon" className="shrink-0" />
                <span>512 762 2397</span>
              </a>
              <a
                href="mailto:info@broadwaypublishers.com"
                className="text-decoration-none text-base leading-tight flex items-center gap-x-2 mb-5"
              >
                <Image src={MailIcon} alt="icon" className="shrink-0" />
                <span>info@broadwaypublishers.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#5f8ead] text-[15px] py-[20px]">
        <div className="mr-container">
          <div className="relative z-10">
            <a href="#" className="absolute right-0 top-[-40px]">
              <Image src={TopIcon} alt="top_icon" />
            </a>
            <span className="block text-base leading-tight font-normal text-white">
              Broadway Publishers. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
