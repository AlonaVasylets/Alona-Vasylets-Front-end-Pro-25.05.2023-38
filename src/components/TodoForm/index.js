import React, { useState } from 'react';
import './style.css';

const TodoForm = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      addTodo(inputText);
      setInputText('');
    }
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input className='todo-input'
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className='btn-add' type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;