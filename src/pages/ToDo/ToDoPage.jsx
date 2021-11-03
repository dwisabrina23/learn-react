import Header from "./component/Header";
import ToDoList from "./component/ToDoList";
import styles from './ToDoPage.module.css';
export default function ToDoPage({todos}){
    // console.log(todos);
    return (
       <>
            <Header text="To Do App"/>
            <div className={styles.toDoContent}>
                {todos.map((todo) => 
                    <ToDoList todo={todo}/>
                )}
            </div>
       </>
    );
}