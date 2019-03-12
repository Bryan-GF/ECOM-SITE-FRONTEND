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
        images: ["https://cdn.shopify.com/s/files/1/0249/1218/files/DSC06980-8_banner_big_203c0218-2246-45cc-873d-96f6517b68f7_2048x.jpg?v=1549309596", "//cdn.shopify.com/s/files/1/0249/1218/files/Gym_Set_Homepage_Banner_resize_v2_2048x.png?v=1548693076", 'https://cdn.shopify.com/s/files/1/0249/1218/files/Beauty_of_Joseon_Homepage_Web_v3_2048x.png?v=1547230680'],
        translateValue: 0
    };
  }

  nextSlide = () => {
    if(this.state.currentImageIndex === this.state.images.length -1) {
        this.setState({currentImageIndex: 0, translateValue: 0});
    } else {
        this.setState(prevState => ({currentImageIndex: (prevState.currentImageIndex + 1), translateValue: prevState.translateValue + -(this.slideWidth())}));
    }
  }

  prevSlide = () => {
    if(this.state.currentImageIndex === 0) {
        this.setState(prevState => ({currentImageIndex: (prevState.images.length - 1), translateValue: (prevState.images.length -1) * -(this.slideWidth())}));
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

/* WANT TO ADD FADING BUTTONS ON LEFT AND RIGHT OF THE CAROUSEL, 3 DOT SELECTION AT THE BOTTOM
   NEED TO ADD BUTTON AND TEXT TO EACH SLIDE*/