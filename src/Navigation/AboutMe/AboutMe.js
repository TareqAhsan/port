import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image from "../../images/ta3.png";
const AboutMe = () => {
  return (
    <div className="py-4" style={{ background: "aliceblue" ,height:'100vh'}}>
      <Container>
        <Fade left>
          {" "}
          <h1 className="text-center py-5 display-5">About me</h1>{" "}
        </Fade>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Fade left>
              <img
                src={image}
                alt=""
                className="img-fluid"
                style={{ borderRadius: "8px" }}
              />
            </Fade>
          </Col>
          <Col>
            <Fade right>
              {/* <Card className="border-0">
              <Card.Body> */}
              <Card.Text className="fs-5">
                I am Mohammad Tareq from Dhaka, Bangladesh. I have completed my
                graduation from Daffodil International University in Computer
                Science and Engineering. I've done some projects using HTML,
                CSS, React, Node, Express, Mongodb. I always like to do someting
                new, to see, and to experience new technology. I can take
                challenges in a learning environments to develop new skills . I
                have already developed some projects. Most of that are developed
                using JavaScript. I have used react.JS the most commonly used
                JavaScript library for front-end development and for backend
                I've used express - a Nodejs framework. And most of the projects
                I've used Mongo dB as a database. I have a clear knowledge of
                how to deploy a project on both the server side and the client
                side in Netlify, Firebase and Heroku. I can adapt onto any
                technology rapidly making myself flexible upon any tech stack. A
                passionate, diligent person who wants to learn continuously.
              </Card.Text>
              <div className="py-3">
                <a href="https://www.linkedin.com/in/md-tareq/">
                  <i className="fab fa-linkedin-in fa-2x me-2"></i>
                </a>
                <a href="https://github.com/TareqAhsan">
                  <i className="fab fa-github fa-2x m-2"></i>
                </a>
                <a href="">
                  <i className="fab fa-facebook fa-2x m-2"></i>
                </a>
              </div>
              <div className="my-2">
                <a href="https://drive.google.com/file/d/1Wr82N4TKQ16Ovjsbh9xnShIEZz2unXPU/view?usp=sharing" >
                  <Button style={{ borderRadius: "8px" }} className="m-2">
                    Download my resume
                  </Button>
                </a>
                <a href="mailTo:tareqahsan61@gmail.com" className="m-2">
                  <Button style={{ borderRadius: "8px" }}>
                    Contact with me
                  </Button>
                </a>
              </div>
              {/* </Card.Body>
            </Card> */}
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
