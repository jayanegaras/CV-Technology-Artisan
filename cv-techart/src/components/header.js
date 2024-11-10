// Header.js
import React from 'react';

function Header({ name, title, contact }) {
  return (
    <header className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">{name}</h1>
        <h2 className="text-xl font-medium text-gray-300 mt-2">{title}</h2>
        <p className="text-gray-400 mt-4">{contact}</p>
        <nav className="mt-6 space-x-4">
          <a href="/" className="text-blue-400 hover:underline">Home</a>
          <a href="/experience" className="text-blue-400 hover:underline">Experience</a>
          <a href="/education" className="text-blue-400 hover:underline">Education</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;