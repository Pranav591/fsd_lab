// A small, reusable component representing a single task.
// It receives data (task) and behaviour (onToggle, onDelete) via props.
function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className={`task-card ${task.done ? "done" : ""}`}>
      <label className="task-card-label">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggle(task.id)}
        />
        <span>{task.title}</span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        ✕
      </button>
    </div>
  );
}

export default TaskCard;
