import {useRef,useState,useEffect,useCallback} from 'react'
import Content from './Memo.js'

// useCallback()
  // - Reference types
  // - React memo()

function Counter() {
  const [count,setCount] = useState(60)
  const [number,setNumber] = useState(0)
  const timerId = useRef();
  const prevCount = useRef();
  const h1Ref = useRef();
  useEffect(() => {
    if(count%2===0){
      h1Ref.current.style={color:'red'}
    }
    else{
      h1Ref.current.style={color:'black'}
    }
  });
  useEffect(()=>{
    prevCount.current = count;
  },[count])
  const onHandleStart = ()=>{
    timerId.current = setInterval(()=>{
        setCount(prev=>prev-1);
      },1000);
  }
  const onHandleStop = ()=>{
    clearInterval(timerId.current);
  }
  const onHandleClickMe = useCallback( ()=>{
    setNumber(number+1)
  },[])
  console.log(count,prevCount.current);
  return (

      <div>
        <h1 ref={h1Ref}>{count}</h1>
        <button onClick={onHandleStart}>Start</button>
        <button onClick={onHandleStop}>Stop</button>
        <Content onIncrease = {onHandleClickMe} /> 
        <h1>{number}</h1>
      </div>
    )
}

export default Counter;
