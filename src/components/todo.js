import React from "react";

const todo = props => {
  return (
    <div
      className={
        props.detail.completed === false ? "not_completed" : "completed"
      }
    >
      <span id="remove" onClick={() => props.remove(props.detail.id)}>
        &times;
      </span>
      <p>{props.detail.title}</p>
    </div>
  );
};

export default todo;
