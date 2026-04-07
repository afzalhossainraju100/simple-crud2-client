import React from 'react';

const Users = () => {


const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
}

    return (
        <div>
            <h1>Simple CRUD</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='name' placeholder="Enter user name" id='' />
                    <input type="email" name='email' placeholder="Enter user email" id='' />
                    <button type='submit'>Add User</button>
                </form>
            </div>
        </div>
    );
};

export default Users;