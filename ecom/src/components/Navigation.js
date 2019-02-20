import React from 'react';
import { NavLink } from 'react-router-dom'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'


const Post= props => { 
    return (
        <div className="extendnav">
            <div className = 'navigation'>
                <img src = "https://theordinary.com/Images/logo.svg" alt="logo"/>
                <nav>
                    <NavLink to='/collections/skincare'>
                        SKINCARE
                    </NavLink>
                    <NavLink to='/pages/routine'>
                        ROUTINE
                    </NavLink>
                    <NavLink to='/collections/best-sellers'>
                        BEST SELLERS
                    </NavLink>
                    <NavLink to='/pages/brands'>
                        BRANDS
                    </NavLink>
                    <NavLink to='/pages/get-started'>
                        GET STARTED
                    </NavLink>
                    <NavLink to='/pages/rewards'>
                        REWARDS
                    </NavLink>
                    <NavLink to='/collections/sale'>
                        SALE
                    </NavLink>
                </nav>
                <div className="navicons">
                    <FontAwesomeIcon  icon={faShoppingCart} size={70}/>
                    <FontAwesomeIcon  icon={faUser} />
                    <FontAwesomeIcon  icon={faSearch} />
                </div>
                {/* Profile Component*/}
                {/* Cart Component */}
                {/* SearchBar Component */}
            </div>
        </div>
    );
}

export default Post;