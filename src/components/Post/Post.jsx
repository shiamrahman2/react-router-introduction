import React from 'react';
import './Post.css';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const Navigate=useNavigate();
    const handleNavigate=()=>{
           Navigate(`/posts/${post.id}`);
    }
    return (
        <div className='post'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>Show Detail</Link><br />
            <button onClick={handleNavigate}>Show Details of {post.id}</button>
        </div>
    );
};

export default Post;