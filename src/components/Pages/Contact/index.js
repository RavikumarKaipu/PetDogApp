import React from "react";
import "./index.css";

function Contact() {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="contact-title text-center mb-4">📞 Contact Us</h2>
        <div className="row">
          {/* Contact Info */}
          <div className="col-md-5 contact-info">
            <h4>Get in Touch</h4>
            <p>📞 <strong>+91 83417 43252</strong></p>
            <p>💌 <strong>info@petcare.com</strong></p>
            <p>📍 <strong>Bangalore, India</strong></p>
            <a
              href="https://wa.me/918341743252"
              className="btn btn-success mt-3 shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Map */}
          <div className="col-md-7">
            <div className="map-container shadow-lg rounded">
              <iframe
  title="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31107.123456789!2d77.594566!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f...!2sBangalore%2C+Karnataka%2C+India!5e0!3m2!1sen!2sin!4v1694041234567!5m2!1sen!2sin"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
