import React, { Component } from 'react';
import './homepage.css';
import Carousel from '../HPCarousel/carousel';

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
      </div>
    );
  }
}

export default HomePage;