import React from "react";
import logo from "../images/brand-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-brand">
            <a href="index.html" className="logo">
              <img src={logo} alt="logo" className="logo-image" />
            </a>
            <p className="paragraph">Caffine to code converter</p>
          </div>
          <div className="social-media-wrap">
            <h4 className="footer-heading">Follow Me</h4>
            <div className="social-media">
              <a href="#" className="sa-link">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/bhurtelbro11/"
                target="blank"
                className="sa-link"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#" className="sa-link">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="sa-link">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="sa-link">
                <i className="fab fa-tripadvisor"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
