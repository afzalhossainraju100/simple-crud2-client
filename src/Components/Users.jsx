import React from "react";
import { use } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Users = ({ usersPromise }) => {
  const initialUsers = use(usersPromise);
  const [users, setUsers] = useState(initialUsers);
  console.log("initial users", initialUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const newUser = { name, email };

    //save this users data t database using fetch
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after saving the user", data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          setUsers((prevUsers) => [...prevUsers, newUser]);
          alert("User added successfully");
          e.target.reset();
        }
      });
  };
  const handleDeleteUser = (id) => {
    console.log("delete user with id", id);
    const proceed = confirm("Are you sure you want to delete this user?");
    if (!proceed) {
      return;
    }

    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delete", data);
        if (data.deletedCount > 0) {
          setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
          alert("User deleted successfully");
        }
      });
  };

  return (
    <div>
      <h1>Simple CRUD</h1>
      <h3>users:{users.length}</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Enter user name" id="" />
          <input
            type="email"
            name="email"
            placeholder="Enter user email"
            id=""
          />
          <button type="submit">Add User</button>
        </form>
        <p>----------------------------</p>
      </div>
      <div>
        {users.map((user) => (
          <p className="" key={user._id}>
            {user.name} : {user.email}
            <Link to={`/users/${user._id}`}>Details</Link>
            <Link to={`/update-user/${user._id}`}>Update</Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
