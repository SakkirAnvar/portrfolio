import React from "react";
import "./education.css"

const Education = () => {
  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Qualification</h2>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon">
              {""}Education
            </i>
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">MERN Stack Development</h3>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar">
                    Oct 2022 - Mar 2023
                  </i>
                </div>
                <span className="qualification__Subtitle">
                  Jspiders Training Institute - Bangalore.
                </span>
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
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt calendar">2019 - 2022</i>
                </div>
                <span className="qualification__Subtitle">
                  Bharathiar University - Gudalur, Tamilnadu.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
