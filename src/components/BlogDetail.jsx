// src/components/BlogDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <p>Blog not found!</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
      <p className="mb-2">{blog.content}</p>
      <small className="text-gray-500">{blog.date}</small>
      <Link to="/" className="text-teal-600 mt-4 block">
        Back to Posts
      </Link>
    </div>
  );
};

export default BlogDetail;
