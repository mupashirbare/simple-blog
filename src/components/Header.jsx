// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-teal-700 text-white py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold">My Simple Blog</h1>
        <p className="text-lg">Create and share your thoughts with the world!</p>
      </div>
    </header>
  );
};

export default Header;
