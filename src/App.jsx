import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import UserProfile from './components/UserProfile';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound'; // Import the PageNotFound component

const App = () => {
  return (
    <Router>
      <div className="container mx-auto">
        <Header />
        
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<BlogForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          
          {/* Catch-all route for Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
