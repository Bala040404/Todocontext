import React from "react";
import { useContext } from "react";
import todoContext from "../context/todoContext";
function Alltodos() {
  const { todos } = useContext(todoContext);
  console.log(todos);
  const alltodos = todos.map((e) => {
    return <h1 key={e._id}>{e.content}</h1>;
  });
  return <div>{alltodos}</div>;
}

export default Alltodos;
