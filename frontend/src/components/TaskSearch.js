import React, { useState } from 'react';
import { searchTasks } from '../services/api';

const TaskSearch = () => {
  const [query, setQuery] = useState({ title: '', category: '', priority: '' });
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await searchTasks(query);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching tasks', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={query.title} onChange={handleChange} placeholder="Title" />
        <input type="text" name="category" value={query.category} onChange={handleChange} placeholder="Category" />
        <select name="priority" value={query.priority} onChange={handleChange}>
          <option value="">All</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSearch;
