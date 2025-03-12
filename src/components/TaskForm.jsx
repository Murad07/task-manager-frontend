import { useState } from 'react';
import axios from 'axios';

function TaskForm({ onTaskAdded }) {
    const [title, setTitle] = useState('');
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5134/api/tasks', {
                title,
                isCompleted,
            });
            onTaskAdded(response.data); // Callback to update TaskList
            setTitle(''); // Reset form
            setIsCompleted(false);
        } catch (error) {
            console.error('Error adding task:', error);
            alert('Failed to add task');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                />
                Completed
            </label>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;