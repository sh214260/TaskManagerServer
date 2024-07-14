const mongoose = require('mongoose')

const taskSchem = new mongoose.Schema({
    title: String,
    description: String,
    urgency: String,
    userId: Number
})

const taskModel = mongoose.model('task', taskSchem);
module.exports = taskModel