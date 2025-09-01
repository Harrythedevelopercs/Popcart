// Next
import Image from "next/image"
// React
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// Components
import { CTA } from "./index"
// Axios
import Axios from "axios"
// Media
import Books from "media/lp-seven/slr-book-img1.webp"
import Book from "media/lp-seven/slr-book-img2.webp"

const ContactForm = () => {
  const [ip, setIP] = useState("")
  const [score, setScore] = useState("Submit")
  const [pagenewurl, setPagenewurl] = useState("")
  const router = useRouter()
  const currentRoute = router.pathname

  useEffect(() => {
    const getIPData = async () => {
      try {
        const res = await Axios.get("https://ipwho.is/")
        setIP(res.data)
      } catch (error) {
        console.error("Error fetching IP data:", error)
      }
    }
    getIPData()
  }, [])

  useEffect(() => {
    const currentUrl = window.location.href
    console.log(currentUrl)
    setPagenewurl(currentUrl)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const currentdate = new Date().toLocaleString()

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      pageUrl: pagenewurl,
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
    }

    const JSONdata = JSON.stringify(data)

    setScore("Loading")
    console.log(JSONdata)

    try {
      const res = await fetch("api/publishinglpemail/route", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      })

      if (res.status === 200) {
        console.log("Response Successed", res)
      }
    } catch (error) {
      console.error("Error sending data:", error)
    }

    const headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
      "Content-Type": "application/json",
    }

    const bodyContent = JSON.stringify({
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      Brand: "Broadway Publishers",
      Page: currentRoute,
      Date: currentdate,
      Time: currentdate,
      JSON: JSONdata,
    })

    try {
      await fetch("https://sheetdb.io/api/v1/1ownp6p7a9xpi", {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      })
    } catch (error) {
      console.error("Error sending to SheetDB:", error)
    }

    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

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
          name: "subject",
          value: e.target.subject.value,
        },
        {
          objectTypeId: "0-1",
          name: "message",
          value: e.target.message.value,
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
    })

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }

    try {
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6",
        requestOptions
      )
      const result = await response.text()
      console.log(result)
    } catch (error) {
      console.error("Error submitting to HubSpot:", error)
    }

    router.push("/ThankYou")
  }

  return (
    <section>
      <div className="relative z-10 bg-[#8f181b] text-white mr-md:py-[60px] py-[50px] mb-[30px]">
        <Image
          src={Books}
          alt="books"
          className="mr-md:block hidden absolute -z-10 w-[28%] h-full object-cover inset-[0_0_0_-100px] object-left"
        />
        <Image
          src={Book}
          alt="book"
          className="mr-md:block hidden absolute -z-10 w-[320px] h-[270px] ms-auto object-contain -bottom-20 right-0 object-right-bottom"
        />
        <div className="mr-container">
          <div className="mr-md:max-w-[750px] mx-auto text-center">
            <h2 className="mr-lg:text-[34px] mr-md:text-[25px] text-[22px] leading-tight font-bold mb-[20px]">
              Write My Hot-Seller Book!
            </h2>
            <p className="mr-lg:text-base text-sm leading-normal font-normal">
              Call us now at <a href="tel:+18556666675">855-666-6675</a>{" "}
              (toll-free) or start a conversation for further details of our
              services.
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12 grid mr-md:grid-cols-3 grid-cols-1 gap-y-5 gap-x-3">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter Full Name"
                    className="block bg-[#fff] text-black text-sm focus-visible:outline-black w-full rounded-[10px] px-5 py-2.5 font-normal"
                  />
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter Your Email"
                    className="block bg-[#fff] text-black text-sm focus-visible:outline-black w-full rounded-[10px] px-5 py-2.5 font-normal"
                  />
                  <input
                    type="number"
                    required
                    name="phone"
                    minLength="10"
                    maxLength="13"
                    pattern="[0-9]*"
                    placeholder="Enter Your Number"
                    className="block bg-[#fff] text-black text-sm focus-visible:outline-black w-full rounded-[10px] px-5 py-2.5 font-normal"
                  />
                </div>
                <div className="col-span-12">
                  <input
                    type="text"
                    required
                    name="subject"
                    placeholder="Enter Your Subject"
                    className="block bg-[#fff] text-black text-sm focus-visible:outline-black w-full rounded-[10px] px-5 py-2.5 font-normal"
                  />
                </div>
                <div className="col-span-12">
                  <textarea
                    name="message"
                    placeholder="Project Descriptions"
                    className="block bg-[#fff] text-black text-sm focus-visible:outline-black w-full rounded-[10px] px-5 py-2.5 font-normal h-[80px]"
                  ></textarea>
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-x-5 gap-y-5 items-center">
                  <div className="mr-md:col-span-5 col-span-12 flex items-center gap-x-2">
                    <input type="checkbox" name="agree" id="agree" />
                    <label htmlFor="agree" className="mr-sm:text-sm text-xs">
                      I Agree to Terms of Use and the Privacy Policy.
                    </label>
                  </div>
                  <div className="mr-md:col-span-7 col-span-12 flex flex-wrap gap-y-5 gap-x-4">
                    <CTA
                      handle="parent.LC_API.open_chat_window();return false;"
                      css="bg-white !text-black hover:bg-transparent hover:border-white hover:!text-white"
                    />
                    <CTA
                      text="Call Now"
                      link="tel:8556666675"
                      css="bg-white !text-black hover:bg-transparent hover:border-white hover:!text-white"
                    />
                    <button
                      type="submit"
                      disabled={score !== "Submit"}
                      className={`__animatedPing group bg-[#8f181b] border border-white text-white w-max flex items-center gap-x-2 justify-center rounded-[10px_10px_10px_0] p-[10px_20px] hover:bg-white hover:text-black transition-all duration-300 ease-in-out ${score !== "Submit" ? "bg-opacity-20" : "bg-opacity-100"
                        }`}
                    >
                      <span>{score}</span>
                      <svg
                        className="border border-white rounded-full group-hover:border-black"
                        width="18"
                        height="18"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="angle-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
