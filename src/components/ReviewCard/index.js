import React from "react";
import "./index.css";

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

function initialsFromName(name = "") {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map(p => p[0]?.toUpperCase() || "").join("") || "🐾";
}

const ReviewCard = ({ name, text, rating = 5, date, avatarUrl }) => {
  const stars = clamp(Math.round(Number(rating) || 0), 0, 5);
  const initials = initialsFromName(name);

  return (
    <article className="review-card shadow-sm" role="figure" aria-label={`Review by ${name || "Customer"}`}>
      {/* Gradient ring */}
      <div className="review-ring" aria-hidden="true" />

      <header className="review-header d-flex align-items-center">
        <div className="review-avatar">
          {avatarUrl ? (
            <img src={avatarUrl} alt={`${name}'s avatar`} />
          ) : (
            <span className="avatar-fallback">{initials}</span>
          )}
        </div>

        <div className="ms-3">
          <h5 className="mb-0 reviewer-name">{name}</h5>
          {date && <small className="text-muted">{date}</small>}
        </div>

        <div className="ms-auto review-stars" title={`${stars}/5`}>
          <span className="visually-hidden">{stars} out of 5 stars</span>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`star ${i < stars ? "active" : ""}`} aria-hidden="true">★</span>
          ))}
        </div>
      </header>

      <p className="review-text mt-3">
        <span className="quote-mark" aria-hidden="true">“</span>
        {text}
        <span className="quote-mark end" aria-hidden="true">”</span>
      </p>
    </article>
  );
};

export default ReviewCard;
