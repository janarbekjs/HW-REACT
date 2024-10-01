import React, { useState } from "react";
import "./Todo.css";

export const Todo = ({ todo, remove, update, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.task);

  const handleClick = () => {
    remove(todo.id);
  };

  const toggleForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    update(todo.id, task);
    toggleForm();
  };

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleForm}>Edit</button>
          <button onClick={handleClick}>Delete</button>
        </div>
      </div>
    );
  }

  return result;
};
