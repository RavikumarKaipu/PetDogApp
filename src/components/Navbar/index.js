import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import "./index.css";


const Navbar=()=> {
  return (
    <BsNavbar
      bg="dark"
      variant="dark"
      expand="md"
      sticky="top"
      className="custom-navbar shadow-sm"
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="brand-logo">
          🐶 Pet Care
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="/programs" className="nav-link-custom">Programs</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="nav-link-custom">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/reviews" className="nav-link-custom">Reviews</Nav.Link>
            <Nav.Link as={Link} to="/pricing" className="nav-link-custom">Pricing</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
