const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("posts")
})

router.post("/")

router.delete("/:id")

router.get("/:id")

module.exports = router
