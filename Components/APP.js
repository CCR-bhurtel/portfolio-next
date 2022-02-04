import React, { useEffect, useState } from "react";
import About from "./About";

import { toast } from "react-toastify";

import Contact from "./Contact";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Specializations from "./Specializations";
import loading from "../images/loading.gif";
import Head from "next/head";
import Image from "next/image";

toast.configure();

function App() {
  const [loading_states, setLoading_states] = useState({
    headerLoaded: false,
    aboutLoaded: false,
    projectsLoaded: false,
    contactsLoaded: false,
    specializationsLoaded: false,
  });

  const checkEverythingLoaded = () => {
    let loaded = true;
    Object.keys(loading_states).forEach((state) => {
      if (!loading_states[state]) loaded = false;
    });
    return loaded;
  };

  useEffect(() => {
    const main_contents = document.querySelector(".main_contents");
    const loading_screen = document.querySelector(".loading_screen");
    if (!checkEverythingLoaded()) {
      console.log(loading_states);
      main_contents.style.display = "none";
      loading_screen.style.display = "block";
    } else {
      main_contents.style.display = "block";
      loading_screen.style.display = "none";
    }
  }, [loading_states]);

  try {
    const toggleActiveState = (e) => {
      document
        .querySelectorAll(".nav-link")
        .forEach((el) => el.classList.remove("active"));

      e.classList.add("active");
      document.querySelector(".nav-collection").classList.remove("active");
      document.querySelector("body").style.overflow = "scroll";
    };

    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var revealTop = reveal.getBoundingClientRect().top;
        var revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active");
        }
      });
    };

    document.addEventListener("scroll", () => {
      reveal();
      const Y = window.scrollY;
      const W = window.scrollX;
      let thresholdHeight;

      if (W <= 1440) {
        thresholdHeight = 1000;
      } else if (W < 1024) {
        thresholdHeight = 1700;
      } else if (W < 425) {
        thresholdHeight = 2100;
      }
      if (Y > thresholdHeight) {
        const skillBar = document.querySelectorAll(".skill_level");
        skillBar.forEach((el) => {
          if (!el.classList.contains("animation")) {
            const skillPercentage = el.classList[el.classList.length - 1];
            el.classList.add("animation");
            el.classList.add(`animation${skillPercentage}`);
          }
        });
      }

      const home = document.querySelector("#homelink");
      const about = document.querySelector("#aboutlink");
      const contact = document.querySelector("#contactlink");
      const project = document.querySelector("#project");

      const e = document.querySelector("nav");

      let toggleStyle = (e) => {
        e.style.position = "fixed";
        e.style.background = "#2a363f";

        e.style.zIndex = 100000;
        e.style.left = "0";
        e.style.top = "0";

        e.style.marginRight = "20px";
        e.style.paddingLeft = "20px";
        e.style.justifyContent = "space-around";
      };

      if (Y >= 0 && Y < 860) {
        toggleActiveState(home);
      } else if (Y > 863 && Y < 1392) {
        toggleActiveState(about);
      }
      if (Y >= 840) {
        toggleStyle(e);
      } else {
        e.style = null;
      }
    });
  } catch (err) {
    console.log(err);
  }

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Personal portfolio site, Shishir Bhurtel (cceer bhurtel) is a mern stack developer at gigatech, Nepal. He is a freelance full stack developer at fiverr,  with good knowledge of Node.js, react.js, express.js, mongodb, sql, microservices etc"
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta
          name="keywords"
          content="shishir, bhurtel, developer, web developer, full stack developer, mern stack developer, node.js, react.js, react, node, cceer bhurtel, cceer, ccr"
        />
        <link rel="shortcut icon" type="image/jpg" href="./favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          href="../src/images/logo_background.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />

        <title>
          Shishir Bhurtel | Full Stack Developer -Web Developer at gigatech
        </title>
      </Head>
      <div className="content">
        <div className="loading_screen">
          <Image src={loading} alt="Loading" />
        </div>

        <div className="main_contents">
          <Header
            loading_states={loading_states}
            setLoading_states={setLoading_states}
          />
          <Specializations
            loading_states={loading_states}
            setLoading_states={setLoading_states}
          />
          <About
            loading_states={loading_states}
            setLoading_states={setLoading_states}
          />
          <Projects
            loading_states={loading_states}
            setLoading_states={setLoading_states}
          />
          <Counter />
          <Contact
            loading_states={loading_states}
            setLoading_states={setLoading_states}
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
