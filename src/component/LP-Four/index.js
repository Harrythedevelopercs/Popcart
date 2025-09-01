import dynamic from "next/dynamic"

const Header = dynamic(() => import("./Header"))
const Hero = dynamic(() => import("./Hero"))
const Hero3dSlider = dynamic(() => import("./Hero3dSlider"))
const AutoPlaySlider = dynamic(() => import("./AutoPlaySlider"))
const CaseStudies = dynamic(() => import("./CaseStudies"))
const StandOut = dynamic(() => import("./StandOut"))
const Portfolio = dynamic(() => import("./Portfolio"))
const Services = dynamic(() => import("./Services"))
const SecondaryForm = dynamic(() => import("./SecondaryForm"))
const Methods = dynamic(() => import("./Methods"))
const WorkingWithUs = dynamic(() => import("./WorkingWithUs/WorkingWithUs"))
const Testimonials = dynamic(() => import("./Testimonials"))
const WhyChoose = dynamic(() => import("./WhyChoose"))
const ContactUs = dynamic(() => import("./ContactUs"))

export {
    Header,
    Hero,
    Hero3dSlider,
    AutoPlaySlider,
    CaseStudies,
    StandOut,
    Portfolio,
    Services,
    SecondaryForm,
    Methods,
    WorkingWithUs,
    Testimonials,
    WhyChoose,
    ContactUs
}