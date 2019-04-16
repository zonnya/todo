import React, { Component } from "react";
import _ from "underscore";

require("./style.scss");

class Task extends Component {
  componentDidMount() {}
  constructor(props) {
    super(props);

    this.renderTable = this.renderTable.bind(this); 
    this.changeFilter = this.changeFilter.bind(this); 
    this.state = {
      value: "all"
    }
  }
  onToggle(index) {
    this.props.onToggle(index);
  }
  onDelete(index) {
    this.props.onDelete(index);
  }
  changeFilter(event){
    this.setState({value: event.target.value});
  }
  onAdd() {
    let text = this.taskname.value;
    this.taskname.value = ""
    this.props.onAdd(text);
  }
  renderTable(){
    let task = this.props.todo;
    if (this.state.value != "all") {
      task = task.filter(item =>
        item.isCompleted && this.state.value == "completed" || !item.isCompleted && this.state.value == "active" 
      );
    }

    return <div className="task__table">
      <div className="task__row" key={"task__head"}>
        <div className="task__column">id</div>
        <div className="task__column">name</div>
        <div className="task__column">status</div>
        <div className="task__column" />
        <div className="task__column" />
      </div>
        {_.map(task, item => {
          return <div className="task__row" key={"task__" + item.id}>
            <div className="task__column">{item.id}</div>
            <div className="task__column">{item.text}</div>
            <div className="task__column">{item.isCompleted ? "выполнена" : "активна"}</div>
            <div className="task__column"><button  onClick={this.onToggle.bind(this, item.id)}> toggle status</button></div>
            <div className="task__column"><button  onClick={this.onDelete.bind(this, item.id)}> delete task</button></div>
          </div>
        })}
    </div>
  }
  render() {
    return (
      <div className="task">
        <h1>DonNikiton, task 1</h1>
        <div className="task__count">Task count <span>{this.props.todo.length}</span></div>
        <div className="task__select">
          <select onChange={this.changeFilter} value={this.state.value.toString()}>
            <option value="all">Все</option>
            <option value="completed">Выполненные</option>
            <option value="active">Активные</option>
          </select>
        </div>
        {this.renderTable()}
        <div className="task__add">
          <label className="task__add_lable">add task</label>
          <input className="task__add_input" ref={taskname => (this.taskname = taskname)}/>
          <button onClick={this.onAdd.bind(this, "13")}> add </button>
        </div>
      </div>
    );
  }
}

export default Task;
