import { useState } from "react";
import { Container } from "react-bootstrap";
import "./index.css";

const Services = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const services = [
    { title: "Door Step Pet Grooming", image: "/images/petGrooming.jpg",text:"Fresh look, happy pet grooming for dogs and cats, right at your door step." },
    { title: "Home Pet Boarding", image: "/images/homePet.jpg",text:"Going away? Leave your pet with trusted hosts who treat them like family."},
    { title: "Pet Sitting", image: "/images/petSitting.jpg",text:"Need to step out? Get caring sitters to look after your pet at home.." },
    { title: "Dog Training", image: "/images/petTraining.jpg",text:"From basic command to behavior fixes, expert training at your home." },
    { title: "Dog Walking", image: "/images/petWalking.jpg",text:"No time for walks? we've got trained walkers for your furry buddy." },
    { title: "Dog Fresh Food", image: "/images/petFreshFood.jpg",text:"Healthy,tasty,and freshly made meals your dog will love." },
    { title: "Pet Taxi", image: "/images/dogTaxi.jpg",text:"Vet visit?Grooming trip?we drive your pet safely anytime,anywhere."},
    { title: "Pet Funeral", image: "/images/petFuneral.jpg",text:"A peaceful,respectful farewell for your beloved companion."},

  ];

  return (
    <div className="services-main-container">
      <Container>
        <h1 className="heading-service">🐾 Services We Offer 🐾</h1>
        <div className="cards-container">
          {services.map((service, index) => (
            <div key={index} className={`card ${flippedIndex === index ? "flipped" :''}`}
            onMouseEnter={() => handleFlip(index)}
            onMouseLeave={() => setFlippedIndex(null)}>
              <div className="card-inner">
                <div className="card-front" style={{backgroundImage:`url(${service.image})`}}>
                  <h2 className="card-heading">{service.title}</h2>
                </div>
                <div className="card-back">
                      <h2 className="back-card-text">{service.text}</h2>
                      <button className="book-button">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
