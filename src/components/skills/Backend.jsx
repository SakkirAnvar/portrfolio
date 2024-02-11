import React from "react";
import nodejs from '../../assets/node.png'
import expressjs from '../../assets/express.png'
import mongodb from '../../assets/mongo.png'
import java from '../../assets/java.png'
import sql from '../../assets/sql.png'


const Backend = () => {
  return (
<div classname="skills__content">
<div className="column"><span className="skill__icon"><i className="ibtn bx bx-code-alt" /></span>
    <h2 className="title is-size-4 is-spaced">Backend Developer</h2>
    {/* <p className="skill__subtitle">I love developing backend solutions, turning ideas into functional systems with a knack for building from scratch.</p> */}
    <p className="skill__subtitle">Mastering the backend, bringing ideas to life with functionality.</p>
    {/* <p class="list-title ">Backend technologies in my toolkit include:</p> */}
    <p className="list-title ">Backend whisperer:</p>
    <ul className="skills__logo">
      <li><img src={mongodb} alt="MongoDB" /></li>
      <li><img src={expressjs} alt="Express.js" /></li>
      <li><img src={nodejs} alt="Node.js" /></li>
      <li><img src={java} alt="Java" /></li>
      <li><img src={sql} alt="SQL" /></li>
    </ul>
  </div>
</div>

  );
};

export default Backend;
