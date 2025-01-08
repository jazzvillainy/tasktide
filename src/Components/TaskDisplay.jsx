import React, { useState } from 'react'
import TaskList from './TaskList'

export default function TaskDisplay() {
  const [ todos, setTodos ] = useState([])
  return (
    <div>
      <TaskList />
    </div>
  )
}
