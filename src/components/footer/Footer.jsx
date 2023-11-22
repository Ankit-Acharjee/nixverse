/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const openLink = ( url) => {
    
  window.open(url, "_blank");
};

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Discover the world of cinema with Nixverse, your premier source for
          comprehensive film and television information. Immerse yourself in a
          universe of credits, reviews, ratings, and behind-the-scenes insights.
          Uniting movie enthusiasts, industry professionals, and casual viewers
          alike, we provide a gateway to explore the vast landscape of
          entertainment. From classic favorites to the latest releases, Nixverse
          is your trusted companion on the cinematic journey.
        </div>
        <div className="socialIcons">
          <span
            className="icon"
            onClick={()=> openLink('https://www.facebook.com/ankit.acharjee.56/')}
          >
            <FaFacebookF />
          </span>
          <span
            className="icon"
            onClick={()=> openLink('https://www.instagram.com/ankit_acharjee__/')}
          >
            <FaInstagram />
          </span>
          <span
            className="icon"
            onClick={()=> openLink('https://www.linkedin.com/in/ankit-acharjee-930478156/')}
          >
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
