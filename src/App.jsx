import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import ItemList from "./components/ItemList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const date = localStorage.getItem("todos");
      return date ? JSON.parse(date) : [];
    } catch (e) {
      return [];
    }
  });
  const [value, setValue] = useState("");
  const [priority, setPriority] = useState("low");
  const [showFavorite, setShowFavorite] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [statusFilter, setStatusFilter] = useState('all')

  const finalTodo = todos
    .filter((t) => (showFavorite ? t.favorite : true))
    .filter((t) => t.text.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((t) => {
      if(statusFilter === 'active') return !t.completed
      if(statusFilter === 'completed') return t.completed
      return true
    })

  if (sortBy === "priority") {
    const order = { high: 3, medium: 2, low: 1 };
    finalTodo.sort((a, b) => order[b.priority] - order[a.priority]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const newTodo = {
      id: Date.now().toString(),
      text: trimmed,
      completed: false,
      priority: priority,
      favorite: false,
      createdAt: new Date().toISOString()
    };
    setTodos((prev) => [newTodo, ...prev]);
    setValue("");
    console.log(newTodo);
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  function toggleFavorite(id) {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, favorite: !task.favorite } : task
      )
    );
    console.log(todos);
  }

  function editTodo(id, newText) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10">Todo List</h1>
      <button
        className="bg-blue-300 p-5 cursor-pointer"
        onClick={() => setShowFavorite((prev) => !prev)}
      >
        {showFavorite ? "Show All" : "Show Favorite"}
      </button>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onAdd={() => addTodo(value)}
        priority={priority}
        setPriority={setPriority}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortby={setSortBy}
        setStatusFilter={setStatusFilter}
        statusFilter={statusFilter}
      />
      <ItemList
        todos={finalTodo}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onFavorite={toggleFavorite}
        searchQuery={searchQuery}
        onEdit={editTodo}
      />
      <div className="">
        <div className="">Всего: {todos.length}</div>
        <div className="">
          Выполнено: {todos.filter((t) => t.completed).length}
        </div>
      </div>
    </div>
  );
}
