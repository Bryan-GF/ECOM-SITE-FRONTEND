import React, { Component } from 'react';
import './homepage.css';
import Carousel from '../Carousel/carousel';
import ProductCarousel from '../ItemCarousel/productCarousel';
import ProductCapsule from '../Product/productCapsule';
import Article from '../klog/article';
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglass } from '@fortawesome/free-regular-svg-icons'

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
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/products/Mamonde_Starter_PDP_large.jpg?v=1551380013"},
            {"type": "newly-curated",
             "brand": "MISSHA",
             "name": "Super Off Cleansing Oil (Dryness Off)",
             "price": "$33.00",
             "rating": 4,
             "numreviews": 2,
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/products/Missha_Super_Off_Cleansing_Oil-_Dryness_Off_PDP_1_large.jpg?v=1550782291"},
            {"type" : "newly-curated",
             "brand": "DR ALTHEA",
             "name": "Dr.Althea Herb Therapy Velvet Mask (10 pack)",
             "price": "$29.00",
             "rating": 4.5,
             "numreviews": 1,
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/products/Dr._Althea_Herb_Therapy_Velvet_Mask_10_pack_PDP_1_large.jpg?v=1551842471"},
             {"type" : "newly-curated",
             "brand": "DR ALTHEA",
             "name": "Dr.Althea Herb Therapy Velvet Mask (10 pack)",
             "price": "$29.00",
             "rating": 4.5,
             "numreviews": 1,
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/products/Mamonde_Starter_PDP_large.jpg?v=1551380013"}
        ],
        klogTextContent: [
          {
            "type": "SKINCARE",
            "img":  "https://cdn.shopify.com/s/files/1/0249/1218/files/gym-set-SGHP_800x.jpg?v=1548695689",
            "content": "The K-Beauty Products No Skin Care Junkie’s Gym Bag Should Be Without",
            "link": "https://theklog.co/soko-glam-gym-set-k-beauty/"
          },
          {
            "type": "SKINCARE",
            "img": "https://cdn.shopify.com/s/files/1/0249/1218/files/2019_K_Beauty_Predictions_-11_800x.jpg?v=1546446912",
            "content": "These Are Going to Be the Biggest K-Beauty Trends in 2019, According to Charlotte Cho",
            "link": "https://theklog.co/k-beauty-trends-2019/"
          },
          {
            "type": "SKINCARE",
            "img": "https://cdn.shopify.com/s/files/1/0249/1218/files/Ginger_-_Klog-HP_800x.jpg?v=1547491531",
            "content": "Why Ginseng Is the Natural Ingredient Your Anti-Aging Skin Care Routine Is Missing",
            "link": "https://theklog.co/ginseng-skin-benefits/"
          }
        ],
        headerCarousel: [
          {
            "type": "header",
            "image": "https://cdn.shopify.com/s/files/1/0249/1218/files/DSC06980-8_banner_big_203c0218-2246-45cc-873d-96f6517b68f7_2048x.jpg?v=1549309596"
          },
          { 
            "type": "header",
            "image": "https://cdn.shopify.com/s/files/1/0249/1218/files/Gym_Set_Homepage_Banner_resize_v2_2048x.png?v=1548693076"
          },
          {
            "type": "header",
            "image": "https://cdn.shopify.com/s/files/1/0249/1218/files/Beauty_of_Joseon_Homepage_Web_v3_2048x.png?v=1547230680"
          }
        ],
        pressCarousel: [
          {
            "type": "press",
            "text": "Soko Glam - everyone’s favorite Korean beauty product e-commerce destination.",
            "author": "India-Jewel Jackson",
          },
          { 
            "type": "press",
            "text": "When it comes to beauty extraordinaire and creator of the fan-favorite K-Beauty skincare outlet, Soko Glam, Cho is all about keeping your skin healthy and hydrated for a naturally glowing look.",
            "author": "Jennifer Hussein",
          },
          {
            "type": "press",
            "text": "I embarked on a two-week challenge to follow a Korean skin-care routine every morning and every night using the products in the Soko Glam 10-Step Korean Skin Care Routine Set. The result is the elusive clear, smooth skin I’ve been chasing after—no joke.",
            "author": "Audrey Noble",
          },
          {
            "type": "press",
            "text": "Korean beauty retailer Soko Glam is no stranger to sell-outs. So well curated is its selection of under-the-radar and already-viral beauty products that the risk of missing out is very real. But the e-tailer's travel kit may have just set a record — it sold out in less than 24 hours.",
            "author": "Macaela Mackenzie",
          }
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
        <Carousel className="headerCarousel" check="headerSlide" content={this.state.headerCarousel}/>
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
          <div className="Curated-Wrapper">
            <h2>NEWLY CURATED</h2>
            <div className="content-wrapper">
              <div className="curated-content">
                <ProductCapsule item={this.state.newlyCurated[0]}/>
              </div>
              <div className="curated-content">
                <ProductCapsule item={this.state.newlyCurated[1]}/>
              </div>
              <div className="curated-content">
                <ProductCapsule item={this.state.newlyCurated[2]}/>
              </div> 
              <div className="curated-content">
                <ProductCapsule item={this.state.newlyCurated[3]}/>
              </div>
            </div> 
            <div className="curated-button">
                SHOP ALL NEWLY CURATED
            </div>
          </div>
          <div className="tenstep-ad">
            <div className= "tenstep-info-wrapper">
              <div className= "tenstep-info-content">
                <div>SOKO GLAM'S ORIGINAL</div>
                <h3>10-Step Korean Skincare Routine</h3>
                <p>We introduced the “10-Step Korean Skincare Routine” to the world 5 years ago. Since then, we continue to educate, curate and provide access to the best of K–beauty.</p>
                <div className="tenstep-button">
                  LEARN MORE
                </div>
              </div>
            </div>
            <div className= "tenstep-pic">
              <img src="https://cdn.shopify.com/s/files/1/0249/1218/files/10Step-Image_2x_0f4ef480-c7e2-4c72-b8da-a5169e855097_1024x.jpg?v=1531328726"></img>
            </div>
          </div>
          <div className ="routine-sets">
            <p>Get started with our curated Korean Skincare Routine Sets!</p>
            <div className="routine-content">
                <NavLink id="five" className="fivestep" to="/collections/5-step-korean-skincare-sets">5 Step</NavLink>
                <NavLink id="ten" to="/collections/10-steps-sets">10 Step</NavLink>
              <div className="set-icons">
                <FontAwesomeIcon id="check5" icon={faHourglass} />
                <FontAwesomeIcon id="check5" icon={faHourglass} />
                <FontAwesomeIcon id="check5" icon={faHourglass} />
                <FontAwesomeIcon id="check5" icon={faHourglass} />
                <FontAwesomeIcon id="check5" icon={faHourglass} />
                <FontAwesomeIcon id="check10" icon={faHourglass} />
                <FontAwesomeIcon id="check10" icon={faHourglass} />
                <FontAwesomeIcon id="check10" icon={faHourglass} />
                <FontAwesomeIcon id="check10" icon={faHourglass} />
                <FontAwesomeIcon id="check10" icon={faHourglass} /> 
              </div>
            </div>
          </div>
          <div className="theklog-container">
            <div className="klog-header"> 
              <h2>the klog</h2>
              <p>Your skin care guide, inspired by Korean beauty. 
A Soko Glam project.</p>
              <a href="https://theklog.co/?utm_source=sokoglam&utm_medium=banner&utm_term=&utm_content=&utm_campaign=">
                Visit The Klog
              </a>
            </div>
            <div className="article-container">
              {this.state.klogTextContent.map(article => {
                return( 
                  <Article article={article}/>
                )
              })
              }
            </div>
            <div className="press-container">
                <Carousel className="TEST" check="pressSlide" content={this.state.pressCarousel} />
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default HomePage;