import React, { createContext, useEffect, useState } from 'react';

export const TaskContext = createContext();
export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const token = localStorage.getItem('token'); // Get JWT token from local storage

    useEffect(() => {
        const fetchTasks = async () => {
            if (!token) return; // Return if no token found

            try {
                const response = await fetch('http://localhost:5000/gettasks', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the headers
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }

                const data = await response.json();
                setTasks(data); // Assuming the API returns an array of tasks
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [token]);

    // Function to update task completion status
    const updateTask = async (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );

        // Optionally, update the task on the server
        try {
            const response = await fetch(`http://localhost:5000/updatetask/${taskId}`, {
                method: 'PATCH', // Use PATCH to update the specific task
                headers: {
                    Authorization: `Bearer ${token}`, // Include the token in the headers
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ completed: !tasks.find((task) => task.id === taskId).completed }),
            });

            if (!response.ok) {
                throw new Error('Failed to update task');
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
};
