import React, { Component } from 'react';
import './homepage.css';
import Carousel from '../HPCarousel/carousel';
import ProductCarousel from '../ItemCarousel/productCarousel';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        filterType: "type",
        imagesObject: {
          "type": ["https://divinotes.com/wp-content/uploads/2017/08/Free-WordPress-Logo-Carousel-hero-1280x640.jpg", "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", '//cdn.shopify.com/s/files/1/0249/1218/files/calming_and_healing_mobile_v1_782x.png?v=1549050776',
          "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
          "concern": ["https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", "https://images.pexels.com/photos/66874/landscape-meadow-field-mountains-66874.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]
        }
    };
  }

  setType = (ev) => {
    this.setState({filterType: ev.target.name, transVal: 0})
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
            <button name ="bestseller" onClick={this.setType} >SHOP BY BEST SELLERS</button>
          </div> 
          <ProductCarousel images={this.state.imagesObject[this.state.filterType]}/>
        </div>
      </div>
    );
  }
}

export default HomePage;