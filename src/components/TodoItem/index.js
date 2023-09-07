import React from "react";
import './style.css';

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <input className="input-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(index)}
      />
      <p className="text-todo"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </p>
      <button className="btn-delete-todo" onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;