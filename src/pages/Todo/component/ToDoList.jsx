import React from "react";
import styles from './ToDoList.module.css';
import toast, {Toaster} from 'react-hot-toast';

const Todo = ({todo, removeTodo, handleChange}) => {
    const handleDoneCheckBox=() => {
        // if(todo.done)
        //     return null;
        
        handleChange(todo.id)
        console.log("checkbox dipencet")
    }

    return(
        <>
            <Toaster/>
            <div className={styles.ToDoList}>

                <input type="checkbox"
                    className={styles.CheckBox}
                    checked={todo.done}
                    onChange={()=>handleDoneCheckBox()}
                />
                    <span style={todo.done?{textDecoration:"line-through", fontStyle:"italic", color:"gray"}:null}>{todo.title}</span>
                    <span 
                        className={styles.Delete}
                        onClick={()=>{
                            toast.success('success to delete item')
                            removeTodo(todo.id)
                        }}
                    >
                        delete</span>
                    <hr/>
            </div>
        </>
    )
}

export default Todo