import React from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css'


const Footer = props => { 
    return (
        <div className="Footer-Wrapper">
            <div className="Footer-Instagram-Content">
                <div className="Instagram-Info">
                    <p>#goodskindaysahead</p>
                    <p>@theordinary</p>
                </div>
                <div className="Instagram-Footer-Images">

                </div>
            </div>
            <div className="Footer-Info-Content">
                <div className="Customer-Care">
                    <h3>Customer Care</h3>
                    <ul className="Customer-Care-List">
                        <li>FAQ</li>
                        <li>Refer a friend, Get $10</li>
                        <li>Gift Card</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Returns</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="Our-Story">
                    <h3>Our Story</h3>
                    <ul className="Our-Story-List">
                        <li>The Korean Skincare Routine</li>
                        <li>About Us</li>
                        <li>Our Approach</li>
                        <li>Join Our Team</li>
                        
                    </ul>
                </div>
                <div className="Subscriber-List">
                    <h4>Good (Skin) Days Ahead</h4>
                    <p>Sign up for subscriber-only discounts, first look at newly-curated items & K-beauty skincare tips!</p>
                    <input placeholder="Email Address"/>
                    <button>Join</button>
                </div>
                <div className="Social-Media-Links">

                </div>
            </div>
        </div>
    );
}

export default Footer;