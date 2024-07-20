import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from '../taskApi';
import './TaskPage.css';

const TaskPage = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [newTask, setNewTask] = useState({ title: '', description: '', category: '', priority: '' });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const fetchedTasks = await getTasks();
        setTasks(fetchedTasks);
    };

    const handleEdit = (task) => {
        setSelectedTask(task);
    };

    const handleSave = async () => {
        await updateTask(selectedTask);
        setSelectedTask(null);
        fetchTasks();
    };

    const handleCreate = async () => {
        await createTask(newTask);
        setNewTask({ title: '', description: '', category: '', priority: '' });
        fetchTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    return (
        <div className="task-page">
            <h1 className="header">Task Manager</h1>
            <div className="task-list">
                <TaskList onEdit={handleEdit} onDelete={handleDelete} />
            </div>
            {selectedTask && (
                <div className="task-edit">
                    <h3>Edit Task</h3>
                    <input
                        type="text"
                        value={selectedTask.title}
                        onChange={(e) => setSelectedTask({ ...selectedTask, title: e.target.value })}
                        placeholder="Title"
                    />
                    <textarea
                        value={selectedTask.description}
                        onChange={(e) => setSelectedTask({ ...selectedTask, description: e.target.value })}
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        value={selectedTask.category}
                        onChange={(e) => setSelectedTask({ ...selectedTask, category: e.target.value })}
                        placeholder="Category"
                    />
                    <input
                        type="text"
                        value={selectedTask.priority}
                        onChange={(e) => setSelectedTask({ ...selectedTask, priority: e.target.value })}
                        placeholder="Priority"
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setSelectedTask(null)}>Cancel</button>
                </div>
            )}
            <div className="task-create">
                <h3>Create Task</h3>
                <input
                    type="text"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    placeholder="Title"
                />
                <textarea
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    placeholder="Description"
                />
                <input
                    type="text"
                    value={newTask.category}
                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                    placeholder="Category"
                />
                <input
                    type="text"
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    placeholder="Priority"
                />
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
};

export default TaskPage;
