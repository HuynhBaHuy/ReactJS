import {memo} from 'react'

function Content({onIncrease}){
    console.log("Content re-render")
    return (
        <>
            <h2>Hello Anh Em</h2>
            <button onClick={onIncrease}>Click me</button>
        </>
    )
}

export default memo(Content);