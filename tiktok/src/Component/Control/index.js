import {useReducer} from 'react'

// useState
// 1. Init state: 0
// 2. Actions: Up(count + 1) / Down(count - 1)

// useReducer
// 1. Init state: 0
// 2. Actions: Up(count + 1) / Down(count - 1)
// 3. Reducer
// 4. Dispatch

//init state
const initState = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state,action)=>{
    switch (action) {
        case UP_ACTION:
            return state+1;
            
        case DOWN_ACTION:
            return state-1;
        default:
            throw new Error('Invalid Action: ',action)    
    }
}

function UpDown(){
    const [count,dispatch] = useReducer(reducer,initState);
    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={()=>dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={()=>dispatch(UP_ACTION)}
            >
                Up
            </button>
        </>
    )
}

export default UpDown