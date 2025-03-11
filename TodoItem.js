import React from "react";
import { motion } from "framer-motion";
import { FaTrash, FaCheck } from "react-icons/fa";

const TodoItem = ({ task, removeTask, toggleComplete }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className={`todo-item ${task.completed ? "completed" : ""}`}
    >
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <div className="icons">
        <FaCheck className="check-icon" onClick={() => toggleComplete(task.id)} />
        <FaTrash className="trash-icon" onClick={() => removeTask(task.id)} />
      </div>
    </motion.div>
  );
};

export default TodoItem;
