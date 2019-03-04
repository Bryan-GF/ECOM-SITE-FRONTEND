import React from 'react';
import './product-carousel.css'

/* NEED TO UPDATE NAVLINK ROUTING*/
const Arrow = props => { 
    let btnDirection;
    if(props.type == "left") {
        btnDirection = <button onClick={props.pSlide}> \\ </button>
    } else {
        btnDirection = <button onClick={props.nSlide}> // </button>
    }
    return (
        <div className="arrows">
            {btnDirection}
        </div>
    );
}

export default Arrow;