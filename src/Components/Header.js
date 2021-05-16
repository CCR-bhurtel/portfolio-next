import React from 'react';
import Navbar from './Navbar';
import ccr from '../images/photo_Cropped.jpg';
import arrow from '../images/arrow.png';
import Particles from 'react-particles-js';
import init from './Typewriter';

class Header extends React.Component {
  componentDidMount() {
    init();
  }
  render() {
    return (
      <div id="header">
        <div className="container">
          <Navbar />
          <div className="header-content">
            <div className="my-image-container">
              <img className="myimg" src={ccr} alt="Me" />
            </div>

            <h3 className="header-text">
              <div className="firstLine">
                {' '}
                Hello, I'm <span className="coloured">SHISHIR BHURTEL</span>,
              </div>
              <br />
              <div className="secondLine">
                {' '}
                A{' '}
                <span
                  className="txt-type"
                  data-words='["Developer", "Designer", "FreeLancer"]'
                ></span>
              </div>
            </h3>
            <div className="buttons">
              <a href="#projects">
                <button className="btn arrow-btn">
                  See My Works <img src={arrow} alt="arrow" />
                </button>
              </a>
              <a
                href="https://www.fiverr.com/shishrbhurtel1?up_rollout=true"
                target="blank"
              >
                {' '}
                <button className="btn hire-btn">Hire me</button>
              </a>
            </div>
          </div>
        </div>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 60,
                density: {
                  enable: true,
                  type: 'inside',
                  value_area: 1000,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                },
              },
            },
          }}
        />
      </div>
    );
  }
}

export default Header;
