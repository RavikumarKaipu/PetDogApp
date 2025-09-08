import React from "react";
import { Button } from "react-bootstrap";
import "./index.css";

const Hero=() =>{
  return (
    <div className="hero">
      <div className="hero-overlay">
        <h1 className="hero-title">🐶 Your Pet's Second Home</h1>
        <p className="hero-subtitle">
          Safe, loving, and professional care for your furry friends.
        </p>
        <Button className="hero-btn" href="/services">
          Explore Services
        </Button>
      </div>
    </div>
  );
}

export default Hero;
