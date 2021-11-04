import styles from './App.css';
import ToDoPage from './pages/Todo/TodoPage';
function App() {
  return (
    <div className="App">
      <h1 className={styles.AppTitle}>To Do App</h1>
      <ToDoPage/>
    </div>
  );
}

export default App;
