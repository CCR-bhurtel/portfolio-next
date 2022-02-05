import React, { useEffect } from "react";
import ccr from "../images/photo_Cropped.jpg";

import Image from "next/image";

function About(props) {
  console.log();
  useEffect(() => {
    props.setLoading_states((props) => ({
      ...props.loading_states,
      aboutLoaded: true,
    }));
  }, []);
  return (
    <section id="about" className="hello toggleOption aboutwala">
      <div className="container reveal">
        <div className="about-title">
          <h3 className="about-head">About</h3>
          <div className="bar"></div>
        </div>
        <div className="about-content">
          <div className="about-left">
            <div className="my-image-container">
              <Image src={ccr} alt="cceer" />
            </div>
            <h3 className="about-text-head">Who's this guy?</h3>
            <p className="about-text">
              I am a full stack developer from
              <span className="green-text"> Kathmandu, Nepal.</span>
              <br /> I have a passion in web programming, app development, Ui
              designs,
              <br /> and Similarly in machine learning. <br />
              <a className="green-text" href="#contact">
                Let’s make something interesting.
              </a>
            </p>
          </div>
          <div
            className="about-right"
            onFocus={() => {
              console.log("Hello world");
            }}
          >
            <div className="skillset html">
              <div className="skillname">HTML</div>
              <div className="skill_level html 85"></div>
              <div className="skill-percent">85%</div>
            </div>
            <div className="skillset css">
              <div className="skillname">CSS</div>
              <div className="skill_level css 85"></div>
              <div className="skill-percent">85%</div>
            </div>{" "}
            <div className="skillset js">
              <div className="skillname">JS</div>
              <div className="skill_level js 65"></div>
              <div className="skill-percent">65%</div>
            </div>{" "}
            <div className="skillset node">
              <div className="skillname">Node</div>
              <div className="skill_level node 65"></div>
              <div className="skill-percent">65%</div>
            </div>{" "}
            <div className="skillset react">
              <div className="skillname">React</div>
              <div className="skill_level react 85"></div>
              <div className="skill-percent">85%</div>
            </div>{" "}
            <div className="skillset python">
              <div className="skillname">Python</div>
              <div className="skill_level python 60"></div>
              <div className="skill-percent">60%</div>
            </div>{" "}
            <div className="skillset uiux">
              <div className="skillname">UI/UX</div>
              <div className="skill_level uiux 60"></div>
              <div className="skill-percent">60%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(About);
