import React from "react";

import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Ini Budi"
    },
    {
      text: "Ini Ibu Budi"
    },
    {
      text: "Ini Bapak Budi"
    },
    {
      text: "Budi Sedang Mandi"
    },
    {
      text: "Budi Belajar Menulis"
    },
    {
      text: "Ini Budi"
    },
    {
      text: "Ini Ibu Budi"
    },
    {
      text: "Ini Bapak Budi"
    }
  ];

  return (
    <section className="todos">
      {/*todos.map(todo) => {
        return <Todo text={todo.text} /> 
      }}} */}
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
