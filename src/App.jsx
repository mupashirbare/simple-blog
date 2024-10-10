// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaHome, FaUserAlt } from 'react-icons/fa';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import UserProfile from './components/UserProfile';
import BlogDetail from './components/BlogDetail';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Header />
        <nav className="flex justify-between items-center p-4 bg-teal-600 text-white">
          <Link to="/" className="flex items-center space-x-2">
            <FaHome size={24} />
            <span>Home</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2">
            <FaUserAlt size={24} />
            <span>Profile</span>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<BlogForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
