import React, { useState } from 'react'
import { addUser, fetchUserData } from './store/userSlice'
import { useDispatch } from 'react-redux';

function AddUser() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState(0)
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addUser({
      id: number,
      name
    }))
    dispatch(fetchUserData())
  }
  
  return (
    <div>
      <h2>Add user</h2>
      <input type='text' placeholder='number' onChange={e => setNumber(e.target.value)} />
      <input type='text' placeholder='name' onChange={e => setName(e.target.value)} />
      <button onClick={add} >Add</button>
    </div>
  )
}

export default AddUser
