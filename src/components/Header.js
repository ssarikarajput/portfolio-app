import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
//d-none d-lg-block

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="particle ">
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.2,
              },
              move: {
                direction: "centre",
                speed: 0.5,
              },
              size: {
                value: 3,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode:  "repulse",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
      <div className="header-info">
        <h1>Hi There!</h1>
        <Typed
          className="typed-text"
          strings={["Web Development", "Front-end-development"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />

        <a href="#" className="header-btn">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
