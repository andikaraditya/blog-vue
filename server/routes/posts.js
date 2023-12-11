const express = require("express")
const Controller = require("../controllers/posts")
const authentication = require("../middlewares/authentication")
const router = express.Router()

router.get("/", Controller.getPosts)

router.post("/", authentication, Controller.createPost)

router.put("/:id", authentication, Controller.editPost)

router.delete("/:id")

router.get("/:id", Controller.getPostById)

module.exports = router
