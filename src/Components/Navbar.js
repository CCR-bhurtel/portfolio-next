import React from "react";
import logo from "../images/brand-logo.png";

function Navbar() {
  const toggleActiveState = (e) => {
    document
      .querySelectorAll(".nav-link")
      .forEach((el) => el.classList.remove("active"));

    e.classList.add("active");
    document.querySelector(".nav-collection").classList.remove("active");
    document.querySelector("body").style.overflow = "scroll";
  };
  return (
    <div id="navcontainer" className="container">
      <nav>
        <a href="#" className="brand-logo">
          <img src={logo} alt="Logo" />
        </a>
        <div className="hamburger-menu">
          <i
            style={{ marginRight: "1rem" }}
            onClick={(e) => {
              document.querySelector(".nav-collection").classList.add("active");
              document.querySelector("body").style.overflow = "hidden";
            }}
            className="fas fa-bars"
          ></i>
        </div>
        <ul className="nav-collection">
          <i
            onClick={(e) => {
              document
                .querySelector(".nav-collection")
                .classList.remove("active");
              document.querySelector("body").style.overflow = "scroll";
            }}
            className="fas fa-times"
          ></i>

          <li className="nav-item">
            <a
              id="homelink"
              onClick={(e) => {
                toggleActiveState(e.target);
              }}
              href="#header"
              className="nav-link active"
            >
              Home
            </a>
            <div></div>
          </li>
          <li className="nav-item">
            <a
              id="aboutlink"
              onClick={(e) => {
                toggleActiveState(e.target);
              }}
              href="#about"
              className="nav-link"
            >
              About
            </a>
            <div></div>
          </li>
          <li className="nav-item">
            <a
              id="projectlink"
              onClick={(e) => {
                toggleActiveState(e.target);
              }}
              href="#projects"
              className="nav-link"
            >
              Projects
            </a>
            <div></div>
          </li>
          <li className="nav-item">
            <a
              id="contactlink"
              onClick={(e) => {
                toggleActiveState(e.target);
              }}
              href="#contact"
              className="nav-link"
            >
              Contact
            </a>
            <div></div>
          </li>
          <li className="nav-item hire-link">
            <div>
              <a
                className="nav-link"
                href="https://www.fiverr.com/shishrbhurtel1?up_rollout=true"
                target="blank"
              >
                {" "}
                Hire me
              </a>
            </div>
          </li>
        </ul>
        <div
          onClick={(e) => {
            document
              .querySelector(".nav-collection")
              .classList.remove("active");
            document.querySelector("body").style.overflow = "scroll";
          }}
          className="backdrop"
        ></div>
      </nav>
    </div>
  );
}

export default Navbar;
