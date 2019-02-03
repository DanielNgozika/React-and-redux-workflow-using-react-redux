export const getAllTodos = () => {
  const request = fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .catch(err => console.log(err));

  return {
    type: "GET_ALL_TODOS",
    payload: request
  };
};

export const removeTodo = id => {
  return {
    type: "REMOVE_TODO",
    payload: id
  };
};
