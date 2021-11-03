import styles from './ToDoList.module.css';
export default function ToDoList({todos}){
    // console.log(todos);
    return(
        <>  
            <div className={styles.todoItem} 
                style={todos[0].completed ? {textDecoration:"line-through"}:{textDecoration:"none"}}>
                        {todos[0].title}
            </div>
            
            
            {/* {todos.map((todo) => {
                // console.log(todo);
                <div 
                    className={styles.todoListItem}
                    key={todo.id}
                    style={todo.completed ? {textDecoration:"line-through"}:{textDecoration:"none"}}
                >
                    {todo.title}
                </div>
            })} */}
        </>
    );
}