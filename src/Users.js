import React from 'react'
import { useSelector } from 'react-redux';

function Users() {
  const users = useSelector(state => state.user.users);
  const status = useSelector(state => state.user.status);
  const email = useSelector(state => state.user.email);

  return (
    <div className='' style={{ backgroundColor: 'grey' }}>
      <p>Status: {status}</p>
      <p>Email: {email}</p>
      {users && users.length && users.map((user) => (
        <>
          <p>{user.id} - {user.name}</p>
        </>
      ))}
    </div>
  )
}

export default Users
