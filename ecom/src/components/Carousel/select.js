import React from 'react';
import '../HomePage/homepage.scss'

/* NEED TO UPDATE NAVLINK ROUTING*/
const Select = props => { 

    let items = [];
    if(props.type == "press") {
        for(let i = 0; i < props.length; i++) {
            items.push(<div className="brand-logos" onClick ={props.selectFunc} id={i}> <img id={i} src={props.logos[i]}></img></div>)
        }
    } else if (props.type == "product") {
        for(let i = 0; i < props.length; i++) {
            items.push(<div className="product-images" onClick ={props.selectFunc} id={i}> <img id={i} src={props.product[i]}></img></div>)
        }   
    } else {
        for(let i = 0; i < props.length; i++) {
            items.push(<button onClick ={props.selectFunc} id={i}></button>)
        }
    }
    
    return (
        <div className="select-buttons">
            {items}
        </div>
    );
}

export default Select;