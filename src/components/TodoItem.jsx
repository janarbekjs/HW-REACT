export const TodoItem = ({ item, onDelete, onToggle }) => {
  return (
    <li className="todo-item">
      {" "}
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <p className={item.completed ? "completed" : ""}>{item.task}</p>
      <button className="todo-btn" onClick={() => onDelete(item.id)}>
        Delete Todo
      </button>
    </li>
  );
};
