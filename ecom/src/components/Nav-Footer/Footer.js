import React from 'react';
import { NavLink } from 'react-router-dom'
import './Footer.css'


const Footer = props => { 
    //TEMP HARDCODED IMAGES (SHOULD BE LINKED TO INSTAGRAM)
    let images = [
        "https://scontent-iad3-1.cdninstagram.com/vp/f9cc6492d20eb388733ae6639b8ed544/5D157808/t51.2885-15/e35/52396657_363311494515751_1401325309340020571_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
        "https://scontent-iad3-1.cdninstagram.com/vp/57c14001e54b07fa69fa400422af7fce/5D120074/t51.2885-15/e35/53398137_189374555356421_5357287624550177542_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
        "https://scontent-iad3-1.cdninstagram.com/vp/14e30ce322c48563bcc7bf8c6f524a22/5D052FDE/t51.2885-15/e35/52365808_551185762054573_6769385825862210033_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
        "https://scontent-iad3-1.cdninstagram.com/vp/2578f1a9ff3dab079d28d1b4f5ad4c98/5D0F9B81/t51.2885-15/e35/52161724_2297880743801243_3504949960679710589_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com",
        "https://scontent-iad3-1.cdninstagram.com/vp/b5d96fd0d54f3c457dff7b0ea5a538f7/5D06AF5B/t51.2885-15/e35/52854127_176259603350654_1270300670970573714_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com"
    ]

    return (
        <div className="Footer-Wrapper">
            <div className="Footer-Instagram-Content">
                <div className="Instagram-Info">
                    <p>#goodskindaysahead</p>
                    <p>@theordinary</p>
                </div>
                <div className="Instagram-Footer-Images">
                    {images.map((image,i) => {
                        return (
                            <img key = {i} src={image}></img>
                        );
                    })}
                    
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
                <div className="Contact-Wrapper">
                    <div className="Subscriber-List">
                        <h3>Only Good (Skin) Days Ahead</h3>
                        <p>Sign up for subscriber-only discounts, first look at newly-curated items & K-beauty skincare tips!</p>
                        <input placeholder="   Email Address"/>
                        <button>Join</button>
                    </div>
                    <div className="Social-Media-Links">
                        <p>Hey</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;