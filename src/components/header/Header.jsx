/**@jsx jsx */
// import React from "react";
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import Button from "../button/Button";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

// import styles from "./header.module.css";
import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        {/* <button className="header-btn male-black-color" onClick={showAddToggle}>
        {showAdd ? "finish" : "Add"}
      </button> */}
        {/* <button className="header-btn male-red-color" onClick={clearTodos}>
        Clear
      </button> */}
        <Item flex={1}>
          <Button text={showAdd ? "finish" : "Add"} onClick={showAddToggle} />
        </Item>

        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        </Item>

        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
