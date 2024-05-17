import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  useEffect(() => {
    const handleScroll = () => {
      const servicesElement = document.getElementById("services");
      const projectsElement = document.getElementById("projects");

      if (servicesElement && projectsElement) {
        const servicesTop = servicesElement.offsetTop;
        const projectsTop = projectsElement.offsetTop;
        const scrollPos = window.scrollY + window.innerHeight / 2;

        if (scrollPos >= servicesTop && scrollPos < projectsTop) {
          setActiveLink("services");
        } else if (scrollPos >= projectsTop) {
          setActiveLink("projects");
        } else {
          setActiveLink("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo-container" onClick={() => scroll.scrollToTop()}>
        <img
          src="/resources/FullyTransparentLogo.png"
          alt="Logo"
          className="logo"
        />
      </div>
      <nav className="nav-links">
        <ul>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className={`nav-link ${
                activeLink === "services" ? "active" : ""
              }`}
              activeClass="active"
              onSetActive={() => handleSetActive("services")}
            >
              SERVICES
            </Link>
            <div
              className={`circle ${activeLink === "services" ? "active" : ""}`}
            ></div>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={`nav-link ${
                activeLink === "projects" ? "active" : ""
              }`}
              activeClass="active"
              onSetActive={() => handleSetActive("projects")}
            >
              PROJECTS
            </Link>
            <div
              className={`circle ${activeLink === "projects" ? "active" : ""}`}
            ></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
