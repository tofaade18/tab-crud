// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SearchableTable from './pages/SearchableTable';
import GorestTable from './pages/GorestTable';
import RegisterUser from './pages/RegisterUser';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<SearchableTable />} />
      <Route path="/gorest" element={<GorestTable />} />
      <Route path="/register" element={<RegisterUser />} />
    </Routes>
  </Router>
);

export default App;
