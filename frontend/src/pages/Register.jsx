import React, { useState } from 'react';
import { register } from '../api/auth';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    cnic: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
      window.location.href = '/login';
    } catch (err) {
      setError(err.response.data.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="CNIC"
          value={formData.cnic}
          onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
