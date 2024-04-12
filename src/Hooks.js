import React, { useState, useEffect, useId } from 'react'

function Hooks() {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const price = count * 5;
  const id = useId();
  console.log('id ', id);

  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState('1920');
    useEffect(() => {
      const handleWindowSizeChange = () => {
        setWindowSize(window.innerWidth);
      }
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
      }
    }, [])
    return [windowSize, setWindowSize];
  }
  
  const [windowSize, setWindowSize] = useWindowSize();

  useEffect(() => {
    const controller = new AbortController();
    fetchUserData(controller);
    return () => {
      controller.abort();
    }
  }, [])

  const fetchUserData = async (controller) => {
    try {
      const response = await fetch('https://randomuser.me/api/', {
        signal: controller.signal
      });
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.log(error)
    }
  };

  const increaseCount = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  const updateUserEmail = () => {
    /* DONT DO THIS */
    // setUser({
    //   ...user,
    //   email: 'updatedemail@gmail.com'
    // })

    // DO THIS 
    setUser(prev => {
      return {
        ...prev,
        email: 'updatedemail@gmail.com'
      }
    })
    // OR
    setUser(prev => ({
      ...prev,
      email: 'updatedemail@gmail.com'
    })
    )
  }

 
  return (
    <div style={{ minHeight: '20vh' }}>
      <p>Count: {count}</p>
      <p>Price: {price}</p>
      <button onClick={increaseCount}>Add</button>
      <p>Email: {user?.email}</p>
      <p>Gender: {user?.gender}</p>
      <p>Phone: {user?.phone}</p>
      <button onClick={updateUserEmail} >Update User</button>
      <p>Window size: {windowSize}</p>
      <button onClick={() => setWindowSize(10)} >Set window size 10</button>
    </div>
  )



}

export default Hooks
