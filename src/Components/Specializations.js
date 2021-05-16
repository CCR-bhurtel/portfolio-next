import React from "react";
import backend from "../images/icons/backend.svg";
import frontend from "../images/icons/frontend.svg";
import logos from "../images/icons/logos.svg";
import uiux from "../images/icons/uiux.svg";
import webapp from "../images/icons/webapp.svg";

function Specializations() {
  return (
    <section id="spe" className="specializations">
      <div className="layer"></div>
      <div className="container">
        <div className="content">
          <div className="section-title">
            <h5 className="section-subhead">This is what I do</h5>
            <h2 className="section-head">SPECIALIZED IN</h2>
          </div>
          <div className="section-content">
            <div className="field">
              <div className="icon">
                <img src={frontend} alt="desktop-icon" />
              </div>
              <div className="field-content">
                <h4 className="field-title">WEB FRONTEND</h4>
                <p className="field-description">
                  HTML/CSS, javascript, react.js, redux.js,materialize Ui for
                  frontend development of website and app
                </p>
              </div>
            </div>
            <div className="field">
              <div className="icon">
                <img src={backend} alt="desktop-icon" />
              </div>
              <div className="field-content">
                <h4 className="field-title">WEB BACKEND</h4>
                <p className="field-description">
                  Node.js, Mongodb, python, Express.js, for backend and next.js
                  for serving react
                </p>
              </div>
            </div>{" "}
            <div className="field">
              <div className="icon">
                <img src={uiux} alt="desktop-icon" />
              </div>
              <div className="field-content">
                <h4 className="field-title">UI/UX DESIGN</h4>
                <p className="field-description">
                  Landing page , user flow, wireframing, mobile app design,
                  prototyping
                </p>
              </div>
            </div>{" "}
            <div className="field">
              <div className="icon">
                <img src={webapp} alt="desktop-icon" />
              </div>
              <div className="field-content">
                <h4 className="field-title">WEBAPP DEV.</h4>
                <p className="field-description">
                  Progressive web apps with react native and firebase/node in
                  backend and firestore, mongodb as db.
                </p>
              </div>
            </div>{" "}
            <div className="field">
              <div className="icon">
                <img src={logos} alt="desktop-icon" />
              </div>
              <div className="field-content">
                <h4 className="field-title">Illustration/logo</h4>
                <p className="field-description">
                  Adobe Photoshop,Abode Illustartor, banner design, logo
                  design,.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specializations;
