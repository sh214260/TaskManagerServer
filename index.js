require("./Config/connectDB")

const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

//app.use()
app.listen(8000, () => {
    console.log("The Server is listening...");
})