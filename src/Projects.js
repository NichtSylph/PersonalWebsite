import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projects-title">MY PROJECTS</h1>
      <hr className="projects-divider" />
      <div className="projects-grid">
        <div className="project-container">
          <h2 className="project-title">SUNY OSWEGO VRT</h2>
          <img
            src={`${process.env.PUBLIC_URL}/resources/oswegovrt.png`}
            alt="SUNY Oswego VRT"
            className="project-image"
          />
          <a
            href="https://github.com/NichtSylph/sunyoswegovrt"
            className="project-link"
          >
            https://github.com/NichtSylph/sunyoswegovrt
          </a>
        </div>
        <div className="project-container">
          <h2 className="project-title">PAWS N' CLAWS</h2>
          <img
            src={`${process.env.PUBLIC_URL}/resources/pawsnclaws.png`}
            alt="Paws N' Claws"
            className="project-image"
          />
          <a href="http://moxie.cs.oswego.edu:48021/" className="project-link">
            http://moxie.cs.oswego.edu:48021/
          </a>
        </div>
        <div className="project-container">
          <h2 className="project-title">MULTIPLAYER MINESWEEPER</h2>
          <img
            src={`${process.env.PUBLIC_URL}/resources/minesweeper.png`}
            alt="Multiplayer Minesweeper"
            className="project-image"
          />
          <a
            href="https://github.com/NichtSylph/multiplayerminesweeper"
            className="project-link"
          >
            https://github.com/NichtSylph/multiplayerminesweeper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
