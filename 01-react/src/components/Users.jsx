import { useEffect, useState } from "react"

const Users = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>Users</div>
  )
}

export default Users