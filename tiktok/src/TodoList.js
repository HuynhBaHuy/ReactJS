import {useState} from 'react'
function ToDoListComponent(){
    const [task,setTask] = useState();
    const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem('tasks'))||[]);
    const handleClick = ()=>{
        console.log('Add button clicked')
        if(task!==''){
            setTasks(prevState=>{
                const newTasks = [...prevState, task]
                
                //save to local storage
                localStorage.setItem('tasks', JSON.stringify(newTasks));
                
                return newTasks
            });
            setTask('');
        }
    }
    return (
        <div style={{padding:32}}>
            <input
                value={task||''}
                placeholder={task||'Enter tasks'}
                onChange={(e)=>(
                    setTask(e.target.value)
                )}
             />
            <button onClick={handleClick}>Add</button>
            <ul>
                {tasks.map((task, index)=>{
                    return(
                        <li key={index}>{task}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ToDoListComponent