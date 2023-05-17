import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <svg
        className="footerWaves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#6d98ba"
          fillOpacity="1"
          d="M0,288L34.3,250.7C68.6,213,137,139,206,138.7C274.3,139,343,213,411,250.7C480,288,549,288,617,256C685.7,224,754,160,823,160C891.4,160,960,224,1029,261.3C1097.1,299,1166,309,1234,266.7C1302.9,224,1371,128,1406,80L1440,32L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <div className="footerContent">
        <div className="leftFooter">
          <h1 className="footerLogo">BankNote</h1>
        </div>
        <div className="rightFooter"></div>
      </div>
    </div>
  );
};

export default Footer;
