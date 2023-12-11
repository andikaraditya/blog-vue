const express = require("express")
const router = express.Router()
const auth = require('./auth')

router.use("/", auth)

// router.use("/posts")

module.exports = router
