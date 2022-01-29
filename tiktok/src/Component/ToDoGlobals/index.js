import {useStore,actions} from '../../store'
import {useRef} from 'react'

function ToDo(){
    const inputRef = useRef()
    const [state,dispatch] = useStore();
    const {todos,todoInput} = state;
    const handleAdd = () =>{
        dispatch(actions.addTodo(todoInput))
        dispatch(actions.setTodoInput(''))
        inputRef.current.focus();
    }
    return (
        <>
            <input
                ref = {inputRef}
                value={todoInput}
                placeholder = 'Enter task to do...'
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {todos.map((todo,index) =>(
                    <li key={index}>{todo} <span onClick={()=>{dispatch(actions.deleteTodo(index))}}>&times;</span> </li>
                    
                ))}
            </ul>
        </>
    )
}
export default ToDo;