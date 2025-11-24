import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex flex-col-reverse  gap-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="flex gap-10">
        <form onSubmit={handleSubmit}>
          {/*  */}
          <motion.input
            initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.3, ease: "easeOut" }}
            type="text"
            placeholder="Enter task"
            className="w-[500px] px-5 py-2.5 bg-white text-gray-800 font-medium rounded-xl shadow-md focus:shadow-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            value={value}
            onChange={onChange}
          />
        </form>
        <motion.select
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.3, ease: "easeOut" }}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </motion.select>

        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.4, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={!value.trim()}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer border-0"
        >
          Add Task
        </motion.button>
      </div>

      {/*  */}
      <div className="flex gap-10">
        <motion.input
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-[500px] px-5 py-2.5 bg-white text-gray-800 font-medium rounded-xl shadow-md focus:shadow-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
        <motion.select
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3, ease: "easeOut" }}
          value={sortBy}
          onChange={(e) => setSortby(e.target.value)}
        >
          <option value="none">No sort</option>
          <option value="priority">By priority</option>
        </motion.select>
        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.3, ease: "easeOut" }}
          onClick={() => setStatusFilter("all")}
          className={
            statusFilter === "all"
              ? "px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
              : "px-5 py-2.5 bg-blue-100 text-blue-700 font-medium rounded-xl hover:bg-blue-200 transition-all cursor-pointer"
          }
        >
          All
        </motion.button>
        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.3, ease: "easeOut" }}
          onClick={() => setStatusFilter("active")}
          className={
            statusFilter === "active"
              ? "px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
              : "px-5 py-2.5 bg-blue-100 text-blue-700 font-medium rounded-xl hover:bg-blue-200 transition-all cursor-pointer"
          }
        >
          Active
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.3, ease: "easeOut" }}
          onClick={() => setStatusFilter("completed")}
          className={
            statusFilter === "completed"
              ? "px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
              : "px-5 py-2.5 bg-blue-100 text-blue-700 font-medium rounded-xl hover:bg-blue-200 transition-all cursor-pointer"
          }
        >
          Completed
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.3, ease: "easeOut" }}
          className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all cursor-pointer"
          onClick={() => setShowFavorite((prev) => !prev)}
        >
          {showFavorite ? "Show All" : "Show Favorite"}
        </motion.button>
      </div>
    </motion.div>
  );
}
