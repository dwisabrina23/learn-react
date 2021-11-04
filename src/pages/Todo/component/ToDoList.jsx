import React from "react";
import styles from './ToDoList.module.css';

const Todo = ({todo, removeTodo, handleChange}) => {
    const handleDoneCheckBox=() => {
        if(todo.done)
            return null;
        handleChange(todo.id)
        alert("task is completed")
    }
    return(
        <div className={styles.ToDoList}>
            <input type="checkbox"
                style={{margin:"0 10px"}}
                checked={todo.done}
                onChange={()=>handleDoneCheckBox()}
            />
                <span style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
                <span 
                    className={styles.Delete}
                    onClick={()=>{removeTodo(todo.id)
                    alert("task is removed")}}
                >
                    X</span>
                <hr/>
        </div>
    )
}

export default Todo