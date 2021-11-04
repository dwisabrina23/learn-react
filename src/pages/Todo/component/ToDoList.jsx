import React from "react";
import styles from './ToDoList.module.css';

const Todo = ({todo, removeTodo, handleChange}) => {
    const handleDoneCheckBox=() => {
        // if(todo.done)
        //     return null;

        handleChange(todo.id)
        // alert("task is completed")
        console.log("checkbox dipencet")
    }

    return(
        <div className={styles.ToDoList}>
            <input type="checkbox"
                className={styles.CheckBox}
                checked={todo.done}
                onChange={()=>handleDoneCheckBox()}
            />
                <span style={todo.done?{textDecoration:"line-through", fontStyle:"italic", color:"gray"}:null}>{todo.title}</span>
                <span 
                    className={styles.Delete}
                    onClick={()=>{removeTodo(todo.id)
                    alert("remove to do?")}}
                >
                    delete</span>
                <hr/>
        </div>
    )
}

export default Todo