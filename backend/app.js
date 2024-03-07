import express from "express";
import todoRouter from "./routers/todorouter.js";
import Apierror from "./utils/error.js";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/todos", todoRouter);

app.use((err, req, res, next) => {
  const { status = 500, message } = err;
  res.status(status).json(new Apierror(message, status));
});
app.use("*", (req, res) => {
  res.status(404).json({ mes: "page not found" });
});

export default app;
