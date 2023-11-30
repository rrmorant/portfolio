import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-image">
      <div className="personal-portfolio">
        <div className="div">
          <div className="overlap-group">
            <header className="header">
              <div className="header-text">
                <div className="div-2">
                  <div className="name">
                    <div className="text-wrapper">Ron Morant</div>
                  </div>
                  <div className="intro-text">
                    <div className="text-wrapper-2">
                      Full Stack Web Developer
                    </div>
                  </div>
                </div>
                <div className="call-to-action">
                  <div className="text-wrapper-3">Let’s get started</div>
                  <img className="vector" alt="Vector" src="vector.svg" />
                </div>
              </div>
              <div className="text-wrapper-4">Worked with</div>
              <div className="coding-languages">
                <img
                  className="java-script"
                  alt="JavaScript"
                  src="path/to/javascript.png"
                />
                <img
                  className="HTML"
                  alt="HTML"
                  src="path/to/HTML.png"
                />
                <img
                  className="CSS"
                  alt="CSS"
                  src="path/to/CSS.png"
                />
                <img
                  className="react"
                  alt="React"
                  src="path/to/react.png"
                />
                <img
                  className="ruby"
                  alt="Ruby"
                  src="path/to/ruby.png"
                />
              </div>
            </header>
            <div className="rectangle" />
            <div className="top-menu">
              {/* Navigation menu items */}
            </div>
            <a href="https://www.linkedin.com/in/ronmorant/">
              <img
                className="social-media-icons"
                alt="LinkedIn Profile"
                src="path/to/linkedin.svg"
              />
            </a>
          </div>
          <div className="home">
            <div className="text-wrapper-6">Copyright text ❤️</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
