import { useReducer,useRef } from "react";
import {setJob,addJob,deleteJob} from "./actions"
import reducer, {initState} from "./reducer"
import logger from "./logger"
//useReducer
// 4. Dispatch
function ToDo(){
    const [state,dispatch] = useReducer(logger(reducer),initState);
    const {job, jobs} = state;
    const inputRef = useRef()
    const handleSubmit = ()=>{
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus();
    }
    return (
        <>
            <h3>To Do:</h3>
            <input
                ref={inputRef}
                value={job}
                onChange={e=>{
                    dispatch(setJob(e.target.value))
                }}
                placeholder="Enter todo..."
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job,index)=>(
                    <li key={index}>
                        {job} 
                        <span
                            onClick={()=>dispatch(deleteJob(index))}
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ToDo