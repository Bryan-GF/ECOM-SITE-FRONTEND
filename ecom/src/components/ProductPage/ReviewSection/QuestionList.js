import React from 'react';
import '../productpage.css'
import { faThumbsUp, faThumbsDown, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* NEED TO UPDATE NAVLINK ROUTING*/
const QuestionList= props => { 
    let verify;
    let answerPost;
    return (
        <div>
            {props.questionss.map(question => {
                if (question.verified) {
                    verify = <p>Verified Buyer</p>
                }
                if (question.answer.length() > 0) {
                    answerPost = 
                    <div className='questionAnswer'>
                        <p>By: {question.answer[0].name}</p>
                        <div>
                            <p>A: {question.answer[0].content}</p>
                        </div>
                        <div>
                            <p>Was This Answer Helpful?</p>
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
                }
                return (
                    <div className='questionItem'>
                        <div className='reviewUseInfo'>
                            <p>By: {question.name}</p>
                            {verify}
                            <p>Submitted: {question.date}</p>
                            <p>Q: {question.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
    
}

export default QuestionList;