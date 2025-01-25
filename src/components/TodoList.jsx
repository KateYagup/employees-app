import React, { Component } from "react";
import { connect } from 'react-redux';
import TasksList from './TasksList';
import CreateTaskInput from './CreateTaskInput';
import * as tasksAction from "../tasks/tasks.actions";
import PropTypes from 'prop-types';
import { sortedTasksListSelector } from '../tasks/tasks.selectors';


const baseUrl = 'https://6786b272f80b78923aa7e205.mockapi.io/api/v1/tasks';

class TodoList extends Component {

    componentDidMount() {
        this.props.getTaskList();
    }

    render() {
        return (
            <>
                <h1 className='title'>Todo list</h1>
                <main className="todo-list">
                    <CreateTaskInput onCreate={this.props.createTask} />
                    <TasksList
                        tasks={this.props.tasks}
                        handleTaskStatusChange={this.props.updateTask}
                        handleTaskDelete={this.props.deleteTask}
                    />
                </main >
            </>
        )
    }
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTaskList: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
}

const mapDispatch = {
    getTaskList: tasksAction.getTaskList,
    updateTask: tasksAction.updateTaskList,
    deleteTask: tasksAction.deleteTask,
    deleteTask: tasksAction.deleteTask,
    createTask: tasksAction.createTask,
}

const mapState = state => {
    return {
        tasks: sortedTasksListSelector(state),
    }
}

export default connect(mapState, mapDispatch)(TodoList);