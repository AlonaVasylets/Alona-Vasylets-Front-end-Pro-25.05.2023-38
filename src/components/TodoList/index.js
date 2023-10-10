import React, { useEffect, useState } from 'react';
import TodoForm from '../TodoForm';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo } from '../../store/actions';
import { selectTodos, selectFetchedData } from '../../store/selectors';
import './style.css'

const TodoList = () => {
  const todos = useSelector(selectTodos);
  const fetchedData = useSelector(selectFetchedData);
  const dispatch = useDispatch();
  const [isDataVisible, setDataVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleFetchData = () => {
    setDataVisible(!isDataVisible);
    if (!isDataVisible) {
      dispatch(fetchTodos());
    }
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
      <TodoForm />
      <div className="fetched-data-container">
        {isDataVisible && fetchedData && (
          <div>
            <h2>Fetched Data:</h2>
            <ul className="todo-list">
              {fetchedData.map((item) => (
                <li className='todo-item' key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        )}
        {!isDataVisible && (
          <button className='btn-add-data' onClick={handleFetchData}>
            Show Data
          </button>
        )}
        {isDataVisible && (
          <button className='btn-add-data' onClick={handleFetchData}>
            Hide Data
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoList;