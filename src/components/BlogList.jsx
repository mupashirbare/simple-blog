// src/components/BlogList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      <Link
        to="/create"
        className="bg-teal-600 text-white py-2 px-4 mb-4 inline-block"
      >
        Create New Post
      </Link>
      {blogs.length ? (
        blogs.map((blog) => (
          <div key={blog.id} className="border p-4 mb-4">
            <h2 className="text-xl">{blog.title}</h2>
            <p>{blog.content.slice(0, 100)}...</p>
            <small className="text-gray-500">{blog.date}</small>
            <Link
              to={`/blog/${blog.id}`}
              className="text-teal-600 mt-2 block"
            >
              Read More
            </Link>
          </div>
        ))
      ) : (
        <p>No blog posts yet!</p>
      )}
    </div>
  );
};

export default BlogList;
