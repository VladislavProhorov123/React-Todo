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
    <li className="relative rounded flex gap-4 px-2 py-2 cursor-pointer  w-[400px] h-[120px] flex-col mr-8 shadow-md hover:shadow-lg transition-shadow">
      <label className="flex  items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="cursor-pointer"
        />
        <div className="flex flex-col">
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
        </div>

        <span
          className={`absolute top-0 right-0  px-2 py-1 text-sm rounded ${
            priorityColors[todo.priority]
          }`}
        >
          {todo.priority}
        </span>
      </label>

      <div className="flex items-center justify-end gap-2">
        <button className="text-yellow-500 text-2xl  cursor-pointer" onClick={() => onFavorite(todo.id)}>
          {todo.favorite ? "★" : "☆"}
        </button>

        <button className="text-xl cursor-pointer" onClick={() => onDelete(todo.id)}>
          <i className="ri-delete-bin-line"></i>
        </button>
      </div>
    </li>
  );
}
