import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";

import { Link } from "react-router-dom";
export default function Navbarcomp() {
  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };

  return (
    <div>
      {active ? (
        <Navbar  bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand>WEATHER</Navbar.Brand>
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
            <img
              className="active"
              src="./image/toggle.png"
              alt="yellow star"
              onClick={() => handleChangeActive()}
            />
          </Container>
        </Navbar>
      ) : (
        <Navbar variant="light">
          <Container>
            <Navbar.Brand>WEATHER</Navbar.Brand>
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
            <img
              className="inactive"
              src="./image/blackmode.png"
              alt="black and white star"
              onClick={() => handleChangeActive()}
            />
          </Container>
        </Navbar>
      )}
    </div>
  );
}
