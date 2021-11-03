import Header from "./component/Header";
import ToDoList from "./component/ToDoList";
// import styles from './ToDoPage.module.css';
export default function ToDoPage({todos}){
    return (
       <>
            <Header text="To Do App"/>
            <ToDoList todos={todos}/>
       </>
    );
}