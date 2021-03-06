import React, { Component } from 'react';
import './homepage.scss';
import Carousel from '../Carousel/carousel';
import ProductCarousel from '../ItemCarousel/productCarousel';
import {ProductCapsule, CreatorCapsule} from '../Product/productCapsule';
import {TrendTile} from './TrendTile';
import Article from './klog/article';
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
            {"type" : "curated-creator",
             "brand": "MAMONDE",
             "name": "Mamonde Starter Set",
             "price": "$22.00",
             "rating": 5,
             "numreviews": 1,
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/files/june_curations_site_1_1_1_400x.png?v=1559745256"},
            {"type": "newly-curated",
             "brand": "MAMONDE",
             "name": "Mamonde Exclusive Travel Set",
             "price": "$20",
             "rating": 0,
             "numreviews": 0,
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/products/Mamonde_Travel_Set_PDP_1_large.jpg?v=1561143211"},
            {"type" : "newly-curated",
             "brand": "MEDIHEAL",
             "name": "N.M.F Intensive Hydrating Sheet Mask",
             "price": "$9.95",
             "rating": 5,
             "numreviews": 1,
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/products/Mediheal_N.M.F_Intensive_Hydrating_Mask_PDP_2_large.jpg?v=1561988564"},
             {"type" : "newly-curated",
             "brand": "SOME BY MI",
             "name": "AHA-BHA-PHA 30Days Miracle Toner",
             "price": "$16",
             "rating": 4.5,
             "numreviews": 2,
             "image": "https://cdn.shopify.com/s/files/1/0249/1218/products/Some_By_Mi_AHA_BHA_PHA_30_Days_Miracle_Toner_PDP_large.jpg?v=1562868617"}
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
          "https://cdn.shopify.com/s/files/1/0249/1218/files/DSC06980-8_banner_big_203c0218-2246-45cc-873d-96f6517b68f7_2048x.jpg?v=1549309596", "https://cdn.shopify.com/s/files/1/0249/1218/files/Gym_Set_Homepage_Banner_resize_v2_2048x.png?v=1548693076","https://cdn.shopify.com/s/files/1/0249/1218/files/Beauty_of_Joseon_Homepage_Web_v3_2048x.png?v=1547230680"
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
        ],
        pressImages: ["https://cdn.shopify.com/s/files/1/0249/1218/files/Marie_Claire_300x.png?v=1533750316", "https://cdn.shopify.com/s/files/1/0249/1218/files/Paper_300x.png?v=1533750342", "https://cdn.shopify.com/s/files/1/0249/1218/files/Vanity_Fair_300x.png?v=1533750357", "https://cdn.shopify.com/s/files/1/0249/1218/files/Allure_logo.svg_copy_300x.png?v=1533149550"],    
    };
  }

  setType = (ev) => {
    this.setState({filterType: ev.target.name})
  }

  render() {
  
    return (
      <div className="Homepage-Wrapper">
        <Carousel className="headerCarousel" check="headerSlide" type="header" content={this.state.headerCarousel}/>
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
            <div className='trending-tile-container'>
              <TrendTile
                tileImage={"https://cdn.shopify.com/s/files/1/0249/1218/files/DSC05693-10_copy_copy_800x.jpg?v=1562080934"}
                tileTitle={"Meet Korea's #1 Sheet Mask Brand"}
                tileMainText={"Your One-Sheet Solution"}
                tileLink={'/shop/productPage/1'}
                tileLinkText={'LEARN MORE'}
              />
              <TrendTile
                tileImage={"https://cdn.shopify.com/s/files/1/0249/1218/files/09_Trending_050_800x700_65be65e6-a2f4-47b0-9f5c-21689fec21b7_800x.jpg?v=1553534773"}
                tileTitle={"New To K-Beauty?"}
                tileMainText={"Shop Our Best of K-Beauty Winners!"}
                tileLink={'/shop/productPage/1'}
                tileLinkText={'SHOP NOW'}
              />
              <TrendTile
                tileImage={"https://cdn.shopify.com/s/files/1/0249/1218/files/DSC05752-4_copy_1_800x.png?v=1562080748"}
                tileTitle={"Match Made In Skin Care Heaven"}
                tileMainText={"The Perfect Pair To Brighten Your Complexion"}
                tileLink={'/shop/productPage/1'}
                tileLinkText={'SHOP NOW'}
              />
            </div>
          </div>
          <div className="Curated-Wrapper">
            <h2>NEWLY CURATED</h2>
            <div className="curated-content-wrapper">
              <div className='curated-items'>
                {this.state.newlyCurated.map(item => {
                  if(item.type === 'newly-curated') {
                    return <ProductCapsule item={item}/>
                  } else {
                    return <CreatorCapsule item={item}/>
                  }
                })}
              </div>
              <div className='button-container'>
                <a href='/shop/productPage/1' className='styled-link curated-button'>SHOP ALL NEWLY CURATED </a>
              </div>
            </div>   
          </div>
          <div className="tenstep-ad">
            <div className= "tenstep-info-wrapper">
              <div className= "tenstep-info-content">
                <h3>Soko Glam Guides</h3>
                <p>We are dedicated to educating our community about all things skincare. We address key steps in your routine, providing guides on the double-cleanse, eye care, and sunscreen.</p>
                <a href='/shop/productPage/1' className="styled-link tenstep-button">LEARN MORE</a>
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
                <Carousel className="TEST" check="pressSlide" type="press" content={this.state.pressCarousel} logos={this.state.pressImages}/>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default HomePage;