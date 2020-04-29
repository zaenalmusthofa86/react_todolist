import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "../src/pages/TodoList";

const theme = {
  color: {
    primary: {
      black: "#000000",
      red: "#ff0000"
    }
  }
};

export default function App() {
  // return <TodoList />;
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}
