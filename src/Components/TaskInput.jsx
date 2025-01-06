import React from 'react'
import { useState } from 'react'

import TaskDisplay from './TaskDisplay';

export default function TaskInput() {
    const [ task, setTask ] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        setTask('');
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text'
             value={task}
             onChange={handleChange}
             placeholder='Enter your task'
            />
            
            <button type='submit'>
                Add
            </button>
        </form>
        <TaskDisplay task={task}/>
    </div>
  )
}
