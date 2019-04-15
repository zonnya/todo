import React, { Component } from "react";
import _ from "underscore";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../../actions";

const PropTypes = require("prop-types");

class App extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    this.props.onToggle(index);
  }
  onAdd(text) {
    this.props.onAdd(text);
  }
  render() {
    return (
      <div className="app">
        <h1>bla</h1>
        {this.props.state.length}
        {_.map(this.props.state, (item, i) => {
          return [
            <div>{item.text}</div>,
            <div>{item.isCompleted ? "true" : "false"}</div>,
            <button onClick={this.onClick.bind(this, i)}> toggle </button>
          ];
        })}

        <button onClick={this.onAdd.bind(this, "13")}> add </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return {
    onToggle: function(index) {
      dispatch(toggleTodo(index));
    },

    onAdd: function(text) {
      dispatch(addTodo(text));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
