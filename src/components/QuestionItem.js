import React from 'react';
import '../styles/QuestionItem.css'; // Corrected import path

const QuestionItem = ({ question, handleCheckboxChange }) => {
  return (
    <div className="question-item">
      <input 
        type="checkbox" 
        checked={question.solved} 
        onChange={() => handleCheckboxChange(question.id)} 
      />
      <span>{question.name}</span>
      <a href={question.link} target="_blank" rel="noopener noreferrer">Solve</a>
    </div>
  );
};

export default QuestionItem;
