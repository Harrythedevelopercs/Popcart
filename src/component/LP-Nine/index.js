import dynamic from "next/dynamic"

const Header = dynamic(() => import("./Header"))
const CTA = dynamic(() => import("./CTA"))
const Hero = dynamic(() => import("./Hero"))
const CountdownTimer = dynamic(() => import("./CountdownTimer"))
const Authors = dynamic(() => import("./Authors"))
const About = dynamic(() => import("./About"))
const Portfolio = dynamic(() => import("./Portfolio"))
const Features = dynamic(() => import("./Features"))
const BestSeller = dynamic(() => import("./BestSeller"))
const Reviews = dynamic(() => import("./Reviews"))
const Brands = dynamic(() => import("./Brands"))
const Footer = dynamic(() => import("./Footer"))

export {
  Header,
  CTA,
  Hero,
  CountdownTimer,
  Authors,
  About,
  Portfolio,
  Features,
  BestSeller,
  Reviews,
  Brands,
  Footer,
}
