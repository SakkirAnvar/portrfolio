import React, { useState } from "react";

const ProjectsItems = ({ item }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(!isImageOpen);
  };

  return (
    <div
      className={`project__card ${isImageOpen ? "image-open" : ""}`}
      key={item.id}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`project__img ${isImageOpen ? "rotate-zoom" : ""}`}
      />

      <div className="project-content">
        <h3 className="project__title">{item.title}</h3>

        <a href={item.codeurl} target="_blank" className="project__button">
          Code <i className="uil uil-github-alt project__button-icon"></i>
        </a>

        {item.liveurl && (
          <a href={item.liveurl} target="_blank" className="project__button">
            Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
          </a>
        )}

        {!item.liveurl && (
          <a href="#" className="project__button disabled">
            Coming Soon...
          </a>
        )}

        <div
          className={`camera-icon ${isImageOpen ? "enabled" : ""}`}
          onClick={handleImageClick}
        >
          <i className="bx bx-camera"></i>
        </div>

        {isImageOpen && (
          <div className="image-overlay">
            <img src={item.image} alt={item.title} />
            <div className="close-icon" onClick={handleImageClick}>
              <i className="bx bx-x"></i>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProjectsItems;
