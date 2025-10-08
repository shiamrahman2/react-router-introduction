import React, { use } from 'react';

const UserDetails = ({userPromise}) => {
    const user=use(userPromise);
    return (
        <div>
            <p>{user.name}</p>
             <p>{user.username}</p>
        </div>
    );
};

export default UserDetails;