import React, { Component } from 'react';
import './carousel.css';
import Arrow from './arrow';
import Select from './select';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentImageIndex: 0,
        images: ['we', 'wo', 'woo']
    };
  }

  nextSlide = (ev) => {

  }

  prevSlide = (ev) => {

  }

  render() {
    return (
      <div className="Carousel-Wrapper">
        <Arrow className="left" type="left"/>
        <Arrow className="right" type="right"/>
        <Select length={this.state.images.length}/>
      </div>
    );
  }
}

export default Carousel;