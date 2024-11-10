// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm">© 2024 John Doe. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://linkedin.com" className="text-blue-400 hover:text-blue-500">LinkedIn</a>
          <a href="https://github.com" className="text-gray-400 hover:text-white">GitHub</a>
          <a href="mailto:john@example.com" className="text-gray-400 hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;