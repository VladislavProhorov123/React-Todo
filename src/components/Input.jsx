import React from 'react'

export default function Input({value, onChange, onAdd, priority, setPriority, searchQuery, setSearchQuery,}) {
    function handleSubmit(e) {
        e.preventDefault()
        onAdd()
    }
  return (
    <div className='flex gap-10'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter task' className='p-5 border' value={value} onChange={onChange}  />
        </form>
        <select name="" id="" value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <input type="text" placeholder='Search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <select name="" id=""></select>
       
        <button type='submit' disabled={!value.trim()} className='bg-blue-300 p-5 cursor-pointer'>Add Task</button>
    </div>
  )
}
