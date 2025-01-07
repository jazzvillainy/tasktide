import React, { useState } from 'react'

import TaskDisplay from './TaskDisplay';

export default function TaskInput() {
    const [ task, setTask ] = useState({name:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        setTask({name:''});
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                 type='text'
                 value={task.name}
                 onChange={(e) => setTask({name:e.target.value})}
                 placeholder='Enter task'
                />
                
                <button type='submit'>
                    Add
                </button>
            </form>
            <TaskDisplay task={task}/>
        </div>
    )
}
