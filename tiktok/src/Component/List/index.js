import {useState} from 'react'
function ToDoListComponent(){
    const [task,setTask] = useState();
    const [tasks,setTasks] = useState(()=>{
        // get data from localStorage
        const dataFromLocalStorage = JSON.parse(localStorage.getItem('tasks'))
        
        console.log(dataFromLocalStorage)
        
        return dataFromLocalStorage??[]
    });
    const handleClick = ()=>{
        console.log('Add button clicked')
        if(task!==''){
            setTasks(prevTasks=>{
                const newTasks = [...prevTasks, task]
                
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