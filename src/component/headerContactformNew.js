import { useState } from "react";

import Router from "next/router";
const HeaderContactForm = () => {
  const [score, setScore] = useState("Submit Form");

  const HandleSubmit = async (event) => {
    const [score, setScore] = useState("Submit Form");

    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      };

      const JSONdata = JSON.stringify(data);
      console.log(JSONdata);
      setScore("Loading");
      fetch("../api/form", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSONdata,
      }).then((res) => {
        console.log(`Response received ${res}`);
        if (res.status === 200) {
          console.log(`Response Successed ${res}`);
        }
      });
      const { pathname } = Router;
      if (pathname == pathname) {
        window.location.href = "/ThankYou";
      }
    };
  };
  return (
    <section className=" bg-white w-full font-secondary md:p-5 xs:px-4">
      <div className="container max-w-7xl lg:max-w-6xl bg-[#F2F2F2] rounded-3xl sm:rounded-none py-14 px-20 font-secondary md:py-10 md:px-8 sm:py-10 sm:px-10 xs:p-5 hover:shadow-lg hover:shadow-[#707070] md:items-center ">
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-1 xs:grid-cols-1  md:items-center">
          <div className="... xs:pt-5">
            <h3 className="font-bold text-[40px] leading-[50px] xs:text-3xl mt-3 mb-5 md:text-[32px] md:leading-[40px]">
              Unlock Your Literary Success Today
            </h3>
            <p className="text-[17px] font-semibold">
              Get captivating ghostwriting & book <br /> writing services with
              up to 70% savings!
            </p>
          </div>
          <div className="col-span-2 ... border-l-2 border-solid border-[#989898] sm:border-l-0 xs:border-l-0">
            <form onSubmit={HandleSubmit}>
              <div className="px-10 md:px-5 sm:px-0 xs:px-0 ">
                <div className="grid grid-cols-3 gap-5 xs:flex-col md:grid md:grid-cols-1 sm:grid-cols-1 sm:grid xs:grid-cols-1 mb-8 xs:mb-5">
                  <input
                    name="name"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2"
                    placeholder="Full Name"
                  />
                  <input
                    name="email"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2"
                    placeholder="Email Address"
                  />
                  <input
                    name="phone"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2"
                    placeholder="Phone No"
                  />
                </div>
                <div className="w-full">
                  <input
                    name="message"
                    className="bg-transparent text-[#989898] border-b-2 border-[#989898] pb-2 w-full"
                    placeholder="Enter a brief description about your book"
                  />
                </div>

                <div className="w-full flex items-center font-secondary xs:flex-none sm:grid-cols-1 sm:grid xs:grid-cols-1 xs:grid ">
                  <div className="basis-[70%] items-center justify-center sm:7/7 xs:7/7">
                    <div className="flex-shrink-0 text-[12px] items-center mt-10 leading-6 ">
                      <div className="flex gap-3 items-start mb-3  md:space-x-0 md:gap-x-2 xs:grid xs:grid-cols-2 md:grid md:grid-cols-2  ">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="service"
                            value="GhostWriting"
                            className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                          />
                          <label
                            htmlFor="service"
                            className="ml-2 text-[12px] xs:text-[14px] font-medium"
                          >
                            GhostWriting
                          </label>
                        </div>

                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="service"
                            value="SEO Writing"
                            className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                          />
                          <label
                            htmlFor="service"
                            className="ml-2 text-[12px] xs:text-[14px] font-medium"
                          >
                            SEO Writing
                          </label>
                        </div>

                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="service"
                            value="Article Writing"
                            className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                            required
                          />
                          <label
                            htmlFor="remember"
                            className="ml-2 text-[12px] xs:text-[14px] font-medium"
                          >
                            Article Writing
                          </label>
                        </div>

                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="service"
                            value="Web Copy Writing"
                            className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                            required
                          />
                          <label
                            htmlFor="remember"
                            className="ml-2 text-[12px] xs:text-[14px] font-medium"
                          >
                            Web Copy Writing
                          </label>
                        </div>
                      </div>
                      <div className="flex gap-3 items-start mb-6  xs:grid xs:grid-cols-2 md:grid md:grid-cols-2">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="service"
                            value="Press Release"
                            className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                            required
                          />
                          <label
                            htmlFor="remember"
                            className="ml-2 text-[12px] xs:text-[14px] font-medium"
                          >
                            Press Release
                          </label>
                        </div>

                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="service"
                            value="Script Writing"
                            className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                            required
                          />
                          <label
                            htmlFor="remember"
                            className="ml-2 text-[12px] xs:text-[14px] font-medium"
                          >
                            Script Writing
                          </label>
                        </div>

                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            name="service"
                            value="Magazine Writing"
                            className="w-3 h-3 border border-[#1d1d1f] bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700"
                            required
                          />
                          <label
                            htmlFor="remember"
                            className="ml-2 text-[12px] xs:text-[14px] font-medium"
                          >
                            Magazine Writing
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-[30%] mt-10 flex items-stretch justify-end md:mt-28 sm:justify-center sm:mt-5 xs:mt-0 xs:mb-10 xs:justify-center ">
                    <button
                      type="submit"
                      className="bg-black hover:font-semibold text-white px-8 py-1 md:px-4 hover:bg-[#00c0e4] sm:px-32 xs:px-20 hover:text-[#1d1d1f]"
                    >
                      {score}
                    </button>
                    {/* <Link type="submit" href='#' className='bg-black text-white px-8 py-1 md:px-4 hover:bg-[#00c0e4] xs:px-20 hover:text-[#1d1d1f]'>Submit Now</Link> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderContactForm;
