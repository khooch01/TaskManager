// src/components/TaskDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

function TaskDetail() {
    const { id } = useParams();

    // Simulated task detail (replace with API call)
    const task = {
        id,
        title: 'Task ' + id,
        description: 'Description of Task ' + id,
        priority: 'Medium',
    };

    return (
        <div>
            <h2>Task Detail</h2>
            <p>Title: {task.title}</p>
            <p>Description: {task.description}</p>
            <p>Priority: {task.priority}</p>
        </div>
    );
}

export default TaskDetail;
