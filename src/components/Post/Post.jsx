import React from 'react';
import './Post.css';
import { Link } from 'react-router';

const Post = ({post}) => {
    return (
        <div className='post'>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>Show Detail</Link>
        </div>
    );
};

export default Post;