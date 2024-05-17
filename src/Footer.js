import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-container">
        <p>Contact Me</p>
        <img
          src={`${process.env.PUBLIC_URL}/resources/contactlogo.png`}
          alt="Contact"
          className="contact-logo"
        />
      </div>
      <div className="separator"></div>
      <div className="social-icons">
        <a
          href="https://github.com/NichtSylph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/GithubLogo.png`}
            alt="GitHub"
            className="social-icon github-icon"
          />
        </a>
        <a
          href="https://discord.gg/Q4czKvrQgc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/DiscordLogo.png`}
            alt="Discord"
            className="social-icon discord-icon"
          />
        </a>
        <a
          href="https://www.twitch.tv/nichtsylph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/TwitchLogo.png`}
            alt="Twitch"
            className="social-icon twitch-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jsantoshurtado/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/LinkedInLogo.png`}
            alt="LinkedIn"
            className="social-icon linkedin-icon"
          />
        </a>
        <a
          href="https://x.com/nichtsylph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/resources/XLogo.png`}
            alt="X"
            className="social-icon x-icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
