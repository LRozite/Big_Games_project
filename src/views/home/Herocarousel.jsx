import React from 'react'
import './herocarousel.less'
import Carousel from 'react-bootstrap/Carousel';
import BG1 from '../../assets/at_party.jpg'
import BG2 from '../../assets/at_school.jpg'
import BG3 from '../../assets/at_outdoors.jpg'

function Herocarousel() {
  return (
    <Carousel>
    <Carousel.Item className='herocarousel'>
      <img
        className="herocarousel__image"
        src={BG1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h5>Big Games Big fun:</h5>
        <h2>At Party</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='herocarousel'>
      <img
        className="herocarousel__image"
        src={BG2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h5>Big Games Big fun:</h5>
        <h2>At School</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='herocarousel'>
      <img
        className="herocarousel__image"
        src={BG3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h5>Big Games Big fun:</h5>
        <h2>Outdoors</h2>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

export default Herocarousel