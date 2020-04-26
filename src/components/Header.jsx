import React from "react";
import PropTypes from "prop-types";

import Button from "../components/button/Button";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      {/* <button className="header-btn male-black-color" onClick={showAddToggle}>
        {showAdd ? "finish" : "Add"}
      </button> */}
      <Button text={showAdd ? "finish" : "Add"} onClick={showAddToggle} />
      <h1 className="header-title">Todo Lists</h1>
      {/* <button className="header-btn male-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
