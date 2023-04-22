import React from 'react'
import { useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h1>Hola counter</h1>
      El valor actual es { count }
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
