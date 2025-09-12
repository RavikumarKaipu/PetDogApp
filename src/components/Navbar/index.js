import React from "react";
import { Navbar as BsNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import "./index.css";

const Navbar = ({ isLoggedIn, onLogout, onShowLogin, onShowSignup }) => {
  return (
    <BsNavbar expand="md" sticky="top" className="custom-navbar shadow-sm">

        <BsNavbar.Brand href="/" className="brand-logo">
          🐶 Pet Care
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {/* Always visible links */}
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-link-custom">Services</Nav.Link>
            <Nav.Link href="#programs" className="nav-link-custom">Programs</Nav.Link>
            <Nav.Link href="#gallery" className="nav-link-custom">Gallery</Nav.Link>
            <Nav.Link href="#reviews" className="nav-link-custom">Reviews</Nav.Link>
            <Nav.Link href="#pricing" className="nav-link-custom">Pricing</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>

            <NavDropdown
              align="end"
              title={<FaUserCircle size={32} />}
              id="profile-dropdown"
              className="profile-dropdown"
            >
              {isLoggedIn ? (
                <>
                  <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={onLogout} className="logout-btn">
                    Logout
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item onClick={onShowLogin}>Login</NavDropdown.Item>
                  <NavDropdown.Item onClick={onShowSignup}>Signup</NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </BsNavbar.Collapse>

    </BsNavbar>
  );
};

export default Navbar;
