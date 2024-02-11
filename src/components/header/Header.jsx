import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import logo from "../../assets/headerlogo.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const headerRef = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    // Intersection Observer callback function
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`);
        }
      });
    };

    // Create Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      rootMargin: "-80px 0px -80px 0px", // Adjust root margin based on your design
      threshold: 0.5, // 50% of the target element is visible
    });

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-80px 0px -80px 0px",
      threshold: 0.5,
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.current.observe(section);
    });

    // Clean up the observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.current.unobserve(section);
      });
    };
  }, []);

  const handleToggleMenu = () => {
    setToggle(!toggle);
  };

  const handleNavItemClick = (target) => {
    setActiveNav(target);
    const targetSection = document.querySelector(target);
    if (targetSection) {
      // Trigger intersection for the clicked section
      observer.current && observer.current.observe(targetSection);
      // Optionally, you can unobserve other sections to prevent unnecessary callbacks
      const sections = document.querySelectorAll(
        "section[id]:not(" + target + ")"
      );
      sections.forEach((section) => {
        observer.current && observer.current.unobserve(section);
      });
    }
    setToggle(false);
  };

  return (
    <header
      className={`header ${toggle ? "scroll-header" : ""}`}
      ref={headerRef}
    >
      <nav className="nav container">
        <div className="logo__name">
          <a href="#home" className="nav__logo logo__name">
            <img className="header__img" width="20px" src={logo} alt="" />
            Sakkir Anvar
          </a>
        </div>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#education"
                onClick={() => setActiveNav("#education")}
                className={
                  activeNav === "#education"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Education
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Projects
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={handleToggleMenu}
          ></i>
        </div>

        <div className="nav__toggle" onClick={handleToggleMenu}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
