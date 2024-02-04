import "./Task.css";

export default function Task({ taskName, taskDescription }) {
    return (
        <div className="Task">
            <h2>{taskName}</h2>
            <p>{taskDescription}</p>
        </div>
    );
}