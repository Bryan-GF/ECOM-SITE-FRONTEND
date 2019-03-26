import React, { Component } from 'react';
import '../productpage.css';
import ProductPage from '../productpage';
import ReviewList from './ReviewList';
import ReviewCreate from './ReviewCreate';
import QuestionCreate from './QuestionCreate';

class ReviewSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
        reviews: [
          {
            'id': 1,
            'title': 'Gentle and Effective',
            'content': `It's gentle enough for my dry-combination skin, yet strong enough to clean almost everything off my skin without need for a second wash! My skin doesn't feel dry or irritated.`,
            'age': '18-24',
            'skintype': 'Sensitive',
            'submitted': '2019-03-20',
            'ratingGiven': 5,
            'name': 'Alexis W.', 
            'likes': 0,
            'dislikes': 0,
            'verified': true
          },
          {
            'id': 2,
            'title': 'Great for dry skin',
            'content': `I have painfully dry skin in the winter time so cleansing is always a pain. I've tried tons of "moisturizing" cleansers but my skin always feels stripped. This cleansing oil has a thicker consistency than some others i've tried and I love that. Along with some other moisturizing products I have a feeling this will really help. And I love the smell!`,
            'age': '25-35',
            'skintype': 'Combination',
            'date': '2019-03-06',
            'rating': 5,
            'name': 'Candance S.', 
            'profilepic': "//graph.facebook.com/v2.9/10101209895062521/picture",
            'likes': 5,
            'dislikes': 0,
            'verified': true
          }
        ]
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
          <ReviewCreate/>
        </div>
        <div className='writeQuestion'>
          <QuestionCreate/>
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
            <p>{this.props.numReviews} Reviews</p>
            <div className='sortReview'>
              <p>Sort:</p>
              <select>
              <option default>Select</option>
                <option value='Newest'>Newest</option>
                <option value='Highest Rating'>Highest Rating</option>
                <option value='Lowest Rating'>Lowest Rating</option>
                <option value='Most Votes'>Most Votes</option>
                <option value='Least Votes'>Least Votes</option>
              </select>
            </div>
          </div>
          <div className='reviewItemWrapper'>
            <ReviewList reviews={this.state.reviews}/>
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