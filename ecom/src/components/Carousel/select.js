import React from 'react';
import '../HomePage/homepage.css'

/* NEED TO UPDATE NAVLINK ROUTING*/
const Select = props => { 

    let items = [];

    for(let i = 0; i < props.length; i++) {
        items.push(<button onClick ={props.selectFunc} id={i}></button>)
    }
    return (
        <div className="select-buttons">
            {items}
        </div>
    );
}

export default Select;