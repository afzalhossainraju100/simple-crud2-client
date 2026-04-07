import './App.css'
import Users from './Components/Users'


const usersPromise = fetch("http://localhost:3000/users")
  .then((res) => res.json())
  .then((data) => {
    console.log("users data", data);
    return data;
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
    return [];
  });

function App() {


  return (
    <>
      <h1>CRUD Client</h1>
      <Users usersPromise={usersPromise}></Users>
    </>
  );
}

export default App
