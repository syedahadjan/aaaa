import React, { useState } from 'react';
import { login } from '../api/auth';

const Login = () => {
  const [cnic, setCnic] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ cnic, password });
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      setError(err.response.data.message || 'Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="CNIC"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
