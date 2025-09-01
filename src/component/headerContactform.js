import React from 'react';

const HeaderContactForm = () => {
  return (
    <section className="bg-cover bg-no-repeat relative py-16  bg-gray-100" style={{ backgroundImage: "url('/assets/images/newimg/contactformbg.png')" }}>
       <div className="absolute top-0 left-0 w-[346px] h-[418px] bg-no-repeat md:hidden xs:hidden"
        style={{ backgroundImage: "url('/assets/images/newimg/contactformbg1.png')" }}></div>
      
      <div className="container mx-auto">
        <div className="md:flex md:justify-center text-center text-[24px] text-white">
          <div className="w-[60%] p-4 mx-auto md:w-[90%] xs:w-[100%]">
            <h1 className="text-green text-3xl font-bold">
              Unlock Your Literary Success Today
            </h1>
            <h2 className="mt-4">
              Get Captivating Ghostwriting &amp; Book <br></br>
              <span className="text-yellow-500"> Writing Services with Up to 70% Savings! </span>
            </h2>
            <form action="/order/mail.php" method="POST" className="mt-4" id="contactform" noValidate>
              <div className="grid grid-cols-3 space-x-2 xs:grid xs:grid-cols-1 xs:grid-rows-1 xs:space-x-0 ">
                <div className="mb-4 ">
                  <input
                    type="text"
                    className="form-input block w-full px-2 py-1 text-base leading-1.5 text-gray-800 bg-white bg-clip-padding-box border border-gray-300 rounded-md transition duration-150 ease-in-out required"
                    required
                    placeholder="Full Name"
                    name="cn"
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-input block w-full px-2 py-1 text-base leading-1.5 text-gray-800 bg-white bg-clip-padding-box border border-gray-300 rounded-md transition duration-150 ease-in-out required email"
                    required
                    placeholder="Email Address"
                    name="em"
                    aria-required="true"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-input block w-full px-2 py-1 text-base leading-1.5 text-gray-800 bg-white bg-clip-padding-box border border-gray-300 rounded-md transition duration-150 ease-in-out required number"
                    minLength="10"
                    required
                    placeholder="Phone Number"
                    name="pn"
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  name="msg"
                  className="form-input block w-full px-2 py-1 text-base leading-1.5 text-gray-800 bg-white bg-clip-padding-box border border-gray-300 rounded-md transition duration-150 ease-in-out required"
                  autoComplete="disabled"
                  required
                  placeholder="Enter a brief description about your book"
                  aria-required="true"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn bg-yellow-400 rounded-md">
                  SUBMIT NOW <i className="fas fa-angle-right"></i>
                </button>
                <input type="hidden" name="send" value="1" />
                {/* Other hidden input fields */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderContactForm;
