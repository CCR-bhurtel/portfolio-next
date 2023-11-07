import React from 'react';
import logo from '../public/images/logo__white.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-content-brand">
                        <a href="/" className="logo">
                            <Image src={logo} alt="logo" className="logo-image" />
                        </a>
                    </div>
                    <div className="social-media-wrap">
                        <h4 className="footer-heading">Follow Me</h4>
                        <div className="social-media">
                            <a href="#" className="sa-link">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.facebook.com/logicmaestro403/" target="blank" className="sa-link">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://github.com/CCR-bhurtel" target="blank" className="sa-link">
                                <i className="fab fa-github"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shishir-bhurtel-54974b1b7/"
                                target="blank"
                                className="sa-link"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="sa-link">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
