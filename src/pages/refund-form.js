"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/refundfrom.module.css";
import { Form } from "react-bootstrap";
import { useRouter } from "next/router";
import Axios from "axios";
import Head from "next/head";

const RefundForm = () => {
  const [ip, setIP] = useState({});
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
    setPagenewurl(currentUrl);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentdate = new Date().toLocaleString();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      payment_method: e.target.payment_method.value,
      card_digits: e.target.card_digits.value,
      invoice_num: e.target.invoice_num.value,
      order_date: e.target.order_date.value,
      refund_reason: e.target.refund_reason.value,
      comment: e.target.message.value,
      pageUrl: pagenewurl,
      IP: ip.ip,
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
      IP: ip.ip,
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
          value: e.target.message.value,
        },
        {
          objectTypeId: "0-1",
          name: "invoice_num",
          value: e.target.invoice_num.value,
        },
        {
          objectTypeId: "0-1",
          name: "refund_reason",
          value: e.target.refund_reason.value,
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
      const response = await fetch(
        "https://api.hsforms.com/submissions/v3/integration/submit/46656315/524aec68-a41e-4446-87d5-416ce22cfde6",
        requestOptions
      );
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error("Error submitting to HubSpot:", error);
    }

    router.push("/ThankYou");
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <section className={styles.refundSection}>
        <div className="mr-container">
          <div className="grid grid-cols-2">
            <div className={styles.refundTxt}>
              <h1 className="text-[30px] mr-lg:text-[35px] mr-xl:text-[40px] mr-2xl:text-[45px] font-sans font-bold leading-tight text-secondary-200 mb-4">
                Refund Policy for Broadway Publishers
              </h1>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-5 text-justify lg:text-left">
                Broadway Publishers, aims to provide excellent service and
                ensure customer satisfaction. Our refund and cancellation
                policies are designed to protect both our clients and our
                company. Please read through the following policy to understand
                how refund requests are handled.
              </p>
              <h3 className="text-[17px] mr-lg:text-[18px] mr-xl:text-[20px] mr-2xl:text-[25px] font-sans font-bold leading-tight text-secondary-200 mb-4">
                General Refund Policy:
              </h3>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-5 text-justify lg:text-left">
                <strong className="font-bold text-[#3EA99F] text-[18px]">
                  Cancellation :
                </strong>{" "}
                You are eligible for a full refund (less a 10% processing fee)
                if the order is canceled within 24 hours of order placement.
                Refunds are not applicable if initial content or designs are
                delivered or revisions are requested within this timeframe.
              </p>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-5 text-justify lg:text-left">
                <strong className="font-bold text-[#3EA99F] text-[18px]">
                  Order Inactivity:
                </strong>{" "}
                No refund will be issued if there is no activity on the order
                for 30 days after the order is placed. To reactivate the
                project, you will need to pay a fee depending on the project
                scope.
              </p>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-5 text-justify lg:text-left">
                <strong className="font-bold text-[#3EA99F] text-[18px]">
                  Final Deliverables:
                </strong>{" "}
                Refund requests will not be entertained after final files have
                been delivered.
              </p>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-5 text-justify lg:text-left">
                <strong className="font-bold text-[#3EA99F] text-[18px]">
                  Refund Reasons:
                </strong>{" "}
                Refund requests must be based on valid reasons, such as
                non-compliance with the brief or inadequate revisions. No
                refunds will be issued for change of mind or if the content
                meets the agreed-upon requirements.
              </p>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-5 text-justify lg:text-left">
                <strong className="font-bold text-[#3EA99F] text-[18px]">
                  Good Faith:
                </strong>{" "}
                If you have placed the same content order with multiple agencies
                to claim a refund, this will be considered a breach of good
                faith, and the refund request may be denied.
              </p>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-5 text-justify lg:text-left">
                <strong className="font-bold text-[#3EA99F] text-[18px]">
                  Customer Feedback:
                </strong>{" "}
                Clients are expected to provide timely feedback to ensure the
                completion of the project. Lack of feedback may affect the
                project delivery and refund eligibility.
              </p>
              <p className="text-[16px] font-sans font-normal leading-normal !mb-4 text-justify lg:text-left">
                ** Fill out the refund form or email it to{" "}
                <strong className="font-bold text-[#3EA99F]">
                  <a href="mailto:info@broadwaypublishers.com">
                    info@broadwaypublishers.com.
                  </a>
                </strong>{" "}
                ***
              </p>
            </div>
            <div className={styles.refundFrom}>
              <Form onSubmit={handleSubmit}>
                <div className={styles.refundFromBox}>
                  <div className={styles.inputField}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type="tel"
                      minLength="10"
                      maxLength="13"
                      pattern="[0-9]*"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <select name="payment_method" defaultValue="">
                      <option value="" disabled>
                        Payment Method
                      </option>
                      <option value="Card">Card</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Wire">Wire</option>
                    </select>
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type="text"
                      name="card_digits"
                      placeholder="Last 4 Card Digits"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type="text"
                      name="invoice_num"
                      placeholder="Invoice Number"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <input
                      type="date"
                      name="order_date"
                      className="custom-date"
                    />
                  </div>
                  <div className={styles.inputField}>
                    <select name="refund_reason" defaultValue="">
                      <option value="" disabled>
                        Refund Reason
                      </option>
                      <option value="Pre-delivery refund">
                        Pre-delivery refund
                      </option>
                      <option value="Post-delivery refund">
                        Post-delivery refund
                      </option>
                      <option value="Inactivity">Inactivity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className={styles.inputFieldfull}>
                    <textarea name="message" placeholder="Message" />
                  </div>
                  <p className="text-[16px] font-sans font-normal leading-normal !mb-2 text-justify lg:text-left">
                    By submitting this form, you acknowledge that you have read
                    and understood our Refund Policy and agree to the terms
                    stated above.
                  </p>
                  <div className={styles.btnSubmit}>
                    <button type="submit">{score}</button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundForm;
