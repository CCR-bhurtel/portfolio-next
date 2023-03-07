import React, { useEffect } from "react";
import backend from "../public/images/icons/backend.png";
import frontend from "../public/images/icons/frontend.png";
import logos from "../public/images/icons/logos.svg";
import uiux from "../public/images/icons/ui.png";
import webapp from "../public/images/icons/webapp.png";
import Image from "next/image";

function Specializations(props) {
  return (
    <section id="spe" className="specializations">
      <div className="layer"></div>
      <div className="container reveal">
        <div className="content">
          <div className="section-title">
            <h5 className="section-subhead">This is what I do</h5>
            <h2 className="section-head">SPECIALIZED IN</h2>
          </div>
          <div className="section-content">
            <div className="field">
              <div className="icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div className="field-content">
                <h4 className="field-title">WEB FRONTEND</h4>
                <p className="field-description">
                  HTML/CSS, javascript, angular.js, react.js, redux.js,
                  materialize Ui for frontend development of website and app
                </p>
              </div>
            </div>
            <div className="field">
              <div className="icon">
                <i className="fab fa-node-js"></i>
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
                <i className="fas fa-pen-nib"></i>
              </div>
              <div className="field-content">
                <h4 className="field-title">UI/UX DESIGN</h4>
                <p className="field-description">
                  Landing page, user flow, wireframing, mobile app design,
                  prototyping
                </p>
              </div>
            </div>{" "}
            <div className="field">
              <div className="icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="field-content">
                <h4 className="field-title">WEBAPP DEV.</h4>
                <p className="field-description">
                  Progressive web apps with reactJS, angularJs and firebase/node
                  in backend and firestore, mongodb as db.
                </p>
              </div>
            </div>{" "}
            {/* <div className="field">
              <div className="icon">
                <Image src={logos} alt="desktop-icon" />
              </div>
              <div className="field-content">
                <h4 className="field-title">Illustration/logo</h4>
                <p className="field-description">
                  Adobe Photoshop,Abode Illustartor, banner design, logo
                  design,.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Specializations);
