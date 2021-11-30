import React, { useState } from "react";
import "./MyProjects.css";
import Projects from "../Projects/Projects";
import { Container } from "react-bootstrap";
import MyReactproject from "../MyReactproject/MyReactproject";
import Myother from "../Myother/Myother";
import Fade from "react-reveal/Fade";
import All from "../All/All";
const MyProjects = () => {
  const [state, setState] = useState("mern");
  return (
    <div>
      <Container className="text-center py-5">
        <Fade left>
          {" "}
          <h1 className="text-center my-4 display-6">My Projects</h1>{" "}
        </Fade>
        <ul className="text-center">
          <li onClick={() => setState("mern")} className="fw-bold">
            MERN
          </li>
          <li onClick={() => setState("react")} className="fw-bold m-3">
            React
          </li>
          <li onClick={() => setState("html")} className="fw-bold m-3">
            html-Css-js{" "}
          </li>
          <li onClick={() => setState("all")} className="fw-bold">
            All
          </li>
        </ul>
      </Container>
      {state === "mern" && <Projects />}
      {state === "react" && <MyReactproject />}
      {state === "html" && <Myother />}
      {state === "all" && <All />}
    </div>
  );
};

export default MyProjects;
