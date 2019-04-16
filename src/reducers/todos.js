import {cloneDeep} from "lodash";

let DEFAULT_STATE = {
  maxID: 0, 
  todo:[]
}

const todos = (state = DEFAULT_STATE, action) => {
  let nextState = cloneDeep(state);
  switch (action.type) {
    case "ADD_TODO":
      nextState.todo.push({
        text: action.payload,
        id: nextState.maxID,
        isCompleted: false,
        key: "todo__" + nextState.maxID,
      })
      nextState.maxID++
      return nextState      
    case "TOGGLE_TODO":
      nextState.todo = nextState.todo.map(todo =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      return nextState
    case "DELETE_TODO":
      nextState.todo = nextState.todo.filter(todo =>
        todo.id !== action.payload
      );
      return nextState
    default:
      return state;
  }
};

export default todos;
