import React from "react";
import "./index.css";
import Hero from "../../Hero";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home=()=> {
  const features = [
    { icon: "🐶", title: "Pet Boarding", desc: "Safe & cozy stays for your pets while you're away." },
    { icon: "✂️", title: "Grooming", desc: "Professional grooming to keep your pets clean & happy." },
    { icon: "🎾", title: "Training", desc: "Expert trainers for discipline, tricks, and good behavior." },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <Hero />
      {/* Welcome Section */}
      <section className="welcome-section py-5">
        <Container>
          <h2 className="text-center mb-3 welcome-title">Welcome to Pet Care 🐾</h2>
          <p className="text-center text-muted mb-5">
            We provide professional pet care services including boarding, training,
            grooming, and more! Our team ensures your furry friends are treated
            like family. 💖
          </p>
        <h3>Features</h3>
          {/* Features */}
          <Row>
            {features.map((feature, idx) => (
              <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
                <Card className="feature-card shadow-sm text-center">
                  <div className="feature-icon">{feature.icon}</div>
                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>{feature.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
