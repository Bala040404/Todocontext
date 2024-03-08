import React, { useState } from "react";
import { useContext } from "react";
import todoContext from "../context/todoContext";

function Alltodos() {
  const {
    todos,
    editTodo,
    deleteTodo,
    isEditable,
    setIsEditable,
    changeTodoContent,
  } = useContext(todoContext);

  const alltodos = todos.map((e) => {
    return (
      <div
        className={`h-10 w-4/5 flex justify-evenly items-center text-black mb-4 text-lg rounded-md  ${
          e.completed ? "bg-green-200" : "bg-yellow-200"
        }`}
        key={e._id}
      >
        <input
          type="text"
          className={`${e.completed ? "bg-green-200" : "bg-yellow-200"} w-3/5 ${
            e.completed && "line-through"
          }`}
          value={e.content}
          readOnly={!isEditable}
          onChange={(et) => {
            changeTodoContent(e._id, et.target.value);
          }}
        ></input>
        <input
          className="h-3/5 w-1/5"
          type="checkbox"
          name=""
          id=""
          defaultChecked={e.completed}
          onClick={() => {
            const updatedTodo = { ...e, completed: !e.completed };
            editTodo(updatedTodo, e._id);
          }}
        />
        <button
          className="w-10 bg-blue-600 text-white h-7 flex justify-center items-center bg-gray rounded-sm border-2 border-blue-900"
          onClick={(et) => {
            if (isEditable) {
              editTodo(e, e._id);
            }
            setIsEditable(!isEditable);
          }}
        >
          {isEditable ? "save" : "edit"}
        </button>
        <button
          className="w-5 h-5 flex justify-center items-center text-white bg-red-500 rounded-sm border-2 border-yellow-900"
          onClick={() => {
            deleteTodo(e._id);
          }}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <div className="h-screen mt-4 flex flex-col items-center rounded-md bg-black">
      {alltodos}
    </div>
  );
}

export default Alltodos;
