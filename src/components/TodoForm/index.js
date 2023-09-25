import React, { useState } from 'react';
import './style.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions';

const TodoForm = () => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo(todoText));
      setTodoText('');
    }
  };

  return (
    <div className='todo-cont'>
      <input className='todo-input'
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className='btn-add' onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;