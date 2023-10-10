import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './actions';

const initialState = {
    todos: [],
    fetchedData: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload,
                        completed: false,
                    },
                ],
            };
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                fetchedData: action.payload,
            };
        case FETCH_TODOS_FAILURE:
            return state;
        default:
            return state;
    }
};

export default reducer;