import React from "react";
import Typed from "react-typed";
import "./Header.css";
const Header = () => {
  return (
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
  );
};

export default Header;
