const taskRepo = require("../Repositories/taskRepo")

const getTasksForUser = async (id) => {
    try {
        const tasks = await taskRepo.getTasksForUser(id)
        if (!tasks) return { success: false, message: "No tasks" }
        return { success: true, message: "success" }
    }
    catch (e) {
        return { success: false, message: { e } }
    }
}

const addTask = async (newTask) => {
    try {
        const status = await taskRepo.addTask(newTask)
        return { success: false, message: status }
    }
    catch (e) {
        return { success: false, message: { e } }
    }
}

const updateTask = async (id, task) => {
    try {
        const status = await taskRepo.updateUser(id, task)
        return { success: false, message: status }
    }
    catch (e) {
        return { success: false, message: { e } }
    }
}

const deleteTask = async (id) => {
    try {
        const status = await taskRepo.deleteTask(id)
        return { success: false, message: status }
    }
    catch (e) {
        return { success: false, message: { e } }
    }
}
module.exports = { getTasksForUser, addTask, updateTask, deleteTask }