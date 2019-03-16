import React, { Component } from 'react';
import '../HomePage/homepage.css';
import Arrow from './arrow';
import Select from './select';
import Slide from './slide';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentIndex: 0,
        translateValue: 0
    };
  }

  nextSlide = () => {
    if(this.state.currentIndex === this.props.content.length -1) {
        this.setState({currentIndex: 0, translateValue: 0});
    } else {
        this.setState(prevState => ({currentIndex: (prevState.currentIndex + 1), translateValue: prevState.translateValue + -(this.slideWidth())}));
    }
  }

  prevSlide = () => {
    if(this.state.currentIndex === 0) {
        this.setState(prevState => ({currentIndex: (this.props.content.length - 1), translateValue: (this.props.content.length -1) * -(this.slideWidth())}));
    } else {
        this.setState(prevState => ({currentIndex: (prevState.currentIndex - 1), translateValue: prevState.translateValue + (this.slideWidth())}));
    }
  }

  slideWidth = () => {
    console.log(this.props.check);
    return document.querySelector(`.${this.props.check}`).clientWidth
  }

  selectSlide = (ev) => {
    let contentID = parseInt(ev.target.id);
    if(contentID != this.state.currentIndex) {
      let movement = Math.abs(contentID - this.state.currentIndex);
      if (movement > 0) {
        this.setState({currentIndex: contentID, translateValue: (contentID%3) * -(this.slideWidth())});  
      } else {
        this.setState({currentIndex: contentID, translateValue: movement * (contentID%3) * -(this.slideWidth())});
      }
    }
  }

  render() {
     
    return (
      <div className="Carousel-Wrapper">
        <div className="Slider-Wrapper"
            style={{
                transform: `translateX(${this.state.translateValue}px)`,
                transition: 'transform ease-out 0.45s'
        }}>
              {this.props.content.map(content => {
                  console.log(this.props.check)
                return (
                  <Slide content={content} check={this.props.check}/>
                );
              })}
        </div>
        <Arrow className="left" type="left" pSlide={this.prevSlide}/>
        <Arrow className="right" type="right" nSlide={this.nextSlide}/>
        <Select length={this.props.content.length} selectFunc={this.selectSlide}/>
      </div>
    );
  }
}

export default Carousel;