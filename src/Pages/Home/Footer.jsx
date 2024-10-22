import { Link } from "react-scroll";
import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer--container">
        <Link to="heroSection" smooth={true} duration={500}>
            <img src="./img/logo.svg" />
        </Link>
        <div className="footer--content">
            <p>Tampa, FL 33613</p>
            <a href="tel:+19047030573">+1 (904) 703 - 0573</a>
            <br />
            <a href="mailto:jovaniwahba04@gmail.com">jovaniwahba04@gmail.com</a>
        <div className='socials--footer'>
        <a className="linkedin--button" href="https://www.linkedin.com/in/jovaniw/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a className="linkedin--button" href="https://github.com/Jovani54321" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
        </div>
    </footer>
  );
}

export default Footer;