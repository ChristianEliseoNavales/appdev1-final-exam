import React, { useState } from "react";
import { useTodos } from "../Context/TodoContext";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
        <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{
            	textDecoration: todo.completed ? "line-through" : "none",
          	}}
          	onClick={() => toggleComplete(todo.id)}
        	>{todo.title}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;