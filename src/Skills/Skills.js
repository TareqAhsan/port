import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from "react-bootstrap";
import js from "../images/js.png";
import react from "../images/react js.png";
import express from "../images/ex.png";
import node from "../images/nod.png";
import mongo from "../images/mong.png";
import html from "../images/html.png";
import css from "../images/css.png";
import bootstrap from "../images/Bootstrap.png";
import reactbootstrap from '../images/react-bootstrap.png'
import tailwind from '../images/tailwind.jpg'
import  router from '../images/router.png'
import  fire from '../images/fire1.png'
// const skills = [
//   {
//     name:'Javascript',
//     img:'../images/js.png'
//   },
//   {
//     name:'React js',
//     img:'../images/react js.png'
//   },
//   {
//     name:'Express js',
//     img:'../images/ex.png'
//   },
//   {
//     name:'node js',
//     img:'../images/nod.png'
//   },
//   {
//     name:'Mongo DB',
//     img:'../images/mong.png'
//   },
//   {
//     name:'Html',
//     img:'../images/html.png'
//   },
//   {
//     name:'CSS',
//     img:'../images/css.png'
//   },
//   {
//     name:'Bootstrap',
//     img:'../images/Bootstrap.png'
//   },
//   {
//     name:'React Bootstrap',
//     img:'../images/react-bootstrap.png'
//   },
//   {
//     name:'Tailwind Css',
//     img:'../images/tailwind.jpg'
//   },
//   {
//     name:'React Router',
//     img:'../images/router.png'
//   },
// ]
const Skills = () => {
  return (
    <div>
      <Container className="p-3">
      <Fade left> <h2 className="display-5 py-5 text-center">My skills</h2></Fade>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={js}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">Javascript</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={react}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">React js</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={express}
                    style={{width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">Express js</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={node}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">node js</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={mongo}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">Mongo DB</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={html}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">Html</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={css}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">CSS</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={bootstrap}
                    style={{width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">Bootstrap</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={reactbootstrap}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">React Bootstrap</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={tailwind}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">Tailwind Css</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={router}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">React Router</p>
                </div>
              </div>
            </Zoom>
          </Col>
          <Col>
            <Zoom>
              <div
                className="d-flex align-items-center shadow justify-content-center p-2 h-100"
                style={{ borderRadius: "10px" }}
              >
                <div>
                  <img
                    src={fire}
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                </div>
                <div className="ps-2 mt-1">
                  <p className="fs-5 fw-bold">Firebase</p>
                </div>
              </div>
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
