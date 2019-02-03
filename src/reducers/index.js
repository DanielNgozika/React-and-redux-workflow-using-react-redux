const initialState = {
  todos: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_TODOS":
      return {
        ...state,
        todos: action.payload.filter(todo => todo.id < 10)
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}
