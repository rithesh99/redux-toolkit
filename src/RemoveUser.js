import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeUser } from './store/userSlice';

function RemoveUser() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  const remove = () => {
    dispatch(removeUser({id: number}))
  }
  return (
    <div>
      <h2>Remove User</h2>
      <input type='text' placeholder='number' onChange={e => setNumber(e.target.value)} />
      <button onClick={remove}>Remove</button>
    </div>
  )
}

export default RemoveUser
