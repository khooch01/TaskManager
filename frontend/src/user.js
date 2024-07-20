// users.js

const express = require('express');
const router = express.Router();
const connection = require('./config/db');

// GET all users
router.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// POST a new user
router.post('/users', (req, res) => {
    const { username, password } = req.body;
    connection.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
        if (err) throw err;
        res.status(201).send('User added successfully');
    });
});

// Other CRUD operations (GET by ID, PUT, DELETE) can be added similarly

module.exports = router;
