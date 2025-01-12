import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";

export default function Task() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      {tasks ? (
        <div className="tasks"> LOADING...</div>
      ) : (
        <div>
          <TaskInput tasks={tasks} setTasks={setTasks} />
          <TaskList tasks={tasks} />
        </div>
      )}
    </>
  );
}
