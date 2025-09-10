import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

const reviews = [
  {
    name: "Uma Naik",
    text:
      "My main concern was pee and stool training which was achieved so well with the help of the trainer Ms. Sushmita. Thank you Pawspace and Ms. Sushmita.",
    rating: 5,
    avatar: "/images/pet4.jpg",
  },
  {
    name: "Rahul Kumar",
    text: "Excellent pet sitting services. My dog was so comfortable and happy. Highly recommend!",
    rating: 5,
    avatar: "/images/pet2.jpg",
  },
  {
    name: "Sneha Reddy",
    text: "Very professional grooming at home. Convenient and stress-free for my pet.",
    rating: 4,
    avatar: "/images/pet3.jpg",
  },
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <Container>
        <h2 className="reviews-title">🐾 What Pet Parents Are Saying 🐾</h2>

        <div className="review-layout">
          {/* LEFT: Only the reviews inside this Swiper will move */}
          <div className="review-swiper">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3800, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
            >
              {reviews.map((r, i) => (
                <SwiperSlide key={i}>
                  <article className="review-card" aria-label={`Review by ${r.name}`}>
                    <img
                      src={r.avatar || "/images/default-user.jpg"}
                      alt={r.name}
                      className="user-logo"
                    />
                    <h3>{r.name}</h3>
                    <p>{r.text}</p>
                    <div className="stars" aria-hidden>
                      {"★".repeat(r.rating)}
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="review-image">
            <div className="image-wrapper">
              <img src="/images/petTraining.jpg" alt="Happy pet owner" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
