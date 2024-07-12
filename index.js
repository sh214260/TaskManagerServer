require("./Config/connectDB")

const userController = require("./Controllers/userController")

const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.use("/auth", userController)

app.listen(8000, () => {
    console.log("The Server is listening...");
})