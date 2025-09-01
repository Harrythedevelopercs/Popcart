import dynamic from "next/dynamic";

const Header = dynamic(() => import("./Header"));
const Hero = dynamic(() => import("./Hero"));
const CTA = dynamic(() => import("./CTA"));
const BrandsLogos = dynamic(() => import("./BrandsLogos"));
const AutoScroll = dynamic(() => import("./Sliders/AutoScroll"));
const ClientsImage = dynamic(() => import("./ClientsImage"));
const JourneyForm = dynamic(() => import("./JourneyForm"));
const BestSellerBooks = dynamic(() => import("./BestSellerBooks"));
const CtaSection = dynamic(() => import("./CtaSection"));
const Packages = dynamic(() => import("./Packages"));
const Testimonials = dynamic(() => import("./Testimonials"));
const Process = dynamic(() => import("./Process"));
const SelfPublishing = dynamic(() => import("./SelfPublishing"));
const JourneyStart = dynamic(() => import("./JourneyStart"));
const MadeEasy = dynamic(() => import("./MadeEasy"));
const ContactForm = dynamic(() => import("./ContactForm"));
const Footer = dynamic(() => import("./Footer"));

export {
  Header,
  Hero,
  CTA,
  BrandsLogos,
  AutoScroll,
  ClientsImage,
  JourneyForm,
  BestSellerBooks,
  Packages,
  CtaSection,
  Testimonials,
  Process,
  SelfPublishing,
  JourneyStart,
  MadeEasy,
  ContactForm,
  Footer,
};
