// src/pages/RegisterUser.js
import React, { useState } from 'react';
import axios from '../services/api';

const RegisterUser = () => {
  const [form, setForm] = useState({ name: '', email: '', gender: '', status: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/users', form);
      alert(`User registered successfully! : ${res.data.name}`);
    } catch (error) {
      console.error(error);
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>
        <label>
          Gender:
          <select value={form.gender} onChange={(e) => setForm({ ...form, gender: e.target.value })}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Status:
          <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterUser;
