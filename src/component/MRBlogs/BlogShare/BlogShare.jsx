import Image from "next/image";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
// ===== CSS
// ===== Images
import Share from "media/blog-new/shareIcon.png"
import social1 from "media/blog-new/linkedin.png"
import social2 from "media/blog-new/twitter.png"
import social3 from "media/blog-new/facebook.png"
const BlogShare = () => {
    const shareArticle = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).then(() => {
                console.log('Shared successfully');
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            console.log('Web Share API not supported');
        }
    };
    return (
        <>
            <ul className="flex items-center divide-x-2 mb-10">
                <li className={`cursor-pointer flex items-center gap-5 rounded-[5px_0_0_5px] bg-[#DEDEDE] py-1 px-4 before:!hidden`} onClick={shareArticle}>
                    <Image src={Share} alt='publishing' width={20} height={20} />
                    <p className='mb-0'>Share This Article</p>
                </li>
                <li className="before:!hidden bg-[#F3F3F3] mr-2xl:py-3 py-2 mr-2xl:h-[43px] h-[36px] px-5">
                    <LinkedinShareButton url="https://www.linkedin.com/">
                        <Image src={social1} alt='publishing' width={20} height={20} className="max-w-[15px] m-auto" />
                    </LinkedinShareButton>
                </li>
                <li className="before:!hidden bg-[#F3F3F3] mr-2xl:py-3 py-2 mr-2xl:h-[43px] h-[36px] px-5">
                    <TwitterShareButton url="https://twitter.com/">
                        <Image src={social2} alt='publishing' width={20} height={20} className="max-w-[15px] m-auto" />
                    </TwitterShareButton>
                </li>
                <li className="before:!hidden bg-[#F3F3F3] mr-2xl:py-3 py-2 mr-2xl:h-[43px] h-[36px] px-5 rounded-[0_5px_5px_0]">
                    <FacebookShareButton url="https://www.facebook.com/">
                        <Image src={social3} alt='publishing' width={20} height={20} className="max-w-[10px] m-auto" />
                    </FacebookShareButton>
                </li>
            </ul>
        </>
    )
}
export default BlogShare;