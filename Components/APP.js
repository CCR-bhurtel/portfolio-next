import { React, Component } from "react";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    try {
      const reveal = () => {
        const reveals = document.querySelectorAll(".reveal");
        reveals.forEach((reveal) => {
          var windowHeight = window.innerHeight;
          var revealTop = reveal.getBoundingClientRect().top;
          var revealBottom = reveal.getBoundingClientRect().bottom;
          var revealPoint = 150;
          if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add("active");
          }
        });
      };

      function initSkill() {
        const skillBar = document.querySelectorAll(".skill_level");
        const aboutSection = document.querySelector("#about");

        var windowHeight = window.innerHeight;
        var revealTop = aboutSection.getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          skillBar.forEach((el) => {
            if (!el.classList.contains("animation")) {
              const skillPercentage = el.classList[el.classList.length - 1];
              el.classList.add("animation");
              el.classList.add(`animation${skillPercentage}`);
            }
          });
        }
      }

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

      document.addEventListener("scroll", () => {
        initSkill();
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
        }

        const e = document.querySelector("nav");

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
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="robots" content="index, follow" />
          <meta
            name="description"
            content="Shishir Bhurtel, full stack developer from Butwal, Nepal. Personal Portfolio Site. SkillSet:- Node.js, react.js, express.js, mongodb, sql, microservices, python, redux.js, MVC, Ajax, html, css, javascript etc"
          />
          <meta
            name="keywords"
            content="shishir, bhurtel, shishir bhurtel, developer, web developer, full stack developer, mern stack developer, node.js, react.js, react, node, cceer bhurtel, cceer, ccr, developer from nepal, "
          />
          <meta
            name="og:title"
            content="Shishir Bhurtel | Full Stack Developer"
          />
          <meta name="og:url" content="https://www.shishirbhurtel.com.np/" />

          <link rel="canonical" href="https://www.shishirbhurtel.com.np/" />
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
          {this.state.loading ? (
            <div className="loading_screen">
              <Image src={loading} alt="Loading" />
            </div>
          ) : (
            <div className="main_contents">
              <Header />
              <Specializations />
              <About />
              <Projects />
              <Counter />
              <Contact />
              <Footer />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
