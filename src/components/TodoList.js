import React from "react";
import "../App.css";
import AddTask from "./AddTask";
import Todo from "./Todo";
import { faCheck, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class TodoList extends React.Component {
  state = {
    todos: [],
    completedTodos: [],
  };
  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };
  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  render() {
    let completedTodos = [];
    let activeTodos = [];
    {
      this.state.todos.map((todo) => {
        if (todo.complete) {
          completedTodos = this.state.todos.filter((todo) => todo.complete);
        } else {
          activeTodos = this.state.todos.filter((todo) => !todo.complete);
        }
      });
    }

    return (
      <div
        style={{
          width: "400px",
          margin: "0 auto",
          fontSize: "20px",
        }}
      >
        <AddTask onSubmit={this.addTodo} />
        {activeTodos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
            name={<FontAwesomeIcon icon={faCheck} />}
            deleteIcon={<FontAwesomeIcon icon={faTrash} />}
            deleteTodo={() => this.deleteTodo(todo.id)}
          />
        ))}
        <div
          style={{
            marginTop: "25%",
            fontSize: "20px",
          }}
        >
          Completed Todos
          {completedTodos.map((todo) => (
            <Todo
              key={todo.id}
              toggleComplete={() => this.toggleComplete(todo.id)}
              todo={todo}
              name={<FontAwesomeIcon icon={faTimes} />}
              deleteIcon={<FontAwesomeIcon icon={faTrash} />}
              deleteTodo={() => this.deleteTodo(todo.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoList;
