import React from 'react';

export const TrendTile = (props) => {
    return (
        <div className="trending-tile">
            <img src={props.tileImage} alt='tile'/>
            <div className="trending-tile-text">
                <h3>{props.tileTitle}</h3>
                <p>{props.tileMainText}</p>
            </div>
            <a className='styled-link' href={props.tileLink}>{props.tileLinkText}</a>
        </div>
    )
}