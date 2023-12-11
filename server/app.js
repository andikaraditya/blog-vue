require("dotenv").config()
const express = require("express")
const router = require("./routes")
const errorHandler = require("./middlewares/errorHandler")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send("Hello World! This is a blog server")
})

app.use("/", router)

app.use(errorHandler)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
