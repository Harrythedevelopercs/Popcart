import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import TOPHEADER1 from "./topHeader1";

import Logo from "media/assets/images/logo.png";
import TelIcon from "media/assets/sikander/telicon.png";
import Ghostwriting from "media/assets/images/newimg/ghostwriting.png";
import SeoWriting from "media/assets/images/newimg/SEO-Writing.png";
import ArticleWriting from "media/assets/images/newimg/Article-Writing.png";
import MagazineWriting from "media/assets/images/newimg/magazine-writing.png";
import WebCopyWriting from "media/assets/images/newimg/Web-Copy-Writing.png";
import PressRelease from "media/assets/images/newimg/Press-Release.png";
import ScriptWriting from "media/assets/images/newimg/Script-Writing.png";
import BookEditing from "media/assets/images/newimg/book-editing.svg";
const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true); // Set to false initially

  // Function to toggle submenu visibility
  const toggleSubMenu = () => {
    setShowSubMenu((prevShowSubMenu) => !prevShowSubMenu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      {/* <TOPHEADER1 /> */}
      <div className="font-secondary px-0 sm:!px-2 xs:!px-2 pt-4">
        <header className="bg-white relative z-30">
          <div className="mr-container">
            <div className="items-center justify-between gap-x-4 flex grid-cols-2 grid-rows-1">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-indigo-500">
                  <Image
                    quality={95}
                    src={Logo}
                    alt=" Broadway Publishers Ghostwriting logo"
                    width={180}
                    height={50}
                    priority={true}
                  />
                </Link>
              </div>
              <nav className="flex space-x-4 text-[16px] text-[#1d1d1f] font-medium">
                <ul
                  id="menu"
                  className={`${
                    menuOpen
                      ? "transform translate-x-0 mr-2xl:!flex mr-xl:!flex mr-lg:!hidden md:hidden xs:hidden sm:hidden"
                      : "flex items-center transition-transform duration-500  ease-in-out translate-x-0 md:translate-x-0 right-0 xs:text-white sm:text-white md:text-white mr-lg:bg-[#2d2d2d] md:bg-[#2d2d2d] sm:bg-[#2d2d2d] mr-lg:!z-50 md:z-50 sm:z-50 md:text-[18px] xs:text-[18px] sm:text-[18px] mr-2xl:!hidden mr-xl:!hidden mr-lg:!block md:block xs:block sm:block xs:fixed sm:fixed md:fixed mr-lg:!fixed xs:top-0 sm:top-0 md:top-0 mr-lg:top-0 sm:py-16 md:py-16 mr-lg:!py-16 mr-lg:!px-10 md:px-10 sm:px-10 mr-2xl:!w-full mr-xl:!w-full mr-lg:!w-[70%] md:w-[70%] mr-lg:!h-full md:h-full xs:w-[320px] xs:h-full sm:w-[300px] sm:h-full xs:right-0 md:right-0 mr-lg:right-0 xs:px-10 leading-9 xs:!p-5 xs:bg-[#2d2d2d] xs:z-50 text-[#1d1d1f] "
                  } flex items-center 2xl:gap-x-5 xl:gap-x-5 lg:gap-x-4 gap-x-3 text-[#1d1d1f] cursor-default overflow-visible sm:!overflow-hidden xs:!overflow-hidden sm:!overflow-y-scroll xs:!overflow-y-scroll `}
                >
                  <li className="xl:hidden lg:hidden mr-2xl:!hidden mr-xl:!hidden mr-lg:!block sm:z-90 xs:z-90 fixed top-4 right-6">
                    <Link
                      href="javascript:void(0)"
                      className="text-right mr-2xl:!text-black mr-xl:!text-black  mr-lg:!text-white text-white text-4xl"
                      onClick={toggleMenu}
                    >
                      &times;
                    </Link>
                  </li>
                  {[
                    ["Home", "/"],
                    ["About", "/about-us"],
                  ].map(([title, url], i) => (
                    <li
                      key={i}
                      className="mr-lg:!mb-4 md:mb-3 sm:mb-3 xs:mb-3 relative"
                    >
                      <Link
                        href={url}
                        className={`list mr-2xl:!text-black mr-xl:!text-black  mr-lg:!text-white md:!text-white sm:!text-white text-black xs:!text-white mr-2xl:text-[15px] mr-xl:text-[14px] mr-lg:text-xl mr-md:text-xl mr-sm:text-xl xs:text-[20px] font-medium mr-2xl:font-semibold before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-3px] before:h-[3px] before:bg-[#3EA99F] before:translate-x-[-100%] before:invisible hover:before:visible hover:before:translate-x-0 before:transition-transform before:duration-300 before:hidden mr-xl:before:block`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                  <li className="relative mr-lg:!mb-4 md:mb-3 sm:mb-3 xs:mb-3 group py-0 hover:text-[#00C0E4] mr-2xl:text-[15px] mr-xl:text-[14px] mr-lg:text-xl mr-md:text-xl mr-sm:text-xl xs:text-[20px] font-medium mr-2xl:font-semibold z-50">
                    <button
                      className="hover:opacity-50 cursor-default mr-2xl:!text-black mr-xl:!text-black  mr-lg:!text-white text-black md:!text-white sm:!text-white xs:!text-white font-medium mr-2xl:font-semibold"
                      aria-haspopup="true"
                    >
                      Writing Services
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-2 -mr-1 inline"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>
                    <div className="absolute lg:-left-48 top-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 group-hover:transform z-50 min-w-[560px] xs:min-w-[350px] sm:min-w-[350px]">
                      <div className="relative 2xl:left-[50px] lg:left-[200px] md:left-[20px] xs:left-0 xs:w-[80%] top-4 p-6 bg-white rounded-xl shadow-xl w-full md:max-w-[400px] xs:max-w-[300px] sm:max-w-[300px] transform xs:mb-10">
                        <div className="w-10 h-10 left-[-170px] bg-white transform rotate-45 absolute top-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>
                        <div className="relative z-50">
                          <div className="grid grid-cols-2 gap-6 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1">
                            <div>
                              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                The Suite
                              </p>
                              <ul className="mt-3 text-[15px]">
                                {/* <li>
                                  <Link href="/ghostwriting" className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600">

                                    <span>
                                      <Image quality={95} className='filter brightness-50 mr-2 block sm:hidden xs:hidden' src={Ghostwriting} width={40} height={40} alt='ghost writing'  priority/>
                                    </span>
                                    <span>
                                      Ghostwriting
                                    </span>
                                  </Link>
                                </li> */}
                                <li>
                                  <Link
                                    href="/seo-content-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    {" "}
                                    <span>
                                      <Image
                                        quality={95}
                                        className="filter brightness-50 mr-2 block sm:hidden xs:hidden"
                                        src={SeoWriting}
                                        width={40}
                                        height={40}
                                        alt="SEO writing"
                                        priority={true}
                                      />
                                    </span>
                                    <span>SEO Writing</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/article-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    <span>
                                      <Image
                                        quality={95}
                                        className="filter brightness-50 mr-2 block sm:hidden xs:hidden"
                                        src={ArticleWriting}
                                        width={40}
                                        height={40}
                                        alt="Article writing"
                                        priority={true}
                                      />
                                    </span>
                                    <span>Article Writing</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/magazine-writing"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    <span>
                                      <Image
                                        quality={95}
                                        className="filter brightness-50 mr-2 block sm:hidden xs:hidden"
                                        src={MagazineWriting}
                                        width={40}
                                        height={40}
                                        alt="magazine writing"
                                        priority={true}
                                      />
                                    </span>
                                    <span>Magazine Writing</span>
                                  </Link>
                                  <Link
                                    href="/book-editing"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    <span>
                                      <Image
                                        quality={95}
                                        className="filter !brightness-0 invert-50 mr-2 block sm:hidden xs:hidden"
                                        src={BookEditing}
                                        width={40}
                                        height={40}
                                        alt="book editing"
                                        priority={true}
                                      />
                                    </span>
                                    <span>Book Editing</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                                Extensions
                              </p>
                              <ul className="mt-4 text-[15px]">
                                <li>
                                  <Link
                                    href="/web-copywriting-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    <span>
                                      <Image
                                        quality={95}
                                        className="filter brightness-50 mr-2 block sm:hidden xs:hidden"
                                        src={WebCopyWriting}
                                        width={40}
                                        height={40}
                                        alt="Web copy writing"
                                        priority={true}
                                      />
                                    </span>
                                    <span>Web Copy Writing</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/press-release-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    <span>
                                      <Image
                                        quality={95}
                                        className="filter brightness-50 mr-2 block sm:hidden xs:hidden"
                                        src={PressRelease}
                                        width={40}
                                        height={40}
                                        alt="press release"
                                        priority={true}
                                      />
                                    </span>
                                    <span>Press Release</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/script-writing-services"
                                    className="flex justify-start align-middle items-center p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-indigo-600"
                                  >
                                    <span>
                                      <Image
                                        quality={95}
                                        className="filter brightness-50 mr-2 block sm:hidden xs:hidden"
                                        src={ScriptWriting}
                                        width={40}
                                        height={40}
                                        alt="script writing"
                                        priority={true}
                                      />
                                    </span>
                                    <span>Script Writing</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  {[
                    ["Genre", "/genre"],
                    ["Marketing", "/book-marketing"],
                    ["Publication", "/book-publishing-services"],
                    ["Printing", "/book-printing"],
                    ["Cover Design", "/book-cover-design"],
                    ["Case Studies", "/case-studies"],
                    ["Contact Us", "/contact-us"],
                  ].map(([title, url], i2) => (
                    <li
                      key={i2}
                      className="mr-lg:!mb-4 md:mb-3 sm:mb-3 xs:mb-3 relative"
                    >
                      <Link
                        href={url}
                        className={`list mr-2xl:!text-black mr-xl:!text-black  mr-lg:!text-white md:!text-white sm:!text-white text-black xs:!text-white mr-2xl:text-[15px] mr-xl:text-[14px] mr-lg:text-xl mr-md:text-xl mr-sm:text-xl xs:text-[20px] font-medium mr-2xl:font-semibold before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-3px] before:h-[3px] before:bg-[#3EA99F] before:translate-x-[-100%] before:invisible hover:before:visible hover:before:translate-x-0 before:transition-transform before:duration-300 before:hidden mr-xl:before:block`}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                  <li className="mr-lg:!mb-4 md:mb-3 sm:mb-3 xs:mb-3 block sm:hidden xs:hidden">
                    <Link
                      href="tel:855-666-6675"
                      className={`text-[15px] mr-2xl:text-[17px] transition-all ease-in-out duration-300 group xs:text-[20px] font-secondary border-2 border-[#3EA99F] bg-[#3EA99F] py-1 px-2 text-[#3EA99F] flex items-center gap-x-3 font-[500] hover:bg-transparent `}
                    >
                      <Image
                        src={TelIcon}
                        width={15}
                        height={15}
                        alt="Amazon Book Publishing"
                        className="transition-all ease-in-out duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0"
                        priority={true}
                      />
                      <span className=" text-white group-hover:!text-black">
                        855-666-6675
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center mr-2xl:hidden mr-xl:hidden mr-lg:block md:block xs:block sm:block z:-1">
                <button
                  className={`text-black text-4xl font-bold opacity-70 hover:opacity-100 duration-300 ${
                    menuOpen ? "&times;" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  &#9776;
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
