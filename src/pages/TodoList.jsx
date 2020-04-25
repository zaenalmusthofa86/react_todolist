import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import Todoform from "../components/Todoform";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Ini Budi", isCompleted: false },
    { text: "Ini Bapak Budi", isCompleted: false },
    { text: "Ini Ibu Budi", isCompleted: false }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 8) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Only  todos is allowed");
    }
  };
  const completeTodo = index => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };
  const clearTodos = () => !showAdd && setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);

  console.log("todos", todos);

  return (
    <Paper>
      <Header
        showAddToggle={showAddToggle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />
      <Todoform addTodo={addTodo} showAdd={showAdd} />
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
