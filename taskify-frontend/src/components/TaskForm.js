import React, { useState } from 'react';

function TaskForm({ tasks, addTask, deleteTask }) {
  const [task, setTask] = useState('');

  // Handle task input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Handle form submission (adding a task)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task); // Add task to the state
      setTask(''); // Reset the input field after submitting
    }
  };

  // Handle task deletion
  const handleDelete = (taskToDelete) => {
    deleteTask(taskToDelete); // Delete the task
  };

  return (
    <div>
      <h2>Task Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter task"
        />
        <button type="submit">Add Task</button>
      </form>

      <h3>Task List</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskForm;
