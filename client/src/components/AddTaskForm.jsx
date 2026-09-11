import { useState } from "react";

// This component owns its own small piece of state: the text
// currently typed into the input. It only reports upward (via
// onAdd, a prop) once the user submits.
//
// The live-preview line below the input is the React version of
// exp3's "input" event listener.
function AddTaskForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="add-form-row">
        <input
          type="text"
          value={text}
          placeholder="Add a new task..."
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
      <p className="live-preview">
        {text.trim() ? `Preview: ${text.trim()}` : "Type a task to see a live preview..."}
      </p>
    </form>
  );
}

export default AddTaskForm;
