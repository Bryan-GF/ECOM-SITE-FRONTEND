import React, { Component } from 'react';
import './homepage.css';
import Carousel from '../HPCarousel/carousel';
import ProductCarousel from '../ItemCarousel/productCarousel';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filterType: "type"
    };
  }

  setType = (ev) => {
    this.setState({filterType: ev.target.name})
    console.log(ev.target.name);
  }

  render() {
    return (
      <div className="Homepage-Wrapper">
        <Carousel/>
        <div className="sctype-wrapper">
          <div className="sctype-list">
            <button name ="type" onClick={this.setType}>SHOP BY SKIN TYPE</button>
            <button name ="concern" onClick={this.setType}>SHOP BY SKIN CONCERN</button>
            <button name ="routine" onClick={this.setType}>SHOP BY ROUTINE</button>
            <button name ="bestseller" onClick={this.setType}>SHOP BY BEST SELLERS</button>
          </div> 
          <ProductCarousel type={this.state.filterType}/>
        </div>
      </div>
    );
  }
}

export default HomePage;