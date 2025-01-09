import React, { useState } from 'react'
import TaskList from './TaskList'

export default function TaskDisplay({ item }) {
  const [ todos, setTodos ] = useState([])
  return (
    <div>
      <p>{item}</p>
    </div>
  )
}
