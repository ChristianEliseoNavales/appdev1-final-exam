import React, { useState } from "react";
import { TodoProvider } from "./Context/TodoContext";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (

      <div>
        <h1>Todo App</h1>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
      </div>
  );
};

export default App;