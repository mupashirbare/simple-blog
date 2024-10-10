// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = () => {
  const user = { name: 'John Doe', email: 'john@example.com' };
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Profile</h2>
      <div className="bg-white p-4 shadow-md rounded-lg mb-6">
        <p className="text-lg"><strong>Name:</strong> {user.name}</p>
        <p className="text-lg"><strong>Email:</strong> {user.email}</p>
      </div>
      <h3 className="text-lg mt-4 mb-4">Your Blog Posts</h3>
      <ul className="list-disc ml-6">
        {blogs.length ? (
          blogs.map((blog) => (
            <li key={blog.id} className="mt-2">
              {blog.title} ({blog.date})
            </li>
          ))
        ) : (
          <p>No blog posts yet!</p>
        )}
      </ul>
    </div>
  );
};

export default UserProfile;
