import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: text,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://652439d6ea560a22a4e99db5.mockapi.io/api/v1/articles');
            const todos = response.data;
            dispatch({ type: FETCH_TODOS_SUCCESS, payload: todos });
        } catch (error) {
            dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
        }
    };
};
