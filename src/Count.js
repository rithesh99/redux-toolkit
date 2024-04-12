import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addCount, fetchUserData, reduceCount } from './store/counterSlice';

function Count() {
  const count = useSelector(state => state.count.count);
  const status = useSelector(state => state.count.status);
  const randomNumber = useSelector(state => state.count.randomNumber);
  const dispatch = useDispatch();
  // console.log('countValue ', useSelector(countValue))
  const addCountFn = () => {
    dispatch(addCount())
    dispatch(fetchUserData())
  }
  const reduceCountFn = () => {
    dispatch(reduceCount())
  }

  return (
    <div className='' style={{ backgroundColor: '#c1c1c1' }}>
      <p>Status: {status}</p>
      <p>Count: {count}</p>
      <p>Random Number: {randomNumber}</p>
    <button onClick={addCountFn}>Add </button>
    <button onClick={reduceCountFn}>Reduce </button>
    </div>
  )
}

export default Count
