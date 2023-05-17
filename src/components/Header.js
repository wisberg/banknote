import React from "react";
import "../style/header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
        <button className="getStartedHeader">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
