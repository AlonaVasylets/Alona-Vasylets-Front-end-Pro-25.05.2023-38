import React from "react";
import './style.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <input className="input-checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <p className="text-todo"
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </p>
      <button className="btn-delete-todo" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;