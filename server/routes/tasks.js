const express = require("express");
const router = express.Router();

// In-memory "database" - resets whenever the server restarts.
let tasks = [
  { id: 1, title: "Learn Express routing", done: false },
  { id: 2, title: "Understand middleware", done: false },
];
let nextId = 3;

// CREATE — POST /api/tasks
router.post("/", (req, res, next) => {
  const { title } = req.body;
  if (!title || typeof title !== "string") {
    const err = new Error("A 'title' string is required");
    err.status = 400;
    return next(err);
  }
  const task = { id: nextId++, title, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

// READ ALL — GET /api/tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// READ ONE — GET /api/tasks/:id
router.get("/:id", (req, res, next) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) {
    const err = new Error("Task not found");
    err.status = 404;
    return next(err);
  }
  res.json(task);
});

// UPDATE — PUT /api/tasks/:id
router.put("/:id", (req, res, next) => {
  const task = tasks.find((t) => t.id === Number(req.params.id));
  if (!task) {
    const err = new Error("Task not found");
    err.status = 404;
    return next(err);
  }
  const { title, done } = req.body;
  if (title !== undefined) task.title = title;
  if (done !== undefined) task.done = Boolean(done);
  res.json(task);
});

// DELETE — DELETE /api/tasks/:id
router.delete("/:id", (req, res, next) => {
  const index = tasks.findIndex((t) => t.id === Number(req.params.id));
  if (index === -1) {
    const err = new Error("Task not found");
    err.status = 404;
    return next(err);
  }
  const [deleted] = tasks.splice(index, 1);
  res.json(deleted);
});

module.exports = router;
