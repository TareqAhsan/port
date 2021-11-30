import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <Navbar bg="dark" fixed="top" expand="lg" style={{ zIndex: 3 }}>
      <Container>
        <Navbar.Brand href="#home" className="text-white">
          MD. Tareq
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link  as={Link} to="/about" className="text-white">
              About ME
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="text-white">
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/myprojects" className="text-white">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs" className="text-white">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
