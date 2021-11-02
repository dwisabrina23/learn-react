import './App.css';
import { mockUsers } from './mockData';
import ProfilePage from './pages/Profile/ProfilePage';
function App() {
  return (
    <ProfilePage users={mockUsers} title="Profile Page"/>
  );
}

export default App;
