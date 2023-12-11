const express = require("express")
const Controller = require("../controllers/posts")
const router = express.Router()

router.get("/", Controller.getPosts)

router.post("/")

router.delete("/:id")

router.get("/:id")

module.exports = router
