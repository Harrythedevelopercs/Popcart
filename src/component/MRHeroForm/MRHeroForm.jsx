import { useState, useEffect } from 'react';
import Axios from "axios";
import { useRouter } from 'next/router';
import styles from "./MRHeroForm.module.css"
const MRHeroForm = ({ classes = "" }) => {
    // ===============
    const [ip, setIP] = useState('');
    const [score, setScore] = useState('Submit');
    const [pagenewurl, setPagenewurl] = useState('');
    const router = useRouter();
    const currentRoute = router.pathname;

    useEffect(() => {
        const getIPData = async () => {
            try {
                const res = await Axios.get('https://ipwho.is/');
                setIP(res.data);
            } catch (error) {
                console.error('Error fetching IP data:', error);
            }
        };
        getIPData();
    }, []);

    useEffect(() => {
        const currentUrl = window.location.href;
        console.log(currentUrl);
        setPagenewurl(currentUrl);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentdate = new Date().toLocaleString();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            comment: e.target.comments.value,
            pageUrl: pagenewurl,
            "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
            currentdate: currentdate,
        };

        const JSONdata = JSON.stringify(data);

        setScore('Loading');
        console.log(JSONdata);

        try {
            const res = await fetch('api/email/route', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSONdata
            });

            if (res.status === 200) {
                console.log('Response Successed', res);
            }
        } catch (error) {
            console.error('Error sending data:', error);
        }

        const headersList = {
            'Accept': '*/*',
            'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
            'Authorization': 'Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer',
            'Content-Type': 'application/json'
        };

        const bodyContent = JSON.stringify({
            "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
            Brand: 'Broadway Publishers',
            Page: currentRoute,
            Date: currentdate,
            Time: currentdate,
            JSON: JSONdata,
        });

        try {
            await fetch('https://sheetdb.io/api/v1/1ownp6p7a9xpi', {
                method: 'POST',
                body: bodyContent,
                headers: headersList
            });
        } catch (error) {
            console.error('Error sending to SheetDB:', error);
        }

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        const raw = JSON.stringify({
            fields: [
                {
                    objectTypeId: '0-1',
                    name: 'email',
                    value: e.target.email.value
                },
                {
                    objectTypeId: '0-1',
                    name: 'firstname',
                    value: e.target.name.value
                },
                {
                    objectTypeId: '0-1',
                    name: 'phone',
                    value: e.target.phone.value
                },
                {
                    objectTypeId: '0-1',
                    name: 'message',
                    value: e.target.comments.value
                }
            ],
            context: {
                ipAddress: ip.IPv4,
                pageUri: pagenewurl,
                pageName: pagenewurl
            },
            legalConsentOptions: {
                consent: {
                    consentToProcess: true,
                    text: 'I agree to allow Example Company to store and process my personal data.',
                    communications: [
                        {
                            value: true,
                            subscriptionTypeId: 999,
                            text: 'I agree to receive marketing communications from Example Company.'
                        }
                    ]
                }
            }
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        try {
            const response = await fetch('https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6', requestOptions);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error('Error submitting to HubSpot:', error);
        }

        router.push('/ThankYou');
    };

    return (
        <div className={`${styles.leadforms} relative !p-5 mr-lg:!p-8 mr-xl:!py-10 w-[80%] mr-md:w-[100%] mr-lg:w-[70%] ${classes}`}>
            <h3 className="font-primary font-semibold text-[25px] mr-lg:text-[30px] mr-xl:text-[30px] leading-normal text-center mb-3 text-white">
                Fill Your  Registration
            </h3>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label>Full Name<sup>*</sup></label> */}
                    <input type="text" required name="name" placeholder="Your Name" onkeypress="return /[a-z]/i.test(event.key)" />
                </div>
                <div>
                    {/* <label>Email Address<sup>*</sup></label> */}
                    <input type="email" required name="email" placeholder="Email Address" />
                </div>
                <div>
                    {/* <label>Phone<sup>*</sup></label> */}
                    <input type="tel" minLength="10" maxLength="13" pattern="[0-9]*" name="phone" placeholder="Phone" required />
                </div>
                <div>
                    {/* <label>Comments</label> */}
                    <textarea className="resize-none" id="message" name="comments" placeholder="Comments.."></textarea>
                </div>
                <div>
                    <button type="submit">{score}</button>
                </div>
            </form>
        </div>
    )
}

export default MRHeroForm
