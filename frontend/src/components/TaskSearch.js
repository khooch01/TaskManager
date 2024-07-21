// src/components/TaskSearch.js
import React, { useState } from 'react';

const TaskSearch = ({ onSearch }) => {
    const [searchType, setSearchType] = useState('title');
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        onSearch(searchType, searchQuery);
    };

    return (
        <div className="task-search">
            <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                <option value="title">Title</option>
                <option value="category">Category</option>
                <option value="priority">Priority</option>
            </select>
            <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default TaskSearch;
