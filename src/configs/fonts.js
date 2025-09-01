import { DM_Serif_Display as FontMono } from "next/font/google"
import localFont from "next/font/local";

const primary = localFont({
    src: [
        {
        path: '../font/SFProDisplay-Light.woff',
        weight: '300',
        style: 'normal',
    },
        {
        path: '../font/SFProDisplay-Regular.woff',
        weight: '400',
        style: 'normal',
    },
     {
        path: '../font/SFProDisplay-Medium.woff',
        weight: '500',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Semibold.woff',
        weight: '600',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Bold.woff',
        weight: '700',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Heavy.woff',
        weight: '900',
        style: 'normal',
    }],
    variable: '--font-sfprodisplay',
    subsets: ['latin'],
    display: 'swap',
});
const SfProDisplay = localFont({
    src: [
        {
        path: '../font/SFProDisplay-Light.woff',
        weight: '300',
        style: 'normal',
    },
        {
        path: '../font/SFProDisplay-Regular.woff',
        weight: '400',
        style: 'normal',
    },
     {
        path: '../font/SFProDisplay-Medium.woff',
        weight: '500',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Semibold.woff',
        weight: '600',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Bold.woff',
        weight: '700',
        style: 'normal',
    },
    {
        path: '../font/SFProDisplay-Heavy.woff',
        weight: '900',
        style: 'normal',
    }],
    variable: '--font-sfprodisplay',
    subsets: ['latin'],
    display: 'swap',
});

const fontMono = FontMono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: "400",
    style: ["normal"],
    display: "swap",
    fallback: ["system-ui", "arial"]
})

export { primary, SfProDisplay,fontMono }