import { Link } from "react-scroll";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Hi, I'm Jovani</span>{" "}
          </h1>
          <p className="section--title">Computer Engineering Student</p>
        </div>
        <div className='buttons--in--hero'>
        <div className='buttons--hero'>
        <a href="https://drive.google.com/file/d/1JPaKWTDYEGy69aqDhS7Rwo7sfvXY1Ypc/view?usp=sharing" target="_blank" rel="noreferrer"><button className="btn btn-primary">
          <FontAwesomeIcon icon={faDownload} />
          {" "}Resume
        </button></a>
        <Link to="Contact" smooth={true} duration={500}>
        <button className="btn btn-primary">Get In Touch</button></Link>
        </div>
        <div className='socials--hero'>
        <a className="linkedin--button" href="https://www.linkedin.com/in/jovaniw/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a className="linkedin--button" href="https://github.com/Jovani54321" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
