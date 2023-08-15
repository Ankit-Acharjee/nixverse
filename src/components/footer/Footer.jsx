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
                Discover the world of cinema with [Your Movie Website Name], your premier source for comprehensive film and television information. Immerse yourself in a universe of credits, reviews, ratings, and behind-the-scenes insights. Uniting movie enthusiasts, industry professionals, and casual viewers alike, we provide a gateway to explore the vast landscape of entertainment. From classic favorites to the latest releases, [Your Movie Website Name] is your trusted companion on the cinematic journey.
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/ankit.acharjee.56/">
                        <span className="icon">
                            <FaFacebookF />

                        </span>
                    </a>
                    <a href="https://www.instagram.com/_._anonym__ous/">
                        <span className="icon">

                            <FaInstagram />
                        </span>
                    </a>
                    {/* <span className="icon">
                        <FaTwitter />
                    </span> */}
                    <a href="https://www.linkedin.com/in/ankit-acharjee-930478156/">
                        <span className="icon">
                            <FaLinkedin />

                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;