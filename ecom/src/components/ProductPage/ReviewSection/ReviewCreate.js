import React from 'react';
import '../productpage.css'

/* NEED TO UPDATE NAVLINK ROUTING*/
const ReviewCreate= props => { 
    
    return (
        <div className='writeReview-container'>
            <h4>WRITE A REVIEW</h4>
            <div className='reviewScoring'>
                <p>Score:</p>
                <span>Stars</span>
            </div>
            <div className='writereviewContent'>
                Title:
                <input type='text' required/>
                Review:
                <input type='text' required/>
                <div>
                    How old are you?
                    <form className='reviewAgeRadio'>
                        <input type='radio' name='age' value='18-24'/> 18-24
                        <input type='radio' name='age' value='25-35'/> 25-35
                        <input type='radio' name='age' value='35-44'/> 35-44
                        <input type='radio' name='age' value='45-55'/> 45-55
                        <input type='radio' name='age' value='55+'/> 55+
                    </form>
                </div>
                <div>
                    Which best describes your skin type?
                    <form>
                        <input type='radio' name='skin' value='Oily'/> Oily
                        <input type='radio' name='skin' value='Dry'/> Dry
                        <input type='radio' name='skin' value='Normal'/> Normal
                        <input type='radio' name='skin' value='Combination'/> Combination
                        <input type='radio' name='skin' value='Sensitive'/> Sensitive
                    </form>
                </div>
                <button>POST</button>
            </div>
        </div>
    )
    
}

export default ReviewCreate;