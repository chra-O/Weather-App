import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Navbarcomp() {
  return (
    <div>
      <Navbar bg="Light" variant="Light">
        <Container>
          <Navbar.Brand>WEATHER</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="navbarlinkStyle">
              Home
            </Link>
            <Link to="/Iraq" className="navbarlinkStyle">
              Iraq
            </Link>{" "}
            <Link to="/United" className="navbarlinkStyle">
              United Kingdom
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
