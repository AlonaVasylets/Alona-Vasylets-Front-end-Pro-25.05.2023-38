import React, { useState } from "react";
import TodoItem from "../TodoItem";
import TodoForm from "../TodoForm";
import "./style.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTodo = (todoText) => {
    const newTodo = { id: nextId, text: todoText, completed: false };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};


export default TodoList;