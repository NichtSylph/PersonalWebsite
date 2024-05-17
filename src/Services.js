import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="services-title">PROVIDED SERVICES</h1>
      <hr className="services-divider" />
      <p className="services-description">
        My services includes a variety of skills such as developing JAVA
        applications, C applications, or providing help building projects to
        Full Stack Development utilizing MERN. I also possess experience with
        AWS, mySQL, and SpringBoot. I also work with Software Design, especially
        with Quality Assurance and Software Requirements.
      </p>
      <div className="services-images">
        <img
          src={`${process.env.PUBLIC_URL}/resources/QAPicture.png`}
          alt="QA"
          className="service-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/resources/SR.png`}
          alt="Software Requirements"
          className="service-image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/resources/ProgrammingLanguages.png`}
          alt="Programming Languages"
          className="service-image"
        />
      </div>
    </div>
  );
};

export default Services;
