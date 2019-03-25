import React, { Component } from 'react';
import './productpage.css';

class ReviewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
      <div className='review-section-wrapper'>
        <div className='writeQR'>
          <button>Write A Review</button>
          <button>Ask A Question</button>
        </div>
        <div className='writeReview'>

        </div>
        <div className='writeQuestion'>

        </div>
        <div className='Tab-Selection'>
          <button name ='reviews' id='lastTabUserInput' onClick={this.props.selectTab}>REVIEWS</button>
          <button name='questions' id='lastTabUserInput' onClick={this.props.selectTab}>QUESTIONS</button>
        </div>
        <div className='reviews active'>
          <div className="filter-reviews">
            <h3>Filter Reviews</h3>
            <div className='search-filter'>
              <input placeholder='Search Reviews'></input>
            </div>
            <div className='dropdown-filter'>
              <select>
                <option default>Rating</option>
                <option value='All'>All</option>
                <option value={5}>five</option>
                <option value={4}>four</option>
                <option value={3}>three</option>
                <option value={2}>two</option>
                <option value={1}>one</option>
              </select>
              <select>
                <option default>All Reviews</option>
                <option value='All'>All</option>
                <option value='withImages'>Reviews With Images</option>
              </select>
              <select>
                <option default>Age</option>
                <option value='All'>All</option>
                <option value='18-24'>18-24</option>
                <option value='25-35'>25-35</option>
                <option value='35-44'>35-44</option>
                <option value='45-55'>45-55</option>
                <option value='55+'>55+</option>
              </select>
              <select placeholder="Skin Type">
                <option default>Skin Type</option>
                <option value='All'>All</option>
                <option value='Oily'>Oily</option>
                <option value='Dry'>Dry</option>
                <option value='Normal'>Normal</option>
                <option value='Combination'>Combination</option>
                <option value='Sensitive'>Sensitive</option>
              </select>
            </div>
          </div>
          <div>
            <p>Num Reviews</p>
            
          </div>
        </div>
        <div className='questions hide'>
          <h1>Bye</h1>
        </div>
      </div>
    );
  }
}

export default ReviewSection;