import React from "react";
import "./index.css";

function About() {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="https://cdn.shopify.com/s/files/1/0765/3946/1913/files/different-dog-breeds.webp?v=1736810586"
              alt="Pet Care"
              className="img-fluid rounded shadow-lg about-img"
            />
            <h4>Pet Care</h4>
          </div>

          {/* Text Section */}
          <div className="col-md-6">
            <h2 className="about-title">🐾 About Us</h2>
            <p className="about-text">
              At <span className="highlight">Pet Care</span>, we are passionate about
              providing the best services for your furry friends. With years of
              experience in <strong>training</strong>, <strong>grooming</strong>, and{" "}
              <strong>pet wellness</strong>, we treat every pet like family. 💖
            </p>
            <p className="about-text">
              Our dedicated team ensures your pets feel safe, loved, and cared for
              while you’re away. Because for us, pets aren’t just animals – they’re
              family. 🐶🐾🐱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
