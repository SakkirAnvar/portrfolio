import React from "react";
import "./footer.css";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/headerlogo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__img">
      <img width="70px" src={logo} alt="" />
      </div>
      <div className="footer__container container">
     
        <h1 className="footer__title">Sakkir Anvar</h1>

        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/zakkiez.kokkadan.3"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/shakir_zain_/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/sakkirkokkadan"
            className="footer__social-linktwitter"
            target={"_blank"}
          >
            <i>
              <FaXTwitter />
            </i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Sakkir Anvar | All rights reserved.
        </span>
      </div>
      <div className="footer__slogan">
        <h3>Living, learning, & leveling up one day at a time</h3>
      </div>
    </footer>
  );
};

export default Footer;
