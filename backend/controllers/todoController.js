import Todo from "../models/todos.js";
import Apierror from "../utils/error.js";
import Response from "../utils/response.js";

async function showTodos(req, res) {
  const todos = await Todo.find();

  res.status(200).json(new Response("List of all todos", todos));
}

async function addTodo(req, res) {
  const todo = req.body;

  const newTodo = new Todo(todo);
  const response = await newTodo.save();
  res.status(200).json(new Response("created a new todo", response));
}

async function getTodo(req, res) {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  res.status(200).json(new Response(`the todo with id ${id}`, todo));
}

async function editTodo(req, res) {
  const { id } = req.params;
  const editedTodo = req.body;

  const response = await Todo.findByIdAndUpdate(id, editedTodo);
  res.status(200).json(new Response("edited the todo with given id", response));
}

async function removeTodo(req, res) {
  const { id } = req.params;

  const response = await Todo.findByIdAndDelete(id);

  res.status(200).json(new Response("edited the todo with given id", response));
}

export { showTodos, addTodo, getTodo, editTodo, removeTodo };
