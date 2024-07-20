import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
    const { createTask } = useTasks();
    const [task, setTask] = useState({
        title: '',
        description: '',
        category: '',
        priority: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask(prevTask => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTask(task);
        setTask({
            title: '',
            description: '',
            category: '',
            priority: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={task.title}
                onChange={handleChange}
                placeholder="Title"
                required
            />
            <textarea
                name="description"
                value={task.description}
                onChange={handleChange}
                placeholder="Description"
                required
            ></textarea>
            <input
                type="text"
                name="category"
                value={task.category}
                onChange={handleChange}
                placeholder="Category"
                required
            />
            <input
                type="text"
                name="priority"
                value={task.priority}
                onChange={handleChange}
                placeholder="Priority"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
