import React from 'react';
import './carousel.css'

/* NEED TO UPDATE NAVLINK ROUTING*/
const Select = props => { 

    let items = [];

    for(let i = 0; i < props.length; i++) {
        items.push(<button id={i}></button>)
    }
    return (
        <div className="select-buttons">
            {items}
        </div>
    );
}

export default Select;