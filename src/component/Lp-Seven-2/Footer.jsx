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
                <Image src={Logos} alt="clientsLogos" className="mx-auto" />
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
