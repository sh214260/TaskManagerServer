const userModel = require("../Models/userModel")

const getUserByEmail = async (email) => {
    return await userModel.findOne({ email: email })
}

const addUser = async (newUser) => {
    user = new userModel(newUser)
    await user.save()
    return "Created"
}

const updateUser = async (id, newUser) => {
    await userModel.findByIdAndUpdate(id, newUser)
    return "Updated"
}

module.exports = { getUserByEmail, addUser, updateUser }