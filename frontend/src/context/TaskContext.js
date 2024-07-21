import React, { createContext, useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../taskApi';

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = await getTasks();
                setTasks(fetchedTasks);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const addTask = async (task) => {
        try {
            const newTask = await createTask(task);
            setTasks([...tasks, newTask]);
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const modifyTask = async (task) => {
        try {
            const updatedTask = await updateTask(task.id, task);
            setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const removeTask = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(t => t.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, modifyTask, removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => React.useContext(TaskContext);
