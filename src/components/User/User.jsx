import React, { Suspense, useState } from 'react';
import { Link, NavLink } from 'react-router';
import UserDetails from '../UserDetails/UserDetails';

const User = ({user}) => {
    const userStyle={
        border:'4px solid yellow',
        borderRadius:'20px',
        margin:'15px',
        padding:'10px'
    }
    const userPromise=fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
      .then(res=>res.json());
    const[showDetails,setShowDetails]=useState(false);
    return (
        <div style={userStyle}>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
             <h3>{user.phone}</h3>
              <Link to={`/users/${user.id}`}>User Details</Link><br />
              <button onClick={()=>setShowDetails(!showDetails)}>{showDetails?'Hide':'Show'} Details</button>
              {
                   showDetails && <Suspense fallback={<span>Loading</span>}>

                     <UserDetails userPromise={userPromise}></UserDetails>
                   </Suspense>
              }
        </div>
    );
};

export default User;