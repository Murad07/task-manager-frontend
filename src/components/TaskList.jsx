import { useState, useEffect } from 'react';
import axios from 'axios';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:5134/api/tasks')
            .then((response) => {
                setTasks(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Failed to fetch tasks');
                setLoading(false);
                console.error(err);
            });
    }, []); // Empty dependency array = run once on mount

    if (loading) return <p>Loading tasks...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Tasks</h2>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {task.title} - {task.isCompleted ? 'Done' : 'Pending'}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskList;