import React from 'react';
import TodoForm from '../TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from '../../store/actions';
import { selectTodos } from '../../store/selectors';
import "./style.css";

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className='todo-item' key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button className='btn-delete-todo' onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <TodoForm addTodo={handleAddTodo} />
    </div>
  );
};


export default TodoList;