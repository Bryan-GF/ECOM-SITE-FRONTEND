
import React from 'react'
import './carousel.css';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    
  }
  return <div className="slide" style={styles}></div>
}

export default Slide;