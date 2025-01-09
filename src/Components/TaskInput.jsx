import React, { useState } from 'react'

import TaskDisplay from './TaskDisplay';

export default function TaskInput() {
    const [ task, setTask ] = useState('');
    const [ tasks, setTasks ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTasks([...tasks, task]);
        setTask('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                 type='text'
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
                 placeholder='Enter task'
                />
                
                <button type='submit'>
                    Add
                </button>
            </form>
            {tasks.map((item) => (
                <TaskDisplay item={item} key={item} />
            ))}
        </div>
    )
}
