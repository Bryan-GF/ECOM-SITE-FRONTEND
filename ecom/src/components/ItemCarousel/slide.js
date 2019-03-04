import React from 'react'
import './product-carousel.css';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: '90% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="Pslide" style={styles}></div>
}

export default Slide;