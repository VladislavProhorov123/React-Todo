import React from 'react'
import Item from './Item'

export default function ItemList({todos, onToggle, onDelete, onFavorite,filteredTodo}) {
    if(todos.length === 0) return <p className='mt-6 text-gray-500'>Задач пока нет</p>
  return (
    <div>
        <ul className="mt-6 space-y-3">
            {todos.map(todo => (
                <Item key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} onFavorite={onFavorite}  />
            ))}
        </ul>
    </div>
  )
}
