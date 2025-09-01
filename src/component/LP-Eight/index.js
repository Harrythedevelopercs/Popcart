// Next
import dynamic from "next/dynamic"

import CTA from "./CTA"
const BookPromotionHeader = dynamic(() => import("./Header"))
const BookPromotionFooter = dynamic(() => import("./Footer"))
const Hero = dynamic(() => import("./Hero"))
const Autoplay = dynamic(() => import("./slider/autoplay/Autoplay"))
const Autoscroll = dynamic(() => import("./slider/autoscroll/Autoscroll"))
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./slider/sliderarrows/SliderArrows"
const ClientLogos = dynamic(() => import("./ClientLogos"))
const Qualify = dynamic(() => import("./Qualify"))
const PromoteBook = dynamic(() => import("./PromoteBook"))
const WhyChoose = dynamic(() => import("./WhyChoose"))
const Pricing = dynamic(() => import("./Pricing"))
const Portfolio = dynamic(() => import("./Portfolio"))
const BrandLogos = dynamic(() => import("./BrandLogos"))
const Process = dynamic(() => import("./Process"))
const ContactForm = dynamic(() => import("./ContactForm"))
const FrequentlyAskedQuestions = dynamic(() => import("./FAQs"))
const Reviews = dynamic(() => import("./Reviews"))
const Popup = dynamic(() => import("./Popup/Popup"))

export {
  CTA,
  BookPromotionHeader,
  BookPromotionFooter,
  Hero,
  Autoplay,
  Autoscroll,
  PrevButton,
  NextButton,
  usePrevNextButtons,
  ClientLogos,
  Qualify,
  PromoteBook,
  WhyChoose,
  Pricing,
  Portfolio,
  BrandLogos,
  Process,
  ContactForm,
  FrequentlyAskedQuestions,
  Reviews,
  Popup,
}
