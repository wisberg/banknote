import React from "react";
import "../style/section.css";
import { Link } from "react-router-dom";

const Section_Template = ({
  content,
  imageSrc,
  linkText,
  linkComponent,
  direction,
  header,
}) => {
  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    }); // Scroll to the top of the page instantly
  };

  // console.log(window.innerWidth);
  // if (window.innerWidth < 728) {
  //   if (direction === "left") {
  //     document.getElementsByClassName(
  //       "sectionContainer"
  //     )[0].style.flexDirection = "column";
  //   }
  // } else {
  //   document.getElementsByClassName("sectionContainer")[0].style.flexDirection =
  //     "row";
  // }
  return (
    <div className="Section_Template">
      {direction === "left" ? (
        <div className="sectionContainerR">
          <img src={imageSrc} className="sectionImage"></img>
          <div className="contentContainer">
            <h1 className="sectionHeader">{header}</h1>
            <p className="sectionBody">{content}</p>
            <Link
              to={linkComponent}
              onClick={handleNavLinkClick}
              className="sectionLink"
            >
              {linkText}
            </Link>
          </div>
        </div>
      ) : (
        <div className="sectionContainer">
          <div className="contentContainer">
            <h1 className="sectionHeader">{header}</h1>
            <p className="sectionBody">{content}</p>
            <Link
              to={linkComponent}
              onClick={handleNavLinkClick}
              className="sectionLink"
            >
              {linkText}
            </Link>
          </div>
          <img src={imageSrc} className="sectionImage"></img>
        </div>
      )}
    </div>
  );
};

export default Section_Template;
