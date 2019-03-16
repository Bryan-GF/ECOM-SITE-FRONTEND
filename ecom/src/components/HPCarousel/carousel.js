import React, { Component } from 'react';
import '../HomePage/homepage.css';
import Arrow from './arrow';
import Select from './select';
import Slide from './slide';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentImageIndex: 0,
        translateValue: 0
    };
  }

  nextSlide = () => {
    if(this.state.currentImageIndex === this.props.images.length -1) {
        this.setState({currentImageIndex: 0, translateValue: 0});
    } else {
        this.setState(prevState => ({currentImageIndex: (prevState.currentImageIndex + 1), translateValue: prevState.translateValue + -(this.slideWidth())}));
    }
  }

  prevSlide = () => {
    if(this.state.currentImageIndex === 0) {
        this.setState(prevState => ({currentImageIndex: (this.props.images.length - 1), translateValue: (this.props.images.length -1) * -(this.slideWidth())}));
    } else {
        this.setState(prevState => ({currentImageIndex: (prevState.currentImageIndex - 1), translateValue: prevState.translateValue + (this.slideWidth())}));
    }
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }

  selectSlide = (ev) => {
    let imageID = parseInt(ev.target.id);
    if(imageID != this.state.currentImageIndex) {
      let movement = Math.abs(imageID - this.state.currentImageIndex);
      if (movement > 0) {
        this.setState({currentImageIndex: imageID, translateValue: (imageID%3) * -(this.slideWidth())});  
      } else {
        this.setState({currentImageIndex: imageID, translateValue: movement * (imageID%3) * -(this.slideWidth())});
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
              {this.props.images.map(image => {
                return (
                  <Slide image={image}/>
                );
              })}
        </div>
        <Arrow className="left" type="left" pSlide={this.prevSlide}/>
        <Arrow className="right" type="right" nSlide={this.nextSlide}/>
        <Select length={this.props.images.length} selectFunc={this.selectSlide}/>
      </div>
    );
  }
}

export default Carousel;

/* WANT TO ADD FADING BUTTONS ON LEFT AND RIGHT OF THE CAROUSEL, 3 DOT SELECTION AT THE BOTTOM
   NEED TO ADD BUTTON AND TEXT TO EACH SLIDE*/