import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    console.log('user details', user);
    return (
        <div>
            <h1>user details here </h1>
        </div>
    );
};

export default UserDetails;