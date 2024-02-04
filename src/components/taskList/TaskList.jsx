import { useState, useEffect } from "react";
import Task from "../task/Task";

import "./TaskList.css";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const taskArray = [
            { name: "TakeHomeTask1", description: "Complete task 1" },
            { name: "TakeHomeTask2", description: "Complete task 2" },
            { name: "TakeHomeTask3", description: "Complete task 3" },
        ];
        setTasks(taskArray);
    }, [])

    return (
        <div className="TaskList">
            <h1>Task List</h1>
            {tasks.map(task => (
                <Task taskName={task.name} taskDescription={task.description} />
            ))}
        </div>
    );
}