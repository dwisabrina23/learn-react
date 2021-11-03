import './App.css';
import { mockToDo } from './mockData';
import ToDoPage from './pages/ToDo/ToDoPage';
function App() {
  return (
    <ToDoPage todos={mockToDo} title="To Do Page"/>
  );
}

export default App;
