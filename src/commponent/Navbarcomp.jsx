import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";
export default function Navbarcomp() {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="#home">WEATHER</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="navbarlinkStyle">
              Home
            </Link>
            <Link to="/about" className="navbarlinkStyle">
              Iraq
            </Link>{" "}
            <Link to="/test" className="navbarlinkStyle">
            United Kingdom
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
