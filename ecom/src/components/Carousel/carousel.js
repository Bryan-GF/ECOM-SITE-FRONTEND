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
    console.log("Check RIGHT");
  }

  prevSlide = (ev) => {
    console.log("Check LEFT");
  }

  selectSlide = (ev) => {
    console.log(ev.target.id);
  }

  render() {
    return (
      <div className="Carousel-Wrapper">
        <Arrow className="left" type="left" pSlide={this.prevSlide}/>
        <Arrow className="right" type="right" nSlide={this.nextSlide}/>
        <Select length={this.state.images.length} selectFunc={this.selectSlide}/>
      </div>
    );
  }
}

export default Carousel;