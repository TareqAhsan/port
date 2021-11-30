import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Particles
        params={{
          Particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area:2000,
              },
            },
          },
        }}
      />
      <div className="header-Wrapper">
        <div className="main-info">
          <h1>Hello I am Md.Tareq</h1>
          <Typed
            className="typed-text"
            strings={["Mern Stack Developer", "React Developer"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
        </div>
      </div>
    </>
  );
};

export default Header;
