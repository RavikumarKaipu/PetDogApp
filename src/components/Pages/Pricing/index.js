import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./index.css";

function Pricing() {
  const services = [
    { name: "Boarding", price: "₹800/day", icon: "🏠" },
    { name: "Training", price: "₹500/session", icon: "🎾" },
    { name: "Grooming", price: "₹700/session", icon: "✂️" },
    { name: "Swimming", price: "₹400/session", icon: "🏊" },
    { name: "Weight Management", price: "₹1000/month", icon: "⚖️" },
  ];

  return (
    <section className="pricing-section py-5">
      <Container>
        <h2 className="pricing-title text-center mb-5">
          💰 Services & Pricing
        </h2>
        <Row>
          {services.map((service, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4">
              <Card className="pricing-card shadow-sm text-center">
                <div className="pricing-icon">{service.icon}</div>
                <Card.Body>
                  <Card.Title className="pricing-name">
                    {service.name}
                  </Card.Title>
                  <Card.Text className="pricing-price">
                    {service.price}
                  </Card.Text>
                  <Button variant="primary" className="pricing-btn">
                    Book Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Pricing;
    