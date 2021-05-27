import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import { Slide } from "@material-ui/core";

class Header extends Component {
  render() {


    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <Slide direction="left" in={true} timeout={2000} mountOnEnter unmountOnExit>
               <h1 className="responsive-headline">Hello I'm Eugene Park.</h1>
            </Slide>
            <Slide direction="left" in={true} timeout={2500} mountOnEnter unmountOnExit>
               <h2>Junior Web Developer</h2>
            </Slide>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
