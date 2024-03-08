import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import todoContext from "./todoContext";
function TodocontextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  function changeTodoContent(id, content) {
    const contentChangedTodo = todos.map((td) => {
      if (td._id === id) {
        const newTodo = { ...td, content: content };
        return newTodo;
      } else {
        return td;
      }
    });
    setTodos(contentChangedTodo);
  }
  const [isEditable, setIsEditable] = useState(false);
  async function fetchTodos() {
    const tods = await axios.get("/api/todos");
    setTodos(tods.data.data);
  }

  async function addTodo(todo) {
    const res = await axios.post("/api/todos", todo);
    fetchTodos();
  }

  async function editTodo(todo, id) {
    const res = await axios.patch(`/api/todos/${id}`, todo);
    fetchTodos();
  }
  async function deleteTodo(id) {
    const res = await axios.delete(`/api/todos/${id}`);
    fetchTodos();
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <todoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        editTodo,
        deleteTodo,
        isEditable,
        setIsEditable,
        changeTodoContent,
      }}
    >
      {children}
    </todoContext.Provider>
  );
}

export default TodocontextProvider;
