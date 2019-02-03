import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//ACTIONS
import { getAllTodos, removeTodo } from "../actions/index";

//COMPONENT
import Todo from "../components/todo";

class Todos extends Component {
  componentDidMount() {
    this.props.getAllTodos();
  }

  showList = () => {
    if (this.props.todos === null) {
      return <p>One moment...</p>;
    } else if (this.props.todos.length === 0) {
      return <p>Todo list is empty</p>;
    } else {
      return this.props.todos.map(todo => {
        return (
          <Todo key={todo.id} detail={todo} remove={this.props.removeTodo} />
        );
      });
    }
  };
  render() {
    return (
      <div>
        <div className="header">
          <h4>Todos</h4>
        </div>
        <section className="todos_list_section">{this.showList()}</section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getAllTodos,
      removeTodo
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
