import styles from './ToDoList.module.css';
export default function ToDoList({todo}){
    // console.log(todo);
    return(
        <>  
            <div className={styles.todoItem} 
                style={todo.completed ? {textDecoration:"line-through"}:{textDecoration:"none"}}>
                        {todo.title}
            </div>
        </>
    );
}