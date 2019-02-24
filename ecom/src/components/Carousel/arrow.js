import React from 'react';
import './Carousel.css'

/* NEED TO UPDATE NAVLINK ROUTING*/
const Arrow = props => { 
    let btnDirection;
    if(props.type == "left") {
        btnDirection = <button> right </button>
    } else {
        btnDirection = <button> left </button>
    }
    return (
        <div className="arrows">
            {btnDirection}
        </div>
    );
}

export default Arrow;