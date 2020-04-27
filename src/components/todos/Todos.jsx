import React from "react";

import Todo from "../todo/Todo";
import PropTypes from "prop-types";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos">
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <dir className="todo-placeholder-text">
          Add todo by clicking{" "}
          <span className="add-button-placeholder-text"> Add </span> button on
          the top left corner
        </dir>
      )}
    </section>
  );
};

Todos.proptypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string
    })
  ),
  completeTodo: PropTypes.func.isRequired
};

export default Todos;
