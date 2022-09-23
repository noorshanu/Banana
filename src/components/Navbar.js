import React, { useState } from "react";
import "./Navbar.css";
import { FaApple,} from "react-icons/fa";
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '../images/logo.png'

function Navbar() {

      const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav container">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={Logo} alt="logo" className="logo-nav"/>
          
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <a href="/">GAMEPLAY</a>
            </li>
            <li>
              <a href="#token">TOKENOMICS</a>
            </li>
            <li>
              <a href="/service">WHITE PAPER</a>
            </li>
         

           
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
          <li>
             <a href="/" className="btn-btn-nav">Download</a>
            </li>
          <li>
              <a
                href="https://www.youtube.com/channel"
                target="_thapa">
                <FaApple className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_thapa">
                <IoLogoGooglePlaystore className="instagram" />
              </a>
            </li>
           
          
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      
    </>
  )
}

export default Navbar