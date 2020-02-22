import React from "react";
import "./styles.css";

import Paper from "./components/Paper";
import Header from "./components/Header";
import Todoform from "./components/Todoform";
import Todos from "./components/Todos";

export default function App() {
  return (
    <Paper>
      <Header />
      <Todoform />
      <Todos />
    </Paper>
  );
}
