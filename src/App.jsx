import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  return (
    <div className="App">
      <h1>Task Manager</h1>

      <TaskList />
    </div>
  );
}

export default App;