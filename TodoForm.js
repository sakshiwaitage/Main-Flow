import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="todo-btn">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoForm;
