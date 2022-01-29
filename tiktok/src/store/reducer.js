import { SET_TODO_INPUT,ADD_TODO,DELETE_TODO,EDIT_TODO } from "./constants";
const initState = {
    todos: [],
    todoInput: ''
}

const reducer = (state, action)=>{
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput:action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case DELETE_TODO:
            const delTodo = [...state.todos].filter((item,index)=>(index !== action.payload))
            return{
                ...state,
                todos: delTodo
            }
        case EDIT_TODO:
            const editTodo = [...state.todos].map((item,index)=>{
                if(index===action.payload.index){
                    item = action.payload.content
                }
                return item
            })
            return{
                ...state,
                todos: editTodo
            }
        default:
            throw new Error('Invalid action type ',action.type);
    }
}

export {initState}
export default reducer