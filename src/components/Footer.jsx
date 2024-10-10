import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-700 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Simple Blog. All rights reserved.</p>
        <p>Follow us on social media!</p>
        <div className="mt-2">
          <a href="#" className="text-white mx-2 hover:underline">Facebook</a>
          <a href="#" className="text-white mx-2 hover:underline">Twitter</a>
          <a href="#" className="text-white mx-2 hover:underline">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
