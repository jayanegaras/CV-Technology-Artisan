// ListItem.js
import React from 'react';

function ListItem({ title, details }) {
  return (
    <div className="mb-4 p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{details}</p>
    </div>
  );
}

export default ListItem;