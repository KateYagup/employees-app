import React, { Component } from "react";
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';

const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
    return (
        <ul className="list">
            {tasks.map(task => (
                <Task
                    key={task.id}
                    {...task}
                    onChange={handleTaskStatusChange}
                    onDelete={handleTaskDelete}
                />
            ))}
        </ul>
    )
}

export default TasksList;