import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      setError('Both title and content are required.');
      return;
    }
    const newBlog = {
      id: Date.now(),
      title,
      content,
      date: new Date().toLocaleString(),
    };
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    localStorage.setItem('blogs', JSON.stringify([...storedBlogs, newBlog]));
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-teal-700 text-center">Create New Blog</h2>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter blog title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              placeholder="Write your blog content here"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full mt-1 p-3 border rounded-md focus:ring-2 focus:ring-teal-600 focus:outline-none"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-teal-700 transition duration-300"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
