import React ,{useState} from "react";
import {v4 as uuidv4} from 'uuid';
import styles from './ToDoList.module.css';


const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
        const newTodo = {
            id: uuidv4(), 
            title: title,
            done: false
        }
        addTodo(newTodo)
        alert("new to do added")
        setTitle("")
    }
    return(
        <div className={styles.AddTodo}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add To Do.."
                    className={styles.FormInput}
                    required
                />
                <input type="submit" style={{width:80, padding:10}}/>
            </form>
        </div>
    );
}
export default AddTodo;