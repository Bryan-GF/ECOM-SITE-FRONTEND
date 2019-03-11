import React, { Component } from 'react';
import './homepage.css';
import Carousel from '../HPCarousel/carousel';
import ProductCarousel from '../ItemCarousel/productCarousel';
import ProductCapsule from '../Product/productCapsule';

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
        },
        newlyCurated: [
            {"type" : "newly-curated",
             "brand": "MAMONDE",
             "name": "Mamonde Starter Set",
             "price": "$22.00",
             "rating": 5,
             "numreviews": 1,
             "image": "https://images.pexels.com/photos/1493326/pexels-photo-1493326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
            {"type": "newly-curated",
             "brand": "MISSHA",
             "name": "Super Off Cleansing Oil (Dryness Off)",
             "price": "$33.00",
             "rating": 4,
             "numreviews": 2,
             "image": "https://images.pexels.com/photos/373882/pexels-photo-373882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
            {"type" : "newly-curated",
             "brand": "DR ALTHEA",
             "name": "Dr.Althea Herb Therapy Velvet Mask (10 pack)",
             "price": "$29.00",
             "rating": 4.5,
             "numreviews": 1,
             "image": "https://images.pexels.com/photos/1707920/pexels-photo-1707920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
             {"type" : "newly-curated",
             "brand": "DR ALTHEA",
             "name": "Dr.Althea Herb Therapy Velvet Mask (10 pack)",
             "price": "$29.00",
             "rating": 4.5,
             "numreviews": 1,
             "image": "https://images.pexels.com/photos/1707920/pexels-photo-1707920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
        ]
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
        <div className="HomePage-Child-Wrapper">
          <div className="sctype-wrapper">
            <div className="sctype-list">
              <button name ="type" onClick={this.setType}>SHOP BY SKIN TYPE</button>
              <button name ="concern" onClick={this.setType}>SHOP BY SKIN CONCERN</button>
              <button name ="routine" onClick={this.setType}>SHOP BY ROUTINE</button>
              <button name ="bestseller" onClick={this.setType} >SHOP BY BEST SELLERS</button>
            </div> 
            <ProductCarousel images={this.state.imagesObject[this.state.filterType]}/>
          </div>
          <div className="Trending-Wrapper">
            <h2>CURRENTLY TRENDING</h2>
            <div className="trend-content">
              <img src="https://cdn.shopify.com/s/files/1/0249/1218/files/Resized_800x.jpg?v=1549034063"></img>
              <div className="trend-content-text">
                <h3>Relax Your Skin And Your Mind</h3>
                <p>A Soothing Vegan Sheet Mask</p>
              </div>
              <button>SHOP NOW</button>
            </div>
            <div className="trend-content">
              <img src="https://cdn.shopify.com/s/files/1/0249/1218/files/Currently_Trending_-_BOKB_3_800x.jpg?v=1546468522"></img>
              <div className="trend-content-text">
                <h3>New to K-Beauty?</h3>
                <p>Shop Our Best of K-Beauty Winners!</p>
              </div>
              <button>SHOP NOW</button>
            </div>
            <div className="trend-content">
              <img src="https://cdn.shopify.com/s/files/1/0249/1218/files/DSC05130_copy_1_800x.png?v=1547764600"></img>
              <div className="trend-content-text">
                <h3>Ancient Ingredients, Modern Glow</h3>
                <p>Skin Care That Stands The Test Of Time</p>
              </div>
              <button>SHOP NOW</button>
            </div> 
          </div>
          <div className="newly-curated">
            <h2>NEWLY CURATED</h2>
            <div className="curated-content">
              <ProductCapsule item={this.state.newlyCurated[0]}/>
            </div>
            <div className="curated-content">
              <ProductCapsule item={this.state.newlyCurated[1]}/>
            </div>
            <div className="curated-content">
              <ProductCapsule item={this.state.newlyCurated[2]}/>
            </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;