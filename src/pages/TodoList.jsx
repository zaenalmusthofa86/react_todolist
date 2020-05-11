import React, { useState } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import Todoform from "../components/todoform/Todoform";
import Todos from "../components/todos/Todos";

import Container from "../layout/Container";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Ini Budi", isCompleted: false },
    { text: "Ini Bapak Budi", isCompleted: false },
    { text: "Ini Ibu Budi", isCompleted: false }
  ]);
  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("Only 10 todos is allowed");
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
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <Todoform addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
