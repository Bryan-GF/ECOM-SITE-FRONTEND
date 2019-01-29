import React from 'react';

const Post= props => { 
    return (
        <div className = 'navigation'>
            <img/> {/*LOGO*/}
            <nav>
                <Link to='/collections/skincare'>
                    SKINCARE
                </Link>
                <Link to='/pages/routine'>
                    ROUTINE
                </Link>
                <Link to='/collections/best-sellers'>
                    BEST SELLERS
                </Link>
                <Link to='/pages/brands'>
                    BRANDS
                </Link>
                <Link to='/pages/get-started'>
                    GET STARTED
                </Link>
                <Link to='/pages/rewards'>
                    REWARDS
                </Link>
                <Link to='/collections/sale'>
                    SALE
                </Link>
            </nav>
            {/* Profile Component*/}
            {/* Cart Component */}
            {/* SearchBar Component */}
        </div>
    );
}

export default Post;