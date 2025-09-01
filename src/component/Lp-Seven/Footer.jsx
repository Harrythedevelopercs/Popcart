// Next
import Image from "next/image"
// Media
import Banner from "media/lp-seven/footer-bg.webp"
import Logo from "media/assets/images/logo.png"
import Logos from "media/lp-seven/customer-review.png"
import Visa from "media/lp-seven/visa.png"

const Footer = () => {
  return (
    <footer>
      <div className="relative mr-md:py-[60px] py-[50px]">
        <Image
          src={Banner}
          alt="banner"
          className="absolute -z-10 inset-0 w-full h-full object-cover object-center"
        />
        <div className="mr-container">
          <div className="mr-md:max-w-[780px] mx-auto text-center text-white">
            <Image
              src={Logo}
              alt="logo"
              className="brightness-0 invert mr-md:w-[275px] w-[200px] mx-auto mb-[30px]"
            />
            <p className="mr-md:text-base text-sm leading-normal font-normal pb-[1rem]">
              Broadway Publishers is a registered trademark holder for all
              its logos and graphics associated with services. All other
              business titles, brands, or trademarks stated on this website do
              not belong to them but are nonetheless present in order that
              customers may know about Broadway Publishers Books writing
              projects. They simply carry out research before providing you with
              information related to your desired topic.
            </p>
            <p className="mr-md:text-base text-sm leading-normal font-normal pb-[1rem]">
              The client gets full ownership after the successful completion of
              the service. However, we retain the right to revoke it at any time
              if necessary, so please take care when using our content online.
            </p>
            <div>
              <div className="flex flex-wrap gap-y-5 items-center mr-sm:justify-between justify-center mt-[20px]">
                <ul className="grid grid-cols-3 gap-x-3">
                  <li className="flex items-center justify-center w-[40px] h-[37px] bg-black rounded-full">
                    <a href="https://www.linkedin.com/" target="_blank">
                      <svg
                        width={25}
                        height={25}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="linkedin"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="flex items-center justify-center w-[40px] h-[37px] bg-black rounded-full">
                    <a
                      href="https://www.facebook.com/bestsellingpublisher"
                      target="_blank"
                    >
                      <svg
                        width={25}
                        height={25}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="facebook"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li className="flex items-center justify-center w-[40px] h-[37px] bg-black rounded-full">
                    <a href="https://twitter.com/bspublisher" target="_blank">
                      <svg
                        width={25}
                        height={25}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="twitter"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
                <Image src={Logos} alt="clientsLogos" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#8f181b] py-[20px] text-white">
        <div className="mr-container">
          <div className="flex flex-wrap gap-y-5 items-center mr-md:justify-between justify-center">
            <span className="block">
              All Rights Reserved 2025 - Broadway Publishers
            </span>
            <Image src={Visa} alt="payment_methods" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
