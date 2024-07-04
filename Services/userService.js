const userRepo = require("../Repositories/userRepo")

const getUserByEmail = async (email, password) => {
    try {
        const user = await userRepo.getUserByEmail(email)
        if (!user) return { success: false, message: "User not found" }
        if (user.password !== password) return { success: false, message: "Wrong password" }
        return { success: true, message: "Login successful" }
    }
    catch (e) {
        return { success: false, message: { e } }
    }
}

const addUser = async (newUser) => {
    try {
        const status = await userRepo.addUser(newUser)
        return { success: false, message: status }
    }
    catch (e) {
        return { success: false, message: { e } }
    }
}

const updateUser = async (id, user) => {
    try {
        const status = await userRepo.updateUser(id, user)
        return { success: false, message: status }
    }
    catch (e) {
        return { success: false, message: { e } }
    }
}

module.exports = { getUserByEmail, addUser, updateUser }