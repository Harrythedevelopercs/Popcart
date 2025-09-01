import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import backgroundImg from "media/children-book-lp/background_img2.png";
import CTAImg from "media/children-book-lp/Cta-Image.png";
export default function Cta({
  title = `Become A Published Best-Selling <span class="font-normal">Author</span>`,
  desc = "Publish with us, and sell your book everywhere. Our expert publishers for children's books are skilled at getting your book into the hands of readers worldwide. ",
}) {
  const [ip, setIP] = useState("");
  const [score, setScore] = useState("Get Free Consultation");
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
    <section className="pt-[20px] mr-2xl:pt-[80px] pb-[20px] mr-2xl:pb-[80px]">
      <div className="mr-container ">
        <div className="relative z-10 mr-lg:w-[90%] w-full mx-auto items-center mr-md:pb-[40px] mr-md:pt-[30px] py-[30px]">
          <Image
            src={backgroundImg}
            alt="Broadway Publishers"
            width={1000}
            height={500}
            quality={100}
            className="absolute object-cover rounded-[20px] -z-10 w-full h-full top-0 right-0 left-0 bottom-0 shadow-lg"
          />
          <div>
            <div className="mr-lg:block hidden">
              <Image
                src={CTAImg}
                alt="Broadway Publishers"
                className="absolute rounded-[20px] mr-2xl:h-[625px] mr-xl:h-[550px] h-[450px] w-auto mr-2xl:top-[-13%] mr-xl:top-[-4%] right-0 mr-2xl:left-[0%] mr-xl:left-[-2%] left-[-3%] top-[5%]"
              />
            </div>

            <div className="py-3 pr-5 mr-sm:pr-7 mr-xl:pr-14 pl-5 mr-sm:pl-7 mr-lg:pl-3 mr-lg:w-[53%] mr-xl:w-[50%] w-full mr-lg:ml-auto">
              <div className="flex flex-col gap-3 items-start justify-start w-full mx-auto mb-8 text-white">
                <h2 className="mr-lg:text-[40px] mr-md:text-[30px] text-[25px] font-semibold leading-normal mr-lg:leading-[55px] text-left text-white mr-2xl:w-10/12" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-left mr-md:text-[16px] mr-md:leading-[25px] text-[14px] leading-normal" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
              <div className="mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="grid mr-md:grid-cols-2 grid-cols-1 mr-xl:gap-5 gap-3 mb-5 mr-lg:mb-6 items-center">
                    <div>
                      <input
                        type="text"
                        required
                        name="name"
                        placeholder="Full Name *"
                        onkeypress="return /[a-z]/i.test(event.key)"
                        className="placeholder:text-[#fff] outline-none text-white font-normal text-[15px] leading-[25px] block w-full h-[55px] pl-5 border-[#fff] rounded-[6px] bg-[#27A4C9] shadow-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        name="email"
                        placeholder="Email *"
                        className="placeholder:text-[#fff] outline-none text-white font-normal text-[15px] leading-[25px] block w-full h-[55px] pl-5 border-[#fff] rounded-[6px] bg-[#27A4C9] shadow-sm"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        minLength="10"
                        maxLength="13"
                        pattern="[0-9]*"
                        name="phone"
                        placeholder="Phone *"
                        className="placeholder:text-[#fff] outline-none text-white font-normal text-[15px] leading-[25px] block w-full h-[55px] pl-5 border-[#fff] rounded-[6px] bg-[#27A4C9] shadow-sm"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        id="message"
                        name="comments"
                        placeholder="Requirements"
                        className="placeholder:text-[#fff] outline-none text-white font-normal text-[15px] leading-[25px] block w-full h-[55px] pl-5 pt-4 border-[#fff] rounded-[6px] bg-[#27A4C9] shadow-sm resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <button type="submit" className="w-full block h-[50px] text-center text-[16px] text-white bg-black font-semibold px-10 rounded-[6px]">
                      {score}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
