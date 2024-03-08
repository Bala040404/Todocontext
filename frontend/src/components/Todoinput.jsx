import React, { useContext, useState } from "react";
import todoContext from "../context/todoContext";

function Todoinput() {
  const [todo, setTodo] = useState({});
  const { addTodo } = useContext(todoContext);

  return (
    <div className=" bg-black  h-14 flex justify-center items-center">
      <input
        className="h-11 mr-5 text-center bg-gray-600 text-white w-3/5 rounded-md"
        type="text"
        name="content"
        id="content"
        placeholder="Add todo here"
        value={todo.content}
        onChange={(e) => {
          setTodo({ content: e.target.value, completed: false });
        }}
      />

      <button
        className="h-9 w-20 rounded-md bg-gray-200 "
        onClick={() => {
          addTodo(todo);
          setTodo({ content: "", completed: false });
        }}
      >
        Add todo
      </button>
    </div>
  );
}

export default Todoinput;
