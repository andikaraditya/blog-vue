const express = require("express")
const Controller = require("../controllers/auth")
const router = express.Router()

router.post("/login", Controller.handleLogin)

router.post("/register", Controller.handleRegister)

module.exports = router
