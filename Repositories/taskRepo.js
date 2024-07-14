const taskModel = require("../Models/taskModel")

const getTasksForUser = async (id) => {
    return await taskModel.findOne({ userId: id })
}

const addTask = async (newTask) => {
    task = new taskModel(newTask)
    await task.save()
    return "Created"
}

const updateTask = async (id, newTask) => {
    await taskModel.findByIdAndUpdate(id, newTask)
    return "Updated"
}

const deleteTask = async (id) => taskModel.findByIdAndDelete(id)

module.exports = { getTasksForUser, addTask, updateTask, deleteTask }