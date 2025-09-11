import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-logo">🐶 Pet Care</h4>
        <p>© {new Date().getFullYear()} Pet Care. All Rights Reserved.</p>
        <p>📍 Bangalore, India</p>
        <p>📞 +91 83417 43252 | 💌 info@petcare.com</p>

        <div className="social-links">
          <a
            href="https://wa.me/918341743252"
            target="_blank"
            rel="noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="tel:+918341743252" className="phone">
            <FaPhoneAlt /> Call
          </a>
          <a href="mailto:info@petcare.com" className="email">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
