// Section.js
import React from 'react';

function Section({ title, children }) {
  return (
    <section className="bg-gray-100 p-6 my-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
        {title}
      </h2>
      <div className="text-gray-700">
        {children}
      </div>
    </section>
  );
}

export default Section;