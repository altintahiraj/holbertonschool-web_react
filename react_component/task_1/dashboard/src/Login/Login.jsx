import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" autoComplete="username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" autoComplete="current-password" />

      <button type="submit">OK</button>
    </div>
  );
};

export default Login;