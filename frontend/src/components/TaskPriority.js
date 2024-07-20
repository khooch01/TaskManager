import React, { useState } from 'react';
import { setTaskPriority } from '../services/api';

const TaskPriority = ({ taskId, currentPriority }) => {
  const [priority, setPriority] = useState(currentPriority);

  const handleChange = (e) => {
    setPriority(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setTaskPriority(taskId, priority);
      alert('Priority updated!');
    } catch (error) {
      console.error('Error setting priority', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Set Priority</button>
    </form>
  );
};

export default TaskPriority;
