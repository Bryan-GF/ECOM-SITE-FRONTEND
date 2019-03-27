import React from 'react';
import '../productpage.css'

/* NEED TO UPDATE NAVLINK ROUTING*/
const QuestionCreate= props => { 
    
    return (
        <div className='writeQuestion-container'>
            <h4>ASK A QUESTION</h4>
            <div>
                Question:
                <input type='text' required/>
            </div>
            <button>POST</button>
        </div>
    )
    
}

export default QuestionCreate;