import React from 'react';
import '../HomePage/homepage.scss'

/* NEED TO UPDATE NAVLINK ROUTING*/
const Arrow = props => { 
    let btnDirection;
    if(props.type == "left") {
        btnDirection = <button onClick={props.pSlide}> left </button>
    } else {
        btnDirection = <button onClick={props.nSlide}> right </button>
    }
    return (
        <div className="arrows">
            {btnDirection}
        </div>
    );
}

export default Arrow;