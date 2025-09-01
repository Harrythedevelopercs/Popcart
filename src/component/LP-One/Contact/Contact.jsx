import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

let list = [
  "Our sales manager reaches you out within a few days after analyzing your business requirements",
  "Meanwhile, we sign an NDA to ensure the highest privacy level",
  "Our pre-sale manager presents project estimates and approximate timeline",
];
const Contact = () => {
  // ===============
  const [ip, setIP] = useState("");
  const [score, setScore] = useState("Submit");
  const [pagenewurl, setPagenewurl] = useState("");
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    const getIPData = async () => {
      try {
        const res = await Axios.get("https://ipwho.is/");
        setIP(res.data);
      } catch (error) {
        console.error("Error fetching IP data:", error);
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
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
    };

    const JSONdata = JSON.stringify(data);

    setScore("Loading");
    console.log(JSONdata);

    try {
      const res = await fetch("api/email/route", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      });

      if (res.status === 200) {
        console.log("Response Successed", res);
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }

    const headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json",
    };

    const bodyContent = JSON.stringify({
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      Brand: "Broadway Publishers",
      Page: currentRoute,
      Date: currentdate,
      Time: currentdate,
      JSON: JSONdata,
    });

    try {
      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      });
    } catch (error) {
      console.error("Error sending to SheetDB:", error);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      fields: [
        {
          objectTypeId: "0-1",
          name: "email",
          value: e.target.email.value,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: e.target.name.value,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: e.target.phone.value,
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: e.target.comments.value,
        },
      ],
      context: {
        ipAddress: ip.IPv4,
        pageUri: pagenewurl,
        pageName: pagenewurl,
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: "I agree to allow Example Company to store and process my personal data.",
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: "I agree to receive marketing communications from Example Company.",
            },
          ],
        },
      },
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch("https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6", requestOptions);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
    }

    router.push("/ThankYou");
  };
  return (
    <section className="relative z-10">
      <div className="py-[30px] mr-lg:py-[50px] before:bg-no-repeat before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:-z-10 before:bg-cover before:h-[70%] before:bg-center before:bg-[url('../../public/lp-one-conatct-bg.webp')]">
        <div className="mr-container">
          <div className="grid grid-cols-2 mr-xs:grid-cols-1 mr-md:flex w-[100%] mr-lg:w-[80%] mr-xl:w-[65%] mx-auto items-center">
            <div className="mr-md:basis-[60%] bg-white shadow-lg shadow-gray-300 p-3 mr-md:p-5">
              <h2 className="text-[25px] mr-md:text-[40px] font-sans font-bold text-black text-center leading-tight mb-5">Don’t Be Shy, Say Hi!</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-5" autoComplete="off">
                <div>
                  <label className="block mb-3 font-bold text-[15px] text-black leading-none">
                    Full Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Your Name"
                    onkeypress="return /[a-z]/i.test(event.key)"
                    className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[40px] px-2 border-b-[1px] border-[#9E9E9E]"
                  />
                </div>
                <div>
                  <label className="block mb-3 font-bold text-[15px] text-black leading-none">
                    Email Address<sup>*</sup>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email Address"
                    className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[40px] px-2 border-b-[1px] border-[#9E9E9E]"
                  />
                </div>
                <div>
                  <label className="block mb-3 font-bold text-[15px] text-black leading-none">
                    Phone<sup>*</sup>
                  </label>
                  <input
                    type="tel"
                    minLength="10"
                    maxLength="13"
                    pattern="[0-9]*"
                    name="phone"
                    placeholder="Phone"
                    className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[40px] px-2 border-b-[1px] border-[#9E9E9E]"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-3 font-bold text-[15px] text-black leading-none">Comments</label>
                  <textarea
                    id="message"
                    name="comments"
                    placeholder="Comments.."
                    className="placeholder:text-[#9E9E9E] outline-none text-black font-normal text-[15px] leading-[25px] block w-full h-[80px] p-2 border-b-[1px] border-[#9E9E9E] resize-none"
                  ></textarea>
                </div>
                <div>
                  <button type="submit" className="w-full block h-[40px] text-center text-[16px] text-white bg-primary-100 font-semibold">
                    {score}
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-primary-100 mr-md:basis-[45%] px-2 mr-md:px-5 py-[20px] mr-md:py-[50px] mr-xs:rounded-b-[30px] mr-sm:rounded-r-[30px]">
              <h3 className="text-[24px] mr-lg:text-[30px] font-sans font-bold text-white leading-tight mb-5">What Happens Next?</h3>
              <ul className="grid grid-cols-1 gap-y-5">
                {list?.map((e, i) => (
                  <li key={i} className="text-[13px] mr-lg:text-[15px] leading-normal text-white font-normal inline-flex gap-3">
                    <span className="bg-white w-[30px] h-[30px] flex text-black font-semibold shadow-lg items-center justify-center rounded-full">{i + 1}</span>
                    <span className="block [width:calc(100%_-_30px)]">{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
