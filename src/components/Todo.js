import React from "react";

export default (props) => (
  <div
    style={{
      textDecoration: props.todo.complete ? "line-through" : "",
      border: "1px solid black",
      margin: "2px",
      borderRadius: "10px",
      borderColor: "blue",
    }}
  >
    <button
      style={{ float: "right", margin: "3px" }}
      onClick={props.deleteTodo}
    >
      {props.deleteIcon}
    </button>
    {props.todo.text}
    <button
      style={{ float: "left", margin: "3px" }}
      onClick={props.toggleComplete}
    >
      {props.name}
    </button>
  </div>
);
