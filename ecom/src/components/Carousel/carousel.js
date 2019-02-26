import React, { Component } from 'react';
import './carousel.css';
import Arrow from './arrow';
import Select from './select';
import Slide from './slide';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentImageIndex: 0,
        images: ["https://divinotes.com/wp-content/uploads/2017/08/Free-WordPress-Logo-Carousel-hero-1280x640.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOU4-vhQ5T5WFhr6MeEww05Czhzm7RZvoSL4CoOF_gnvp8HHen5Q", '//cdn.shopify.com/s/files/1/0249/1218/files/calming_and_healing_mobile_v1_782x.png?v=1549050776'],
        translateValue: 0
    };
  }

  nextSlide = (ev) => {
    if(this.state.currentImageIndex === this.state.images.length -1) {
        this.setState(prevState => ({currentImageIndex: 0, translateValue: 0}));
    } else {
        this.setState(prevState => ({currentImageIndex: (prevState.currentImageIndex + 1), translateValue: prevState.translateValue + -(this.slideWidth())}));
    }
    console.log(this.state.currentImageIndex)
  }

  prevSlide = (ev) => {
    if(this.state.currentImageIndex === 0) {
        this.setState(prevState => ({currentImageIndex: (prevState.images.length - 1), translateValue: (prevState.images.length -1) * -(this.slideWidth())}));
    } else {
        this.setState(prevState => ({currentImageIndex: (prevState.currentImageIndex - 1), translateValue: prevState.translateValue + (this.slideWidth())}));
    }
    console.log(this.state.currentImageIndex)
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  selectSlide = (ev) => {
    console.log(ev.target.id)
    if(ev.target.id != this.state.currentImageIndex) {
      let movement = parseInt(ev.target.id) - this.state.currentImageIndex;
      if (movement > 0) {
        console.log(Math.abs(movement) * this.slideWidth());
        this.setState({currentImageIndex: parseInt(ev.target.id), translateValue: (parseInt(ev.target.id)%3) * -(this.slideWidth())});
        
      } else {
        console.log(Math.abs(movement) * this.slideWidth());
        this.setState({currentImageIndex: parseInt(ev.target.id), translateValue: Math.abs(movement) * (parseInt(ev.target.id)%3) * -(this.slideWidth())});
      }
      
    }
  }

  render() {
      
    return (
      <div className="Carousel-Wrapper">
        <div className="Slider-Wrapper"
            style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
        }}>
              {this.state.images.map(image => {
                return (
                  <Slide image={image}/>
                );
              })}
        </div>
        <Arrow className="left" type="left" pSlide={this.prevSlide}/>
        <Arrow className="right" type="right" nSlide={this.nextSlide}/>
        <Select length={this.state.images.length} selectFunc={this.selectSlide}/>
      </div>
    );
  }
}

export default Carousel;