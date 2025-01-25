const baseUrl = 'https://6786b272f80b78923aa7e205.mockapi.io/api/v1/tasks';

// export const getTasksList = () =>
//     fetch(baseUrl).then(res => res.json())
export const fetchTasksList = () =>
    fetch(baseUrl).then(res => res.json())

export const updateTask = (taskId, taskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(taskData)
    });

export const deleteTask = (id) =>
    fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });

export const createTask = newTask =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    });