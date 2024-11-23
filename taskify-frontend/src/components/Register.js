// // src/components/Register.js
// import React, { useState } from 'react';
// import axios from 'axios';
// // import './Auth.css';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/auth/register', { username, password });
//       alert('Registration successful: ' + response.data.message);
//     } catch (error) {
//       setError(error.response ? error.response.data.message : 'An error occurred');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Register</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleRegister}>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default Register;
 
