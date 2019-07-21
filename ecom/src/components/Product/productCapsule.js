import React from 'react';
import './product.scss';

export const ProductCapsule = (props) => {
    return (
        <div className={`Capsule-Wrapper`}>
            <div className="item-image">
                <img src={props.item.image} alt='curated'></img> 
                <div className='item-badge'>
                    <span className='badge'>NEW</span>
                </div> 
            </div> 
           
            <div className="item-info">
                {props.item.numreviews > 0 ?
                    <div className='reviews'>
                        <p>{`(${props.item.numreviews} Review)`}</p>
                    </div>
                    :
                    null
                }
                <a className='brand' href={'/shop/productPage/1'}>{props.item.brand}</a>
                <a className='name' href={'/shop/productPage/1'}>{props.item.name}</a>
                <p className='price'>{props.item.price}</p>
                <div className="review-container">
                    <div className="rating-container">

                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export const CreatorCapsule = (props) => {
    return (
        <div className={`Capsule-Wrapper`}>
            <div className="item-image">
                <img src={props.item.image} alt='curated'></img> 
            </div> 
            <div className='creator-info'>
                <p>Check out Charlotte's</p>
                <h4>June Curations</h4>
                <img src='//cdn.shopify.com/s/files/1/0249/1218/t/36/assets/youtube-play-icon.svg?314404' alt='youtube logo'/>
            </div>
        </div>
    )
}