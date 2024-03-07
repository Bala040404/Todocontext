import express from "express";
import {
  showTodos,
  addTodo,
  getTodo,
  editTodo,
  removeTodo,
} from "../controllers/todoController.js";

import asyncHandler from "../utils/asyncHandler.js";
const todoRouter = express.Router();

todoRouter.route("/").get(asyncHandler(showTodos)).post(asyncHandler(addTodo));

todoRouter
  .route("/:id")
  .get(asyncHandler(getTodo))
  .patch(asyncHandler(editTodo))
  .delete(asyncHandler(removeTodo));

export default todoRouter;
