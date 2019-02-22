import React from 'react';
import { NavLink } from 'react-router-dom'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import SCdropdown from './SkincareDD.js'


const Nav = props => { 
    return (
        <div className="extendnav">
            <div className = 'navigation'>
                <img src = "https://theordinary.com/Images/logo.svg" alt="logo"/>
                <div className= "navDiv">
                    <div className="skincarediv">
                        <NavLink to='/collections/skincare'>
                            SKINCARE
                        </NavLink>
                        <SCdropdown/>
                    </div>
                    <NavLink className='routineNav' to='/pages/routine'>
                        ROUTINE
                    </NavLink>
                    <NavLink className='navitems' to='/collections/best-sellers'>
                        BEST SELLERS
                    </NavLink>
                    <NavLink className='brandsNav' to='/pages/brands'>
                        BRANDS
                    </NavLink>
                    <NavLink className='getstartedNav' to='/pages/get-started'>
                        GET STARTED
                    </NavLink>
                    <NavLink className='navitems' to='/pages/rewards'>
                        REWARDS
                    </NavLink>
                    <NavLink className='navitems' to='/collections/sale'>
                        SALE
                    </NavLink>
                </div>
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

export default Nav;