import TaskCard from "./TaskCard.jsx";

// A reusable column component. It receives its title and tasks via props,
// and doesn't know or care which column it is - the parent decides that.
function Column({ title, tasks, onToggle, onDelete }) {
  return (
    <div className="column">
      <h2>
        {title} ({tasks.length})
      </h2>
      <div className="column-body">
        {tasks.length === 0 && <p className="empty">No tasks</p>}
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;
