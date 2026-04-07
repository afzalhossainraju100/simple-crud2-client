import React from 'react';
import { useLoaderData } from 'react-router-dom';
const UpdateUser = () => {
    const user = useLoaderData();
    console.log('user details', user);

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const updatedUser = { name, email };

        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('after updating the user', data);
                if (data.modifiedCount > 0) {
                    alert('User updated successfully');
                }
            });
    };
    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleUpdateUser} action="">
                <input type="text" name="name" id="" defaultValue={user.name} />
                <input type="email" name="email" id="" defaultValue={user.email} />
                <button type="submit">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;