import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialTodos =[
    {
        id: uuidv4(),
        title: "Learn React",
        done: true
    },
    {
        id: uuidv4(),
        title: "Create to do app",
        done: false
    }
]

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: initialTodos,
    },
    reducers: {
        removeTodo : (state, action) => {
            state.todos = [
                ...state.todos.filter(todo => {
                    return todo.id !== action.payload
                })
            ]
        },
        addTodo: (state, action) =>{
            const newTodo = {
                id: uuidv4(), 
                title: action.payload,
                done: false
            }
            state.todos = [...state.todos, newTodo]
        },
        checkTodo: (state, action) => {
            state.todos = state.todos.map(
                todo => {
                    if(todo.id === action.payload){
                        return {...todo, done:!todo.done}
                    }
                    return todo
                }
            )
            console.log(state.todos)
        }

    }
})

export const { addTodo, removeTodo, checkTodo} = todoSlice.actions

export default todoSlice.reducer