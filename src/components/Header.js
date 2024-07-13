import React from 'react';
import '../styles/Header.css'; // Corrected import path

const Header = ({ solvedCount, total }) => {
  const percentage = ((solvedCount / total) * 100).toFixed(2);

  return (
    <header className="header">
      <h1>Competitive Programming Tracker</h1>
      <p>{`Solved ${solvedCount} out of ${total} questions (${percentage}%)`}</p>
    </header>
  );
};

export default Header;
