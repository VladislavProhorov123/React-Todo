import React from "react";

export default function Item({ todo, onToggle, onDelete, onFavorite }) {
  const priorityColors = {
    low: "bg-green-200 text-green-800",
    medium: "bg-yellow-200 text-yellow-800",
    high: "bg-red-200 text-red-800",
  };
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.text}</span>
        <span className={`px-2 py-1 text-sm rounded ${priorityColors[todo.priority]}`}>{todo.priority}</span>
      </label>
      <div className="">
        <button onClick={() => onDelete(todo.id)}>Delete</button>
        <button onClick={() => onFavorite(todo.id)}>
          {todo.favorite ? "Remove from Favorite" : "Add to Favorite"}
        </button>
      </div>
    </li>
  );
}
