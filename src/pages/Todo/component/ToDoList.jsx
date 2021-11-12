import React from "react";
import { useDispatch } from "react-redux";
import { checkTodo, removeTodo } from "../../../store/todoSlice";
import styles from './ToDoList.module.css';
import toast, {Toaster} from 'react-hot-toast';

const Todo = (props) => {
    const dispatch = useDispatch()
    const handleDoneCheckBox=() => {
        dispatch(checkTodo(id))
        console.log("checkbox dipencet")
    }
    const {done, id, title} = props.todo

    return(
        <>
            <Toaster/>
            <div className={styles.ToDoList}>

                <input type="checkbox"
                    className={styles.CheckBox}
                    checked={done}
                    onChange={()=>handleDoneCheckBox()}
                />
                    <span style={done?{textDecoration:"line-through", fontStyle:"italic", color:"gray"}:null}>{title}</span>
                    <span 
                        className={styles.Delete}
                        onClick={()=>{
                            toast.success('success to delete item')
                            dispatch(removeTodo(id))
                        }}
                    >
                        delete</span>
                    <hr/>
            </div>
        </>
    )
}

export default Todo