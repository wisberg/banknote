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
  return (
    <div className="Section_Template">
      {direction === "left" ? (
        <div className="sectionContainer">
          <img src={imageSrc} className="sectionImage"></img>
          <div className="contentContainer">
            <h1 className="sectionHeader">{header}</h1>
            <p className="sectionBody">{content}</p>
            <Link to={linkComponent} className="sectionLink">
              {linkText}
            </Link>
          </div>
        </div>
      ) : (
        <div className="sectionContainer">
          <div className="contentContainer">
            <h1 className="sectionHeader">{header}</h1>
            <p className="sectionBody">{content}</p>
            <Link to={linkComponent} className="sectionLink">
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
