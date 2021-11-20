import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark"fixed="top"  expand="lg" style={{zIndex:3}}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">MD. Tareq</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Home</Nav.Link>
            <Nav.Link href="#link" className="text-white">About ME</Nav.Link>
            <Nav.Link href="#link" className="text-white">Skills</Nav.Link>
            <Nav.Link href="#link" className="text-white">Projects</Nav.Link>
            <Nav.Link href="#link" className="text-white">Contact</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
