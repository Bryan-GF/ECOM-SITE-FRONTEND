import React, { Component } from 'react';
import './productpage.css';
import Carousel from '../Carousel/carousel';
import Article from '../klog/article';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product: {
            "brand": "NEOGEN",
            "brandLink": "https://sokoglam.com/collections/neogen",
            "numReviews": 8,
            "rating": 5,
            "price": 20.00,
            "productName": "Real Vita C Powder Lemon",
            "size": "20 g/ 0.70 fl.oz.",
            "details": "This innovative, DIY powder, exclusive to Soko Glam, offers all the brightening benefits of a powerful vitamin C serum, but without the chance of oxidation.  \n\nThe miracle solution contains 17% ascorbic acid (pure vitamin C), along with ingredients like allantoin, hydrolyzed collagen, trehalose, and lemon extract to hydrate and revitalize dull, tired skin for a more even, radiant and glowing complexion. \n\nThe gentle, travel-friendly powder can be used on all skin types, even those with sensitive or oily skin. The formula is free of alcohol, silicone, paraben, artificial fragrance, surfactants and mineral oil.\n\nTip: Mix it with your favorite toner or watery essence for best results. To avoid irritation, we do not recommend mixing it with products like AHAs, BHAs, retinol, or products that already contain vitamin C. ",
            "lovedIngredients": "Ascorbic Acid (17%)",
            //WHEN PULLING FROM SERVER NEED TO TAKE INTO ACCOUNT WHETHER INGREDIENTS COME IN ARRAY OR STRING
            "ingredients": "Lactose, Ascorbic Acid(17%), Allantoin, Trehalose, Ribose, Betaine, Panthenol, Hydrolyzed Collagen, Water, Citrus Limon (Lemon) Fruit Extract(0.1ppm), 1,2-Hexanediol",
            "howTo": "After cleansing, pour a generous amount of your favorite essence, toner, or serum (we recommend using a watery formula and avoiding any products that contain AHAs, BHAs, or retinol) into the palm of your hand as your base. Mix one scoop of the Real Vita C Powder with the base product allowing 5-10 seconds for the powder to dissolve. \n\nNote: If you notice a grainy texture after mixing, we recommend adding more base product.\n\nApply the mixture to your entire face and continue your skincare routine. \n\nTip: If using in the morning, be sure to apply SPF as the last step of your skincare routine since vitamin C can cause sun sensitivity. \n",
            "images": ["https://cdn.shopify.com/s/files/1/0249/1218/products/Neogen_Vita_C_Powder_PDP_1_460x.jpg?v=1551797578", "https://cdn.shopify.com/s/files/1/0249/1218/products/Neogen-Vita-C-Powder-PDP-2_460x.jpg?v=1551797580",
            "https://cdn.shopify.com/s/files/1/0249/1218/products/Step_2-3_full_size_460x.jpg?v=1552488862","https://cdn.shopify.com/s/files/1/0249/1218/products/Step_3_460x.jpg?v=1552488866"],
        },
        quantity: 1,
        //WILL USE lastUsed for activating and deactivating hidden class
        lastTab:"details"
    };
  }
  
  //WANT TO SET STATE FOR THE PRODUCT ON MOUNT
  componentDidMount() {

  }

  selectTab = (ev) => { 
    if(ev.target.name != this.state.lastTab) {  
        let hide =  document.querySelector(`.${this.state.lastTab}`);
        let activate =  document.querySelector(`.${ev.target.name}`);
        hide.classList.add('hide')
        hide.classList.remove('active')
        activate.classList.add('active')
        activate.classList.remove('hide')
        this.setState({lastTab: ev.target.name})
    } 
  }

  render() {
    let { product } = this.state;
    return (
      <div className="ProductPage-Wrapper">
        <Carousel className="ppCarousel" type="product" check="ppSlide" content={this.state.product.images} logos={this.state.productSelect}/>
        <div className="product-info-wrapper">
            <div className="main-info">
                <h2>{product.brand}</h2>
                <div className="star-rating"></div>
                <p>{`(${product.numReviews} Reviews)`}</p>
                <h3>{product.productName}</h3>
                <p>{`$${product.price.toFixed(2)}`}</p>
            </div>
            <div className="product-bag">
                <div className="quantity-wrapper">
                    <button>-</button>
                    <div>{this.state.quantity}</div>
                    <button>+</button>
                </div>
                <div className="bag-button">
                    <button>ADD TO BAG</button>
                </div>
                <div className="favorite-button">
                    <FontAwesomeIcon icon={faHeart}/>
                </div>
            </div>
            <div className="extra-info">
                <div className="product-tab-selector">
                    <button  name="details" onClick={this.selectTab}>Details</button>
                    <button  name="ingredients" onClick={this.selectTab}>Ingredients</button>
                    <button  name="howto" onClick={this.selectTab}>How To Use</button>
                    <button  name="share" onClick={this.selectTab}>Share</button>
                </div>
                <div className="details active">
                    <span>{product.details}</span>
                    <p> </p>
                    <p>{product.size}</p>
                </div>
                <div className="ingredients hide">
                    <h4>Ingredients We Love</h4>
                    <p>{product.lovedIngredients}</p>
                    <div className="tab-content-short active">
                        <span>See all ingredients</span>
                    </div>
                    <div className="tab-content-long hide">
                        <h4>Full List of Ingredients</h4>
                        <p>{product.ingredients}</p>
                        <span>Show Less</span>
                    </div>
                </div>
                <div className="howto hide">
                    <span>{product.howTo}</span>
                </div>
                <div className="share hide">
                    <FontAwesomeIcon icon={faFacebookF}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faPinterest}/>
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;