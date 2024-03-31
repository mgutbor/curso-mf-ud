import { useEffect, useState } from "react";

import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <>
    <h3>Users</h3>
    {/* <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} || {user.email} </li>
      ))}
    </ul> */}
    <table className="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td><a href={`https://${user.website}`}>{user.website}</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  </>;
};

export default Users;
