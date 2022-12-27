/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect } from "react";
import Navbar from "./Navbar";
import ccr from "../images/me.jpeg";
import arrow from "../images/arrow.png";
import Particles from "react-tsparticles";
import init from "./Typewriter";
import Image from "next/image";
import { loadFull } from "tsparticles";

function Header() {
  useEffect(() => {
    init();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <div id="header" className="toggleOption">
      <div className="container">
        <Navbar />
        <div className="header-content">
          <div className="my-image-container">
            <Image className="myimg" src={ccr} alt="Me" />
          </div>

          <div className="social-container">
            <a
              href="https://www.facebook.com/bhurtelbro11/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="https://github.com/CCR-bhurtel"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/shishir-bhurtel-54974b1b7/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <h3 className="header-text">
            <div className="firstLine">
              Hello, I'm <span className="coloured">SHISHIR BHURTEL</span>,
            </div>
            <br />
            <div className="secondLine">
              {" "}
              A{" "}
              <span
                className="txt-type"
                data-words='["FullStack Developer", "Designer", "FreeLancer", "Javascript Enthusiast"]'
              ></span>
            </div>
          </h3>
          <div className="buttons">
            <a href="#projects">
              <button className="btn arrow-btn">
                See My Works <Image src={arrow} alt="arrow" />
              </button>
            </a>
            <a
              href="https://www.fiverr.com/shishrbhurtel1?public_mode=true"
              target="blank"
            >
              {" "}
              <button className="btn hire-btn">Hire me</button>
            </a>
          </div>
        </div>
      </div>
      <Particles
        className="particles"
        init={particlesInit}
        loaded={particlesLoaded}
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ff0000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 130,
              color: "#fff",
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 3000,
                rotateY: 3000,
              },
            },
            array: [],
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 100,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 200,
                size: 80,
                duration: 0.4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
            mouse: {},
          },
          retina_detect: false,
          fn: {
            interact: {},
            modes: {},
            vendors: {},
          },
          tmp: {},
        }}
      />
    </div>
  );
}

export default React.memo(Header);
