import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../../actions";

import Task from "../../components/Task" ;


class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app">
        <Task {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  state ;
}

function mapDispatchToProps(dispatch) {
  return {
    onToggle: function(index) {
      dispatch(toggleTodo(index));
    },

    onAdd: function(text) {
      dispatch(addTodo(text));
    },

    onDelete: function(index) {
      dispatch(deleteTodo(index));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
