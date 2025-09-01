import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            <div className="bg-black py-4">
                <div className="container">
                    <div className="text-white flex mr-sm:flex-nowrap flex-wrap items-center gap-3 justify-between text-sm">
                        <div className="flex mr-sm:flex-nowrap flex-wrap gap-x-2 items-center">
                            <Link href="/terms-and-conditions" target="_blank">Terms of Use</Link>
                            <span className="block">|</span>
                            <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>
                        </div>
                        <span className="block text-left">© 2025 - All Rights Reserved <Link href="https://infinitimediainc.com/" target="_blank">Infiniti Media INC</Link></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;