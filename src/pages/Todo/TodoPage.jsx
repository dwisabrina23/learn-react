import React from "react";
import { useSelector } from "react-redux";

import styles from './TodoPage.module.css';
import Todo from "./component/ToDoList";
import AddTodoItem from "./component/AddTodo";

export default function ToDoPage(){
    const todos = useSelector((state) => state.todo.todos)
    return(
        <div className={styles.TodoContainer}>
            <div>
                <h1 className={styles.AppTitle}>To Do App</h1>
            </div>
            <div className={styles.ToDoPage}>
                <AddTodoItem/>
                {todos.length > 0 
                    ? todos.map((todo) => <Todo key={todo.id} todo={todo} />)
                    : <p align="center" style={{color:"gray"}}>empty to do &#128513;</p>
                }
            </div>
        </div>
        
    )

}