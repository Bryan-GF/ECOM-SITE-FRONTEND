import React, { Component } from 'react';
import './product-carousel.css';
import Arrow from './arrow';
import Slide from './slide';

class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentImageIndex: 1,
        translateValue: 0
    };
  }
  
  componentDidMount() {
    console.log("COMPDIDMOUNT")
  }

  componentWillReceiveProps() {
    this.setState({translateValue: 0, currentImageIndex: 1})
  }
  nextSlide = (ev) => {
    if(this.props.images.length - this.state.currentImageIndex > 3) {
      this.setState(prevState => ({currentImageIndex: prevState.currentImageIndex + 1, translateValue: prevState.translateValue + -(this.slideWidth())}));
    }
    console.log(this.state.currentImageIndex)
  }

  prevSlide = (ev) => {
    if(this.state.currentImageIndex > 1) {
        this.setState(prevState => ({currentImageIndex: prevState.currentImageIndex -1, translateValue: prevState.translateValue + (this.slideWidth())}));
    }
    console.log(this.state.currentImageIndex)
  }

  slideWidth = () => {
    return document.querySelector('.Pslide').clientWidth;
  }

  render() {
    return (
      <div className="PCarousel-Wrapper">
        <div className="left">
          <Arrow  type="left" pSlide={this.prevSlide}/>
        </div>
        
        <div className="PSlider-Wrapper"
            style={{
                
                transition: 'transform ease-out 0.45s',
                transform: `translate(${this.state.translateValue + 80}px,${0})`
        }}>
              {this.props.images.map(image => {
                return (
                  <Slide image={image}/>
                );
              })}
        </div>
        <div className="right">
          <Arrow className="right" type="right" nSlide={this.nextSlide}/>
        </div>
        
      </div>
    );
  }
}

export default ProductCarousel;