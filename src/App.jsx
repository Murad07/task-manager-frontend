import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (newToken) => {
    setToken(newToken);
    localStorage.setItem('token', newToken); // Persist token
  };

  if (!token) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskList />
      <button onClick={() => setToken(null)}>Logout</button>
    </div>
  );
}

export default App;