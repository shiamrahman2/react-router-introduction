import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const user=use(userPromise);
    console.log("this is user 2 ",user);
    return (
        <div>
            <h1>This is User2</h1>
        </div>
    );
};

export default Users2;