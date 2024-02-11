import React from "react";
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import bootstrap from '../../assets/boot.png'
import javascript from '../../assets/js.png'
import reactlogo from '../../assets/react.png'

const Frontend = () => {
  return (
<div classname="skills__content">
<div className="column"><span className="skill__icon"><i className="ibtn bx bx-terminal" /></span>
    <h2 className="title is-size-4 is-spaced">Frontend Developer</h2>
    <p className="skill__subtitle">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
    <p className="list-title ">Languages I speak:</p>
    <ul className="skills__logo">
      <li><img src={html} alt="HTML" /></li>
      <li><img src={css} alt="CSS" /></li>
      <li><img src={bootstrap} alt="Bootstrap" /></li>
      <li><img src={javascript} alt="Javascript" /></li>
      <li><img src={reactlogo} alt="React" /></li>
    </ul>
  </div>
</div>

  );
};

export default Frontend;
