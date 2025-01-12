import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({ tasks }) {
  return (
    <div>
        {tasks && tasks.map((item) => (
            <TaskItem item={item} />
        ))}
    </div>
  )
}
