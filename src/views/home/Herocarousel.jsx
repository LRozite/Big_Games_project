import React from 'react'
import './herocarousel.less'
import Carousel from 'react-bootstrap/Carousel';
import BG1 from '../../assets/BG1.jpg'
import BG2 from '../../assets/BG2.jpg'
import BG3 from '../../assets/BG3.jpg'

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
        <h5>Big Games brings fun:</h5>
        <h2>At Weddings</h2>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className='herocarousel'>
      <img
        className="herocarousel__image"
        src={BG2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h5>Big Games brings fun:</h5>
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
        <h5>Big Games brings fun:</h5>
        <h2>Outdoors</h2>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
}

export default Herocarousel