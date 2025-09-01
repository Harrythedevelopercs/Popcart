import Head from "next/head";
const TermsConditions = () => {
    return (
        <main>
            <Head>
                <title>Terms & Conditions - Best Book Publishing Company</title>
                <meta name="description" content="Our Professional Editors Will Improve Your Manuscript Before Publication We bring the art of proofreading and editing to perfection" />
            </Head>
            <section>
                <div className="bg-[rgb(64_190_226)] mr-md:h-[250px] h-[150px] mt-5 flex items-center text-center">
                    <div className="mr-container">
                        <h1 className="text-4xl mr-sm:text-5xl mr-xl:text-6xl text-white font-bold leading-none">Terms & Conditions
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="py-[50px]">
                    <div className="mr-container">
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-2">Choice of visiting our homepage is solely the customer’s decision. Any dispute over privacy is subject to this notice and our Privacy Policy. This includes limitations on damages, arbitration of disputes, and the applicable law of the state. If the customers have any issues regarding the Privacy Policy, they should contact us at their best convenience. Our customer services shall be most happy to serve them. As our Policies are liable to change at any time, it is recommended that the customers go through the policy each time they enter the site to purchase.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-2">The company gathers navigational information about where visitors go on our website and information about the technical efficiencies of our website and service (i.e. time to connect and time to download pages). This information allows us to see which areas of our Company’s Website are most visited and helps us understand our customers better than before. This also helps us improve the quality of those sites which are lacking in some way or the other. Unless otherwise noted, all materials, including images, illustrations, designs, icons, photographs, written and other materials that are part of this site (collectively, the “Contents”) are copyrights, trademarks, trade dress and/or other intellectual property owned, controlled or licensed by the Company.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-2">This site and all its contents are intended solely for personal and non-commercial use. The customers may download or copy the Contents and other downloadable materials displayed on the Site for their personal use only. No right, title or interest in any downloaded materials or software is transferred to the customer as a result of any such downloading or copying. The customer may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivatives, sell or participate in any sale or exploitation of the site, its content, or any related software.</p>
                        
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-2">
                        Electronic Communications
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">The moment the customer visits our site or sends e-mails to our contacts, the customer is communicating with our company electronically. It’s involuntary for the customers to receive our communications electronically. Our Company will communicate with the customer by e-mail or by posting notices on this site. Thus, the customer agrees that all agreements, notices, disclosures and relevant communication satisfy and fulfill all legal requirements and are equivalent to any legal statement in writing.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">YOU agree that BestSellingPublisher is not liable for any correspondence from email address (es) other than the ones followed by our own domain or/and any Toll-free number that is not mentioned on our website. BestSellingPublisher should not be held responsible for any damage(s) caused by such correspondence. We only take responsibility for any communication through email address (es) under our own domain name or/and via Toll-free number i.e. already mentioned on BestSellingPublisher’s Website</p>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-2">
                        Copyright/Trademarks
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">All content that is included on this site, such as text, graphics, logos, button icons, images, digital downloads, data compilations, and software, is the property of or its content suppliers and protected by and international ownership rightslaws. The compilation of all content at this site is the exclusive property of this company and protected by and international ownership rightslaws. All software used at this site is the property of this company or its software suppliers and protected by and international ownership rightslaws. The trademark names used within our sites are the property of their respective company or its subsidiaries and cannot be used in connection with any product or service that is not part of that company.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">Site Policies, Modification, and Severability</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">We suggest all customers to our site review all other policies posted here. These policies also govern visits to our site. The Company reserves the right to make changes to our site, to our policies, and to these Conditions of Use at any time. If any of these conditions shall be deemed invalid, void, or for any reason unenforceable, that condition shall be deemed severable and shall not affect the validity and enforceability of any remaining condition.</p>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-2">
                        Revision Policy
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">We provide guaranteed three free revisions. Customers can ask us for free revisions. In case the number of pages exceeds, appropriate charges would then be applicable. In order to receive free revision, customers are required to request for a revision within 10 days of the order delivery date. However, in case of a large order, the timeline exceeds up to 35 days. If the revision request falls within these guidelines, we will revise the order to meet the customer’s initial requirements free of charge.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">Once the above-mentioned timeline has passed it shall be assumed that the customer is satisfied.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">Any revision request sent by the customer for plagiarism within the order provided must be accompanied by a detailed report for the plagiarism. All revision requests pertaining to customers order will be completed as per the urgency of the order with 24 hours as standard minimum turnaround time.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">Revision turnaround time as per urgency is as follows:</p>
                        <ul className="list-disc list-inside my-5">
                            {
                                [
                                    ["For orders up to 24 hours of urgency; Revision turnaround time would be 24 hours."],
                                    ["For orders between 24-48 hours of urgency; Revision turnaround time would be 48 hours."],
                                    ["For orders of 48 hours and above; Revision turnaround time would be 72 hours."]
                                ].map(([list], i) => (
                                    <li key={i} className="py-px text-base font-normal leading-normal">{list}</li>
                                ))
                            }
                        </ul>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-2">
                        Our Programs
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-2">The amount credited to your account through the Referral Discount offer is non-refundable and non-cashable. For programs and offers where additional amount is credited to the user account, e.g. Affiliate Program, the extra amount credited is non-refundable and non-cashable.</p>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-2">
                        Refund Policy
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">If you request a refund before we start working on your project, a 100% of your payment will be refunded (transaction charges will be deducted). You may ask for a refund if you are not a 100% satisfied with your purchase. In such scenarios, we will refund all the balance payment of your order. The amount for which we have already completed the work for on your project will not be refunded. Please note that only the balance payment will be refunded. However, if you have a specific complaint and need a complete refund, you may send us a refund request and we will take a fair decision accordingly.</p>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">In case of a refund, the content written by BestSellingPublisher will remain our property and the customer cannot use it, in part or otherwise. If, however, it is found that the content written by BestSellingPublisher has been used by the customer, we, at BestSellingPublisher, shall have the right to initiate legal action.</p>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-2">
                        Quality Assurance Policy
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-2">Your Financial In order to provide the desired results, our consultants do not deviate from the specifications provided by the customer in the order form. All work is proofread prior to final delivery. It is to be noted that we guarantee the standard & quality of the order. Our quality control department double-checks each content for plagiarism before sending it to the customer. First, every content undergoes our authenticity test through various advanced plagiarism detection software’s. Finally, it goes to our specially employed board of editors that eliminates any possibility of plagiarism. All work submitted upon project completion becomes your property if it is paid for, and your responsibility.</p>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-2">
                        Your Account
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-2">You may opt-out of our The use of individual customer accounts is solely the responsibility of the user in terms of maintaining the Confidentiality of their own account and password and for restricting access to their computer. As such, the customer agrees to accept responsibility for all activities that occur under “your account” or “password.”</p>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-5">
                        Best Price
                        </h2>
                        <p className="text-[16px] leading-[25px] text-[#212121] font-normal !mb-5">We will take We offer services at the best price along with exclusive free features. Customers are charged at a special discounted price. A quick read of our exclusive service features will help customers understand how we stay successful in the business. If customers find any site offering these EXCLUSIVE features, we will give them 10% additional discount. Furthermore, once a customer takes advantage of any promotional deals offering discounts, other discounts, such as the Bulk Order Discount and the Membership Discount will not be applicable to their order.</p>
                        <h2 className="text-xl mr-sm:text-3xl text-[#202020] font-semibold leading-none mb-5">
                        Disclaimers
                        </h2>
                        <ol className="list-decimal list-inside my-5">
                            <li>Customer expressly understands and agree that their use of the services is at their sole risk and that the services are provided “as is” and “as available.” In particular, the company, its subsidiaries, and affiliates, and its licensors do not represent or warrant to customers that:</li>
                            <ul className="list-[circle] list-inside my-px">
                                {
                                    [
                                        ["Customer’s use of the services will meet their requirements,"],
                                        ["Customer’s use of the services will be uninterrupted, timely, secure or free from error,"],
                                        ["Any information obtained by customers as a result of their use of the services will be accurate or reliable"]
                                    ].map(([list],i)=>(
                                        <li key={i}>{list}</li>
                                    ))
                                }
                            </ul>
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default TermsConditions;