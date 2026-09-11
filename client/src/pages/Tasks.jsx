import { useEffect, useState } from "react";
import Column from "../components/Column.jsx";
import AddTaskForm from "../components/AddTaskForm.jsx";
import * as api from "../api/tasks.js";

// The Task Board page. State lives here and is kept in sync with the
// Express API (server/routes/tasks.js) so it persists across reloads
// as long as the server keeps running.
function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .getTasks()
      .then(setTasks)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  async function addTask(title) {
    try {
      const task = await api.createTask(title);
      setTasks((prev) => [...prev, task]);
    } catch (err) {
      setError(err.message);
    }
  }

  async function toggleTask(id) {
    const current = tasks.find((t) => t.id === id);
    if (!current) return;
    try {
      const updated = await api.updateTask(id, { done: !current.done });
      setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function deleteTask(id) {
    try {
      await api.deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  async function clearCompleted() {
    const completed = tasks.filter((t) => t.done);
    try {
      await Promise.all(completed.map((t) => api.deleteTask(t.id)));
      setTasks((prev) => prev.filter((t) => !t.done));
    } catch (err) {
      setError(err.message);
    }
  }

  const todo = tasks.filter((t) => !t.done);
  const done = tasks.filter((t) => t.done);
  const remaining = todo.length;

  return (
    <div className="board">
      <h1>Task Board</h1>
      <AddTaskForm onAdd={addTask} />

      {error && (
        <p className="api-error">
          Couldn't reach the API — is the server running? ({error})
        </p>
      )}

      <div className="stats">
        <span>
          {loading ? "Loading..." : `${remaining} of ${tasks.length} tasks remaining`}
        </span>
        <button className="clear-btn" onClick={clearCompleted} disabled={done.length === 0}>
          Clear completed
        </button>
      </div>

      <div className="columns">
        <Column title="To Do" tasks={todo} onToggle={toggleTask} onDelete={deleteTask} />
        <Column title="Done" tasks={done} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default Tasks;
