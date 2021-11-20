import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import image from "../../images/ta3.png";
const AboutMe = () => {
  return (
    <div className="py-4">
      <Container>
        <h1 className="text-center py-4 display-5">About me</h1>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <img src={image} alt="" className="img-fluid" />
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Body>
                <Card.Text className="fs-5">
                  I am Mohammad Tareq from Dhaka, Bangladesh. I have completed
                  my graduation from Daffodil International University in
                  Computer Science and Engineering. I've done some projects
                  using HTML, CSS, React, Node, Express, Mongodb. I am an
                  enthusiastic and diligent full stack web developer with
                  excellent knowledge and experience.There are many things I
                  like to do, to see, and to experience. I can take on
                  challenges in new environments to develop new skills.
                  I have already developed 10+ projects. Most of that are developed using JavaScript. I have used react the most commonly used JavaScript library for front-end development and for backend I've used express - a Nodejs framework. And most of the projects I've used Mongo dB as a database. I have a clear knowledge of how to deploy a project on both the server side and the client side in Netlify, Firebase and Heroku. I can take the level of accuracy concerning about the quality of the work and the presentation of the work and attention to detail.
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
