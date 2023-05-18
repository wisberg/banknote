import React, { useRef, useState } from "react";
import "../style/contact.css";
import emailjs from "@emailjs/browser";
import { IoIosInformationCircleOutline } from "react-icons/io";

const Contact = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactPage">
      <img
        id="BankNote-Img-4"
        src={require("../assets/BankNote_ManyCoins.png")}
        alt="Cartoon of Coins and Pencils"
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6d98ba"
          fillOpacity="1"
          d="M0,288L34.3,250.7C68.6,213,137,139,206,138.7C274.3,139,343,213,411,250.7C480,288,549,288,617,256C685.7,224,754,160,823,160C891.4,160,960,224,1029,261.3C1097.1,299,1166,309,1234,266.7C1302.9,224,1371,128,1406,80L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <h1 className="pageHeader">Contact</h1>
      <div className="formContainer">
        {submitted ? (
          <h1>Thank you for your message!</h1>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="contactForm">
            <label className="formLabel">Name</label>
            <input className="formField" type="text" name="user_name" />
            <label className="formLabel">Email</label>
            <input className="formField" type="email" name="user_email" />
            <label className="formLabel">Message</label>
            <textarea className="formField" name="message" />
            <input id="submitButton" type="submit" value="Send" />
          </form>
        )}

        <p className="thankYou">
          <IoIosInformationCircleOutline /> Thank you for checking out BankNote!
          This is a portfolio project by{" "}
          <a target="_blank" rel="noreferrer" href="https://duffisberg.com">
            Duff Isberg
          </a>
          , created with React. This contact form goes directly to me.
        </p>
      </div>
    </div>
  );
};

export default Contact;
