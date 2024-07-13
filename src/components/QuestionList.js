import React from 'react';
import QuestionItem from './QuestionItem';
import '../styles/QuestionList.css'; // Corrected import path

const QuestionList = ({ questions, handleCheckboxChange, category }) => {
  const filteredQuestions = questions.filter(q => q.category === category);

  return (
    <div className="question-list">
      {filteredQuestions.map((question) => (
        <QuestionItem key={question.id} question={question} handleCheckboxChange={handleCheckboxChange} />
      ))}
    </div>
  );
};

export default QuestionList;
