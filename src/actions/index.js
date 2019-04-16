export const addTodo = payload => ({
  type: "ADD_TODO",
  payload: payload
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  payload: id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  payload: id
});
