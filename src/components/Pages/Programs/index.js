import React from "react";
import "./index.css";

const PROGRAMS = [
  {
    title: "TTT (Train The Trainer)",
    desc: "Become a certified trainer with hands-on workshops, advanced techniques, and mentorship programs.",
    img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
  {
    title: "Socialisation",
    desc: "Engage your pets in fun group activities, playdates, and outdoor adventures to boost confidence.",
    img: "/images/pet4.jpg",
  },
  {
    title: "Internship",
    desc: "Gain real-world experience working with experts in training, grooming, and pet care management.",
    img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png", 
  },
  {
    title: "Agility Training",
    desc: "Build strength, focus, and discipline through obstacle courses and interactive training sessions.",
    img: "/images/pexels-hotaru-1172060.jpg",
  },
];

function Programs() {
  return (
    <section className="programs-section">
      <div className="container">
        <h2 className="section-title text-center">🐾 Our Programs 🐾</h2>
        <p className="section-subtitle text-center">
          Explore our wide range of programs designed for trainers, pet parents, and enthusiasts.
        </p>

        <div className="row">
          {PROGRAMS.map((program, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="program-card">
                <img src={program.img} alt={program.title} className="program-img" />
                <div className="program-content">
                  <h5>{program.title}</h5>
                  <p>{program.desc}</p>
                  <button className="learn-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Programs;
