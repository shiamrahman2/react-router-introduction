import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import './postdetails.css'

const PostDetails = () => {
    const Navigate=useNavigate();
    const post=useLoaderData();
    //console.log(post);
    return (
        <div>
           <div className='post'>
             <h2> Post details</h2>
             <h5>{post.body}</h5>
             <p>{post.title}</p>
             <button onClick={()=>Navigate(-1)}>Go Back</button>
           </div>
        </div>
    );
};

export default PostDetails;