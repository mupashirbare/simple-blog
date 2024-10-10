// src/components/PageNotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-5xl font-bold text-teal-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center">
        Oops! The page you're looking for doesn't exist. It might have been removed or the URL is incorrect.
      </p>
      <Link
        to="/"
        className="bg-teal-600 text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-teal-700 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
