import React from 'react';
import { NavLink } from 'react-router-dom'
import './article.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const Article = props => { 
    return (
        <div className="klog-articles">
            <div className="article-content">
                <div className="article-img">
                    <img src={props.article.img}></img>
                </div>
                <div className="article-info">
                  <h5>{props.article.type}</h5>
                  <p>{props.article.content}</p>
                  <a href={props.article.link}>
                    Read On The Klog
                    <FontAwesomeIcon icon={faExternalLinkAlt}/>
                  </a>
                </div>
            </div>
        </div>
    );
}

export default Article;