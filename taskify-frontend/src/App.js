import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Navbar from './components/Navbar'; // Navbar (optional, you can customize it if needed)
import TaskForm from './components/TaskForm'; // TaskForm component for managing tasks
import './styles.css'; // Make sure your CSS is linked

function App() {
  const [tasks, setTasks] = useState([]); // State to store tasks

  // Add task function
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Delete task function
  const deleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete));
  };

  return (
    <Router> 
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/" 
            element={<TaskForm tasks={tasks} addTask={addTask} deleteTask={deleteTask} />} // Task form page (no login page)
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
