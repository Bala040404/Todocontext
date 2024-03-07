import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import todoContext from "./todoContext";
function TodocontextProvider({ children }) {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    const tods = await axios.get("/api/todos");
    // console.log(tods.data.data);
    setTodos(tods.data.data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
}

export default TodocontextProvider;
