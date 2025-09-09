import { Container } from 'react-bootstrap'
import './index.css'

const Services = () => {
  return (
    <div className="services-main-container">
      <Container>
      <h1 className='heading-service'>Services We Offer</h1>
      <div className='cards-container'>
        <div className='card-container1' style={{backgroundImage: `url("/images/petGrooming.jpg")`}}><h2 className='card-heading'>Door Step Pet Grooming</h2></div>
        <div className='card-container2'><h2 className='card-2-heading'>Going away? Leave your pet with trusted hosts who treat them like family.</h2><a className='book-button'>Book Now</a></div>
        <div className='card-container3' style={{backgroundImage: `url("/images/petSitting.jpg")`}}><h2 className='card-heading'>Pet Sitting</h2></div>
        <div className='card-container4' style={{backgroundImage: `url("/images/petTraining.jpg")`}}><h2 className='card-heading'>Door Step Dog Training</h2></div>
        <div className='card-container5' style={{backgroundImage: `url("/images/petWalking.jpg")`}}><h2 className='card-heading'>Dog Walking</h2></div>
        <div className='card-container6' style={{backgroundImage: `url("/images/petFreshFood.jpg")`}}><h2 className='card-heading'>Dog Fresh Food</h2></div>
        <div className='card-container7' style={{backgroundImage: `url("/images/dogTaxi.jpg")`}}><h2 className='card-heading'>pet Taxi</h2></div>
        <div className='card-container8' style={{backgroundImage: `url("/images/petFuneral.jpg")`}}><h2 className='card-heading'>Pet Funeral</h2></div>
      </div>
      </Container>
    </div>
  )
}

export default Services
