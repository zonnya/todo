import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { addTodo, toggleTodo } from "./actions";

import App from "./containers/App/index.js";
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo("My Todo"));
store.dispatch(addTodo("Second Todo"));

store.dispatch(toggleTodo(0));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
