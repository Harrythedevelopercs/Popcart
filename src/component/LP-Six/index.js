import dynamic from "next/dynamic";
const Header = dynamic(() => import('./Header/Header'))
const Hero = dynamic(() => import('./Hero/Hero'))
const Awards = dynamic(() => import('./Awards/Awards'))
const Services = dynamic(() => import('./Services/Services'))
const StandsOut = dynamic(() => import('./StandsOut/StandsOut'))
const Footer = dynamic(() => import('./Footer/Footer'))
export {
    Header,
    Hero,
    Awards,
    Services,
    StandsOut,
    Footer,
};