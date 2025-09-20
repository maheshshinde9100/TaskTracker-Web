// // src/App.js
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import AddTask from './components/AddTask';
// import TaskList from './components/TaskList';
// import Footer from './components/Footer';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
// import DefaultPage from './components/DefaultPage';
// import Profile from './components/Profile';
// import TaskCalendar from './components/TaskCalendar';
// import { TaskProvider } from './context/TaskContext'; // Import TaskProvider
// import './App.css';

// const App = () => {
//     const [tasks, setTasks] = useState([]); // State to store tasks
//     const [isLoggedIn, setIsLoggedIn] = useState(
//         localStorage.getItem('isLoggedIn') === 'true' || false
//     ); // Persist login status

//     // Function to add a task
//     const addTask = (task) => {
//         const id = Math.floor(Math.random() * 10000) + 1; // Generate a random ID for the task
//         const newTask = {
//             id,
//             ...task,
//             createdAt: new Date().toLocaleString(), // Add the current date and time as task creation time
//             notified: false, // Initialize notified status
//         };
//         setTasks((prevTasks) => [...prevTasks, newTask]); // Update the tasks state
//     };

//     // Function to delete a task
//     const deleteTask = (id) => {
//         setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Filter out the deleted task
//     };

//     // Check for due reminders every minute
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setTasks((prevTasks) =>
//                 prevTasks.map((task) => {
//                     const now = new Date();
//                     const reminderTime = new Date(task.reminderTime);
//                     if (now >= reminderTime && !task.notified) {
//                         alert(`Reminder: ${task.title} is due now!`);
//                         return { ...task, notified: true }; // Mark the task as notified
//                     }
//                     return task;
//                 })
//             );
//         }, 60000); // Check every minute

//         return () => clearInterval(intervalId); // Cleanup interval on component unmount
//     }, []);

//     // Function to handle login
//     const handleLogin = () => {
//         setIsLoggedIn(true); // Set login status to true
//         localStorage.setItem('isLoggedIn', 'true'); // Save login status to localStorage
//     };

//     // Function to handle logout
//     const handleLogout = () => {
//         setIsLoggedIn(false); // Set login status to false
//         localStorage.removeItem('isLoggedIn'); // Remove login status from localStorage
//         localStorage.removeItem('token'); // Remove token from local storage
//     };

//     return (
//         <TaskProvider>
//         <Router>
//             <div className="container">
//                 {/* Pass props to Navbar */}
//                 <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

//                 <Routes>
//                     <Route
//                         path="/defaultpage"
//                         element={
//                             isLoggedIn ? <Navigate to="/home" /> : <DefaultPage />
//                         }
//                     />
//                     <Route
//                         path="/signup"
//                         element={
//                             isLoggedIn ? (
//                                 <Navigate to="/home" />
//                             ) : (
//                                 <Signup onSignup={handleLogin} />
//                             )
//                         }
//                     />
//                     <Route
//                         path="/login"
//                         element={
//                             isLoggedIn ? (
//                                 <Navigate to="/home" />
//                             ) : (
//                                 <Login onLogin={handleLogin} />
//                             )
//                         }
//                     />
//                     <Route
//                         path="/home"
//                         element={
//                             isLoggedIn ? (
//                                 <>
//                                     <TaskList tasks={tasks} onDelete={deleteTask} />
//                                     <Footer />
//                                 </>
//                             ) : (
//                                 <Navigate to="/defaultpage" />
//                             )
//                         }
//                     />
//                     <Route
//                         path="/addtask"
//                         element={
//                             isLoggedIn ? (
//                                 <AddTask onAdd={addTask} />
//                             ) : (
//                                 <Navigate to="/defaultpage" />
//                             )
//                         }
//                     />
//                     {/* <Route
//                         path="/calendar"
//                         element={
//                             isLoggedIn ? (
//                                 <TaskCalendar tasks={tasks} /> // Pass tasks to TaskCalendar
//                             ) : (
//                                 <Navigate to="/defaultpage" />
//                             )
//                         }
//                     /> */}
//             <Route path="/calendar"
//     element={
//         isLoggedIn ? (
//             <TaskCalendar /> // Remove tasks prop
//         ) : (
//             <Navigate to="/defaultpage" />
//         )
//     }
// />

//                     <Route
//                         path="/profile"
//                         element={
//                             isLoggedIn ? (
//                                 <Profile />
//                             ) : (
//                                 <Navigate to="/defaultpage" />
//                             )
//                         }
//                     />
//                     {/* Catch-all route should be defined only once at the end */}
//                     <Route
//                         path="*"
//                         element={
//                             isLoggedIn ? (
//                                 <Navigate to="/home" />
//                             ) : (
//                                 <Navigate to="/defaultpage" />
//                             )
//                         }
//                     />

//         <Route path="/tasks" element={<TaskList />} /> {/* Task list route */}
//                 </Routes>
//             </div>
//         </Router>
//         </TaskProvider>
//     );
// };

// export default App;






// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import AddTask from './components/AddTask';
// import TaskList from './components/TaskList';
// import Footer from './components/Footer';
// import Signup from './components/Signup';
// import Login from './components/Login';
// import Navbar from './components/Navbar';
// import DefaultPage from './components/DefaultPage';
// import Profile from './components/Profile';
// import TaskCalendar from './components/TaskCalendar';
// import { TaskProvider } from './context/TaskContext'; // Import TaskProvider
// import './App.css';

// const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = React.useState(
//         localStorage.getItem('isLoggedIn') === 'true' || false
//     );

//     const handleLogin = () => {
//         setIsLoggedIn(true);
//         localStorage.setItem('isLoggedIn', 'true');
//     };

//     const handleLogout = () => {
//         setIsLoggedIn(false);
//         localStorage.removeItem('isLoggedIn');
//         localStorage.removeItem('token');
//     };

//     return (
//         <Router>
//             <TaskProvider> {/* Wrap your app with TaskProvider */}
//                 <div className="container">
//                     <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

//                     <Routes>
//                         <Route
//                             path="/defaultpage"
//                             element={isLoggedIn ? <Navigate to="/home" /> : <DefaultPage />}
//                         />
//                         <Route
//                             path="/signup"
//                             element={isLoggedIn ? <Navigate to="/home" /> : <Signup onSignup={handleLogin} />}
//                         />
//                         <Route
//                             path="/login"
//                             element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
//                         />
//                         <Route
//                             path="/home"
//                             element={isLoggedIn ? (
//                                 <>
//                                     <TaskList />
//                                     <Footer />
//                                 </>
//                             ) : (
//                                 <Navigate to="/defaultpage" />
//                             )}
//                         />
//                         <Route
//                             path="/addtask"
//                             element={isLoggedIn ? <AddTask /> : <Navigate to="/defaultpage" />}
//                         />
//                         <Route
//                             path="/calendar"
//                             element={isLoggedIn ? <TaskCalendar /> : <Navigate to="/defaultpage" />}
//                         />
//                         <Route
//                             path="/profile"
//                             element={isLoggedIn ? <Profile /> : <Navigate to="/defaultpage" />}
//                         />
//                         <Route
//                             path="*"
//                             element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/defaultpage" />}
//                         />
//                     </Routes>
//                 </div>
//             </TaskProvider>
//         </Router>
//     );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import DefaultPage from './components/DefaultPage';
import Profile from './components/Profile';
import TaskCalendar from './components/TaskCalendar';
import TaskReport from './components/TaskReport'; // Import TaskReport
import { TaskProvider } from './context/TaskContext'; // Import TaskProvider
import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(
        localStorage.getItem('isLoggedIn') === 'true' || false
    );

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
    };

    return (
        <Router>
            <TaskProvider>
                <div className="container">
                    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />

                    <Routes>
                        <Route
                            path="/defaultpage"
                            element={isLoggedIn ? <Navigate to="/home" /> : <DefaultPage />}
                        />
                        <Route
                            path="/signup"
                            element={isLoggedIn ? <Navigate to="/home" /> : <Signup onSignup={handleLogin} />}
                        />
                        <Route
                            path="/login"
                            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
                        />
                        <Route
                            path="/home"
                            element={isLoggedIn ? (
                                <>
                                    <TaskList />
                                    <Footer />
                                </>
                            ) : (
                                <Navigate to="/defaultpage" />
                            )}
                        />
                        <Route
                            path="/addtask"
                            element={isLoggedIn ? <AddTask /> : <Navigate to="/defaultpage" />}
                        />
                        <Route
                            path="/calendar"
                            element={isLoggedIn ? <TaskCalendar /> : <Navigate to="/defaultpage" />}
                        />
                        <Route
                            path="/task-report"
                            element={isLoggedIn ? <TaskReport /> : <Navigate to="/defaultpage" />} // Task Report Route
                        />
                        <Route
                            path="/profile"
                            element={isLoggedIn ? <Profile /> : <Navigate to="/defaultpage" />}
                        />
                        <Route
                            path="*"
                            element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/defaultpage" />}
                        />
                    </Routes>
                </div>
            </TaskProvider>
        </Router>
    );
};

export default App;
