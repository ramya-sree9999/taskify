import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to redirect after login

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { username, password };

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      console.log("Response data:", data); // Log the response data for debugging

      if (response.ok) {
        // If login is successful, redirect to the task form page
        navigate('/task-form');
      } else {
        // If response is not ok, show the error message
        setError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      // Handle any unexpected errors during the fetch request
      console.error('Error:', error);
      setError('An unexpected error occurred during login.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>} {/* Display error message */}
    </div>
  );
}

export default Login;
