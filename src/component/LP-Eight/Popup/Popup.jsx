"use client"
// React
import { useEffect, useState, useContext } from "react"
import { PopupContext } from "./PopupContext"
// Next
import { useRouter } from "next/navigation"
import Image from "next/image"
// Axios
import Axios from "axios"
// Media
import User from "media/book-promotion-marketing/icons/user.png"
import Call from "media/book-promotion-marketing/icons/call.png"
import PaperPlane from "media/book-promotion-marketing/icons/paper_plane.png"
import Message from "media/book-promotion-marketing/icons/message.png"

export default function Popup({
  popupDesc = `HIRE <strong>TOP promotion marketers AT 85% OFF</strong> TO CREATE YOUR TIMELESS WORK`,
}) {
  const [ip, setIP] = useState("")
  const [score, setScore] = useState("Submit")
  const [pagenewurl, setPagenewurl] = useState("")

  const router = useRouter()
  const currentRoute = router.pathname
  const { isPopupOpen, closePopup } = useContext(PopupContext)

  //   Form Handler
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
      comment: e.target.comments.value,
      pageUrl: pagenewurl,
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
    }

    const JSONdata = JSON.stringify(data)

    setScore("Loading")
    console.log(JSONdata)

    try {
      const res = await fetch("/api/email/route", {
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
  //   Form Handler

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isPopupOpen])

  if (!isPopupOpen) return null
  // Effect to handle body overflow

  return (
    <div className="mr-container">
      <div className="fixed w-full h-screen !z-[99999999999999999] inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="relative !z-[99999999999999999] bg-white grid grid-cols-1 gap-x-5 mx-5 mr-md:p-[31px] p-[25px] border-b-[5px] border-[#53b8e0] rounded-[23px] shadow-xl w-full max-w-[500px]">
          <button
            onClick={closePopup}
            className="absolute -right-4 border-4 shadow-md border-primary-100 -top-3 w-max h-max bg-white text-base font-semibold text-primary-100 px-[14px] py-2 rounded-full"
          >
            X
          </button>
          <div>
            <h2 className="mr-md:text-[30px] text-[20px] border-l-[6px] border-primary-100 !text-black leading-tight font-extrabold ps-3 mb-3">
              Activate Your Coupon Now!
            </h2>
            <p
              className="text-[#333333] text-[14px] leading-normal font-normal max-w-[400px] uppercase"
              dangerouslySetInnerHTML={{ __html: popupDesc }}
            />
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="flex items-center gap-2 !text-black w-full bg-[#fafafa] border-2 border-[#E1E1E1] rounded-lg px-3 py-2 mb-4 placeholder:text-[#B4B4B4] font-medium">
                <label htmlFor="name" className="block shrink-0">
                  <Image src={User} width={18} height={18} alt="icon" />
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  id="name"
                  placeholder="Full Name *"
                  className="block focus-visible:outline-none w-max bg-transparent"
                />
              </div>
              <div className="grid mr-md:grid-cols-2 grid-cols-1 gap-x-5">
                <div className="flex items-center gap-2 !text-black w-full bg-[#fafafa] border-2 border-[#E1E1E1] rounded-lg px-3 py-2 mb-4 placeholder:text-[#B4B4B4] font-medium">
                  <label htmlFor="email" className="block shrink-0">
                    <Image src={Message} width={18} height={18} alt="icon" />
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Email *"
                    className="block focus-visible:outline-none w-max bg-transparent"
                  />
                </div>
                <div className="flex items-center gap-2 !text-black w-full bg-[#fafafa] border-2 border-[#E1E1E1] rounded-lg px-3 py-2 mb-4 placeholder:text-[#B4B4B4] font-medium">
                  <label htmlFor="phone" className="block shrink-0">
                    <Image src={Call} width={18} height={18} alt="icon" />
                  </label>
                  <input
                    type="tel"
                    minLength="10"
                    maxLength="13"
                    pattern="[0-9]*"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    required
                    className="block focus-visible:outline-none w-max bg-transparent"
                  />
                </div>
              </div>
              <div className="flex items-start gap-2 !text-black w-full bg-[#fafafa] border-2 border-[#E1E1E1] rounded-lg px-3 py-2 mb-4 placeholder:text-[#B4B4B4] font-medium">
                <label htmlFor="message" className="block shrink-0">
                  <Image src={PaperPlane} width={18} height={18} alt="icon" />
                </label>
                <textarea
                  className="block focus-visible:outline-none w-full bg-transparent mr-md:h-[100px] h-[80px]"
                  id="message"
                  name="comments"
                  placeholder="Enter a brief description about your book"
                ></textarea>
              </div>
              <div className="flex mr-md:items-center items-start gap-x-2 mb-5">
                <input type="checkbox" name="checkbox" id="help" />
                <label
                  htmlFor="help"
                  className="text-[10px] leading-relaxed font-extrabold"
                >
                  "By signing up, you consent to receive recurring autodialed
                  EMAIL/SMS promotional messages. No purchase required. Reply
                  HELP for help, STOP to end."
                </label>
              </div>
              <button
                type="submit"
                className="mr-md:text-[18px] text-[16px] leading-tight font-semibold bg-[#5472b8] border border-[#5472b8] hover:bg-primary-100 text-white mr-md:w-max w-full block rounded-[3px] mr-md:p-[16px_70px] p-[16px_0] transition-all duration-300 ease-in-out uppercase"
              >
                {score}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
