import React ,{useState} from "react";
import {v4 as uuidv4} from 'uuid';
import styles from './TodoPage.module.css';
import Todo from "./component/ToDoList";
import AddTodo from "./component/AddTodo";
const todoList =[
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

export default function ToDoPage(){

    const [todos, setTodos] = useState(todoList);
    const handleAddTodo = (newTodo) => {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
    }

    const handleRemoveTodo = (id) => {
        const newTodoList = todos.filter(todo => todo.id !== id)
        setTodos(newTodoList)
    }

    const handleDoneCheckBox = (id) => {
        const newTodoList = todos.map(
            todo => {
                if(todo.id === id){
                    return {...todo, done:!todo.done}
                }
                return todo
            }
        )
        setTodos(newTodoList)
    }


    return(
        <div className={styles.ToDoPage}>
            <AddTodo addTodo={handleAddTodo}/>
            {todos.length > 0 
                ? todos.map((todo) => <Todo key={todo.id} todo={todo} removeTodo={handleRemoveTodo} handleChange={handleDoneCheckBox}/>)
                : <p align="center" style={{color:"gray"}}>empty to do &#128513;</p>
            }
        </div>
    )

}