import React from "react";

const home = props => {
  return (
    <div className="home">
      <h1>Todo App</h1>
      <button onClick={() => props.history.push("/todos")}>
        Get all todos
      </button>
    </div>
  );
};

export default home;
