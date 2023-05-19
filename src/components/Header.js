import { useState } from "react";
import "../style/header.css";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    openCloseMenu();

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
    var header = document.querySelector("header");
    var headerLogo = document.getElementsByClassName("header-logo")[0];
    var headerLinkList = document.getElementsByClassName("header-link-list")[0];
    var getStartedHeader =
      document.getElementsByClassName("getStartedHeader")[0];
    var hamburgerIcon = document.getElementsByClassName("hamburgerIcon")[0];

    if (window.scrollY > 10) {
      header.classList.add("scrolled");
      headerLogo && headerLogo.classList.add("scrolledText");
      headerLinkList && headerLinkList.classList.add("scrolledText");
      getStartedHeader && getStartedHeader.classList.add("scrolledText");
      hamburgerIcon && hamburgerIcon.classList.add("scrolledIcon");
    } else {
      header.classList.remove("scrolled");
      headerLogo && headerLogo.classList.remove("scrolledText");
      headerLinkList && headerLinkList.classList.remove("scrolledText");
      getStartedHeader && getStartedHeader.classList.remove("scrolledText");
      hamburgerIcon && hamburgerIcon.classList.remove("scrolledIcon");
    }
  });

  //Handle the Hamburger Menu
  function screensizeChecker(screenSize) {
    if (document.getElementsByClassName("header-link-list")[0]) {
      if (screenSize.matches) {
        // If media query matches
        document.getElementsByClassName("header-link-list")[0].style.display =
          "none";
        document.getElementsByClassName("getStartedHeader")[0].style.display =
          "none";
        document.getElementsByClassName("hamburgerMenu")[0].style.display = "";
      } else {
        document.getElementsByClassName("header-link-list")[0].style.display =
          "";
        document.getElementsByClassName("getStartedHeader")[0].style.display =
          "";
        document.getElementsByClassName("hamburgerMenu")[0].style.display =
          "none";
      }
    }
  }

  var screenSize = window.matchMedia("(max-width: 768px)");
  screensizeChecker(screenSize); // Call listener function at run time
  screenSize.addEventListener("change", screensizeChecker); // Attach listener function on state changes

  function openCloseMenu() {
    if (window.innerWidth > 768) {
      return;
    }
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="header">
      <h1 className="header-logo">BankNote</h1>
      <div className="links">
        <div className="hamburgerMenu">
          {menuOpen ? (
            <div className="menuExpanded">
              <GrClose onClick={openCloseMenu} className="hamburgerIconClose" />
              <ul className="header-link-list-popup">
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
            </div>
          ) : (
            <RxHamburgerMenu
              onClick={openCloseMenu}
              className="hamburgerIcon"
            />
          )}
        </div>
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
