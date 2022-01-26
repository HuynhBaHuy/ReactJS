import {useState} from 'react'
function ToDoListComponent(){
    let index = 0;
    const [task,setTask] = useState();
    const [arrTask,setArrTask] = useState([]);
    const TaskElement = ({children})=>{
        return (
            <li key={index++}>{children}</li>
        )
    }
    const handleClick = ()=>{
        console.log('Add clicked')
        setArrTask(prevState=>([
            ...prevState,
            <TaskElement >{task}</TaskElement>
        ]));
        setTask('');
    }
    return (
        <div style={{padding:32}}>
            <input
            value={task}
                placeholder={task||'Enter tasks'}
                onChange={(e)=>(
                    setTask(e.target.value)
                )}
             />
            <button onClick={handleClick}>Add</button>
            <ul>{arrTask}
            </ul>
        </div>
    )
}

export default ToDoListComponent