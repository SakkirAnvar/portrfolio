import React from 'react'
import CV from "../../assets/Sakkir_Anvar_A_Resume.pdf";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/sakkiranvar" className="home__social-icon" target={'_blank'}>
        <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/SakkirAnvar" className="home__social-icon" target={'_blank'}>
        <i className="uil uil-github"></i>
        </a>

        <a download="" href={CV} className="home__social-icon" target={'_blank'}>
        <i className="uil uil-import"></i>
        </a>
    </div>
  )
}

export default Social
