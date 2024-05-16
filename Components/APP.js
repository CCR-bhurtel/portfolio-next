import { React, Component } from "react";
import About from "./About";

import { toast } from "react-toastify";

import Contact from "./Contact";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Specializations from "./Specializations";
import loading from "../public/images/loading.gif";
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
      <>
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
              {/* <Skills /> */}
              <Projects />
              <Counter />
              <Contact />
              <Footer />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
