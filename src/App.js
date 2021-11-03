import './App.css';
import { mockToDo } from './mockData';
import ToDoPage from './pages/ToDo/ToDoPage';
function App() {
  return (
    <ToDoPage todos={mockToDo}/>
  );
}

export default App;
