import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch tasks
    const fetchTasks = async () => {
        try {
            const response = await axios.get('http://localhost:5134/api/tasks');
            setTasks(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch tasks');
            setLoading(false);
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Handle task added
    const handleTaskAdded = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    // Handle task update
    const handleUpdate = async (id, updatedTask) => {
        try {
            await axios.put(`http://localhost:5134/api/tasks/${id}`, updatedTask);
            setTasks(tasks.map((task) =>
                task.id === id ? { ...task, ...updatedTask } : task
            ));
        } catch (error) {
            console.error('Error updating task:', error);
            alert('Failed to update task');
        }
    };

    // Handle task deletion
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5134/api/tasks/${id}`);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
            alert('Failed to delete task');
        }
    };

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <TaskForm onTaskAdded={handleTaskAdded} />
            <h2>Tasks</h2>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <input
                                type="text"
                                value={task.title}
                                onChange={(e) =>
                                    handleUpdate(task.id, { ...task, title: e.target.value })
                                }
                            />
                            <input
                                type="checkbox"
                                checked={task.isCompleted}
                                onChange={(e) =>
                                    handleUpdate(task.id, { ...task, isCompleted: e.target.checked })
                                }
                            />
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;