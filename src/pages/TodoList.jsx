import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import Todoform from "../components/Todoform";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Ini Budi" },
    { text: "Ini Bapak Budi" },
    { text: "Ini Ibu Budi" }
  ]);
  return (
    <Paper>
      <Header />
      <Todoform />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
