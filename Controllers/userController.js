const userService = require("../Services/userService")

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post("/login", async (req, res) => {
    console.log("lo");
    const { email, password } = req.body
    const result = await userService.getUserByEmail(email, password)
    if (!result.success) return res.status(401).json({ message: result.message })
    const token = jwt.sign({ email }, "secret")
    return res.json({ token })
})

router.get("/signup", async (req, res) => {
    console.log("hi");
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    const result = await userService.addUser(newUser)
    if (!result.success) return res.status(400).json({ message: result.message })
    return res.json({ result })
})

router.put("/updateuser/:id", async (req, res) => {
    const token = req.headers["x-access-token"]
    if (!token) return res.status(401).json({ message: "No token provided" })
    const newUser = req.body
    const id = req.params
    try {
        const decoded = jwt.verify(token, "secret")
        console.log(decoded);
        const result = await userService.updateUser(id, newUser)
        if (!result.success) return res.status(400).json({ message: result.message })
        return res.json({ result })
    } catch (e) {
        return res.status(401).json({ message: e })
    }
   
})

module.exports = router