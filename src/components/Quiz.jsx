import React from 'react';
import PropTypes from 'prop-types';

const Quiz = () => {
    const quizData = {
        title: 'Which programming language do you prefer?',
        choices: ['JavaScript', 'Python', 'Java', 'C++'],
      };

  return (
    <div className="w-[50%] mx-auto bg-white/80 p-9 rounded-md shadow-2xl mt-24 drop-shadow">
      <h2 className="text-3xl font-semibold mb-8">{quizData.title}</h2>
      <ul className="space-y-5">
        {quizData.choices.map((choice, index) => (
          <li key={index} className="flex items-center text-xl">
            <input
              type="radio"
              id={`choice-${index}`}
              name="quiz-choice"
              className="mr-4 cursor-pointer"
            />
            <label htmlFor={`choice-${index}`} className='cursor-pointer'>{choice}</label>
          </li>
        ))}
      </ul>
      <div className='mt-16 text-white w-full flex justify-around'>
        <button className='p-2 w-32 rounded bg-stone-700 hover:bg-stone-800'>Previous</button>
        <button className='p-2 w-32 rounded bg-stone-700 hover:bg-stone-800'>Next</button>
      </div>
    </div>
  );
};

Quiz.propTypes = {
  title: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Quiz;
