import React from "react";
import "./index.css";

const Footer=()=>{
  return (
    <footer className="footer">
      <div className="footer-content">
        <h4 className="footer-logo">🐾 Pet Care</h4>
        <p>© 2025 Pet Care. All Rights Reserved.</p>
        <p>
          📍 Bangalore, India | 📞 +91 83417 43252 | 💌 info@petcare.com
        </p>
        <div className="social-links">
          <a href="https://wa.me/918341743252" target="_blank" rel="noreferrer">💬 WhatsApp</a>
          <a href="tel:+918341743252">📞 Call</a>
          <a href="mailto:info@petcare.com">✉️ Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
