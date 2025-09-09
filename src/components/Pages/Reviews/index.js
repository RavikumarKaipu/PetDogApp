import React from "react";
import "./index.css";
import { Container } from "react-bootstrap";

function Reviews() {
  const reviews = [
    { name: "Ravi", text: "Amazing service, my dog loves it here!" },
    { name: "Priya", text: "Best grooming experience ever." },
    { name: "Arjun", text: "The trainers are professional and caring." },
  ];

  return (
    <Container>
    <div className="reviews-container">
      <h2 className="text-center">🐾 Client Reviews</h2>
      {reviews.map((r, i) => (
        <div key={i} className="review-card">
          <h5>⭐ {r.name}</h5>
          <p>{r.text}</p>
        </div>
      ))}
    </div>
    </Container>
  );
}

export default Reviews;
