import React from "react";
import "../style/header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const handleNavLinkClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    }); // Scroll to the top of the page instantly
  };
  const handleGetStartedClick = () => {
    // Wait for the navigation to complete before scrolling
    setTimeout(() => {
      const converterSection = document.getElementById("converter");
      if (converterSection) {
        converterSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the converter section
      }
    }, 0);
  };

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header"); // Replace 'header' with your header element selector
    var headerLogo = document.getElementsByClassName("header-logo")[0];
    var headerLinkList = document.getElementsByClassName("header-link-list")[0];
    var getStartedHeader =
      document.getElementsByClassName("getStartedHeader")[0];

    if (window.scrollY > 10) {
      header.classList.add("scrolled"); // Add a CSS class for scrolled state
      headerLogo.classList.add("scrolledText");
      headerLinkList.classList.add("scrolledText");
      getStartedHeader.classList.add("scrolledText");
    } else {
      header.classList.remove("scrolled"); // Remove the CSS class if not scrolled
      headerLogo.classList.remove("scrolledText");
      headerLinkList.classList.remove("scrolledText");
      getStartedHeader.classList.remove("scrolledText");
    }
  });
  return (
    <header className="header">
      <h1 className="header-logo">BankNote</h1>
      <div className="links">
        <ul className="header-link-list">
          <li>
            <NavLink
              to="/"
              onClick={handleNavLinkClick}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "lightgray" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "headerLinks active"
                  : isPending
                  ? "headerLinks pending"
                  : "headerLinks";
              }}
            >
              Currency Exchange{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              onClick={handleNavLinkClick}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "lightgray" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "headerLinks active"
                  : isPending
                  ? "headerLinks pending"
                  : "headerLinks";
              }}
            >
              Currency News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={handleNavLinkClick}
              style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "lightgray" : "inherit",
                };
              }}
              className={({ isActive, isPending }) => {
                return isActive
                  ? "headerLinks active"
                  : isPending
                  ? "headerLinks pending"
                  : "headerLinks";
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <Link
          to="/#converter"
          onClick={handleGetStartedClick}
          className="getStartedHeader"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
