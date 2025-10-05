import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const user=useLoaderData();
    console.log(user);
    return (
        <div>
            <h1>I am A User</h1>
        </div>
    );
};

export default Users;