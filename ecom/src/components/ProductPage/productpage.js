import React, { Component } from 'react';
import './productpage.css';
import Carousel from '../Carousel/carousel';
import Article from '../klog/article';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product: [
            "https://cdn.shopify.com/s/files/1/0249/1218/products/Neogen_Vita_C_Powder_PDP_1_460x.jpg?v=1551797578", "https://cdn.shopify.com/s/files/1/0249/1218/products/Neogen-Vita-C-Powder-PDP-2_460x.jpg?v=1551797580",
            "https://cdn.shopify.com/s/files/1/0249/1218/products/Step_2-3_full_size_460x.jpg?v=1552488862","https://cdn.shopify.com/s/files/1/0249/1218/products/Step_3_460x.jpg?v=1552488866"
        ],
    };
  }

  render() {
  
    return (
      <div className="ProductPage-Wrapper">
        <Carousel className="ppCarousel" type="product" check="ppSlide" content={this.state.product} logos={this.state.productSelect}/>
      </div>
    );
  }
}

export default ProductPage;