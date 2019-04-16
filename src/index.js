import { createStore } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./reducers";
import { Provider } from "react-redux";

import App from "./containers/App/index.js";
const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
