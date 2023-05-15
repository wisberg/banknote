import React from "react";
import "../style/landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <img
        id="BankNote-Img-1"
        src={require("../assets/BankNote_Landing.png")}
        alt="Cartoon of Coins and Pencils"
      />
      <img
        id="BankNote-Img-2"
        src={require("../assets/BankNote_Landing_2.png")}
        alt="Cartoon of Coins"
      />
      <div className="landing-headers-container">
        <h1 id="landing-header">BankNote</h1>
        <h2 className="landing-tagline">
          Your go-to app for quick currency conversions.
        </h2>
        <h2 className="landing-tagline">Convert any currency, instantly.</h2>
        <button id="landing-button" className="getStarted">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landing;
