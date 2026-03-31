import React, { useEffect, useState } from 'react'

const FetchUser = () => {

    const [users,setUsers] = useState([]);

    const fetchUsers = async()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
        console.log('User data fetch successfully.!');
    }

    useEffect(()=>{
        fetchUsers();
    },[id])
 
  return (
    <div>
        {users.map((u)=>(
            <h2 key={u.id}>{u.username}</h2>
        ))}
    </div>
  )
}

export default FetchUser