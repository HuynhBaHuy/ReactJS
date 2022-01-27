import React, {useState} from 'react'
const orders = [100,200,300]

function Counter() {
  // random counter
  const [counter, setCounter] = useState(()=>{
    const total = orders.reduce((total, order) => total + order)
    return total
  })
  
  const handleIncrease = ()=>{
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)    
    setCounter(prevCounter => prevCounter+1)
  }
  return (
    <React.Fragment>
      <h1>{counter}</h1>
      <button onClick={handleIncrease} >Increase</button>
    </React.Fragment>
  );
}

export default Counter;
