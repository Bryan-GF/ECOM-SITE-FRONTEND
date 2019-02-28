import React, { Component } from 'react';
import './homepage.css';
import Carousel from '../HPCarousel/carousel';
import ProductCarousel from '../ItemCarousel/productCarousel';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  render() {
    return (
      <div className="Homepage-Wrapper">
        <Carousel/>
        <ProductCarousel/>
      </div>
    );
  }
}

export default HomePage;