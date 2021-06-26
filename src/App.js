import React from 'react';
import About from './Components/About';

import { toast } from 'react-toastify';

import Contact from './Components/Contact';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Projects from './Components/Projects';
import Specializations from './Components/Specializations';
import loading from './images/loading.gif';

toast.configure();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
    try {
      const toggleActiveState = (e) => {
        document
          .querySelectorAll('.nav-link')
          .forEach((el) => el.classList.remove('active'));

        e.classList.add('active');
        document.querySelector('.nav-collection').classList.remove('active');
        document.querySelector('body').style.overflow = 'scroll';
      };

      document.addEventListener('scroll', () => {
        const Y = window.scrollY;
        const W = window.scrollX;
        let thresholdHeight;

        if (W <= 1440) {
          thresholdHeight = 1650;
        } else if (W < 1024) {
          thresholdHeight = 1809;
        } else if (W < 425) {
          thresholdHeight = 2350;
        }
        if (Y > thresholdHeight) {
          const skillBar = document.querySelectorAll('.skill_level');
          skillBar.forEach((el) => {
            if (!el.classList.contains('animation')) {
              const skillPercentage = el.classList[el.classList.length - 1];
              el.classList.add('animation');
              el.classList.add(`animation${skillPercentage}`);
            }
          });
        }

        const home = document.querySelector('#homelink');
        const about = document.querySelector('#aboutlink');
        const contact = document.querySelector('#contactlink');

        const e = document.querySelector('nav');

        let toggleStyle = (e) => {
          e.style.position = 'fixed';
          e.style.background = '#2a363f';

          e.style.zIndex = 100000;
          e.style.left = '0';
          e.style.top = '0';

          e.style.marginRight = '20px';
          e.style.paddingLeft = '20px';
          e.style.justifyContent = 'space-around';
        };

        if (Y >= 0 && Y < 860) {
          toggleActiveState(home);
        } else if (Y > 863 && Y < 3812) {
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
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading_screen">
          <img src={loading} alt="Loading" />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Specializations />
          <About />
          <Projects />
          <Counter />
          <Contact />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
