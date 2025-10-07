import React from 'react';
import { useLoaderData } from 'react-router';
import './ShowDetails.css';

const ShowDetails = () => {
    const userDeatails=useLoaderData();
    console.log(userDeatails);
    return (
        <div >
            <h2>User Details</h2>
             <div className='show-details'>
                <h1>{userDeatails.name}</h1>
             <p>{userDeatails.email}</p>
             <p>{userDeatails.phone}</p>
             </div>

        </div>
    );
};

export default ShowDetails;