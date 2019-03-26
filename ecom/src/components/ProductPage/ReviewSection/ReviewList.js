import React from 'react';
import '../productpage.css'
import { faThumbsUp, faThumbsDown, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* NEED TO UPDATE NAVLINK ROUTING*/
const ReviewList= props => { 
    let verify;
    return (
        <div>
            {props.reviews.map(review => {
                if (review.verified) {
                    verify = <p>Verified Buyer</p>
                }
                return (
                    <div className='reviewItem'>
                        <div className='reviewUseInfo'>
                            <div></div>
                            <p>By: {review.name}</p>
                            {verify}
                            <span>{review.rating}</span>
                            <p>Age: {review.age}</p>
                            <p>Skin Type: {review.skintype}</p>
                            <p>Submitted: {review.date}</p>
                        </div>
                        <div className='reviewContent'>
                            <h3>{review.title}</h3>
                            <div>{review.content}</div>
                        </div>
                        <div className='reviewFooter'>
                            <div className='reviewShare' onClick={()=> {console.log('hello')}}>
                                <FontAwesomeIcon icon={faShareSquare}/>
                                <p>Share</p>
                            </div>
                            <div>
                                <p>Was This Review Helpful?</p>
                                <div className='likeReview'>
                                    <FontAwesomeIcon onClick={()=> {console.log('hello')}} icon={faThumbsUp}/>
                                    <span>{review.likes}</span>
                                </div>
                                <div className='dislikeReview'>
                                    <FontAwesomeIcon onClick={()=> {console.log('hello')}} icon={faThumbsDown}/>
                                    <span>{review.dislikes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    
}

export default ReviewList;