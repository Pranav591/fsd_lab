const express = require("express");
const cors = require("cors");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const tasksRouter = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow the Vite dev server (client) to call this API from a different port
app.use(cors());

// Built-in middleware to parse JSON request bodies
app.use(express.json());

// Custom middleware to log every request
app.use(logger);

// Mount the tasks resource routes
app.use("/api/tasks", tasksRouter);

// Simple health check route
app.get("/", (req, res) => {
  res.send("Tasks API is running. Try GET /api/tasks");
});

// Catch-all for unknown routes
app.use((req, res, next) => {
  const err = new Error(`Route not found: ${req.originalUrl}`);
  err.status = 404;
  next(err);
});

// Error-handling middleware must be registered last
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Tasks API listening on http://localhost:${PORT}`);
});
