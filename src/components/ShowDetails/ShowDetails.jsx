import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import './ShowDetails.css';

const ShowDetails = () => {
    const userDeatails=useLoaderData();
    const param=useParams();
    const navigation=useNavigate();
   // console.log(userDeatails);
    return (
        <div >
            <h2>User Details</h2>
             <div className='show-details'>
                <h2>User Id :{param.userId}</h2>
                <h1>{userDeatails.name}</h1>
             <p>{userDeatails.email}</p>
             <p>{userDeatails.phone}</p>
             <button onClick={()=>navigation(-1)}>Go Back</button>
             </div>

        </div>
    );
};

export default ShowDetails;