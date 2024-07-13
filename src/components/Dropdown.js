import React from 'react';
import '../styles/Dropdown.css'; // Corrected import path

const Dropdown = ({ setCategory }) => {
  return (
    <div className="dropdown">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="Arrays">Arrays</option>
        <option value="Strings">Strings</option>
        {/* Add more categories here */}
      </select>
    </div>
  );
};

export default Dropdown;
