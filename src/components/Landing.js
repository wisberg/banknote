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
        <h1 id="landing-header">Instant currency conversion and information</h1>
        <h2 className="landing-tagline">
          Your go-to app for quick currency conversions, currency news, and
          more.
        </h2>
        <a href="#converter" className="getStarted">
          Convert
        </a>
      </div>
      <div className="wavyTransition">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6d98ba"
            fillOpacity="1"
            d="M0,224L34.3,234.7C68.6,245,137,267,206,261.3C274.3,256,343,224,411,208C480,192,549,192,617,208C685.7,224,754,256,823,261.3C891.4,267,960,245,1029,250.7C1097.1,256,1166,288,1234,261.3C1302.9,235,1371,149,1406,106.7L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Landing;
