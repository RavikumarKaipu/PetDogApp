import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./index.css";

const services = [
  { title: "Boarding", desc: "Safe overnight stay for your pets." },
  { title: "Training", desc: "Professional obedience and behavior training." },
  { title: "Swimming", desc: "Fun swimming sessions for fitness." },
  { title: "Grooming", desc: "Bathing, haircuts, and nail trimming." },
  { title: "Weight Management", desc: "Customized health programs." },
];

function Services() {
  return (
    <div className="services">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
        {services.map((s, i) => (
          <Col md={4} key={i} className="mb-3">
            <Card className="h-100 shadow-sm service-card">
              <Card.Body>
                <Card.Title>{s.title}</Card.Title>
                <Card.Text>{s.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;
