import React from 'react';

const Users = () => {


const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const newUser = { name, email };

    //save this users data t database using fetch
    fetch("http://localhost:3000/users",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving the user", data);
        if(data.insertedId){
            alert("User added successfully");
            e.target.reset();
        }
      });
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