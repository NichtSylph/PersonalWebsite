import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="main-content">
        <div className="left-section">
          <h1>SOFTWARE ENGINEER</h1>
          <hr className="divider" />
          <img
            src={`${process.env.PUBLIC_URL}/resources/TanyaCircle.png`}
            alt="Profile"
            className="profile-picture"
          />
          <hr className="divider" />
          <h2>JOEL</h2>
        </div>
        <div className="right-section">
          <div className="quote-container">
            <img
              src={`${process.env.PUBLIC_URL}/resources/QuotesIcon.png`}
              alt="Quotes"
              className="quotes-icon"
            />
            <blockquote>
              "I will never cease to take an opportunity. Always looking forward
              to learning..."
            </blockquote>
          </div>
          <hr className="divider wide" />
          <div className="about-me-section">
            <h3>ABOUT ME</h3>
            <p>
              Graduated May 2024 in SUNY Oswego. Top of the Class Summa Cum
              Laude. I enjoy programming and designing. I'm a huge fan of
              languages (Currently Bilingual), Anime, Videogames and playing
              Instruments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
