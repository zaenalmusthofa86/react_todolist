import React, { useState } from "react";
import PropTypes from "prop-types";
const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo!");
      return;
    }

    addTodo(value);
    setValue("");
  };

  return (
    <section className="add">
      <form className="add-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="add-input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button className="add-btn male-black-color">Add</button>
      </form>
    </section>
  );
};

Todoform.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Todoform;
