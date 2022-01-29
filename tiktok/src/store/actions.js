import {SET_TODO_INPUT,ADD_TODO,DELETE_TODO,EDIT_TODO} from './constants'

const setTodoInput = (payload) => {
    return {
        type:SET_TODO_INPUT,
        payload
    }
}
const addTodo = (payload) => {
    return {
        type:ADD_TODO,
        payload
    }
}
const deleteTodo = (payload) => {
    return {
        type:DELETE_TODO,
        payload
    }
}
const editTodo = (payload) => {
    return {
        type:EDIT_TODO,
        payload
    }
}

export {setTodoInput,addTodo,deleteTodo,editTodo}