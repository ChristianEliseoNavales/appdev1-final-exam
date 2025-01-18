import React, { useContext, createContext, useState, useEffect} from "react";

const TodoContext = createContext();

const fetchTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
    return response.json();
  };

export const TodoProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
	const loading = async () => {
        const fetchedTodos = await fetchTodos();
        setTodos(fetchedTodos);
        setLoading(false);
        }; 
    loading();
    }, []);

  const addTodo = (title) => {
    const newTodo = {
        id: todos.length + 1,
        title,
        completed: false,
        userId: 1,
    }
	setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (id) => {
	setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
	setTodos((prevTodos) =>
  	prevTodos.map((todo) =>
    	todo.id === id ? { ...todo, completed: !todo.completed } : todo
  	)
	);
  };

  return (
    <TodoContext.Provider
      value={{ todos, loading, addTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => {
    const context = useContext(TodoContext);
    if (!context) {
      throw new Error('useTodo must be used within a TodoProvider');
    }
    return context;
};


