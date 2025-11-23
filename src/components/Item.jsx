import React, { useState } from "react";

export default function Item({
  todo,
  onToggle,
  onDelete,
  onFavorite,
  searchQuery,
  onEdit,
}) {
  const priorityColors = {
    low: "bg-green-200 text-green-800",
    medium: "bg-yellow-200 text-yellow-800",
    high: "bg-red-200 text-red-800",
  };
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  function highlight(text, query) {
    if (!query.trim()) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, "<mark>$1</mark>");
  }
  return (
    <li className="flex justify-between items-center gap-4 p-2 border rounded">
      <label className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        {isEditing ? (
          <input
            className="border p-1"
            value={editValue}
            autoFocus
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={() => {
              onEdit(todo.id, editValue);
              setIsEditing(false);
            }}
          />
        ) : (
          <span
            onDoubleClick={() => setIsEditing(true)}
            className={todo.completed ? "line-through text-gray-500" : ""}
            dangerouslySetInnerHTML={{
              __html: highlight(todo.text, searchQuery),
            }}
          />
        )}
        <small className="text-gray-400 text-xs">
          Created: {new Date(todo.createdAt).toLocaleString()}
        </small>

        <span
          className={`px-2 py-1 text-sm rounded ${
            priorityColors[todo.priority]
          }`}
        >
          {todo.priority}
        </span>
      </label>

      <div className="flex gap-3">
        <button onClick={() => onDelete(todo.id)}>Delete</button>

        <button onClick={() => onFavorite(todo.id)}>
          {todo.favorite ? "★" : "☆"}
        </button>
      </div>
    </li>
  );
}
