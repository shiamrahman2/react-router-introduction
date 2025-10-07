import React from 'react';
import { useLoaderData } from 'react-router';
import './postdetails.css'

const PostDetails = () => {
    const post=useLoaderData();
    //console.log(post);
    return (
        <div>
           <div className='post'>
             <h2> Post details</h2>
             <h5>{post.body}</h5>
             <p>{post.title}</p>
           </div>
        </div>
    );
};

export default PostDetails;