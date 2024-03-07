import React, { useState } from "react";

function Todoinput() {
  const [todo, setTodo] = useState({});

  function addTodo() {}
  return (
    <div>
      <input
        type="text"
        name="content"
        id="content"
        placeholder="todo"
        value={todo.content}
        onChange={(e) => {
          setTodo({ content: e.target.value, completed: false });
        }}
      />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
}

export default Todoinput;
