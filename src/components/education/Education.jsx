import React, { useState } from "react";
import "./education.css";

const Education = () => {
  const [toggleState, settoggleState] = useState(1);

  const toggleTab = (index) => {
    settoggleState(index);
  };

  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {""}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MERN Stack Development</h3>
                <span className="qualification__subtitle">
                  Jspiders Training Institute - Bangalore.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt cal"></i>Oct 2022 - Mar
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor of Arts</h3>
                <span className="qualification__subtitle">
                  Bharathiar University- Coimbatore.{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt cal"></i>2019 - 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MERN Stack Developer</h3>
                <span className="qualification__subtitle">
                  Ametzo Technologies - Kochi.
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt cal"></i>Aug 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  MERN Developer - Intern
                </h3>
                <span className="qualification__subtitle">
                  Jspiders - Bangalore.{" "}
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt cal"></i>2022 - 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
