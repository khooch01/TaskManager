import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    if (!tasks.length) {
        return <p>No tasks available.</p>;
    }

    return (
        <div>
            <h3>Task List</h3>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <h4>{task.title}</h4>
                        <p>{task.description}</p>
                        <p>Category: {task.category}</p>
                        <p>Priority: {task.priority}</p>
                        <button onClick={() => onEdit(task)}>Edit</button>
                        <button onClick={() => onDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
