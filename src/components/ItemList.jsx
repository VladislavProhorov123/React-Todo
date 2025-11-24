import React from "react";
import Item from "./Item";
import { motion, AnimatePresence } from "framer-motion";

export default function ItemList({
  todos,
  onToggle,
  onDelete,
  onFavorite,
  searchQuery,
  onEdit,
}) {
  if (todos.length === 0)
    return <p className="mt-6 text-gray-500">Задач пока нет</p>;
  return (
    <div>
      <ul className="mt-6 space-y-8 flex flex-wrap g-10">
        <AnimatePresence mode="popLayout">
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <Item
                key={todo.id}
                todo={todo}
                onDelete={onDelete}
                onToggle={onToggle}
                onFavorite={onFavorite}
                searchQuery={searchQuery}
                onEdit={onEdit}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
