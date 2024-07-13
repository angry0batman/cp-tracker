import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dropdown from './components/Dropdown';
import QuestionList from './components/QuestionList';

import './styles/App.css'; // Ensure this path is correct

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState('Arrays');
  const [solvedCount, setSolvedCount] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = [
        { id: 1, name: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', category: 'Arrays', solved: false },
        { id: 2, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 3, name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', category: 'Strings', solved: false },
        { id: 4, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 5, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 6, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 7, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 8, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 9, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 10, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 11, name: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', category: 'Arrays', solved: false },
        { id: 12, name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', category: 'Strings', solved: false },
        { id: 13, name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', category: 'Strings', solved: false },
        { id: 14, name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', category: 'Strings', solved: false },
        { id: 15, name: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', category: 'Strings', solved: false },
        // Add more questions here
      ];
      setQuestions(data);
      setSolvedCount(data.filter(q => q.solved).length);
    };

    fetchQuestions();
  }, []);

  const handleCheckboxChange = (id) => {
    const updatedQuestions = questions.map(q => {
      if (q.id === id) q.solved = !q.solved;
      return q;
    });
    setQuestions(updatedQuestions);
    setSolvedCount(updatedQuestions.filter(q => q.solved).length);
  };

  return (
    <div className="App">
      <Header solvedCount={solvedCount} total={questions.length} />
      <Dropdown setCategory={setCategory} />
      <QuestionList questions={questions} handleCheckboxChange={handleCheckboxChange} category={category} />
    </div>
  );
};

export default App;
