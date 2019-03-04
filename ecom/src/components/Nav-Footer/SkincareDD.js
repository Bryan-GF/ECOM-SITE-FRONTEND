import React from 'react';
import { NavLink } from 'react-router-dom'
import './Nav.css'

/* NEED TO UPDATE NAVLINK ROUTING*/
const SCdropdown = props => { 
    return (
        <div className="dropdown">
            <ul className="dropdown-content">
                <div className="dropdown-child"> 
                    <li className="sc" style={{height: "275px"}}>
                        <NavLink className='routineNav' to='/pages/routine'>FEATURED COLLECTION</NavLink>
                        <ul>
                            <NavLink className='routineNav' to='/pages/routine'>NEWLY CURATED</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>BEST IN SKINCARE</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>SETS</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>FRAGRANCE FREE SHOPS</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>SKINCARE EXCLUSIVES</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>HOT NOW</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>BACK IN STOCK</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>MEN'S SHOP</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>GIFT CARD</NavLink> 
                        </ul>
                    </li>
                    <li className="sc" style={{height: "275px"}}>
                        <NavLink className='routineNav' to='/pages/routine'>SKIN CONCERN</NavLink>
                        <ul>
                            <NavLink className='routineNav' to='/pages/routine'>ACNE</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>ANTI-AGING / WRINKLES</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>DRYNESS / HYDRATION</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>OIL CONTROL / PORES</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>PIGMENTATION</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>REDNESS</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>SENSITIVE</NavLink>
                        </ul>
                    </li>
                    <li className="sc" style={{height: "275px"}}>
                        <NavLink className='routineNav' to='/pages/routine'>SKIN TYPE</NavLink>
                        <ul>
                            <NavLink className='routineNav' to='/pages/routine'>OILY</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>DRY</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>COMBINATION</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>NORMAL</NavLink>
                            <NavLink className='routineNav' to='/pages/routine'>SENSITIVE</NavLink>
                        </ul>
                    </li>
                    <li className="sc" style={{height: "40px"}}>
                        <NavLink className='routineNav' to='/pages/routine'>THE LITTLE BOOK OF SKINCARE</NavLink>
                    </li>
                    <li className="sc" style={{height: "40px"}}>
                        <NavLink className='routineNav' to='/pages/routine'> SEE ALL SKINCARE</NavLink>
                    </li>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DAOX5j5ihwN9LHi55wDeusijmEqHmGrdgMmM8hkXcm_vmeZP-A"></img>
            </ul> 
        </div>
    );
}

export default SCdropdown;