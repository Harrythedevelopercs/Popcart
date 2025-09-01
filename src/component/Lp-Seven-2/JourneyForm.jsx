// Next
import Image from "next/image"
// React
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
// Media
import SideImage from "media/lp-seven/form_img.webp"
// Axios
import Axios from "axios"

const services = [
  "Book Publishing",
  "Book Editing",
  "Book Formatting",
  "Book Proofreading",
  "Book Writing",
  "Book Marketing",
  "Audio Book Publishing",
  "Book Illustration",
]

const JourneyForm = () => {
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
      pageUrl: pagenewurl,
      IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
      currentdate: currentdate,
      selectedServices: selectedServices,
      hasPublishedBefore: hasPublishedBefore,
      bookType: bookType,
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

  const [selectedServices, setSelectedServices] = useState([])
  const [hasPublishedBefore, setHasPublishedBefore] = useState("")
  const [bookType, setBookType] = useState("")

  const handleCheckboxChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service))
    } else {
      setSelectedServices([...selectedServices, service])
    }
  }

  const handlePublishedBeforeChange = (event) => {
    setHasPublishedBefore(event.target.value)
  }

  const handleBookTypeChange = (event) => {
    setBookType(event.target.value)
  }

  const groupSize = 3
  const groupedServices = []
  for (let i = 0; i < services.length; i += groupSize) {
    groupedServices.push(services.slice(i, i + groupSize))
  }

  return (
    <section>
      <div className="mr-md:py-[5rem] py-[3.2rem]">
        <div className="mr-container">
          <div className="grid mr-lg:grid-cols-2 grid-cols-1 gap-x-5 gap-y-5 items-center mr-sm:p-[30px] p-[20px] border-4 border-[#ef1012] rounded-[30px_30px_30px_0]">
            <div>
              <h2 className="mr-lg:text-[38px] mr-md:text-[30px] text-[25px] underline leading-tight font-medium text-center">
                Start Your Journey
              </h2>
              <form onSubmit={handleSubmit} className="mt-8">
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <select
                      id="publishedBefore"
                      required
                      value={hasPublishedBefore}
                      onChange={handlePublishedBeforeChange}
                      className="block bg-[#fff] text-[#212529] opacity-80 appearance-none mr-md:text-base text-sm focus-visible:outline-black w-full rounded-full px-7 py-4 shadow-[0_5px_5px_rgba(0,_0,_0,_0.2)] font-medium"
                    >
                      <option value="" selected disabled>
                        Have you published before?
                      </option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div>
                    <select
                      id="bookType"
                      required
                      value={bookType}
                      onChange={handleBookTypeChange}
                      className="block bg-[#fff] text-[#212529] opacity-80 appearance-none mr-md:text-base text-sm focus-visible:outline-black w-full rounded-full px-7 py-4 shadow-[0_5px_5px_rgba(0,_0,_0,_0.2)] font-medium"
                    >
                      <option value="" selected disabled>
                        What type of book do you plan on publishing?
                      </option>
                      <option value="Business">Business</option>
                      <option value="Biography">Biography</option>
                      <option value="Inspirational">Inspirational</option>
                      <option value="Non-Fiction">Non-Fiction</option>
                      <option value="How-To">How-To</option>
                      <option value="Autobiography/Memoir">
                        Autobiography/Memoir
                      </option>
                      <option value="Self-Help">Self-Help</option>
                      <option value="Children">Children</option>
                      <option value="Spiritual/Religious">
                        Spiritual/Religious
                      </option>
                      <option value="Fiction">Fiction</option>
                      <option value="Art/Photography">Art/Photography</option>
                      <option value="Cookbook">Cookbook</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="mt-8 mb-5">
                  <h3 className="mr-xl:text-[2rem] mr-md:text-[1.8rem] text-[1.2rem] leading-tight font-medium mr-sm:mb-3 mb-5">
                    What services are you looking for?
                  </h3>
                  {groupedServices.map((group, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="mr-sm:flex items-center justify-start gap-5 mr-md:mb-2 mb-3"
                    >
                      {group.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-x-2 mr-md:text-[1rem] text-sm text-[#212529] opacity-80 mb-3"
                        >
                          <input
                            type="checkbox"
                            name={service}
                            id={service}
                            checked={selectedServices.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                          />
                          <label htmlFor={service}>{service}</label>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-between gap-x-5">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Enter Full Name"
                    className="block bg-[#fff] mr-md:text-base text-sm focus-visible:outline-black w-full rounded-full px-7 py-4 mb-4 shadow-[0_5px_5px_rgba(0,_0,_0,_0.2)] font-medium"
                  />
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter Email Here"
                    className="block bg-[#fff] mr-md:text-base text-sm focus-visible:outline-black w-full rounded-full px-7 py-4 mb-4 shadow-[0_5px_5px_rgba(0,_0,_0,_0.2)] font-medium"
                  />
                </div>
                <input
                  type="number"
                  minLength="10"
                  maxLength="13"
                  pattern="[0-9]*"
                  name="phone"
                  placeholder="Enter Phone Number"
                  required
                  className="block bg-[#fff] mr-md:text-base text-sm focus-visible:outline-black w-full rounded-full px-7 py-4 mb-4 shadow-[0_5px_5px_rgba(0,_0,_0,_0.2)] font-medium"
                />
                <button
                  type="submit"
                  disabled={score !== "Submit"}
                  className={`__animatedPing bg-[#8f181b] text-white w-full mt-8 mx-auto block rounded-[10px_10px_10px_0] py-3 hover:bg-black transition-all duration-300 ease-in-out ${score !== "Submit" ? "bg-opacity-20" : "bg-opacity-100"
                    }`}
                >
                  {score}
                </button>
              </form>
            </div>
            <Image src={SideImage} alt="side_image" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneyForm
