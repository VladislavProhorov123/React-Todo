import React from "react";

export default function Input({
  value,
  onChange,
  onAdd,
  priority,
  setPriority,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortby,
  setStatusFilter,
  statusFilter,
  showFavorite,
  setShowFavorite,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onAdd();
  }
  return (
    <div className="flex flex-col-reverse  gap-10">
      <div className="flex gap-10">
        <form onSubmit={handleSubmit}>
          {/*  */}
          <input
            type="text"
            placeholder="Enter task"
            className="w-[500px] px-5 py-2.5 bg-white text-gray-800 font-medium rounded-xl shadow-md focus:shadow-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={value}
            onChange={onChange}
          />
        </form>
        <select
          name=""
          id=""
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        <button
          type="submit"
          disabled={!value.trim()}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border-0"
        >
          Add Task
        </button>
      </div>

      {/*  */}
      <div className="flex gap-10">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-[500px] px-5 py-2.5 bg-white text-gray-800 font-medium rounded-xl shadow-md focus:shadow-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
      />
      <select
        name=""
        id=""
        value={sortBy}
        onChange={(e) => setSortby(e.target.value)}
      >
        <option value="none">No sort</option>
        <option value="priority">By priority</option>
      </select>
      <button
        onClick={() => setStatusFilter("all")}
        className={
          statusFilter === "all"
            ? "px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
            : "px-5 py-2.5 bg-blue-100 text-blue-700 font-medium rounded-xl hover:bg-blue-200 transition-all cursor-pointer"
        }
      >
        All
      </button>
      <button
        onClick={() => setStatusFilter("active")}
        className={
          statusFilter === "active"
            ? "px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
            : "px-5 py-2.5 bg-blue-100 text-blue-700 font-medium rounded-xl hover:bg-blue-200 transition-all cursor-pointer"
        }
      >
        Active
      </button>

      <button
        onClick={() => setStatusFilter("completed")}
        className={
          statusFilter === "completed"
            ? "px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
            : "px-5 py-2.5 bg-blue-100 text-blue-700 font-medium rounded-xl hover:bg-blue-200 transition-all cursor-pointer"
        }
      >
        Completed
      </button>

      <button
        className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
        onClick={() => setShowFavorite((prev) => !prev)}
      >
        {showFavorite ? "Show All" : "Show Favorite"}
      </button>
      </div>
    </div>
  );
}
