import React from 'react';
import { Link, NavLink } from 'react-router';
const User = ({user}) => {
    const userStyle={
        border:'4px solid yellow',
        borderRadius:'20px',
        margin:'15px',
        padding:'10px'
    }
    return (
        <div style={userStyle}>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
             <h3>{user.phone}</h3>
              <Link to={`users/${user.id}`}>User Details</Link>
        </div>
    );
};

export default User;