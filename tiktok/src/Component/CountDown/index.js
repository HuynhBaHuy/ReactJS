import {useEffect,useState} from 'react'

function CountDown() {
    const [countdown, setCountdown] = useState(180)
    useEffect(()=>{
        const timerId = setInterval(()=>{
            setCountdown(prev=>prev-1)
            console.log('CountDown...',countdown)
        },1000)
        // unmounted component
        return ()=>clearInterval(timerId)
    },[])
    return(
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default CountDown