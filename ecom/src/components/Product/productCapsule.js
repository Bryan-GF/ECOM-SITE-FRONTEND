import React, { Component } from 'react';
import './product.scss';

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
            <div className="item-info">
                {this.props.item.numreviews > 0 ?
                    <div className='reviews'>
                        <p>{`(${this.props.item.numreviews} Review)`}</p>
                    </div>
                    :
                    null
                }
                <a className='brand' href={'/shop/productPage/1'}>{this.props.item.brand}</a>
                <a className='name' href={'/shop/productPage/1'}>{this.props.item.name}</a>
                <p>{this.props.item.price}</p>
                <div className="review-container">
                    <div className="rating-container">

                    </div>
                    
                </div>
            </div>
        </div>
    );
  }
}

export default ProductCarousel;