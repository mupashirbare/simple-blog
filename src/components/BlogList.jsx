import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Adjust the number of blogs per page

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  // Get the current blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Blog Posts</h2>
      {currentBlogs.length ? (
        currentBlogs.map((blog) => (
          <div key={blog.id} className="border p-4 mb-4">
            <h2 className="text-xl">{blog.title}</h2>
            <p>{blog.content.slice(0, 100)}...</p>
            <small className="text-gray-500">{blog.date}</small>
            <Link to={`/blog/${blog.id}`} className="text-teal-600 mt-2 block">
              Read More
            </Link>
          </div>
        ))
      ) : (
        <p>No blog posts yet!</p>
      )}

      {/* Pagination Controls */}
      {blogs.length > blogsPerPage && (
        <div className="mt-4">
          {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 ${index + 1 === currentPage ? 'bg-teal-700 text-white' : 'bg-gray-300'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
