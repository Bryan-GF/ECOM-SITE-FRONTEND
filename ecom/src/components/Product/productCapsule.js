import React, { Component } from 'react';
import './product.css';

class ProductCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  
  componentDidMount() {
    
  }

  componentWillReceiveProps() {
    
  }

  render() {
    return (
        <div className={`PCapsule-Wrapper-${this.props.item.type}`}>
            <div className="item-image">
                <img src={this.props.item.image}></img> 
            </div>  
            <div className="item-content">
                <div className="text-info">
                    <h3>{this.props.item.brand}</h3>
                    <h4>{this.props.item.name}</h4>
                </div>
                <div className="num-info">
                    <p>{this.props.item.price}</p>
                    <div className="review-container">
                        <div className="rating-container">

                        </div>
                        <p>{`(${this.props.item.numreviews} Review)`}</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default ProductCarousel;