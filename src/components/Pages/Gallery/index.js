import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import "./index.css";

function Gallery() {
  const images = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <section className="gallery-section py-5">
      <Container>
        <h2 className="gallery-title text-center mb-4">🐾 Pet Gallery</h2>
        <Row>
          {images.map((num) => (
            <Col md={4} sm={6} xs={12} key={num} className="mb-4">
              <Card className="gallery-card shadow-sm">
                <div className="img-wrapper">
                  <Card.Img
                    variant="top"
                    src={`/images/pet${num}.jpg`} 
                    alt={`Pet ${num}`}
                    className="gallery-img"
                  />
                  <div className="overlay">
                    <p className="overlay-text">🐶 Cute Pet {num}</p>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;
