import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <h1>This is Header Portion</h1>
            <Link to='/'>Home</Link>
            <Link to='mobiles'>Mobiles</Link>
            <Link to='laptops'>Laptops</Link>
        </div>
    );
};

export default Header;