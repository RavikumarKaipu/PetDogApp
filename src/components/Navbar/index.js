import React from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import "./index.css";

const Navbar = () => {
  return (
    <BsNavbar
      expand="md"
      sticky="top"
      className="custom-navbar shadow-sm"
    >
      <Container>
        <BsNavbar.Brand href="#home" className="brand-logo">
          🐶 Pet Care
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#programs" className="nav-link-custom">Programs</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link-custom">Gallery</Nav.Link>
            <Nav.Link href="#reviews" className="nav-link-custom">Reviews</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link-custom">Pricing</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link href="#login" className="nav-link-custom">Login</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
